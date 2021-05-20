// toggle menu
$('.toggle-menu').on('click', function() {
    $(this).parent().toggleClass('open-menu');
});

let projectResizer = 450;

function getMenu() {
    let locs = menu.map(x => `#${x.toLowerCase()}`);
    let html = `<ul id="menu">`;
    for (let i = 0; i < menu.length; i++) {
        if (menu[i] == "Blog") html += `<li><a id="anchor-${menu[i].toLowerCase()}" href="blog">${menu[i].toUpperCase()}</a></li>`
        else { html += `<li><a id="anchor-${menu[i].toLowerCase()}" href="${locs[i]}">${menu[i].toUpperCase()}</a></li>` }
    }
    return $("nav").html(html + `</ul>`);
}

//HOME
var firstName = 'HIRSH ';
var lastName = 'GUHA';
var speed = 100;
var i = 0;

function getSMIcons() {
    let html = "";
    for (s of smIcons) html += `<i onclick="window.open('${s.href}', '_blank')" class="${s.icon}"></i>`
    $(".sm-icons").html(html);
}

console.log($("#curYear"));
$("#curYear")[0].innerHTML = new Date().getFullYear()

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

function rebuild() {
    $.fn.fullpage.destroy('all');
    getFullPageLayout();
}

let curWidth = window.innerWidth;

function getFullPageLayout() {
    $('#fullpage').fullpage({
        licenseKey: "dddddddd-dddddddd-dddddddd-dddddddd",
        sectionsColor: ["#111111", '#222222', '#333333', '#444444', '#555555', '#666666'],
        sectionSelector: '.vertical-scrolling',
        slideSelector: '.horizontal-scrolling',
        navigationPosition: 'right',
        navigation: window.innerWidth > 500,
        slidesNavigation: true,
        controlArrows: false,
        scrollingSpeed: 600,
        anchors: menu.map(x => x.toLowerCase()),
        navigationTooltips: menu,
        showActiveTooltip: false,
        menu: "#menu",
        // paddingTop: '70px',
        afterLoad: function(origin, destination, direction) {
            $(`#anchor-${origin.anchor}`).removeClass("active-anchor")
            $(`#anchor-${destination.anchor}`).addClass("active-anchor")
        },
        afterSlideLoad: function(section, origin, destination, direction) {
            if (section.index == 2 && destination.index == 1) {
                countUp();
                animateBars();
            }
        },
        afterResize: function(width, height) {
                change550 = 550;
            if ((width < projectResizer && curWidth >= projectResizer) || (width > projectResizer && curWidth <= projectResizer)) {
                curWidth = width;
                getProjects();
                rebuild();
            }
            if ((width < change550 && curWidth >= change550) || (width > change550 && curWidth <= change550)) {

                curWidth = width;
                getResearch();
                getHighlights();
                rebuild();
            }
        }
    });
}

window.onload = () => {
    typeWriter();
    getMenu();
    getInterests();
    getProjects();
    getNewestBlog();
    getHighlights();
    getResearch()
    getFilterClicks();
    getSkills();
    getStats();
    getSMIcons();

    getFullPageLayout();
};

//BLOG
let title, date, body, blogNum;
async function getNewestBlog() {
    var counter = 1;
    while (true) {
        try {
            await $.get("posts/post" + counter + ".html", function() { counter++; });
        } catch (ex) {
            break;
        }
    }
    blogNum = counter - 1;
    $.get("posts/post" + Number(blogNum) + ".html", function(data) {
        title = $(data).filter("#title").html();
        date = $(data).filter("#date").html();
        body = $(data).filter("#body").html();
        //prevent images from showing in preview
        let preview = body;
        if (body.includes("img")) preview = body.substr(body.indexOf("<br>") + 4);
        document.getElementById("title").innerHTML = title;
        document.getElementById("date").innerHTML = date;
        document.getElementById("preview").innerHTML = preview.slice(0, 250);
    });
}

function openBlog() {
    window.location.href = `blog.html#${blogNum + "-" + title.toLowerCase().replaceAll(" ", "-")}`;
}

//HIGHLIGHTS
function getHighlights() {
    let html = `<div id="highlights" class="horizontal-scrolling">
                    <hr>
                    <div id="filter">
                        <a class="all active" data-filter="all">All</a>
                        ${highlightFilters.map(x => `<a data-filter="${x}">${x}</a>`).join(" ")}
                    </div>
                    <hr>
                    <div class="cards"></div> <!--Renders on load -->
                </div>`

    if (window.innerWidth > 550) $("#about-section").append(html);
    else $("#highlights").remove();
    for (h of highlights) {
        let html = `<button class="card" data-type="${h.type}"><div class="highlight-item">${h.name}</div></button>`
        $(".cards").append(html);
    }
}

function getFilterClicks() {
    let cards = $('.cards [data-type]');
    let filters = $('#filter [data-filter]');
    filters.on('click', function(e) {
        filters.removeClass('active');
        $(this).addClass('active');
        var filterType = $(this).attr('data-filter');
        if (filterType == 'all') cards.fadeOut(200).promise().done(function() { cards.fadeIn(200); });
        else cards.fadeOut(200).promise().done(function() { cards.filter('[data-type = "' + filterType + '"]').fadeIn(200); });
    });
}

//SKILLS
function getSkills() {
    let i = 0;
    for (s of skills) {
        const el = i < 6 ? ".code" : ".noncode"
        $(el).append(`${s.name} <div class="progress"><div class="progress-bar" aria-valuenow="${s.value}">${s.value}%</div></div>`);
        i++;
    }
}

function animateBars() {
    console.log('called');
    let bars = document.getElementsByClassName("progress-bar");
    for (let i = 0; i < bars.length; i++) bars[i].style.width = bars[i].getAttribute("aria-valuenow") + "%";
}


//STATS
function getStats() {
    let html = `<div class="row">`;
    for (s of stats) html += `<div class="col"><span data-num="${s.value}" class="num">0</span>+<br><span>${s.name}</span></div>`
    $("#stats").html(html + "</div>");
}

function countUp() {
    $('#stats .num').each(function() {
        var $this = $(this);
        var countTo = $this.attr('data-num');
        $({ countNum: $this.text() }).animate({
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

//CONTACT
function submitForm() {
    let name = document.getElementById("name");
    let message = document.getElementById("message");
    let email = document.getElementById("email");
    let formValid = name.checkValidity() && message.checkValidity() && email.checkValidity();
    if (formValid) {
        document.getElementById("contact-form").submit();
    }
}

//INTERESTS
function getInterests() {
    let rows = 2,
        selectorsHtml = "",
        textHtml = "",
        prevId = 1;
    for (let i = 0; i < interests.length; i++) {
        textHtml += `<div class="interest-text" id="text-${i + 1}"></div>`
        if (i % (interests.length / rows) == 0) selectorsHtml += `<div class="row">`
        selectorsHtml += `<div class="interest-selector" id="selector-${i + 1}"><i class="fas fa-4x fa-${interests[i].icon}"></i><br>${interests[i].title}</div>`
        if ((i + 1) % (interests.length / rows) == 0) selectorsHtml += `</div>`
    }
    $(".row .interest-selectors").append(selectorsHtml);
    $(".row .interest-texts").append(textHtml);
    //create event listeners
    $("#text-1").html(interests[0].content);
    $(".interest-selector").click(function() {
        var id = Number($(this).attr('id').slice(-1));
        $(this)[0].style.color = "magenta";
        $("#text-" + id).html(interests[id - 1].content);
        $("#text-" + prevId).hide();
        $("#selector-" + prevId)[0].style.removeProperty("color");
        $("#text-" + id).show();
        prevId = id;
    });
}

//PROJECTS
function getProjects() {
    function getProjectDOMS(p) {
        let doms = [];
        for (p of projects) {
            var card = `<h3>${p.title}</h3><div class="languages">${p.languages.join(" • ").toUpperCase()}</div><hr style="margin: 5px 0"><div class="description">${p.description}</div><hr style="margin: 5px 0 15px 0"><div class="row"><div class="feature-col">`
            for (const f of p.features)
                card += `<div class="feature"><span class="fa-stack fa-2x"><i class="fas fa-circle fa-stack-2x"></i><i class="fa fa-${f.icon} fa-stack-1x"></i></span><span class="text">${f.caption}<span></div>`
            card += `</div><div class="col"><img class="project-image" src="images/${p.image}"></div></div><br>`
            card += `<div class="button-container">`
            for (const b of p.buttons)
                card += `<button onclick="window.open('${b.link}','_blank');"><i class="${b.icon}"></i> ${b.tooltip}</button>`
            card += '</div>'
            doms.push(card);
        }
        return doms;
    }

    function getGameDOMS(p) {
        let doms = [];
        for (g of games) {
            var card = `<div class="card">
                            <img src="images/${g.name}.png">
                            <div>
                                <h3 class="game-title">${g.name.toUpperCase()}</h3>
                                <div class="game-desc">${g.description}</div>
                                <br><button onclick="window.open('https://github.com/hguha/puzzles.js/tree/master/${g.name}','_blank');"><i class="fab fa-github"></i> View Code</button>
                                <button onclick="window.location.href = 'games/${g.name}/index.html';" ><i class="fas fa-binoculars"></i> Use it</button>
                            </div>
                        </div>`
            doms.push(card);
        }
        return doms;
    }

    let isMobile = window.innerWidth < projectResizer;
    let projectsPerPage = isMobile ? 3 : 6;
    let numPages = isMobile ? (Math.floor(projects.length / projectsPerPage)) : 1;
    let html = "";
    let start = 0;
    html += `<h3 style="text-align:center">FEATURED PROJECTS</h3>`;
    html += isMobile ? "" : `<p style="color:gray; font-size:18px; text-align:center; padding-bottom: 10px">
                22 Projects. 20 languages/frameworks. 9 Games. 3 Mobile Apps. 2 Research Projects. And So Much More.
            </p>`
    html += `<div class="project-grid row">`;
    for (let j = start; j < projectsPerPage + start; j++) {
        html += `<div class="projects-col">
                    <img id="project-image-${j + 1}" src="images/${projects[j].image}">    
                    <div id="project-overlay-${j + 1}" class="project-overlay">
                        <div class="overlay-text">${projects[j].title}</div>
                    </div>
                </div>`;
    }
    start += projectsPerPage;
    html += `<button onclick="window.location.href='/projects'" style="margin-top: 20px"><i class="fas fa-compass"></i> Explore All My Projects</button>`;
    html += `</div>`;
    $("#project-section").html(html);

    //puzzles.js
    // if (!isMobile) {
    //     html = `<div class="horizontal-scrolling">`;
    //     html += `<p style="font-size:30px; text-align:center">PUZZLES.JS</p><div class="puzzle-js-grid row">`;
    //     for (let i = 0; i < games.length; i++) {
    //         html += `<div class="puzzles-js-col">
    //                     <img id="puzzles-js-image-${i + 1}" src="images/${games[i].name}.png">
    //                     <div id="games-overlay-${i + 1}" class="project-overlay">
    //                         <div class="overlay-text">${games[i].name}</div>
    //                     </div>
    //                 </div>`;
    //     }
    //     html += `</div></div>`;
    //     $("#project-section").append(html);
    // }

    //create event listeners
    $(".project-overlay").hover(function() { $(this).siblings()[0].classList.toggle("img-hover"); });
    let projectDoms = getProjectDOMS();
    // let gameDoms = getGameDOMS();
    $(".project-overlay").click(function() {
        var id = $(this).attr('id');
        var i = Number(id.slice(-1)) - 1;

        Swal.fire({
            html: projectDoms[i],
            showConfirmButton: false,
            width: window.innerWidth > 500 ? "90%" : "100%",
            showCloseButton: true,
            background: "#3c3c3c",
            showClass: {
                popup: "fade-in"
            }
        });
    });
}

//RESEARCH
function getResearch() {
    let isMobile = window.innerWidth < 550;
    let html = isMobile ? "" : `<h1 style="text-align: center; font-size: 30px">NOTABLE RESEARCH</h1>`,
        previewSize = 200;
    let i = 0;
    let numPerPage = 3;
    for (p of papers) {

        if (isMobile || i % numPerPage == 0) { 
            html += `<div class="horizontal-scrolling">` 
        }
        html+= isMobile ? `NOTABLE RESEARCH` : "";
        html += `<div class="card">
            <div class="paper-title">${p.title}</div>
            <div class="paper-abstract">${p.abstract.substr(0,previewSize)}<a class="read-more">... READ MORE</a><span class="more">${p.abstract.substr(previewSize,p.abstract.length)} <a class="read-less">READ LESS</a></span></div>`;
        for (b of p.links) {
            html += `<button target="_blank" onClick="window.open('papers/${b.href}', '_blank')">Read ${b.type}</button>`;
        }

        html += `</div>`

        if (isMobile || i % numPerPage == numPerPage - 1) {
            html += `</div>` 
        }
    
        i++;
    }

    $("#research-section").html(html);
    $(".more").hide();

    $(".read-more").click(function() {
        $(this).siblings().show();
        $(this).hide();
    });

    $(".read-less").click(function() {
        $(this).parent().siblings().show();
        $(this).parent().hide();
    });

}