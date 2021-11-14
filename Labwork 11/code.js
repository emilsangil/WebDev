function add() {
  x = parseInt($('#num1').html());
  y = parseInt($('#num2').html());
  z = x + y
  $('#result').html(z);
}

function minus() {
  x = parseInt($('#num1').html());
  y = parseInt($('#num2').html());
  z = x - y
  $('#result').html(z);
}

function multiply() {
  x = parseInt($('#num1').html());
  y = parseInt($('#num2').html());
  z = x * y
  $('#result').html(z);
}

function divide() {
  x = parseInt($('#num1').html());
  y = parseInt($('#num2').html());
  z = x / y
  $('#result').html(z);
}

function setup() {
  $('#trigger_add').click(add);
  $('#trigger_minus').click(minus);
  $('#trigger_multiply').click(multiply);
  $('#trigger_divide').click(divide);
}

$(document).ready(setup)
