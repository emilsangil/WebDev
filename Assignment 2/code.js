function add() {
  x = parseInt($('#num1').val());
  y = parseInt($('#num2').val());
  z = x + y;
  $('#result').html(z);
  $('#history').append(`<div id="hist"> ${x} + ${y} = ${z} <button id="delete">Delete</button> </div> <br>`);
}

function minus() {
  x = parseInt($('#num1').val());
  y = parseInt($('#num2').val());
  z = x - y;
  $('#result').html(z);
  $('#history').append(`<div id="hist"> ${x} - ${y} = ${z} <button id="delete">Delete</button> </div> <br>`);

}

function multiply() {
  x = parseInt($('#num1').val());
  y = parseInt($('#num2').val());
  z = x * y;
  $('#result').html(z);
  $('#history').append(`<div id="hist"> ${x} * ${y} = ${z} <button id="delete">Delete</button> </div> <br>`);

}

function divide() {
  x = parseInt($('#num1').val());
  y = parseInt($('#num2').val());
  z = x / y;
  $('#result').html(z);
  $('#history').append(`<div id="hist"> ${x} / ${y} = ${z} <button id="delete">Delete</button> </div> <br>`);

}

function power() {
  x = parseInt($('#num1').val());
  y = parseInt($('#num2').val());
  z = 1;
  for (let i = 0; i<y; i++) {
    z *= x;
  }
  $('#result').html(z);
  $('#history').append(`<div id="hist"> ${x} ^ ${y} = ${z} <button id="delete">Delete</button> </div> <br>`);
}

function show_() {
  $('#history').show();
}

function hide_() {
  $('#history').hide();
}

function delete_() {
  alert("Hello");
  $(this).parent().hide();

}

function setup() {
  console.log("setup");
  $('#trigger_add').click(add);
  $('#trigger_minus').click(minus);
  $('#trigger_multiply').click(multiply);
  $('#trigger_divide').click(divide);
  $('#trigger_power').click(power);
  $('#show').click(show_);
  $('#hide').click(hide_);
  $('body').on('click', '#delete',delete_);
}

$(document).ready(setup)
