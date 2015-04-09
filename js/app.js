$('document').ready(function() {
    console.log('ready for action');

    // display control boxes when mouse is hovering over
    $('.shopping-list').on('mouseenter', 'li', function() {
        $(this).find('.list-control').find('i').css('display', 'inline-block');
    })
    .on('mouseleave', 'li', function() {
        $(this).find('.list-control').find('i').css('display', 'none');
    })
    .on('click', '.fa-check', function() {
        $(this).parent().parent().addClass('completed'); // sets list to completed state
        updateProgress();
    })
    .on('click', '.fa-remove', function() { // removes list item
        $(this).parent().parent().remove();
        updateProgress();
    });

    // controls for adding new list items
    $('.fa-plus-square-o').click(function() {
        var text;
        var listItem;

        $(this).hide();

        $('.shopping-list li:last').before('<input id="js-focus" type="text">');
        
        $('#js-focus')
        .focus()
        .keypress(function(e) {
            if(e.keyCode == 13) {
               text = $(this).val();
               
               listItem = '<li><span>' + text + '</span><div class="list-control"><i class="fa fa-check fa-2x"></i><i class="fa fa-remove fa-2x"></i></div></li>';
               $('.shopping-list li:last').prev().remove();
               $('.shopping-list li:last').before(listItem);

               updateProgress();

               $('.fa-plus-square-o').show();
            }
        });

    });
});


// this function updates the progress bar with width as percentage of completion
var updateProgress = function() {

    var cItems = $('.shopping-list').children('.completed').length;
    var tItems = $('.shopping-list').children('li').length - 1;

    var pComplete = cItems / tItems * 100;
    var pCompleteStr = pComplete + '%';

    console.log('Percent Completion ' + pCompleteStr);

    $('.progress-bar').css('width', pCompleteStr);

    // when the list is completed star fun activates
    if(pComplete == 100) {
        starFun();
    }
};

var starFun = function() {

    var pStr;
    var randAngle;
    var colors = ["#F22613", "#8E44AD", "#87D37C", "#D35400", "#22A7F0"];

    for(var i = 0; i < 5; i++) {
        randAngle = Math.floor(Math.random() * (95 - 10) + 10);
        pStr = randAngle + '%'

        $('.star')
        .children()
        .clone()
        .css('color', colors[i])
        .appendTo('.star')
        .delay(i * 300)
        .animate({
            left: '80%',
            top: pStr
        }, 1000, function() {
            $(this).remove();
        });
    }
}