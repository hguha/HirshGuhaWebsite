var projects = [
  {
    title: "Website",
    languages: ["html", "js", "jquery", "slick.js"],
    description: "A website entirely coded towards me in order to demonstrate my abilities in web design and dynamic websites",
    image: "website.png",
    features: [
      {
        icon: "toggle-on",
        caption: "togglable Interests section written entirely by me using jQuery"
      },
      {
        icon: "sliders-h",
        caption: "Slick.js library used to create project slider with equal height DIVs"
      },
      {
        icon: "mobile",
        caption: "Bootstrap framework and use of keyframes creates a perfectly responsive site, viewable at any viewport"
      },
    ],
    buttons: [
      { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/HirshGuhaWebsite" }
    ],
  },
  {
    title: "Blog.JS",
    languages: ["html", "Javascript", "JQuery"],
    description: "The lightest-weight, easiest, most customizable blogging platform you'll ever see.",
    image: "blog.png",
    features: [
      {
        icon: "file-code",
        caption: "Add posts with raw HTML for maximum customizability"
      },
      {
        icon: "hashtag",
        caption: "Automatically adds urls slugs, allowing for direct navigation to a post"
      },
      {
        icon: "fast-forward",
        caption: "no reloads mean that going from post to post to listing is insanely fast"
      },
    ],
    buttons: [
      { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/blog.js" },
      { icon: "fas fa-binoculars", tooltip: "View Blog", link: "/blog" }
    ],
  },
  {
    title: "ElectWise",
    languages: ["react.js", "node.js", "python", "apache", "aws"],
    description: "HDFS secured online voting system for large scale elections that allows voting from a computer, tablet, or phone",
    image: "electwise.png",
    features: [
      {
        icon: "cogs",
        caption: "Administrator interfaces allow for creation and editing of election criterion"
      },
      {
        icon: "hourglass",
        caption: "Voting results in bucketed real-time results, and can be completed in under 5 minutes"
      },
      {
        icon: "tasks",
        caption: "Candidate portal ensures every voter has accurate, representative information about each choice"
      },
    ],
    buttons: [
      { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/ElectWise" },
      { icon: "fas fa-video", tooltip: "Watch Video", link: "https://drive.google.com/file/d/1WXP0GW0XqjLnMVXq24OGaUmHD7rSwkMQ/view?usp=sharing" }
    ],
  },
  {
    title: "LibMe",
    languages: ["PHP", "javascript", "SQL"],
    description: "An entirely online library system for handling books",
    image: "libme.png",
    features: [
      {
        icon: "book",
        caption: "Hold system ensures that books are held books are immediately checked out upon return"
      },
      {
        icon: "users-cog",
        caption: "Admin and User interfaces ensure a 360° experience for a library"
      },
      {
        icon: "search",
        caption: "Keyword searching by partial name, author, or ISBN makes it a breeze to find a book"
      },
    ],
    buttons: [
      { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/LibMe" },
      { icon: "fas fa-video", tooltip: "Watch Video", link: "https://drive.google.com/file/d/1NqXyEsPVaR5II4Z4Y8OG0xAQt8xvY7JV/view?usp=sharing" }
    ],
  },
  {
    title: "Skynet Security",
    languages: ["python", "raspberry-pi", "lidar"],
    description: "A light/sound based security system using object detection, image classification, and proximity detection on a raspberry pi",
    image: "skynet.jpg",
    features: [
      {
        icon: "walking",
        caption: "Tensor Flow image classification and object detection"
      },
      {
        icon: "ruler",
        caption: "TFMini - Micro LiDAR Module achieves real-time and contactless distance measurement"
      },
      {
        icon: "adjust",
        caption: "Threshold Frame created from the high contrast and difference frames"
      },
    ],
    buttons: [
      { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/Skynet" },
      { icon: "fas fa-video", tooltip: "Watch Video", link: "https://www.youtube.com/watch?v=aIcJxIsbZ6k" }
    ],
  },
  {
    title: "Sudoku Solver",
    languages: ["haskell"],
    description: "Deterministic non-polynomial time sudoku solver written in haskell",
    image: "solver.png",
    features: [
      {
        icon: "eye-slash",
        caption: "unsolved puzzle can be pipelined in via a seperate text file, or inputted directly into the program"
      },
      {
        icon: "list-ol",
        caption: "Handles non-unique cases by returning the first of many possibilities"
      },
      {
        icon: "fast-forward",
        caption: "Though the algorithm efficiency is non-polynomial, efficiencies mean it solves in under a second"
      },
    ],
    buttons: [
      { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/SudokuSolver" },
    ],
  },
  {
    title: "Dogstagram",
    languages: ["python", "flask", "jquery", "firebase", "javascript", "tensorflow"],
    description: "A social media/image sharing platform with a twist: image classification prevents upload of any image other than dogs",
    image: "dogstagram.png",
    features: [
      {
        icon: "paw",
        caption: "Tensor Flow Image Classification assures \"dog\" tag is set before uploading the image"
      },
      {
        icon: "tachometer-alt",
        caption: "Dashboard and friend system allows users to see what other users they follow are posting"
      },
      {
        icon: "image",
        caption: "Add, Delete, Modify, and caption photos"
      },
    ],
    buttons: [
      { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/Dogstagram" },
    ],
  }
]

var games = [
{name:"checkers",description:"The classic game of checkers with a special algorithm to calculate all possible jumps for a given piece"},
{name:"chess",description:"The classic game of chess with a special algorithm to calculate all possible jumps for a given piece"},
{name:"connect4",description:"Exactly what you expect"},
{name:"dotsandboxes",description:"Using a node and graph data structure instead of a grid, try to create more boxes than your friend!",},
{name:"minesweeper",description:"The classic game of minesweeper with many additional features - my take on a recursive revealing algorithm",},
{name:"rubikscube",description:"my take on a functioning Rubiks Cube model, using CSS shaders controlled with a mouse",},
{name:"sudoku",description:"play randomly generated sudoku, create your own, or use the built in backtracking algorithm to have a board solved for you",},
{name:"tetris",description:"As a former compeitive tetris player(7th in the world!), I thought it fitting to recreate my favorite game and learn it's matrix arithmetic"},
{name:"tictactoe",description:"The classic game of tic-tic-toe for one or two players, featuring an unbeatable AI",},
]


$(document).ready(function(){
  function getGamesDOM(g) {
    var card = `<div class="card">
                        <img src="images/${g.name}.png">
                        <div class="overlay">
                            <h3>${g.name.toUpperCase()}</h3>
                            ${g.description}
                            <br><button onclick="window.open('https://github.com/hguha/puzzles.js/tree/master/${g.name}','_blank');" data-tippy-content="View Code"><i class="fab fa-github"></i></button>
                            <button onclick="window.location.href = 'games/${g.name}/index.html';" data-tippy-content="Use It"><i class="fas fa-binoculars"></i></button>
                        </div>
                    </div>`
    return card;
  }

  function getProjectDOM(p) {
    var card = `<div class="card">
                <h3>${p.title}</h3>
                <div class="languages">${p.languages.join(" • ").toUpperCase()}</div>
                <div class="description">${p.description}</div>
                <hr>
                <div class="row"><div class="col-md-6 col-sm-12">`
    for (const f of p.features) {
      card+= `<div class="feature">
                <span class="fa-stack fa-2x">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fa fa-${f.icon} fa-stack-1x"></i>
                </span>
                <span class="text">${f.caption}<span>
            </div>`
    }
    card += `</div><div class="col-md-6 col-sm-12">
              <img src="images/${p.image}" width="90%">
          </div></div><br><hr>`
    for (const b of p.buttons) {
      card+= `<button onclick="window.open('${b.link}','_blank');" data-tippy-content="${b.tooltip}"><i class="${b.icon}"></i></button>`
    }
    card+="</div>";
    return card;
  }

  for(p of projects) {
    $(".project-slider").append(getProjectDOM(p));
  }

  for(g of games) {
    $(".small-projects").append(getGamesDOM(g));
  }
  
  makeSlick();
  initTippy();
  if(darkModeOn) toggleExperience("toggle-theme");
  //big projects
  $('.project-slider').slick({
        centerMode: true,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        responsive: [
        {
          breakpoint: 900,
          settings: {
            centerMode: false,
          }
        },
        ]
  });

  //small projects
  $('.small-projects').slick({
        centerMode: true,
        slidesToShow: 3,
        arrows: false,
        dots: true,
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          }
        },
        ]
  });

  var smallSlides = $(".small-projects .card:not(.slick-cloned)");

    $('.small-projects').on('mouseover', '.slick-slide', function (e) {
      e.target.style.opacity = 1;
    });

    $('.small-projects').on('mouseleave', '.slick-slide', function (e) {
        if(e.target.classList[0] == "overlay") {
            e.target.style.opacity = 0;
        }
     });

});


//overlay stuff
function next(elem) {$(elem).slick('slickNext');}
function prev(elem) {$(elem).slick('slickPrev');}


function makeSlick() {
  var slides = $('.project-slider .card:not(.slick-cloned)');
  $('.project-slider').on('init', function(event, slick){
      slides[0].style.opacity = 1;
  });
  
  //onchange
  $('.project-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      slides[currentSlide].style.opacity = 0.5;
      slides[nextSlide].style.opacity = 1;
  });
}