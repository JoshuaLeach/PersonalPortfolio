$("document").ready(function() {

    var rollBack = true;

    codeLogoListener()
    viewMoreButtonListener()
    aboutScrollListener(rollBack)
    viewMoreButtonAnimate()
})


function viewMoreButtonAnimate() {
    var seconds = 2;
    // make button go up and down
    $(".buttonContainer__viewmore--button").css("margin-bottom", "-20px")
    setTimeout(function() {
        $(".buttonContainer__viewmore--button").css("margin-bottom", "-0px")
    }, 500)
    setTimeout(viewMoreButtonAnimate, seconds * 1000);
}

function hamburgerClick() {
    $(".hamburgerMenu__headerContainer").css("width", "400px")
    setTimeout(function() {
        $(".hamburgerBody").css("display", "block")
    }, 350);
    setTimeout(function() {
        $(".hamburgerBody").css("height", "300px")
    }, 400);
    $(".overlay").css("display", "block")
}

function closeMenu() {
    if ($(".hamburgerBody").height() == 300) {
        $(".hamburgerBody").css("height", "0px")
        setTimeout(function() {
            $(".hamburgerBody").css("display", "none")
            $(".hamburgerMenu__headerContainer").css("width", "0px")
        }, 200);
        $(".overlay").css("display", "none")
    }
}

function aboutScrollListener(rollBack) {
    $(window).scroll(function() {
        var hT = $(".aboutSection__progressBarContainer").offset().top;
        var hH = $(".aboutSection__progressBarContainer").outerHeight();
        var wH = $(window).height();
        var wS = $(this).scrollTop();
        if (wS > (hT + hH - wH) && (hT > wS) && (wS + wH > hT + hH)) {

            if (rollBack) {
                $(".progressBar__htmlProgress").css("width", "65%");
            }
            setTimeout(function() {
                $(".progressBar__htmlProgress").css("width", "49.2%");
            }, 600);

            if (rollBack) {
                $(".progressBar__cssProgress").css("width", "65%");
            }
            setTimeout(function() {
                $(".progressBar__cssProgress").css("width", "57.4%");
            }, 600);

            if (rollBack) {
                $(".progressBar__jsProgress").css("width", "65%");
            }
            setTimeout(function() {
                $(".progressBar__jsProgress").css("width", "32.8%");
            }, 600);

            rollBack = false;
        }
    });
}

function viewMoreButtonListener() {
    $(".buttonContainer__viewmore--button").mouseover(function() {
        $(".buttonContainer__arrow").css({ "transform": "rotate(90deg)" });
        $(".buttonContainer__arrow").attr("src", "./Images/whitearrow.svg")
    })
    $(".buttonContainer__viewmore--button").mouseleave(function() {
        $(".buttonContainer__arrow").css({ "transform": "rotate(0deg)" });
        $(".buttonContainer__arrow").attr("src", "./Images/blackarrow.svg")
    })
}

function codeLogoListener() { /*This function spins the code logo*/
    spinLogo()
    resetLogo()

    $(".middleContainer__logo").mouseover(function() {
        spinLogo()
    })
    $(".middleContainer__logo").mouseleave(function() {
        resetLogo()
    })
}

function spinLogo() {
    $(".middleContainer__logo").css({ "transition": "transform .6s ease-in-out" });
    $(".middleContainer__logo").css({ 'transform': 'rotate(' + 360 + 'deg)' });
}

function resetLogo() {
    setTimeout(function() {
        $(".middleContainer__logo").css({ "transition": "transform 0s" });
        $(".middleContainer__logo").css({ 'transform': 'rotate(' + 0 + 'deg)' });
    }, 600);
}

// checks if element can be seen on screen
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}