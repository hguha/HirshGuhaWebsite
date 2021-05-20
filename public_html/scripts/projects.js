let allProjects = projects;
let title = allProjects.map(x => x.title)
let languages = getLangauges();
let selectedLanguages = [];

function getLangauges() {
    let sets = allProjects.map((x) => {
        let temp = [];
        for(l of x.languages) {
            temp.push(l.toLowerCase())
        }
        return temp;
    });

    return new Set(sets.flat())
}

function addLanguageFilter(lang) {
    if(selectedLanguages.includes(lang)) {
        selectedLanguages = selectedLanguages.filter(x => x !== lang);
        $(`#${lang}-filter`.replace(".", "\\.")).removeClass("active");
    }
    else {
        selectedLanguages.push(lang);
        $(`#${lang}-filter`.replace(".", "\\.")).addClass("active");
    }
    console.log(selectedLanguages);
    filterProjects();
}

function languagesFilter() {
    let html = ``;
    for(l of languages) {
        html += `<button id="${l}-filter" onclick="addLanguageFilter('${l}')">${l}</button>`;
    }
    $("#language-filter").html(html);
}

function filterProjects() {
    let text = $("#text-filter")[0].value;
    let inputFiltered = text ? allProjects.filter(x => x.title.toLowerCase().includes(text.toLowerCase())) : allProjects;
    
    let languageFiltered = selectedLanguages.length ? inputFiltered.filter((x) => {
        let intersection = x.languages.filter(value => selectedLanguages.includes(value));
        return intersection.length;
    }) : inputFiltered;
    
    return showProjects(languageFiltered);
}

let collapsed = false;

function toggleAll() {
    $("#toggle").html(collapsed ? "Uncollapse All" : "Collapse All");
    $(".features").css("display", collapsed ? "block" : "none");
    collapsed = !collapsed;
}

function toggleFeatures(e) {
    console.log(e);
    features = e.children[3];
    features.style.display = features.style.display == "none" ? "block" : "none"
}

function showProjects(projects) {
    let html = '';

    if(projects.length) {
        for(p of projects) {
            html+= `<div class="card" onclick="toggleFeatures(this)">`;
            html+= `<h3>${p.title}</h3>`;
            html+= `<div class="languages">${p.languages.join(" • ").toUpperCase()}</div>`;
            html+= `<div class="description">${p.description}</div>`;
            html+=`<div class="features" style="display:${collapsed ? "none" : "block"}">`
            html+=`<hr style="margin: 15px 0">`
            html+=`<div class="row"><div class="feature-col">`;
            for (const f of p.features)
                html += `<div class="feature">
                            <span class="fa-stack fa-2x">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fa fa-${f.icon} fa-stack-1x"></i>
                            </span>
                            <span class="text">${f.caption}<span>
                        </div>`
                html += `</div><div class="col"><img class="project-image" src="images/${p.image}"></div></div><br>`
                html += `<div class="button-container">`;

            for (const b of p.buttons) {
                html += `<button onclick="window.open('${b.link}','_blank');"><i class="${b.icon}"></i> ${b.tooltip}</button>`
            }
            html += '</div>';
            html += '</div>';
            html += '</div>';
        }
    }
    else {
        html+="No Projects To Show";
    }
    $("#project-listing").html(html);
    $("#num-showing").html(projects.length);
}

showProjects(allProjects);
languagesFilter();