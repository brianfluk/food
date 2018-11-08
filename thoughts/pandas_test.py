from __future__ import print_function

''' 
import matplotlib.pyplot as plt # for if u wanna show the hist() plot in cli
'''
import numpy as np
import pandas as pd  # importing pandas library
pd.__version__

'''
creating Series data structure
'''
city_names = pd.Series(['San Francisco', 'San Jose', 'Sacramento'])
population = pd.Series([852469, 1015785, 485199])

''' 
creating DataFrame data structure using Series
'''
pd.DataFrame({ 'City name': city_names, 'Population': population })

'''
creating DataFrame by loading a csv
'''
california_housing_dataframe = pd.read_csv("https://download.mlcc.google.com/mledu-datasets/california_housing_train.csv", sep=",")
california_housing_dataframe.describe() # shows interesting statistics abt the dataframe

california_housing_dataframe.head() # shows the first few records

california_housing_dataframe.hist('housing_median_age') # shows a graph -- helps u see distribution
# plt.show() # for if u wanna show the hist() plot in cli

''' 
accessing DataFrame 
'''
cities = pd.DataFrame({ 'City name': city_names, 'Population': population })
print(type(cities['City name']))
print(cities['City name'])
print(type(cities['City name'][1]))
# print(cities['City name'][1])
print(type(cities[0:2]))
# print(cities[0:2])

''' 
manipulating data
'''
print (population)
np.log(population)
div_by_100 = (population / 1000) # divide Series

greater_than_1000000 = population.apply(lambda val: val > 1000000) #Series.apply is the map function (i.e. apply lambda function to each value)

cities['Area square miles'] = pd.Series([46.87, 176.53, 97.92])  # example of adding a Series to the DataFrame
cities['Population density'] = cities['Population'] / cities['Area square miles'] # example of adding a Series to the DataFrame


