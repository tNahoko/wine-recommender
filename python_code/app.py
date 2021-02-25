import os
from flask import Flask
from flask_cors import CORS
import numpy as np

from recommendation import engine

app = Flask(__name__)
CORS(app)

# GET all: all wines id and titles
@app.route('/wine/all', methods=['GET'])
def all_wine():
  return {
    'wine_data': engine.all_wine
  }
# GET recommendation: take id as param and return recommended wine id and titles
@app.route('/wine/recommendation', methods=['GET'])
def recommendation():
  return {
    'wine_data': engine.data
  }

if __name__ == '__main__':
  app.run(debug=True)