//business logic
var ones = [I, V, X]
var tens = [X, L, C]
var hundreds = [C, D, M]
var thousands = [M]


var inputFunction = function (input) {
  var inputNumber =
  var reverseArray = inputNumber.split("").reverse();
  var onesItem = reverseArray[0];
  var tensItem = reverseArray[1];
  var hundredsItem = reverseArray[2];
  var thousandsItem = reverseArray[3];

  alert(tensItem);

}

var translate = function(onesItem, ones) {
  var inputArray = inputNumber.split(""); //splits number into array



}

//user interface logic
$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    var inputNumber = $("#numberToConvert").val();
    $(".output").show();
    $("#finalNumeral").text(inputNumber);

  }); //closes submit function

}); //close document ready function
