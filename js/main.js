/*start jquery code*/

/************ OWL carousel *****************/


//declearing html elements



$("#btn2").on("click", function (e) {
    // remove default of the click
    e.preventDefault();
    // stop propagation
    e.stopPropagation();

});
$("#btn3").on("click", function (e) {
    // remove default of the click
    e.preventDefault();
    // stop propagation
    e.stopPropagation();

});
$("#btn1").on("click", function (e) {
    // remove default of the click
    e.preventDefault();
    // stop propagation
    e.stopPropagation();

});

function toggle() {
    var trailer = document.querySelector(".trailer");
    trailer.classList.toggle("active");

}

function toggl() {
    var gallary = document.querySelector(".gallary");
    gallary.classList.toggle("active");

}

function togg() {
    var video_content = document.querySelector(".video-content");
    video_content.classList.toggle("active");

}
$("#prop1").on("click", function (e) {
    // remove default of the click
    e.preventDefault();
    // stop propagation
    e.stopPropagation();

});
$("#prop").on("click", function (e) {
    // remove default of the click
    e.preventDefault();
    // stop propagation
    e.stopPropagation();

});
$("#prop2").on("click", function (e) {
    // remove default of the click
    e.preventDefault();
    // stop propagation
    e.stopPropagation();

});
$("#prop3").on("click", function (e) {
    // remove default of the click
    e.preventDefault();
    // stop propagation
    e.stopPropagation();

});

$("#t1").on("click", function (e) {
    // remove default of the click
    e.preventDefault();
    // stop propagation
    e.stopPropagation();

});
$("#t2").on("click", function (e) {
    // remove default of the click
    e.preventDefault();
    // stop propagation
    e.stopPropagation();

});






$(document).ready(function () {
    $('.banner').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 700,
        autoplayHoverPause: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
            }
        }
    })
});

$(document).ready(function () {
    $('.items').owlCarousel({
        loop: true,
        autoplay: false,

        autoplayHoverPause: true,

        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
            }
        }
    })
});



$(document).ready(function () {
    $("#btn2").click(function () {
        $("#content3").hide();
        $("#content1").hide();
        $("#content2").show();
    });
    $("#btn3").click(function () {
        $("#content2").hide();
        $("#content1").hide();
        $("#content3").show();
    });
    $("#btn1").click(function () {
        $("#content2").hide();
        $("#content3").hide();
        $("#content1").show();
    });
});

















$(document).ready(function () {
    $("#flips").click(function () {
        $("#panels").slideToggle("slow");
    });
});







const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container-");

const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});

function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;

}


function rangeSlid(value) {
    document.getElementById('rangeValu').innerHTML = value;

}

function rangeSli(value) {
    document.getElementById('rangeVal').innerHTML = value;

}

function rangeSl(value) {
    document.getElementById('rangeVa').innerHTML = value;

}








$(document).ready(function () {
    $('.banner').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 700,
        autoplayHoverPause: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
            }
        }
    })
});

$(document).ready(function () {
    $('.items').owlCarousel({
        loop: true,
        autoplay: false,

        autoplayHoverPause: true,

        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
            }
        }
    })
});