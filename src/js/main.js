$(document).ready(function () {
	$("#page-nav").onePageNav({
		currentClass: "active",
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: "",
		easing: "swing",
		begin: function () {},
		end: function () {},
		scrollChange: function ($currentListItem) {}
	});
	$(".header-nav").onePageNav({
		currentClass: "active",
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: "",
		easing: "swing",
		begin: function () {},
		end: function () {},
		scrollChange: function ($currentListItem) {}
	});
	$(".phone").mask("+7(999)999-99-99");
	$.fn.setCursorPosition = function (pos) {
		if ($(this).get(0).setSelectionRange) {
			$(this).get(0).setSelectionRange(pos, pos);
		} else if ($(this).get(0).createTextRange) {
			var range = $(this).get(0).createTextRange();
			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	};
	$('input[name="whatsApp"]').click(function () {
		$(this).setCursorPosition(3); // set position number
	});
	// отправка почты
	$("#contact-form").on('submit', function (event) {
		event.preventDefault();

		var string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку.

		// Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail2.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string

			// Функция если все прошло успешно
			success: function (html) {
				$("#contact-form").slideUp(800);
				$('#answer2').html(html);
			}
		});

		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false;
	});
	// отправка почты
	$("#consultant-form").on('submit', function (event) {
		event.preventDefault();

		var string = $("#consultant-form").serialize(); // Соханяем данные введенные в форму в строку.

		// Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string

			// Функция если все прошло успешно
			success: function (html) {
				$("#consultant-form").slideUp(800);
				$('#answer').html(html);
			}
		});

		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false;
	});
	$(function () {
		$('.lazy').lazy();
	});

	// const spikerCardsHide = document.querySelectorAll('.spikers-card--hide');
	// const showSpikerCards = document.querySelector('.show-spikers button');

	// if (howSpikerCards) {
	// 	showSpikerCards.addEventListener('click', function () {
	// 		console.log('555');
	// 		for (let card of spikerCardsHide) {
	// 			card.classList.remove('spikers-card--hide');

	// 		}
	// 	})
	// }
})