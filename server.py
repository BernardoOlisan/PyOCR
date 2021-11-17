'''
THIS FILE IS NOT NECCESARY TO USE, IS ALREADY HOST ON 
https://bernardoolisan1.pythonanywhere.com/upload
THIS IS ONLY FOR SERVER BACKEND, YOU WILL SE NOTHING AT ALL.

THIS IS HOW THE BACKEND WORKS! WITH AI AND MACHINE LEARNING
'''
from flask import Flask, request
from flask.json import jsonify
import cv2 
import pytesseract
import os
import numpy as np

app = Flask(__name__)

# Receive the image
@app.route("/upload", methods=['POST'])
def handle_form():
    files = request.files
    file = files.get('file').read()
    file2 = files.get('file')

    # THE MAIN CODE TO HANDLE THE FILE
    print(file2.filename)

    #img = cv2.imread(file.filename)
    npimg = np.frombuffer(file, np.uint8)
    # convert numpy array to image
    img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

    pytesseract.pytesseract.tesseract_cmd = os.path.abspath(r'Tesseract-OCR/tesseract.exe') # HERE YOU NEED TO DOWNLOAD THE TESERRACT-OCR, THIS REPO DOES NOT HAVE IT
    text = pytesseract.image_to_string(img)
    print(text)

    return jsonify(text)


if __name__ == "__main__":
    app.run(debug=True)
