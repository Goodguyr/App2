function dataForFirstChart(respons){
    let info = getInfoforFirst(respons)
    this.x = info[0],
    this.y = info[1],
    this.type = "bar"
  }
  
function getInfoforFirst(text){
    let info = JSON.parse(text)
    let names = []
    let prices = []
    for(let i = 1; i < info.length; i++){
      if(parseFloat(info[i][1]) <= 10){
        prices.push(info[i][1])
        names.push(info[i][0])
      }
    }
    return [names, prices]
  }

function findLargest(info){
  let largePrices = []
  let largeNames = []
  let prices = []
  for(num of info){
    prices.push(num)
  }
  for(let i = 0; i < 5; i++){
      let price = 0
      let name = ""
      let position = 0
      for(let i = 0; i < prices.length; i++){
          if(parseFloat(prices[i][1]) > price){
              price = parseFloat(prices[i][1])
              name = prices[i][0]
              position = i
          }
      }
  largeNames.push(name)
  largePrices.push(price)
  prices.splice(position, 1)
  }
  return [largeNames, largePrices]
}

function getPercent(prices){
  let sum = 0
  percents = []
  for(price of prices){
    sum += price
  }
  for(price of prices){
    let percent = Math.round(price / sum * 100)
    percents.push(percent)
  }
  return percents
}

function chart2info(response){
  let mutable = JSON.parse(response)
  let info = findLargest(mutable)
  this.values = getPercent(info[1])
  this.labels = info[0]
  this.type = "pie"
}


function chart2Lay(){
  this.height = 600
  this.width = 600
}

  function loadPage() {
      Plotly.setPlotConfig({ 
      mapboxAccessToken: 'pk.eyJ1IjoiZ29vZGd1eXIiLCJhIjoiY2szcHNkbDZ0MDBjNjNsbzk5ZGE1ZXB1aCJ9.8w2m9YTq8wy8QgDNv1m-bw'});
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let chartFirst = new dataForFirstChart(this.response)
            let chart1 = [chartFirst]
            let charter = new chart2info(this.response)
            let chart2 = [charter]
            let layout = new chart2Lay()
            Plotly.newPlot('chart1', chart1, {}, {showSendToCloud:true});
            Plotly.newPlot("chart2", chart2, layout)
        }
    };
    xhttp.open("GET", "/data");
    xhttp.send();
}