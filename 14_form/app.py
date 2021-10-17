# The Best Laptop - Alif Abdullah, Kevin Cao, Jonathan Wu
# SoftDev
# K14 -- To be able to integrate forms and render responses on template files
# 2021-10-14

# Import statements. Also initializes the app object
from flask import Flask, render_template, request 
app = Flask(__name__)

# Function to render, via template, the initial page, in this case the login page, with the text field for a username.
@app.route("/")
def login_form():
    return render_template("login.html")

# Function to render, via template, the response page, which displays the username passed in the login page as well as the request method used. 
@app.route("/auth")
def response():
    return render_template("response.html",username=request.args['username'],request_method=request.method)

# Allows program to auto re-run in case of a change in code.
if __name__ == "__main__":
    app.debug = True
    app.run()