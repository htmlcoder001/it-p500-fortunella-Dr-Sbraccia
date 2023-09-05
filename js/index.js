var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');
var params = window.location.search.replace('?', '').split('&').reduce(
	function (p, e) {
		var par = e.split('=');
		p[decodeURIComponent(par[0])] = decodeURIComponent(par[1]);
		return p;
	},
	{}
);
function spin() {
	if (!wheel.classList.contains('rotated')) {
		wheel.classList.add('super-rotation');
		setTimeout(function () {
			resultWrapper.style.display = "block";
		}, 8000);
		setTimeout(function () {
			$('.spin-wrapper').slideUp();
			$('.order_block').slideDown();
			start_timer();
		}, 10000);
		wheel.classList.add('rotated');
	}
}

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
	e.preventDefault();
	$('.spin-result-wrapper').fadeOut();
	$("a").attr("href", "#fforms");
});

var time = 600;
var intr;
function start_timer() {
	intr = setInterval(tick, 1000);
}

function tick() {
	time = time - 1;
	var mins = Math.floor(time / 60);
	var secs = time - mins * 60;
	if (mins == 0 && secs == 0) {
		clearInterval(intr);
	}
	secs = secs >= 10 ? secs : "0" + secs;
	$("#min").html("0" + mins);
	$("#sec").html(secs);
}


function scrollTo() {
	document.querySelectorAll('a').forEach(btn => btn.addEventListener('click', (e) => {
		e.preventDefault()
		document.getElementById('toform').scrollIntoView({ block: "start", behavior: "smooth" })
	}))
}

scrollTo()

function setDate() {
	document.querySelectorAll('.date-0').forEach(item => item.innerHTML = new Date().toLocaleDateString())
	document.querySelectorAll('.date-1').forEach(item => item.innerHTML = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString())
}

setDate()