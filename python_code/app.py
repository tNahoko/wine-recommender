import os
from flask import Flask
from flask_restful import Resource, Api, reqparse, abort
from flask_cors import CORS
import numpy as np

from recommendation import engine

app = Flask(__name__)
CORS(app)

@app.route('/wine', methods=['GET'])
def wine():
  return {
    'wine_data': engine.data
  }

if __name__ == '__main__':
  app.run(debug=True)