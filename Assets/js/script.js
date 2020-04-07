// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();

                });
            }
        }
    });

function red() {
    document.getElementById("jumbotron").style.background = "linear-gradient(-45deg, rgba(67, 0, 255, 0.9) 0%, rgb(255, 0, 0) 100%)";
    document.getElementById("footer").style.background = "linear-gradient(-45deg, rgba(67, 0, 255, 0.9) 0%, rgb(255, 0, 0) 100%)";
    document.getElementById("nav").style.backgroundColor = "#210077";

    var a = document.getElementsByClassName("skill");
    var b = document.getElementsByTagName("h3");
    var c = document.getElementsByTagName("h2");
    var i;
    for (i = 0; i < a.length; i++) {
        a[i].style.backgroundColor = "#5f19f1";
    }
    for (i = 0; i < b.length; i++) {
        b[i].style.color = "#5f19f1";
    }
    for (i = 0; i < c.length; i++) {
        c[i].style.color = "#5f19f1";
    }
}

function normal() {
    document.getElementById("jumbotron").style.background = "linear-gradient(-45deg, rgba(147, 26, 222, 0.83) 0%, rgba(28, 206, 234, 0.82) 100%)";
    document.getElementById("footer").style.background = "linear-gradient(-45deg, rgba(147, 26, 222, 0.83) 0%, rgba(28, 206, 234, 0.82) 100%)";
    document.getElementById("nav").style.backgroundColor = "#5d4a8e";

    var a = document.getElementsByClassName("skill");
    var b = document.getElementsByTagName("h3");
    var c = document.getElementsByTagName("h2");
    var i;
    for (i = 0; i < a.length; i++) {
        a[i].style.backgroundColor = "#00a2c6";
    }
    for (i = 0; i < b.length; i++) {
        b[i].style.color = "#00a2c6";
    }
    for (i = 0; i < c.length; i++) {
        c[i].style.color = "#00a2c6";
    }
}