window.addEventListener('DOMContentLoaded', function (){
    const video = document.querySelector('.video__item');

    video.addEventListener('click', function (){
        
        if (video.classList.contains('ready')){
            return;
        }
        video.classList.add('ready');
        const src = video.dataset.src;
        video.insertAdjacentHTML('afterbegin', '<iframe src="' + src +'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });
})



$(function(){

    $('.header-nav__mob').on('click', function(){
        $('.header-nav__mob').toggleClass('header-nav__mob--active');
        $('.header-nav__items').toggleClass('header-nav__items--active');
    });

    $('.header-nav__item-link').on('click', function(){
        $('.header-nav__mob').removeClass('header-nav__mob--active');
        $('.header-nav__items').removeClass('header-nav__items--active');
    });

    $(".header-nav__item-link").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 2000);
	});
});