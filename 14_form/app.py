# The Best Laptop - Alif Abdullah, Kevin Cao, Jonathan Wu
# SoftDev
# K14 -- To be able to integrate forms and render responses on template files
# 2021-10-14

from flask import Flask, render_template, request 
app = Flask(__name__)

@app.route("/")
def login_form():
    return render_template("login.html")

@app.route("/auth")
def response():
    user=request[0]
    print("\n\n\n\n")
    print(user)
    return render_template("response.html", username=user, request_method="GET")
    

if __name__ == "__main__":
    app.debug = True
    app.run()