$(document).ready(function() {

    $('.massage_button').click(function(e) {
        e.preventDefault();

        var str_text = $(this).parent().children('.service_item_title').text();
        var str_title = str_text.split('»')[0];

        $('.modal-title').text(str_title + '»');
        $('.massage_name').text(str_text);
    });

    // console.log($('.service_item_title').text())
    $('#toggle_button').click(function(e) {
        e.preventDefault();
        $('body').toggleClass('menu_show')
    });
});