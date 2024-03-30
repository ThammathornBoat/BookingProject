from flask import Flask,jsonify,request
from flask_cors import CORS, cross_origin
from pymongo.mongo_client import MongoClient
uri = "mongodb+srv://mongo:mongo@cluster0.g4suicj.mongodb.net/hotel"
client = MongoClient(uri)

#ชื่อฐานข้อมูล
db = client["hotel"]
#collection ที่ใช้
collection = db["room"]
    
rooms = []
for r in collection.find():
    rooms.append(r)


app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/")
def welcome():
    return "<p>Hello, World!</p>"

@app.route("/rooms",methods=["GET"])
def get_all_rooms():
    return jsonify(rooms),200

@app.route('/rooms/<int:id>', methods=['GET'])
def get_room(id):
    room = next((s for s in rooms if s['_id'] == id), None)
    if room:
        return jsonify(room)
    else:
        return jsonify({"error": "Room not found"}), 404

@app.route("/rooms",methods=["POST"])
@cross_origin()
def add_room():
    data = request.get_json(rooms)
    num = 1
    if rooms:
        num = max(room["_id"] for room in rooms) + 1
    new_room = {
        "_id":num,
        "name":data["name"],
        "size":data["size"],
        "price":data["price"],
    }
    rooms.append(new_room)
    collection.insert_one(new_room)
    return jsonify(rooms),200

@app.route("/rooms/<int:id>",methods=["DELETE"])
def detele_room(id):
    for s in rooms:
        if(s["_id"] == id):
            print(s)
            rooms.remove(s)
            collection.delete_one({"_id":id})
            return jsonify(rooms),200
    return jsonify(rooms),404

@app.route("/rooms/<int:id>",methods=["PUT"])
def update_room(id):
    data = request.get_json(rooms)
    for s in rooms:
        if(s["_id"] == id):
            s.update(data)
            collection.update_many(
                {"_id":s["_id"]},
                {"$set":{"name" : data["name"],
                         "price" : data["price"],
                         "image":data["image"],
                        }
                }
            )
            return jsonify(rooms)
    return jsonify({"message": "room not found"}), 404

if __name__ == "__main__":
    app.run(host="0.0.0.0",port=5000,debug=True)