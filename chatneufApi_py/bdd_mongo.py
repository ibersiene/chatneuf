from flask import Flask, request, jsonify
import pymongo
import json

app = Flask(__name__)
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["chatneuf"]
collection = db["user"]



@app.route('/api/sendmessage', methods=['POST'])
def ajouter_message():
    # Récupérez les données JSON de la requête
    data = request.get_json()
    nom = data["mail"]
    message =  {
                "contenu": data["msg_contenu"],
                "dest": data["msg_destinataire"],
                "vu": 0,
                "date": "2023-05-10"
            }
        # je modifier la collection puisque le message est une sous collection(objet dedans)
    collection.update_one({"mail": nom}, {"$push": {"message": message}})
    print(data["mail"])
    client.close()
    return jsonify(data) 
    

# Rechercher un document dans la collection
query = {"mail": "aylane"}
result = collection.find(query)
results = []
for r in result:
    results.append(r)

print(results)
r_json = json.dumps(results, default=str)
@app.route('/api/message', methods=['GET'])
def get_data2():
    datum = request.form()
    id = datum['msg_expediteur']

    print (id)
    return id


if __name__ == '__main__':
    app.run(debug=True)
