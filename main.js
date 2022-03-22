// Function that will clear all the fields when pressed 
function reset() {
  // Set all objects to a blank value
  document.getElementById('usd').value = '';   
  document.getElementById('euro').value = '';
  document.getElementById('pound').value = '';
  document.getElementById('cad').value = '';
  document.getElementById('rupee').value = '';
  document.getElementById('bitcoin').value = '';
}
// This function will convert the user input into different units of currency by checking what field the user fills out
function convertCurrency(currency) {
  // Declare variables for each unit of currency
  var usd, euro, pound, cad, rupee, bitcoin, base;
  // Create a dictionary to easily construct conversion ratios
  var currDict = {
    "usd" : 1.00,
    "euro" : 0.91,
    "pound" : 0.75,
    "cad" : 1.26,
    "rupee" : 76.11,
    "bitcoin" : 0.000023
  };

  // Use the argument of convertCurrency to determine which value to get from the page
  base = document.getElementById(currency).value;
      // Use the argument and the currency dictionary to convert values
  usd = base / currDict[currency] * currDict["usd"]
  euro = base / currDict[currency] * currDict["euro"];
  pound = base / currDict[currency] * currDict["pound"];
  cad = base / currDict[currency] * currDict["cad"];
  rupee = base / currDict[currency] * currDict["rupee"];
  bitcoin = base / currDict[currency] * currDict["bitcoin"];
      // If the user pressed enter, update the values
  if (event.keyCode === 13) {
    document.getElementById("usd").value = usd;
    document.getElementById("euro").value = euro;
    document.getElementById("pound").value = pound;
    document.getElementById("cad").value = cad;    
    document.getElementById("rupee").value = rupee;
    document.getElementById("bitcoin").value = bitcoin;
  }
}
