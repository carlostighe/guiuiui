from flask import Flask
import jsonify
import os

app = Flask(__name__)

# pass in folder name and return list of image paths


@app.route('/images/<folder_name>')
def images(folder_name):
    folder_path = f'dist/{folder_name}'
    images = []
    for file_name in os.listdir(folder_path):
        if file_name.endswith(('.png', '.jpg', '.jpeg')):
            url = f'/images/{folder_name}/{file_name}'
            images.append(url)
    return jsonify(images)
