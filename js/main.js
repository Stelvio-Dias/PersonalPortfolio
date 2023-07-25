$(document).ready(function(){
    /* menu responsivo*/
    $('.block').click(function() {
        $('#navigator').toggleClass('open')
    })

    /* Scroll effecr */
    $(window).scroll(function(){
        $('#header').toggleClass('scrolled', $(this).scrollTop() > 1)
    })

    /*Typed*/
    const element = [
        "front-end",
        "back-end",
        "estudante",
        "desenvolvedor"
    ]
    var typed = new Typed(".typed", {
        strings: element,
        typeSpeed: 35,
        backSpeed: 35,
        backDelay: 900,
        loop: true
    })

    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 1)
    })
})