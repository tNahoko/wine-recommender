import os
import pickle
from flask import Flask
from flask_restful import Resource, Api, reqparse, abort
from flask_cors import CORS
import numpy as np

from recommendation import engine

app = Flask(__name__)

@app.route('/wine', methods=['GET'])
def wine():
  print(engine.data)
  return {
    'wine_data': engine.data
  }

if __name__ == '__main__':
  app.run(debug=True)