from bs4 import BeautifulSoup
import requests
import re
import json

url = 'https://coinranking.com/'
reader = requests.get(url)
reader = reader.text
reader = BeautifulSoup(reader, "html.parser")
priceData = reader.find_all(class_="valuta")
nameData = reader.find_all(class_="profile__link")
changeData = reader.find_all(class_="change")


def removeTrash(stringo):
    stringo = re.sub("\n", "", stringo)
    stringo = re.sub("  ", "", stringo)
    stringo = stringo.replace("$", "")
    stringo = stringo.replace(",", "")
    
    return stringo 

def fillInfo(data, storage):
    for i in range(len(data)):
        datas = data[i].get_text()
        datas = removeTrash(datas)
        storage.append(datas)

def getPriceData(data, priceArr, markCapArr):
    for i in range(len(data)):
        info = data[i].get_text()
        info = removeTrash(info)
        if i % 2 == 0:
            priceArr.append(info)
        else:
            markCapArr.append(info)
        
#declare variables

prices = []
market_cap = []
names = []
dailyChange = []

#assign values

getPriceData(priceData, prices, market_cap)
fillInfo(nameData, names)
fillInfo(changeData, dailyChange)
print(prices)

def getData():
    data =[]
    length = len(prices)
    for i in range(length):
        data.append([names[i], prices[i], market_cap[i], dailyChange[i]])
        send = json.dumps(data)
    return send


#1st is price and every second is market cap
#data = {
#   nameofcurrency: {
#   price: ""
#   market_cap: ""
#   24h change: ""
# }
# }

