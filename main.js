// Function that will clear all the fields when pressed 
function reset() {
  // Set all objects to a blank value
  document.getElementById('usd').value = '';   
  document.getElementById('euro').value = '';
  document.getElementById('pound').value = '';
  document.getElementById('cad').value = '';
  document.getElementById('rupee').value = '';
  
  document.getElementById('franc').value = '';   
  document.getElementById('krona').value = '';
  document.getElementById('ukraine').value = '';
  document.getElementById('real').value = '';
  document.getElementById('sing').value = '';
  
  document.getElementById('robux').value = '';
  document.getElementById('mc').value = '';
  document.getElementById('vb').value = '';
  
  document.getElementById('bitcoin').value = '';
}
// This function will convert the user input into different units of currency by checking what field the user fills out
function convertCurrency(currency) {
  // Declare variables for each unit of currency
  var usd, euro, pound, cad, rupee, bitcoin, franc, krona, ukraine, real, sing, robux, mc, vb, base;
  // Create a dictionary to easily construct conversion ratios
  var currDict = {
    "usd" : 1.00,
    "euro" : 0.91,
    "pound" : 0.75,
    "cad" : 1.26,
    "rupee" : 76.11,
    
    "franc" : 0.93,
    "krona" : 129.02,
    "ukraine" : 29.33,
    "real" : 4.92,
    "sing" : 1.36,
    "robux" : 80.00,
    "mc" : 150.00,
    "vb" : 100.00,
    
    "bitcoin" : 0.000023,
  };

  // Use the argument of convertCurrency to determine which value to get from the page
  base = document.getElementById(currency).value;
      // Use the argument and the currency dictionary to convert values
  usd = Math.round(base / currDict[currency] * currDict["usd"] * 100) / 100;
  euro = Math.round(base / currDict[currency] * currDict["euro"] * 100) / 100;
  pound = Math.round(base / currDict[currency] * currDict["pound"] * 100) / 100;
  cad = Math.round(base / currDict[currency] * currDict["cad"] * 100) / 100;
  rupee = Math.round(base / currDict[currency] * currDict["rupee"] * 100) / 100;
  franc = Math.round(base / currDict[currency] * currDict["franc"] * 100) / 100;
  krona = Math.round(base / currDict[currency] * currDict["krona"] * 100) / 100;
  ukraine = Math.round(base / currDict[currency] * currDict["ukraine"] * 100) / 100;
  real = Math.round(base / currDict[currency] * currDict["real"] * 100) / 100;
  sing = Math.round(base / currDict[currency] * currDict["sing"] * 100) / 100;
  robux = Math.round(base / currDict[currency] * currDict["robux"] * 100) / 100;
  mc = Math.round(base / currDict[currency] * currDict["mc"] * 100) / 100;
  vb = Math.round(base / currDict[currency] * currDict["vb"] * 100) / 100;
  bitcoin = base / currDict[currency] * currDict["bitcoin"];
      // If the user pressed enter, update the values
  if (event.keyCode === 13) {
    document.getElementById("usd").value = usd;
    document.getElementById("euro").value = euro;
    document.getElementById("pound").value = pound;
    document.getElementById("cad").value = cad;    
    document.getElementById("rupee").value = rupee;
    
    document.getElementById("franc").value = franc;
    document.getElementById("krona").value = krona;
    document.getElementById("ukraine").value = ukraine;
    document.getElementById("real").value = real;    
    document.getElementById("sing").value = sing;
    
    document.getElementById("robux").value = robux;
    document.getElementById("mc").value = mc;    
    document.getElementById("vb").value = vb;
    document.getElementById("bitcoin").value = bitcoin;
  }
}
