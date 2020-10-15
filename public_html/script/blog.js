//THEME
let themeColor = "#114499";
var darkModeOn = false;
let root = document.documentElement;
function toggleTheme() {
  console.log("g");
  root.style.setProperty("--text-color", darkModeOn ? "#3c3c3c" : "#fff");
  root.style.setProperty("--background-color", darkModeOn ? "#fff" : "#3c3c3c");
  root.style.setProperty("--theme-color", themeColor = darkModeOn ? "#114499" :  "#00ccff");
  darkModeOn = !darkModeOn;
  document.getElementById("theme-toggle").innerHTML = darkModeOn ? "Light Mode" :  "Dark Mode";
}
let numBlogs = 0;
let blogs;
async function getNumBlogs() {
  var counter = 1;
  while(true) {
        try {
            await $.get( "posts/post"+counter+".html", function() {
              counter++;
            });
        } catch(ex) { return counter; }
    }
}
async function getBlogs() {
  let blogs = [];
  for(let i = 0; i < numBlogs; i++ ) {
    await $.get("posts/post"+Number(i+1)+".html", function( data ) {
      let title = $(data).filter("#title").html();
      let date = $(data).filter("#date").html();
      let tag = $(data).filter("#tag").html();
      let preview = $(data).filter("#body").html();
      blogs.push({title:title, date:date, tag:tag, body:preview});
    });
  }
  return blogs;
}

function generateListing() {
  $("#content").empty();
  for(let i = numBlogs-1; i >= 0; i-- ) {
      let preview = blogs[i].body;
      if(preview.includes("img")) preview = preview.substr(preview.indexOf("<br>")+4);
      $("#content").append(`
      <div class="post" data-type="${blogs[i].tag}">
        <div id="preview-title"><a href="#${Number(i+1)+"-"+blogs[i].title.toLowerCase().replaceAll(" ", "-")}" onclick="loadBlog(${i+1})">${blogs[i].title}</a></div>
        <div id="preview-date">${blogs[i].date}</div>
        <div id="preview">${preview.slice(0,220)}...</div>
        <hr style="margin-top:5%; height:1px; background-color:lightgray; border:none">
    </div>`);
  }

  $filters = $('#filter [data-filter]');
    $filters.on('click', function(e) {
      var $cards = $('#content [data-type]');
      e.preventDefault();
      $filters.removeClass('active');
      $(this).addClass('active');

      var $filterType = $(this).attr('data-filter');

      if ($filterType == 'all') $cards.fadeOut(200).promise().done(function() {$cards.fadeIn(200);});
      else $cards.fadeOut(200).promise().done(function() {$cards.filter('[data-type = "' + $filterType + '"]').fadeIn(200);});
  });

}

function loadBlog(num) {
  $("#content").load(`posts/post${num}.html`, function() {
  $("#content").prepend(`<a class="back" href="#" onclick="generateListing()">&#8592; Back to Listing</a>`);
  });
}

window.onload = function() {
  getNumBlogs().then(function( data ) {
    numBlogs = data - 1;
    getBlogs().then(function(data) {
        blogs = data;
        if(window.location.hash) {
          let num = window.location.hash[1];
          loadBlog(num);
        }
        else { generateListing(); }
      });
  });
}
