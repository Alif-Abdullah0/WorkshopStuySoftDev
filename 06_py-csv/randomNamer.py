#The Best Team - 01
#SoftDev
#K06 -- A program that will take a csv file, turn its contents into a dictionary, and randomly print out an occupation from the keys of the dictionary, weighted by the associated value.
#2021-09-28

'''
Our team chose to use the python csv module to parse the csv file. Given our
data, we would then randomly generate a number from 0 to 99.8, as that is our
total. We would store the number inside a variable, and then we would iterate
through the list of values in the dictionary. We would subtract the amount our
variable stores with the amount of the current value. If, at any point, the variable
becomes less than or equal to 0, we will stop, and return the key at that point.
'''

import csv
import random
dictionary = {}
# Code from the csv module that will enable us to convert the contents of the csv file into a dictionary
with open('occupations.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        # 'Job Class' and 'Percentage' are row heading names
        dictionary[row['Job Class']] = float(row['Percentage'])

#Used to get rid of the last key-value pair that showed the sum the percentages added up to.
dictionary.pop('Total')

#Function used to select a random name on a weighted scale
def randoProfession(jobsDict):
    
    #Variable used to store a randomly selected value
    chosenJob = random.random() * 99.8
    
    #List to store all keys
    allJobs = list(jobsDict.keys())
    
    #Given the chosenJob value being in the bounds 0 to 99.8,
    #we simply subtract the chosenJob value from the corresponding
    #dictionary key we are on. The count variable keeps track of
    #where we are in the dictionary, and will only be incremented as
    #long as chosenJob is not 0 or less, meaning we have not yet
    #reached the randomly selected job on the weighted scale.
    #When we have reached the randomly chosen job, we will
    #use count to find the index of the corresponding value
    #in the keys list allJobs.
    count = 0
    while (chosenJob > 0):
        chosenJob -= jobsDict[allJobs[count]]
        if (chosenJob > 0):
            count+=1
    return allJobs[count]

print(randoProfession(dictionary))