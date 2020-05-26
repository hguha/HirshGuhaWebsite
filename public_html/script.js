//Google Analytics
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-111498872-4');

//THEME
let root = document.documentElement;
let themeColor = "#114499";

var darkModeOn = false;
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

//BLOG
// let blogs= [
//     {
//         image: "",
//         title: "Website Semantics",
//         date: "4th February, 2020",
//         content:"It is my goal to start a small blog for various pieces of my life. There are two main goals I hope to accomplish with my blog: cooking recipes, and coding tutorials. To this effect, I was unable to find a blogging platform that I thoroughly enjoyed, and found that the cost-benefit analysis was in favor of benefit(most required Node, and the particular means through which I host my site will not allow me to install Node packages. Even if I self-hosted, I did not find any Node.Js package particularly appear). That being the case, my only choice is to write my own blogging platform. That is what I have done here. While at the time of this blog coming out, the platform is still in it's earlier stages, I will continue to develop it, perhaps eventually adding it to my <a href='#projects'>Projects</a> at some point, where you all can enjoy a lightweight, blogging platform that requires nothing more than an included script in your JS file. <br><br> As I seek to maintain a cookbook, I hope to instead adept my website to contain a cookbook in itself - in a blog-like fashion, I can post recipes easily, and conveniently. I imagine part of the reason I don't maintain a strict cookbook PDF is the effort required in updating a document, translating it into a pdf, and then pushing that to my site exceeds my desires(After all, I'd rather spend that time coming up with more amazing recipes, right?). In that way, this platform I created is going to speed up that process, and hopefully, result in more recipes for you all to enjoy. <br><br> Another important piece is my ability to write tutorials. I have built five websites, and I think that when it comes to writing your own website in pure HTML, Javascript, and CSS(which is the method that gives you entire freedom to build anything you dream, and I truly believe is just as easy to learn as other website builders like Wix, Wordpress, or Squarespace), that I have enough expertise to lay it out clearly. In this day and age, everyone and their dog want their own website, and they should be able to design it exactly as they like, with no exceptions. I want to show you how, and this blog is my means to an end."
//     },
// ];

// let preview = blogs[0].content.substring(0, 200)+"...";

// //create home screen showing newest blog
//     if(blogs[0].image) {
//         document.getElementById("image").innerHTML = "<img src='"+blogs[0].image+"' />";
//     }
//     document.getElementById("title").innerHTML = blogs[0].title;
//     document.getElementById("date").innerHTML = blogs[0].date;
//     document.getElementById("preview").innerHTML = preview;

// function openBlog(index) {
//     Swal.fire({
//       title: blogs[index].title,
//       html: blogs[index].date+"<br><br>"+"<div style='text-align:left'>"+blogs[index].content+"</div>",
//       showConfirmButton: false,
//       width: "90%",
//       imageUrl: blogs[0].image ? blogs[0].image : null,
//       showCloseButton: true,
//     });
// }



$("#listing, .blogclosebtn").hide()
function openBlogList() {
    $(".blog-overlay").css({"width": "100%"});
    setTimeout(function(){ $("#blog-list").css("height", "85%")}, 500);
    $("#listing, .blogclosebtn").show()
    $("#listing, .blogclosebtn").css({"opacity":"1"})
}

function closeBlogListing() {
    $("#blog-list").css("height", "0%");
    $("#listing, .blogclosebtn").hide()
    $("#listing, .blogclosebtn").css({"opacity":"0"});
    setTimeout(function(){$(".blog-overlay").css({"width": "0%"})}, 500);
}
