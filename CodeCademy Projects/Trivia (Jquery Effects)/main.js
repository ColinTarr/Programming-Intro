$(document).ready(() => {

    $('.hint-box').on('click', () => {
        $('.hint').slideToggle(500);
    });

    $('.wrong-answer-one').on('click', () => {
        $('.wrong-answer-one').fadeOut('slow');
        $('.frown').fadeIn();
        $('.frown').fadeOut(1000);
    });

    $('.wrong-answer-two').on('click', () => {
        $('.wrong-answer-two').fadeOut('slow');
        $('.frown').fadeIn();
        $('.frown').fadeOut(1000);
    });

    $('.wrong-answer-three').on('click', () => {
        $('.wrong-answer-three').fadeOut('slow');
        $('.frown').fadeIn();
        $('.frown').fadeOut(1000);
    });

    $('.correct-answer').on('click', () => {
        $('.smiley').fadeIn();
        $('.wrong-answer-one').fadeOut('slow');
        $('.wrong-answer-two').fadeOut('slow');
        $('.wrong-answer-three').fadeOut('slow');
        $('.card').delay(1500).fadeOut('slow');
    })

});