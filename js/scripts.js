//BACKEND

var result = '';
var numbers = [ 3000, 2000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var roman = ["MMM", "MM", "M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

function converter(str) {

  for(var i=0; str > 0; i++) {
    if(str >= numbers[i]) {
      // alert(roman[i]);
      result = result + (roman[i]);
      // alert(result);
      str = str - numbers[i];
      return converter(str);
    };
  };
  alert(result);
};
//FRONT-END
$(document).ready(function() {
  $('#romanForm').submit(function(event) {
    event.preventDefault();
    var input = parseInt($('input#numberIn').val());
    converter(input);
    result = '';
  });
});
