
page = 0 ;
received_object = null;

counter = 0
function display_f(){
  //cleaning
  jQuery("table").remove();
  jQuery("th").remove();
  jQuery("tr").remove();

  //starting over..
  jQuery('#list_').append("<table>");
  jQuery('#list_').append("<tr><th>Number</th><th>Title</th><th>imdb rating</th></tr>");

  counter = page + 1;

  for (var j = page; j < page + 10; j++){
    to_add = ""
    to_add += "<tr>"
    // to_add +="<tr>"

    to_add +="<td>";
    to_add +=counter++;
    to_add +="</td>";


    to_add +="<td>";
    to_add += received_object.items[j].title;
    to_add +="</td>";

    to_add +="<td>";
    to_add += received_object.items[j].imDbRating;
    to_add +="</td>";

    to_add +="</tr>";
    jQuery('#list_').append(to_add)
  }

    jQuery('#list_').append("</table>");
}

function prev_f(){
  page -= 10;
  display_f();
}


function next_f(){
  page += 10;
  display_f();
}


function first_f(){
  page = 0;
  display_f();
}


function last_f(){
  page = 240;
  display_f();
}

function button_f(){
  page = (jQuery(this).attr("id") -1 ) * 10;
  display_f();
}

function process_(data){
  received_object = data;


  display_f();

  fill_in_buttons();
  // alert("sad")
}

function call_ajax(){
  // alert("asd")
  $.ajax(
    {
      url: `https://imdb-api.com/en/API/Top250Movies/k_c061af1l`,
      type: 'GET',
      success: process_
    }
  )


}

function fill_in_buttons(){
  // alert(received_object.items.length);
  for( i = 1; i <=  received_object.items.length /10 ; i++){
    jQuery("#in_between").append('<button class="pages" id="' + i + '">' + i + "</button")
  }
}
function setup(){
  // alert('asd')
  // jQuery('#get_temperature_button').click(call_ajax)

  jQuery('#next').click(next_f);

  jQuery('#prev').click(prev_f);

  jQuery('#first').click(first_f);

  jQuery('#last').click(last_f);
  call_ajax();

  jQuery("body").on('click','.pages', button_f);

}

jQuery(document).ready(setup)
