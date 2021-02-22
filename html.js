const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
        mobile_menu.style.backgroundColor = 'black';
		header.style.opacity = '1';
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 0) {
        header.style.backgroundColor = 'black';
        header.style.opacity = '0.60';
	} else {
		header.style.backgroundColor = 'transparrent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
var msg  = document.title ="VexX Commentary Youtuber";
var speed = 200;
var endChar = " ";
var pos = 0;

function moveTitle()
{
		var ml = msg.length;

	title = msg.substr(pos,ml) + endChar + msg.substr(0,pos);
	document.title = title;

	pos++;
	if (pos > ml) pos=0;
	window.setTimeout("moveTitle()",speed);
}


moveTitle();
