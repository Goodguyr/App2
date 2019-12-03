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
    console.log(parseFloat(info[1][1]))
    console.log(info[1][1])
    for(let i = 1; i < info.length; i++){
      if(parseFloat(info[i][1]) <= 10){
        console.log("hhaa")
        prices.push(info[i][1])
        names.push(info[i][0])
      }
      /*prices.push(info[i][1])
      names.push(info[i][0])*/
    }
    console.log(prices, names)
    return [names, prices]
  }
  
  function loadPage() {
      Plotly.setPlotConfig({ 
      mapboxAccessToken: 'pk.eyJ1IjoiZ29vZGd1eXIiLCJhIjoiY2szcHNkbDZ0MDBjNjNsbzk5ZGE1ZXB1aCJ9.8w2m9YTq8wy8QgDNv1m-bw'});
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
        console.log(this.responseText);
            let chartFirst = new dataForFirstChart(this.response)
            let chart1 = [chartFirst]
            Plotly.newPlot('chart1', chart1, {}, {showSendToCloud:true});
            console.log(chart1)
        }
    };
    xhttp.open("GET", "/data");
    xhttp.send();
}