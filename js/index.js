$(document).ready(function () {
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
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
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    });
                }
            }
        });
});

// MAIN CAROUSEL


$(".main-carousel").flickity({
    cellAlign: "left",
    contain: !0,
    percentPosition: !1,
    imagesLoaded: !0,
    autoPlay: !0,
    prevNextButtons: !1
});

// SIGN UP FORM

$('.signup-form').on('submit', function(event) {
    event.preventDefault();
    if ($('#email').val() == '') {
        alert('You missed the field.');
    } else {
        alert('Thanks for subscribing!');
    }
});


// ADD ITEM TO CART

let itemCount = 0;

$('button').click(function (){
    itemCount ++;
    $('.itemCount').html(itemCount).css({
        "text-align": "center",
        "height": "29px",
        "width": "36px",
        "border-radius": "10px",
        "background": "#e2574c",
        "color": "white",
        "font-size": "1.5rem",
    });
});



