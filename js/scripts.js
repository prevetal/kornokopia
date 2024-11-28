WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function () {
	// Header categories slider
	let categoriesSlider = document.querySelector('header .categories .swiper')

	if (categoriesSlider) {
		new Swiper('header .categories .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 5,
			slidesPerView: 'auto',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}


	// Main slider
	let mainSlider = document.querySelector('.main_slider .swiper')

	if (mainSlider) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			lazy: true
		})
	}


	// Products slider
	const productsSliders = [],
		products = document.querySelectorAll('.products .swiper')

	products.forEach((el, i) => {
		el.classList.add('products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 4
				},
				1900: {
					spaceBetween: 40,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.product')),
				resize: swiper => {
					let products = swiper.el.querySelectorAll('.product')

					products.forEach(el => el.style.height = 'auto')

					setHeight(products)
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Default slider
	const defaultSliders = [],
		defaultSlider = document.querySelectorAll('.default_slider .swiper')

	defaultSlider.forEach((el, i) => {
		el.classList.add('default_slider_s' + i)

		let options = {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			lazy: true
		}

		defaultSliders.push(new Swiper('.default_slider_s' + i, options))
	})


	// Text image slider
	const textSliders = [],
		textSlider = document.querySelectorAll('.text_block .image_block .swiper')

	textSlider.forEach((el, i) => {
		el.classList.add('text_slider_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 20,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true
		}

		textSliders.push(new Swiper('.text_slider_s' + i, options))
	})


	// Projects slider
	const projectsSliders = [],
		projects = document.querySelectorAll('.projects .swiper')

	projects.forEach((el, i) => {
		el.classList.add('projects_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 4
				},
				1900: {
					spaceBetween: 40,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		projectsSliders.push(new Swiper('.projects_s' + i, options))
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}

	Fancybox.defaults.tpl = {
		closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg><use xlink:href="images/sprite.svg#ic_delete"></use></svg></button>',

		main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
			<div class="fancybox__backdrop"></div>
			<div class="fancybox__carousel"></div>
			<div class="fancybox__footer"></div>
		</div>`,
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Mob. menu
	$('.mob_header .mob_menu_btn, header .mob_close_btn, .overlay').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('menu_open')
		$('header').toggleClass('show')

		$('.mob_header .mob_menu_btn').hasClass('active')
			? $('.overlay').fadeIn(300)
			: $('.overlay').fadeOut(300)
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} 000 000-00-00',
				lazy: true
			})
		})
	}


	// Custom select - Nice select
	const selects = document.querySelectorAll('select:not(.skip)')

	if (selects) {
		selects.forEach(el => {
			NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			})

			el.addEventListener('change', () => el.classList.add('selected'))
		})
	}


	// Input/Textarea
	$('.form .input, .form textarea').keyup(function(e) {
		let _self = $(this)

		setTimeout(() => {
			_self.val().length
				? _self.addClass('active')
				: _self.removeClass('active')
		})
	})


	if (is_touch_device()) {
		const subMenus = document.querySelectorAll('header .menu .sub_menu')

		// Submenu on the touch screen
		$('header .menu_item > a.sub_link').addClass('touch_link')

		$('header .menu_item > a.sub_link').click(function (e) {
			const dropdown = $(this).next()

			if (dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				subMenus.forEach(el => el.classList.remove('show'))
				dropdown.addClass('show')

				BODY.style = 'cursor: pointer;'
			}
		})

		// Close the submenu when clicking outside it
		document.addEventListener('click', e => {
			if ($(e.target).closest('.menu').length === 0) {
				subMenus.forEach(el => el.classList.remove('show'))

				BODY.style = 'cursor: default;'
			}
		})
	}


	// Change the quantity of goods
	$('body').on('click', '.amount .minus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			minimum = parseFloat($input.data('minimum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal > minimum) $input.val(inputVal - step + unit)
	})


	$('body').on('click', '.amount .plus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			maximum = parseFloat($input.data('maximum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal < maximum) $input.val(inputVal + step + unit)
	})


	$('.amount .input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})


	// Product to favorite
	$('.product .favorite_btn, .product_info .favorite_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Product to cart
	$('.product .buy_btn, .product_info .buy_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Filter
	$('.mob_filter_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})

	$('.filter .name').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	priceRange = $('.filter #price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 250000,
		from: 10000,
		to: 179000,
		step: 10,
		onChange: data => {
			$('.filter .price_range input.from').val(data.from.toLocaleString())
			$('.filter .price_range input.to').val(data.to.toLocaleString())
		},
		onUpdate: data => {
			$('.filter .price_range input.from').val(data.from.toLocaleString())
			$('.filter .price_range input.to').val(data.to.toLocaleString())
		}
	}).data('ionRangeSlider')

	$('.filter .price_range .input').keyup(function () {
		priceRange.update({
			from: parseInt($('.filter .price_range input.from').val().replace(/\s/g, '')),
			to: parseInt($('.filter .price_range input.to').val().replace(/\s/g, ''))
		})
	})


	powerRange = $('.filter #power_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 7,
		from: 0.03,
		to: 2.55,
		step: 0.01,
		onChange: data => {
			$('.filter .power_range input.from').val(data.from.toLocaleString())
			$('.filter .power_range input.to').val(data.to.toLocaleString())
		},
		onUpdate: data => {
			$('.filter .power_range input.from').val(data.from.toLocaleString())
			$('.filter .power_range input.to').val(data.to.toLocaleString())
		}
	}).data('ionRangeSlider')

	$('.filter .power_range .input').keyup(function () {
		powerRange.update({
			from: parseInt($('.filter .power_range input.from').val().replace(/\s/g, '')),
			to: parseInt($('.filter .power_range input.to').val().replace(/\s/g, ''))
		})
	})


	weightRange = $('.filter #weight_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 250,
		from: 1,
		to: 197,
		step: 1,
		onChange: data => {
			$('.filter .weight_range input.from').val(data.from.toLocaleString())
			$('.filter .weight_range input.to').val(data.to.toLocaleString())
		},
		onUpdate: data => {
			$('.filter .weight_range input.from').val(data.from.toLocaleString())
			$('.filter .weight_range input.to').val(data.to.toLocaleString())
		}
	}).data('ionRangeSlider')

	$('.filter .weight_range .input').keyup(function () {
		weightRange.update({
			from: parseInt($('.filter .weight_range input.from').val().replace(/\s/g, '')),
			to: parseInt($('.filter .weight_range input.to').val().replace(/\s/g, ''))
		})
	})


	$('.filter .reset_filter_btn').click(function() {
		if(priceRange) {
			priceRange.reset()
		}

		if(powerRange) {
			powerRange.reset()
		}

		if(weightRange) {
			weightRange.reset()
		}
	})


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			if (!accordion.hasClass('multiple')) {
				accordion.find('.accordion_item').removeClass('active')
				accordion.find('.data').slideUp(300)
			}

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Product info
	if ($('.product_info .images').length) {
		const productThumbs = new Swiper('.product_info .thumbs .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			slidesPerView: 'auto',
			lazy: true,
			direction: 'vertical',
			spaceBetween: 20,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})

		new Swiper('.product_info .big .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 20,
			slidesPerView: 1,
			lazy: true,
			thumbs: {
				swiper: productThumbs
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		})
	}


	// Checkout info
	$('.checkout_info .form .type label').click(function(e) {
		if (e.target.nodeName === 'LABEL') {
			let content = $(this).data('type')

			$('.checkout_info .form .type_info').hide()
			$('.checkout_info .form .' + content).fadeIn(300)
		}
	})

	$('.checkout_info .form .methods label').click(function(e) {
		if (e.target.nodeName === 'LABEL') {
			let content = $(this).data('content'),
				parent = $(this).closest('.section')

			parent.find('.method_info').hide()
			parent.find('.' + content).fadeIn(300)
		}
	})


	// Orders
	$('.orders .order .head').click(function(e) {
		$(this).toggleClass('active').next().slideToggle(300)
	})
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})