import os
import pickle
from flask import Flask
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)
api = Api(app)

# # Require a parser to parse our POST request.
# parser = reqparse.RequestParser()
# parser.add_argument("sepal_length")
# parser.add_argument("sepal_width")
# parser.add_argument("petal_length")
# parser.add_argument("petal_width")

# # Unpickle our model so we can use it!
# if os.path.isfile("./our_model.pkl"):
#   model = pickle.load(open("./our_model.pkl", "rb"))
# else:
#   raise FileNotFoundError

class HelloWorld(Resource):
  def get(self):
    return { 'hello': 'world'}
  # def post(self):
  #   args = parser.parse_args()

api.add_resource(HelloWorld, '/')

if __name__ == '__main__':
  app.run(debug=True)