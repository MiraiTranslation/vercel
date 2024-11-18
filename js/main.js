/*  ---------------------------------------------------
    Theme Name: Anime
    Description: Anime video tamplate
    Author: Colorib
    Author URI: https://colorib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

"use strict"
;(function ($) {
	/*------------------
        Preloader
    --------------------*/
	$(window).on("load", function () {
		$(".loader").fadeOut()
		$("#preloder").delay(200).fadeOut("slow")

		/*------------------
            FIlter
        --------------------*/
		$(".filter__controls li").on("click", function () {
			$(".filter__controls li").removeClass("active")
			$(this).addClass("active")
		})
		if ($(".filter__gallery").length > 0) {
			var containerEl = document.querySelector(".filter__gallery")
			var mixer = mixitup(containerEl)
		}
	})

	/*------------------
        Background Set
    --------------------*/
	$(".set-bg").each(function () {
		var bg = $(this).data("setbg")
		$(this).css("background-image", "url(" + bg + ")")
	})

	// Search model
	$(".search-switch").on("click", function () {
		$(".search-model").fadeIn(400)
	})

	$(".search-close-switch").on("click", function () {
		$(".search-model").fadeOut(400, function () {
			$("#search-input").val("")
		})
	})

	/*------------------
		Navigation
	--------------------*/
	$(".mobile-menu").slicknav({
		prependTo: "#mobile-menu-wrap",
		allowParentLinks: true,
	})

	/*------------------
		Hero Slider
	--------------------*/
	var hero_s = $(".hero__slider")
	hero_s.owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		dots: true,
		nav: true,
		navText: [
			"<span class='arrow_carrot-left'></span>",
			"<span class='arrow_carrot-right'></span>",
		],
		animateOut: "fadeOut",
		animateIn: "fadeIn",
		smartSpeed: 200,
		autoHeight: false,
		autoplay: true,
		mouseDrag: false,
	})

	/*------------------
        Video Player
    --------------------*/
	const player = new Plyr("#player", {
		controls: [
			"play-large",
			"play",
			"progress",
			"current-time",
			"mute",
			"captions",
			"settings",
			"fullscreen",
		],
		seekTime: 25,
	})

	/*------------------
        Niceselect
    --------------------*/
	$("select").niceSelect()

	/*------------------
        Scroll To Top
    --------------------*/
	$("#scrollToTopButton").click(function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			"slow"
		)
		return false
	})
})(jQuery)
<!-- Script JSON-LD (Schema.org) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "How to Sing to Open Your Heart - Uma História de Magia e Música",
  "description": "Acompanhe Myana, a princesa cantora, em sua luta para unir dois mundos divididos através do poder da música.",
  "url": "https://example.com/how-to-sing",
  "image": {
	"@type": "ImageObject",
	"url": "https://example.com/images/preview-how-to-sing-enhanced.jpg",
	"width": 1200,
	"height": 630,
	"caption": "Myana e Ludovic sob o céu estrelado - uma história de amor e magia."
  },
  "publisher": {
	"@type": "Organization",
	"name": "Mirai Translations®",
	"logo": {
	  "@type": "ImageObject",
	  "url": "https://example.com/images/logo-mirai-translations.png",
	  "width": 512,
	  "height": 512
	}
  },
  "datePublished": "2024-11-18",
  "keywords": [
	"visual novel", "fantasia", "romance", "música",
	"How to Sing to Open Your Heart", "Myana", "Ludovic",
	"Eroolia", "luccretias", "laarz"
  ]
}
</script>