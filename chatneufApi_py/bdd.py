from flask import Flask, jsonify
import mysql.connector

app = Flask(__name__)

# Configuration de la connexion MySQL
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="chatneuf"
)


@app.route('/api/user', methods=['GET'])
def get_data():
    cursor = db.cursor()
    cursor.execute("SELECT * FROM user")
    data = cursor.fetchall()
    data = cursor.f
    cursor.close()
    return jsonify(data)


@app.route('/api/message', methods=['GET'])
def get_data2():
    cursor = db.cursor()
    cursor.execute("SELECT * FROM message")
    datas = cursor.fetchall()
    cursor.close()
    return jsonify(datas)


if __name__ == '__main__':
    app.run(debug=True)
