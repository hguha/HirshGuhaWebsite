//Google Analytics
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-111498872-4');

let instance = null;
function initTippy() {
    instance = tippy('button', {
        animation: 'scale',
        duration: 400,
        arrow: true,
        size: "large"
    });
}

//THEME
let root = document.documentElement;
let themeColor = "#114499";
var darkModeOn = (localStorage.getItem("dark")) == "true" ? true: false;
console.log(darkModeOn);
var serifFont = false;
var usingMobileMenu = false;
function toggleExperience(element) {
    switch(element) {
        case "toggle-theme":
            root.style.setProperty("--text-color", darkModeOn ? "#3c3c3c" : "#fff");
            root.style.setProperty("--background-color", darkModeOn ? "#fff" : "#3c3c3c");
            root.style.setProperty("--theme-color", themeColor = darkModeOn ? "#114499" :  "#00ccff");
            darkModeOn = !darkModeOn;
            instance[0].setContent(darkModeOn ? "Change to Light Mode" : "Change To Dark Mode");
            $("[id$='-toggle']").css({"background-color": darkModeOn ? "white" : "black", "color": darkModeOn ? "black" : "white"});
            $("#theme-toggle").html(darkModeOn ? "Light" : "Dark");
            localStorage.setItem("dark", darkModeOn);
            break;
        case "toggle-font":
            root.style.setProperty("--font", serifFont ? "'Open Sans', 'Roboto', sans-serif" : "serif");
            serifFont = !serifFont;
            instance[1].setContent(serifFont ? "Change to Sans-Serif Mode" : "Change To Serif");
            $("#font-toggle").html(serifFont ? "Serif" : "Sans");
            break;
        case "toggle-menu":
            var curMenu = usingMobileMenu ? $("#navbar, .navbar-logo, .header, .top-menu-item, .noncode") : $(".openbtn, .closebtn, .overlay-content, .mobile-menu-container");
            var hiddenMenu = !usingMobileMenu ? $("#navbar, .navbar-logo, .header, .top-menu-item, .noncode") : $(".openbtn, .closebtn, .overlay-content, .mobile-menu-container");
            curMenu.css("display", "block");
            hiddenMenu.css("display", "none");
            usingMobileMenu = !usingMobileMenu;
            instance[2].setContent(usingMobileMenu ? "Change to Top Menu" : "Change To Mobile Menu");
            $("#menu-toggle").html(usingMobileMenu ? "Top" : "Mobile");
            break;
    }

}

//SKILLS

function inView(id) {
    const bounding = document.getElementById(id).getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    return (bounding.top <= windowHeight * 0.7) && ((bounding.top + bounding.height) >= 0);
}

let bars = document.getElementsByClassName("progress-bar");
var barsAnimated = false;

function animateBars() {
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.width = bars[i].getAttribute("aria-valuenow") + "%";
    }
}

//INTERESTS
var toggles = document.getElementsByClassName("toggle");
var content = [
    "Growing up and playing table tennis with my dad after work was one of my favorite pastimes, and remains so to this day, with the only real difference between the power, spin, and control at which we play. In fact, the same is true of many of the racquet sports I play, including racquetball, badminton, and tennis. However, table tennis was the game that I had the most passion for and grew the best at.",
    "As a member of my Indian community, I set up pujas, organize festivals, serve food at picnics and clean up. This is something I’ve done for as long as I can remember, and gives me an incredible sense of family. As a tutor; since high school, I’ve tutored students in English, Physics, Calculus, Pre-Calculus, Linear Algebra, and Computer Science. As a college student, I give tours to prospective students for the Honors Program as an Ambassador and organize various outreach programs on behalf of my school.",
    "I’m a firm believer that contract bridge is not a game of luck. As far as card games go, it’s one where only skill can win tournaments. Whether you get the worst cards or the best, it’s only how you do relative to every other team that determines you’re rank - and it is that concept that makes bridge wonderful. The math, technique, bidding sequences, and people are what led me to found and preside the Bridge Club at my school.",
    "I started cooking when I was 18 years old and fell in love with the creativity and freedom it brought me. Before then, making anything beyond a pancake from the store-bought mix truly was beyond a daunting task, so learning to master cuisines from every part of the world is truly liberating. In fact, it was the start of a Sunday tradition in my household, where every Sunday, myself, my father, and my girlfriend spend the evening cooking and refining our skills.",
    "Nine years of public theater has honed my communication, leadership, and teamwork in ways that very few other activities have. Every role I’ve gotten is an oppurtunity to express myself in a new and creative way, while also crafting a comfortability with public speaking, and leading. I met some of my best friends through this activity, and have recently gotten into the directing and stage managing side of things.",
    "Had I known that Speech and Debate would involve waking up at 5:00 AM to attend tournaments before I started, would I have gone on to qualify for state 31 times, qualify for nationals twice, win the state championship twice, and end as a national semifinalist in Informative Speech? Probably not. In that sense, I suppose it’s a good thing nobody told me. "
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
        $(".text-" + id).show();
        prevId = id;
    });
});

//TYPEWRITER
var i = 0;
var firstName = 'HIRSH ';
var lastName = 'GUHA';
var speed = 50;
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
    contactShown = false, highlightsShown = false, interestsShown = false,
    projectsShown = false;

function animate() {
    if (inView('projects') && !projectsShown) {
        $("#projects .project-slider").css({
            "opacity": 1,
            "transform": "translateY(0)"
        });
        projectsShown = true;
    }

    else if (inView('about') && !aboutShown) {
        $("#about .card, #about .quote").css({
            "opacity": 1,
            "transform": "translateX(0px)"
        });
        aboutShown = true;
    }
    else if (inView('interests') && !interestsShown) {
        $('#interests .toggle').each(function(i) {
            $(this).delay(i*100).fadeTo("fast", 1);
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

function getSkills() {
    let stats = [
        {name:"PHP", value: 80},
        {name:"Javascript", value: 95},
        {name:"C/C++", value: 70},
        {name:"Python", value: 90},
        {name:"SQL", value: 80},
        {name:"Haskell", value: 75},
        {name:"Web Design", value: 80},
        {name:"App Design", value: 60},
        {name:"Content Writing", value: 75},
        {name:"Data Analytics", value: 75},
        {name:"Graphics/Logos", value: 65},
        {name:"Web Development", value: 80}
    ];
    let i = 0;
    for(s of stats) {
        const el = i < 6 ? ".code" : ".noncode"
        $(el).append(`${s.name} <div class="progress"><div class="progress-bar" aria-valuenow="${s.value}">${s.value}%</div></div>`);
        i++;
    }
}
getSkills();

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
    $("#blog-list").css("height", "0%");
}

//FOOTER
document.getElementById("curYear").innerHTML = new Date().getFullYear();

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

function getHighlights() {
    let highlights = [
        {type:"academic", name: "FAS Scholarship"},
        {type:"theater", name: "Aladdin in Aladdin"},
        {type:"bridge", name: "Council Bluffs Regional Gold Rush 1st Place"},
        {type:"speech", name: "KSHAA State Champion in Poetry"},
        {type:"academic", name: "HYK Achievement Award"},
        {type:"bridge", name: "Tulsa Regional Tournament 3rd Place"},
        {type:"theater", name: "Prince Charming in Cinderella"},
        {type:"academic", name: "JL Constant Scholarship"},
        {type:"speech", name: "NSDA National Semifinalist"},
        {type:"theater", name: "Sebastian in Twelvth Night"},
        {type:"speech", name: "KSHAA State Champion in Informative"},
        {type:"bridge", name: "Blue Springs Tournament 1st Place"},
        {type:"academic", name: "Allen Engineering Scholarship"},
        {type:"bridge", name: "President of the KU Bridge Club"},
        {type:"academic", name: "Chancellors Top Scholar"},
        {type:"academic", name: "McClendon Scholarship"}
    ]

    for(h of highlights) {
        let html = `<div class="card ${h.type}" data-type="${h.type}"><h3>${h.name}</h3></div>`
        $(".cards").append(html);
    }
}

getHighlights();

var $filters = $('.filter [data-filter]'),
    $cards = $('.cards [data-type]');

$filters.on('click', function(e) {
    e.preventDefault();

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