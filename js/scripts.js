//business logic
var ones = ["I", "V", "X"]
var tens = ["X", "L", "C"]
var hundreds = ["C", "D", "M"]
var thousands = ["M"]


var inputFunction = function(inputNumber) {
  var reverseArray = inputNumber.split("").reverse();
  var onesItem = "";
  var tensItem = "";
  var hundredsItem = "";
  var thousandsItem = "";

  for (var index = 0; index < reverseArray.length; index++) {
    if (index === 0) {
      onesItem = translation(inputArray[index], ones);
    }
    else if (index === 1) {
      tensItem = translation(inputArray[index], tens);
    }
    else if (index === 2) {
      hundredsItem = translation(inputArray[index], hundreds);
    }
    else if (index === 3) {
      thousandsItem = translation(inputArray[index], thousands)
    }
    }
  }
} //close inputFunction



//user interface logic
$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    var inputNumber = $("#numberToConvert").val();
    $(".output").show();
    $("#finalNumeral").text(inputNumber);

  }); //closes submit function

}); //close document ready function
