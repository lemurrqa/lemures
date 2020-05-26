function ibg(){
$.each($('.ibg'), function(index, val) { if($(this).find('img').length>0){ $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")'); } });

}

ibg();
$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.menu__body,.menu__list,.menu__link,.intro').toggleClass('active');
	});
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
	const blockID = anchor.getAttribute('href').substr(1)
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}

const anchort = document.querySelectorAll('form[action*="#"]')

for (let anchor of anchort) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
	const blockID = anchor.getAttribute('action').substr(1)
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}
