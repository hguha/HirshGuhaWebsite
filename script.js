//Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-111498872-4');

//THEME
let root = document.documentElement;
let themeColor = "#00ccff";
function setDarkTheme() {
	console.log(root);
	root.style.setProperty("--text-color", "#fff");
	root.style.setProperty("--background-color", "#3c3c3c");
	root.style.setProperty("--theme-color", themeColor = "#1155aa");
}

function setLightTheme() {
	root.style.setProperty("--text-color", "#3c3c3c");
	root.style.setProperty("--background-color", "#fff");
	root.style.setProperty("--theme-color", themeColor = "#00ccff");
}

//SKILLS
function inView(id) {
	let el = document.getElementById(id);
    let bounding = el.getBoundingClientRect();
	if (
		bounding.top >= 0 &&
		bounding.left >= 0 &&
		bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
		bounding.bottom <= (window.innerHeight + 150 || document.documentElement.clientHeight + 150)
	) {
		return true;
	}
	else {
		return false;
	}
}

let bars = document.getElementsByClassName("progress-bar");
var barsAnimated = false;

$(window).scroll(function(){
	if(inView('skills') && window.innerWidth > 768){
		if(!barsAnimated) animateBars();
		barsAnimated = true;
	}
});

 if(window.innerWidth < 768) {
	 animateBars();
 }

function animateBars() {
	for(let i = 0; i < bars.length; i++) {
		bars[i].style.width = bars[i].getAttribute("aria-valuenow")+"%";
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
"I took Debate my freshman year of high school on a friends reccomendation, not really sure what to expect. Then I won the first tournament I went to. And the second one. And the third one. And all of them my freshman year, I was undefeated. Then I did Forensics. And I sucked. Very badly, my freshman year, I never won a trophy in Forensics. But for some reason, I stuck with it, and by the end of high school, I came up with a trophy from Nationals, a State Championship, and literally dozens of medals.",
]
$(document).ready(function(){

	$(".text-1").html(content[0]);
	for(var i = 2; i <= toggles.length; i++) {
		$(".text-" + i).hide();
	}
	$(".toggle").click(function(){

		var id = $(this).attr('id');
		$(this)[0].style.color = themeColor;
		$(".text-" + id).html(content[id-1]);

		$(".text-" + id).show();

		for(var i = 1; i <= toggles.length; i++) {
			if(i != id) {
				$(".text-" + i).hide();
				$("#"+i)[0].style.color = "white";
			}
		}
	});
 });


//TYPEWRITER
var i = 0;
var firstName = 'HIRSH ';
var lastName = 'GUHA';
var speed = 100;
window.onload = function() {
  if(window.innerWidth > 768) {
    typeWriter();
    setTimeout(showSocialMedia,1100);
  }
  else {
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
  }
  else if (i < firstName.length + lastName.length) {
    document.getElementById("last-name").innerHTML += lastName.charAt(i-lastName.length-2);
    i++;
    setTimeout(typeWriter, speed);
  }
}

//MENU
window.onscroll = function() {

  changeOpacity();

};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop + 10;

function changeOpacity() {
  if (window.pageYOffset > sticky) {
    navbar.style.background = "rgba(0,0,0,0.8)";
  } else {
    navbar.style.background = "rgba(0,0,0,0)";
  }
}

//FOOTER
var curYear = document.getElementById("curYear");
curYear.innerHTML =  new Date().getFullYear();

//MOBILIE MENU
function openNav() {
  document.getElementById("mobileNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("mobileNav").style.height = "0%";
}
