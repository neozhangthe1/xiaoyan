from flask import Flask, render_template
import os

port = int(os.environ.get('PORT', 3000))
app = Flask(__name__)

@app.route("/")
def xiaoyan():
	return render_template("index.html")

if __name__ == "__main__":
	app.debug = True
	app.run(host='0.0.0.0', port=port)