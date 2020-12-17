import $ from '../core';

$.prototype.modal = function () {
	for (let i = 0; i < this.length; i++) {
		const target = $(this[i]).attr('data-target');
		$(this[i]).click((e) => {
			e.preventDefault();
			$(target).fadeIn(500);
			document.body.style.overflow = 'hidden';
		})
	}

	$('[data-close]').elem().forEach(elem => {
		$(elem).click((e) => {
			$('.modal').fadeOut(500);
			document.body.style.overflow = '';
		})
	});

	$('.modal').click(e => {
		if (e.target.classList.contains('modal')) {
			$('.modal').fadeOut(500);
			document.body.style.overflow = '';
		}
	})
}

$('[data-toggle="modal"]').modal();