page = 0 ;
received_object = null;

counter = 0
function display_result(){


  counter = page + 1;

  for (var j = page; j < page + 10; j++){
    to_add = "";

    to_add += "<div>";
    to_add += `${counter++}.`;

    to_add += " Title: ";
    to_add += received_object.results[j].title;

    to_add += "<br>"

    to_add += "Description: ";
    to_add += received_object.results[j].description;

    to_add += "<br";

    to_add += `<img src= "${received_object.results[j].image}">`;

    to_add += "</div>";
    jQuery('#pages').append(to_add);
  }

}


function process_(data) {
  console.log(data);
  received_object = data;
  display_result();
}

function call_ajax() {
  $.ajax({
    url: `https://imdb-api.com/en/API/SearchTitle/k_67c0z7hb/${jQuery('#movie_title').val()}`,
    type: 'GET',
    success: process_
  })
}

function setup() {
  $('#search_movie').click(call_ajax);
  $('#search_movie').click(display_result);
}

$(document).ready(setup)
