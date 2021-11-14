addNum = function() {
    x = parseInt(jQuery('#num1').html());
    y = parseInt(jQuery('#num2').html());
    z = x + y
    jQuery('#sum').html(z);
}

setup = function() {
    jQuery('#trigger_the_add').click(addNum)
}

jQuery(document).ready(setup)
