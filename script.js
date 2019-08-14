//Google Analytics
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-111498872-4');

tippy('button', {
    animation: 'scale',
    duration: 400,
    arrow: true,
    size: "large"
});

//THEME
let root = document.documentElement;
let themeColor = "#114499";

function setDarkTheme() {
    console.log(root);
    root.style.setProperty("--text-color", "#fff");
    root.style.setProperty("--background-color", "#3c3c3c");
    root.style.setProperty("--theme-color", themeColor = "#00ccff");
}

function setLightTheme() {
    root.style.setProperty("--text-color", "#3c3c3c");
    root.style.setProperty("--background-color", "#fff");
    root.style.setProperty("--theme-color", themeColor = "#114499");
}

//SKILLS
function inView(id) {
    const bounding = document.getElementById(id).getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    return (bounding.top <= windowHeight * 0.7) && ((bounding.top + bounding.height) >= 0);
}

let bars = document.getElementsByClassName("progress-bar");
var barsAnimated = false;

if (window.innerWidth < 768) {
    animateBars();
}

function animateBars() {
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.width = bars[i].getAttribute("aria-valuenow") + "%";
    }
}

//INTERESTS
var toggles = document.getElementsByClassName("toggle");
var content = [
    "I started playing table tennis when I was about 10 or 11. My dad had a ping pong table in his office, and we would spend some time after work playing a little bit. He never went easy on me. I would just desperately hope to hit it over the net, and he would smash it back at me everytime. He was quite good at table tennis, even competeting in tournaments. While that was frustrating, in retrospect, it was probably the only thing that made me any good at the game. For years, we played on that office table, until one day, when I was 18, I finally beat him. It felt amazing, and I knew this was a game that I would play for years to come.",
    "As a member of two indian communities - Pratichi and the Kansas City Bengali Association - I have been able to grow up with an incredible ammount of culture in my life, despite being born and raised here in America. In that time, I've done an incredible ammount in helping set up and run pujas(indian festivals), and plan events.",
    "I started playing bridge only in 2018, and fell in love with it pretty quickly. Once again, this was something my dad had been playing for years, and was quite good at. With his encourgement, I started the KU bridge club, and was delighted to find a number of other enthusiasts to play with every week. Finally, I got to the point where I felt ready to compete. PLaying with my dad, we won the very first tournament I went to, which felt great. I plan on continuing to compete.",
    "Both of my parents were excellent cooks, and so I've grown up eating some incredible food. However, other than helping them with cutting or cleaning or moving food, I really was never involved in the kitchen. That is, until I got my own place, and truly found a passion for cooking. Indian, American, Italian, Greek, Mexican, I loved and made it all. To this day, I'm always experiementing, and pushing the boundaries of what I can make.",
    "I started doing Theater when I was in 5th grade. I couldn't stop getting lead roles. I was a god. Kidding. I got a few lead roles, and a number of chorus member roles. But for some reason, I loved the people, and I stuck around for a while. 8 years to be percise. Theater was a big part of my life.",
    "I took Debate my freshman year of high school on a friends reccomendation, not really sure what to expect. Then I won the first tournament I went to. And the second one. And the third one. And all of them my freshman year, I was undefeated. Then I did Forensics. And I sucked. Very badly, my freshman year, I never won a trophy in Forensics. But for some reason, I stuck with it, and by the end of high school, I came up with a trophy from Nationals, a State Championship, and literally dozens of medals."
]

var prevId = 1;
$(document).ready(function() {
    animate();
    $(".text-1").html(content[0]);
    for (var i = 2; i <= toggles.length; i++) {
        $(".text-" + i).hide();
    }
    $(".toggle").click(function() {
        var id = $(this).attr('id');
        $(this)[0].style.color = themeColor;
        $(".text-" + id).html(content[id - 1]);
        $(".text-" + prevId).hide();
        $("#" + prevId)[0].style.color = "white";
        $(".text-" + id).fadeIn();
        prevId = id;
    });
});

//TYPEWRITER
var i = 0;
var firstName = 'HIRSH ';
var lastName = 'GUHA';
var speed = 100;
window.onload = function() {
    if (window.innerWidth > 768) {
        typeWriter();
        setTimeout(showSocialMedia, 1100);
    } else {
        document.getElementById("first-name").innerHTML += "HIRSH ";
        document.getElementById("last-name").innerHTML += "GUHA ";
        showSocialMedia();
    }
}

var socialMedia = document.getElementsByClassName('social-media');

function showSocialMedia() {
    socialMedia[0].style.opacity = 1;
    socialMedia[0].style.transform = "translateY(30px)";
}

function typeWriter() {
    if (i < firstName.length) {
        document.getElementById("first-name").innerHTML += firstName.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (i < firstName.length + lastName.length) {
        document.getElementById("last-name").innerHTML += lastName.charAt(i - lastName.length - 2);
        i++;
        setTimeout(typeWriter, speed);
    }
}
window.onscroll = function() {
    changeOpacity();
    animate();
};

var statsShown = false, barsAnimated = false, aboutShown = false,
    contactShown = false, highlightsShown = false, interestsShown = false;
    
function animate() {
    if (inView('about') && !aboutShown) {
        $("#about .card").css({
            "opacity": 1,
            "transform": "translateY(0px)"
        });
        aboutShown = true;
    }
    else if (inView('interests') && !interestsShown) {
        $('#interests .toggle').each(function(i) {
            $(this).delay(i*300).fadeTo("fast", 1);
        }).promise().done(function() {
            $('#interests .text').fadeTo("fast", 1);
        });
        interestsShown = true;
    }
    else if (inView('highlights') && !highlightsShown) {
        $("#highlights .cards").css({
            "opacity": 1,
            "transform": "translateX(0)"
        });
        highlightsShown = true;
    }
    else if (inView('stats') && !statsShown) {
        countUp();
        statsShown = true;
    }
    else if (inView('skills') && !barsAnimated) {
        animateBars();
        barsAnimated = true;
    }

    else if (inView('contact') && !contactShown) {
        $("#contact input, #contact textarea").css({
            "opacity": 1,
            "transform": "translateX(0)"
        });
        contactShown = true;
    }



}

//STATS
function countUp() {
    $('#stats .num').each(function() {
        var $this = $(this);
        var countTo = $this.attr('data-num');
        $({countNum: $this.text()}).animate({
            countNum: countTo
        }, {
                duration: 1000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
        });
    });
}

//MENU
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop + 10;

function changeOpacity() {
    if (window.pageYOffset > sticky) {
        navbar.style.background = "rgba(0,0,0,0.8)";
    } else {
        navbar.style.background = "rgba(0,0,0,0)";
    }
}

function openNav() {
    document.getElementById("mobileNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("mobileNav").style.height = "0%";
}

//FOOTER
var curYear = document.getElementById("curYear");
curYear.innerHTML = new Date().getFullYear();

//CONTACT
function submitForm() {
    let name = document.getElementById("name");
    let message = document.getElementById("message");
    let email = document.getElementById("email");
    let formValid = email.checkValidity() && email.checkValidity() && message.checkValidity();
    if (formValid) {
        document.getElementById("contact-form").submit();
    } else {}
}

//HIGHLIGHTS
var $filters = $('.filter [data-filter]'),
    $cards = $('.cards [data-type]');

$filters.on('click', function(e) {
    e.preventDefault();
    var $this = $(this);

    $filters.removeClass('active');
    $(this).addClass('active');

    var $filterType = $(this).attr('data-filter');

    if ($filterType == 'all') {
        $cards.removeClass('is-animated').fadeOut().promise().done(function() {
            $cards.addClass('is-animated').fadeIn();
        });
    } else {
        $cards.removeClass('is-animated').fadeOut().promise().done(function() {
            $cards.filter('[data-type = "' + $filterType + '"]').addClass('is-animated').fadeIn();
        });
    }
});
