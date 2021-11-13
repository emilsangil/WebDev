add = function() {
    x = parseInt(jQuery('#num1').html()); // html() is a getter
    y = parseInt(jQuery('#num2').html());
    // alert(x + y) //now, adition not concatenation anymore
    z = x + y // processing
    jQuery('#sum').html(z); // html(inout) is a setter
}
setup = function() {
    jQuery('#trigger_the_add').click(add)
}

jQuery(document).ready(setup)
