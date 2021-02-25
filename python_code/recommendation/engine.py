import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer
import streamlit as st

df = pd.read_csv('winemag-data-130k-v3-trimmed.csv')

# delete unneccesary columns
df = df.drop(columns=['region_1','region_2','taster_name','taster_twitter_handle','designation'])

# Replacing the null values in price by the median of the price columns
df.price.fillna(df.price.dropna().median(), inplace=True)

# Create a variable with all wine ids and titles
all_wine = df.values.tolist()

#Create a function to combine important values into a single string
def get_important_features(data):
  important_features = []
  for i in range(0, data.shape[0]):
    country = str(data['country'][i])
    price = str(data['price'][i])
    province = str(data['province'][i])
    variety = str(data['variety'][i])
    feature_str = country + ' ' + price + ' ' + province + ' ' + variety
    important_features.append(feature_str)
  return important_features

#Create column for the string
df['important_features'] = get_important_features(df)

#Convert text to metrix of token counts
cm = CountVectorizer().fit_transform(df['important_features'])

#Get the cosine similarity matrix from the count matrix
cs = cosine_similarity(cm)

#Get the title of the wine that the user likes
title = 'Quinta dos Avidagos 2011 Avidagos Red (Douro)'

# #Find id of the wine
wine_id = df[df.title == title]['id'].values[0]

# Create a list of enumerations for the similarity score [ (wine_id, similarity score), (...), ]
scores = list(enumerate(cs[wine_id]))

# #Sort the list
sorted_scores = sorted(scores, key = lambda x:x[1], reverse = True)
sorted_scores = sorted_scores[1:8]

recommendation = []
for item in sorted_scores:
  wine_id = item[0]
  wine_title = df[df.id == item[0]]['title'].values[0]
  recommendation.append({"id":wine_id, "title":wine_title})



# #Create a function to take id and return recommendation
# def get_recommendation(id):
#   wine_id = id
#   scores = list(enumerate(cs[wine_id]))
#   sorted_scores = sorted(scores, key = lambda x:x[1], reverse = True)
#   sorted_scores = sorted_scores[1:8]
#   recommendation = []
#   for item in sorted_scores:
#     recommendation_id = item[0]
#     recommendation_title = df[df.id == item[0]]['title'].values[0]
#     recommendation.append({"id":recommendation_id, "title":recommendation_title})
#   return recommendation




