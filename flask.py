from flask import Flask, jsonify
import os

app = Flask(__name__)

# need to get all files within dist/[folder name]


@app.route('/images/<folder_name>')
def images(folder_name):
    full_path = os.path.join(os.path.dirname(__file__), 'dist', folder_name)
    images = []
    for file_name in os.listdir(full_path):
        if file_name.endswith(('.png', '.jpg', '.jpeg')):
            print("here")
            url = f'/images/{folder_name}/{file_name}'
            images.append(url)
    return jsonify(images)

# Need to run the flask app
if __name__ == '__main__':
 app.run()
