function add() {
  x = parseInt($('#num1').html());
  y = parseInt($('#num2').html());
  z = x + y
  $('#result').html(z);
  $('#history').append(x + ' + ' + y + ' = ' + z + '<br>');
}

function minus() {
  x = parseInt($('#num1').html());
  y = parseInt($('#num2').html());
  z = x - y
  $('#result').html(z);
  $('#history').append(x + ' - ' + y + ' = ' + z + '<br>');

}

function multiply() {
  x = parseInt($('#num1').html());
  y = parseInt($('#num2').html());
  z = x * y
  $('#result').html(z);
  $('#history').append(x + ' * ' + y + ' = ' + z + '<br>');

}

function divide() {
  x = parseInt($('#num1').html());
  y = parseInt($('#num2').html());
  z = x / y
  $('#result').html(z);
  $('#history').append(x + ' / ' + y + ' = ' + z + '<br>');

}

function setup() {
  $('#trigger_add').click(add);
  $('#trigger_minus').click(minus);
  $('#trigger_multiply').click(multiply);
  $('#trigger_divide').click(divide);
}

$(document).ready(setup)
