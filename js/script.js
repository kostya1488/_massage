$(document).ready(function() {

    $('.massage_button').click(function(e) {
        e.preventDefault();
        $massageTitle = $(this).parent().children('.service_item_title').text();
        $('.modal-title, .massage_name').text($massageTitle);
    });

    // console.log($('.service_item_title').text())
    $('#toggle_button').click(function(e) {
        e.preventDefault();
        $('body').toggleClass('menu_show')
    });
});