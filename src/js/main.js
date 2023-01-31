import $ from 'jquery';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap';

import { App } from './parts/app';
import { Parts } from './parts/parts';
import { Plugins } from './parts/plugins';

// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;


$(function () {

    window.windowWidth = $(window).width();
    window.windowHeight = $(window).height();

    window.isiPhone = navigator.userAgent.toLowerCase().indexOf('iphone');
    window.isiPad = navigator.userAgent.toLowerCase().indexOf('ipad');
    window.isiPod = navigator.userAgent.toLowerCase().indexOf('ipod');

    //Functions List Below

    window.app = new App();
    window.app.init();

    window.plugins = new Plugins();
    window.plugins.init();

    window.parts = new Parts();
    window.parts.init();

});


// List of sentences
var _CONTENT = [ "Hello ,", "Welcome ,", "Have a Good Day ,", "Enjoy Aadhar Service ," ];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Implements typing effect
function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 75);
		}, 1500);
	}
}

// Implements deleting effect
function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If last sentence then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 150);
		}, 300);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 150);





// List of sentences
var _CONTENT2 = [ "Human Resource", "Employee", "Manager", "& More" ];

// Current sentence being processed
var _PART2 = 0;

// Character number of the current sentence being processed 
var _PART_INDEX2 = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL2;

// Element that holds the text
var _ELEMENT2 = document.querySelector("#text2");

// Implements typing effect
function Type2() { 
	var text2 =  _CONTENT2[_PART2].substring(0, _PART_INDEX2 + 1);
	_ELEMENT2.innerHTML = text2;
	_PART_INDEX2++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text2 === _CONTENT2[_PART2]) {
		clearInterval(_INTERVAL_VAL2);
		setTimeout(function() {
			_INTERVAL_VAL2 = setInterval(Delete2, 75);
		}, 1500);
	}
}

// Implements deleting effect
function Delete2() {
	var text2 =  _CONTENT2[_PART2].substring(0, _PART_INDEX2 - 1);
	_ELEMENT2.innerHTML = text2;
	_PART_INDEX2--;

	// If sentence has been deleted then start to display the next sentence
	if(text2 === '') {
		clearInterval(_INTERVAL_VAL2);

		// If last sentence then display the first one, else move to the next
		if(_PART2 == (_CONTENT2.length - 1))
			_PART2 = 0;
		else
			_PART2++;
		_PART_INDEX2 = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_INTERVAL_VAL2 = setInterval(Type2, 150);
		}, 300);
	}
}

// Start the typing effect on load
_INTERVAL_VAL2 = setInterval(Type2, 150);


$(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();

    if (scroll >= 50) sticky.addClass('header-fixed');
    else sticky.removeClass('header-fixed');

});


const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
nextBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
nextBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
submitBtn.addEventListener("click", function () {
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    setTimeout(function () {
        location.reload();
    }, 800);
});

prevBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnFourth.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});


// Profile Picture

$(document).ready(function () {
    $("#wizard-picture").change(function () {
        readURL(this);
    });
});
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}

