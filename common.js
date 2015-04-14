(function() {

	if (!$.support.transition) {
		$.fn.transition = $.fn.animate;
		$.fn.transitionStop = $.fn.stop;
	}

})();
$(function() {
	var ua = navigator.userAgent.toLowerCase();
	var isSmartDevice = /iphone|ip[oa]d|android/.test(ua);
	var isLtIE9 = $('html').hasClass('lt-ie9');

	if(isLtIE9) {
		return;
	}

	var $websiteHeader = $('#website-header');
	var $enterFade = $('.js-enter-fade');
	var $hoverTargets = $('.alpha-hover');

	$websiteHeader.transition({
		opacity: 1
	}, 1300, 'easeInOutQuad').promise().done(function() {

		$enterFade.waypoint(function() {
			var $this = $(this);

			$this.transition({
				opacity: 1
			}, 1750, 'easeOutExpo');
		}, {
			triggerOnce: true,
			offset: '90%'
		});
	});

	$websiteHeader
		.find('.logo')
		.delay(350)
		.transition({
			top: 75,
			opacity: 1
		}, 600, 'easeInOutQuad');

	if(!isSmartDevice) {
		$hoverTargets
			.on('mouseover', function(evt) {
				$this = $(this);
				$this.transitionStop(true).transition({
					opacity: 0.35
				}, 250, 'easeOutQuad');
			})
			.on('mouseout', function(evt) {
				$this = $(this);
				$this.transitionStop(true).transition({
					opacity: 1
				}, 350, 'easeOutQuad');
			});
	}


});
