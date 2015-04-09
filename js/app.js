$('document').ready(function() {


    console.log('ready for action');

    var totalItems = 5;
    var completedItems = 2;
    var percentComplete = completedItems / totalItems;

    $('.shopping-list').find('li').mouseenter(function() {
        $(this).find('.list-control').find('i').css('display', 'inline-block');
    })
    .mouseleave(function() {
        $(this).find('.list-control').find('i').css('display', 'none');
    });

    $('.fa-check').click(function() {
        $(this).parent().parent().addClass('completed');
    });

    $('.fa-remove').click(function() {
        $(this).parent().parent().remove();
    });

    $('.fa-plus-square-o').click(function() {
        var text;
        var listItem;

        $('.shopping-list li:last').before('<input id="js-focus" type="text">');
        
        $('#js-focus')
        .focus()
        .keypress(function(e) {
            if(e.keyCode == 13) {
               text = $(this).val();
               listItem = '<li><span>' + text + '</span><div class="list-control"><i class="fa fa-check fa-2x"></i><i class="fa fa-remove fa-2x"></i></div></li>';
               $('.shopping-list li:last').prev().remove();
               $('.shopping-list li:last').before(listItem);
            }
        });

    });


});

var updateProgress = function() {

};