// 'API Key' = "13d385a84dbdd7460c1a716f2e70fcfb"
let url = "http://api.coinlayer.com/api/live?access_key=13d385a84dbdd7460c1a716f2e70fcfb"

document.getElementById("searchBtn").onclick = function(){
  let searchValue = document.getElementById('cryptoSearch').value
  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    // console.log('displayRates:', json);
    Object.entries(json)
    let myRates = json.rates[searchValue]
    console.log(myRates)
    let d = document.createElement('li')
    d.innerHTML = `Current rate for ${searchValue} is $${myRates}`;
    document.getElementById('myList').appendChild(d)
    
  })
  }

