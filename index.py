from bottle import route, run, static_file
import scraper

@route("/")
def root():
    return static_file("index.html", "./")

@route("/nun.js")
def scripts():
    return static_file("/nun.js", "./")

@route("/data")
def data():
    return scraper.getData()

run(host="0.0.0.0", port=8080)