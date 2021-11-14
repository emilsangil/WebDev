function add() {
  x = parseInt($('#num1').html());
  y = parseInt($('#num2').html());
  z = x + y
  $('#result').html(z);
}


function setup() {
  $('#trigger_add').click(add);
}

$(document).ready(setup)
