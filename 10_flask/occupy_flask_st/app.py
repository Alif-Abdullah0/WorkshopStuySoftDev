import csv
import random
from flask import Flask
app = Flask(__name__)
finalDict = {}
def randomJob(reader):
        x = random.randint(0, 1000)
        y = 0
        for i in reader:
                y += reader[i] * 10
                if (y > x):
                        return(i)
                        break
with open('occupations.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
                finalDict[row['Job Class']] = float(row['Percentage'])
@app.route("/")
def hello_world():
    return(str(randomJob(finalDict)))
app.run()
