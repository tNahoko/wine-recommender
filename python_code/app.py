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
  print(engine.sorted_scores)
  return {
    "title": "Some wine",
    "body": "<p>this is a wine</p>",
    'wine_data': engine.sorted_scores
  }

if __name__ == '__main__':
  app.run(debug=True)