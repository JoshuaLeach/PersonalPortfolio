$("document").ready(function() {

    codeLogoListener()
    viewMoreButtonListener()
    viewMoreButtonAnimate()

    setInitialCarouselPositions()
    carouselListener()
    carouselToggles()

})

function carouselToggles() {
    $(".toggle").click(function(e) {
        $(".toggle").removeClass("toggle--checked")
        e.target.classList.add("toggle--checked")
    });
}

function setInitialCarouselPositions() {
    // this should set the correct positions on page load
    $("#slide1").css("left", "0%")
    $("#slide2").css("left", "100%")
    $("#slide3").css("left", "200%")
}

function carouselListener() {
    // to get the percentage you do (slide number * 100) - 100
    // with this formulae we can dynamically add slides
    $("#carouselButton1").click(function() {
        $("#slide1").css("left", "0%")
        $("#slide2").css("left", "100%")
        $("#slide3").css("left", "200%")
    });
    $("#carouselButton2").click(function() {
        $("#slide1").css("left", "-100%")
        $("#slide2").css("left", "0%")
        $("#slide3").css("left", "100%")
    });
    $("#carouselButton3").click(function() {
        $("#slide1").css("left", "-200%")
        $("#slide2").css("left", "-100%")
        $("#slide3").css("left", "0%")
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

function viewMoreButtonAnimate() {
    var seconds = 2;
    // make button go up and down
    $(".buttonContainer__viewmore--button").css("margin-bottom", "-20px")
    setTimeout(function() {
        $(".buttonContainer__viewmore--button").css("margin-bottom", "-0px")
    }, 500)
    setTimeout(viewMoreButtonAnimate, seconds * 1000);
}