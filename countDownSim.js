var countdownGenerator = function (x) {
  /* your code here */
  var countdownNumber = x;

  return function(x) {
    if (countdownNumber > 0) {
      console.log("T-minus " + countdownNumber + " ...");
      countdownNumber --;
    }
    else if (countdownNumber === 0) {
      console.log("Blast Off!");
      countdownNumber --;
    }
    else if (countdownNumber < 0) {
      console.log("Rockets already gone, bub!");
      countdownNumber --;
    }
  }


};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...  -
countdown(); // T-minus 2...  -
countdown(); // T-minus 1...  -
countdown(); // Blast Off! == 0
countdown(); // Rockets already gone, bub! negative number
countdown(); // Rockets already gone, bub! negative number