/*************************
* main.js는 메인페이지에서만 구동되는 스크립트를 저장..
***********************/
$(document).ready(function () {
	const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

		// autoplay: {  /* 팝업 자동 실행 */
		// 	delay: 5000,
		// 	disableOnInteraction: true,
		// },

		//effect: "fade", /* fade 효과 */

		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

		// pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		// 	el: '.swiper-pagination', /* 해당 요소의 class명 */
		// 	clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		// 	type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		// 	renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
		// 	    return '<span class="' + className + '">' + (index + 1) + "</span>";
		// 	},
		// },


		// navigation: {  /* 이전, 다음 버튼 */
		// 	nextEl: '.swiper-button-next',  /* 다음 버튼의 클래스명 */
		// 	prevEl: '.swiper-button-prev',  
		// },

	});


	const time_swiper = new Swiper('.time .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: "auto", /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			1025: {    /* 640px 이상일때 적용 */
				slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 24,
			},

			
		},
		//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	});

	const recom_swiper = new Swiper('.recom .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: "auto", /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			573: {
				slidesPerView: 2,
				spaceBetween: 16,
			},
			579: {
				slidesPerView: 2,
				spaceBetween: 16,
			},
			769: {    /* 640px 이상일때 적용 */
				slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 24,
			},
			1023: {    /* 640px 이상일때 적용 */
				slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 24,
			},
			1025: {    /* 640px 이상일때 적용 */
				slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 24,
			},
		},
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		navigation: {
			nextEl: '.recom .next',
			prevEl: '.recom .prev',
		},
	});

	const best_swiper = new Swiper('.best .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			769: {    /* 640px 이상일때 적용 */
				slidesPerView: 5,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 50,
			},

		},
		centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.swiper-pagination', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
			type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		},
	});

	/**마우스 올리면 사진 커지기**/
	$('.emotion .list ul li').on('mouseenter', function () {
		// console.log('over')
		$('.emotion .list ul li').removeClass('active')
		$(this).addClass('active')
	})

	const banner_swiper = new Swiper('.banner .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			769: {    /* 640px 이상일때 적용 */
				slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 24,
			},
		},
		//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		// loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		// autoplay: {  /* 팝업 자동 실행 */
		// 	delay: 2500,
		// 	disableOnInteraction: true,
		// },

		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.banner .paging', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		},
	});

	const premium_swiper = new Swiper('.premium .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 'auto', /* css에서 slide의 넓이ㅓ 지정 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			768: {    /* 768px 이상일때 적용 */
				spaceBetween: 24,
			},
		},
		//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.premium .paging', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		},
		on: {
			slideChange: function () {
				const activeSlide = this.slides[this.activeIndex]
				const activeSlideWidth = activeSlide.offsetWidth
				const otherSlides = this.slides[this.previousIndex]
				const otherSlideWidth = otherSlides.offsetWidth
				const slideWidthDifference = activeSlideWidth - otherSlideWidth;
				this.setTranslate(this.translate - slideWidthDifference);
			},
			slideChangeTransitionEnd: function () {
				// 전환이 끝나면 Swiper를 다시 업데이트
				setTimeout(() => {
					this.update();
				}, 100);  // 잠시 딜레이를 주고 업데이트
			}
		},
	});
	const review_swiper = new Swiper('.review .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			1281: {    /* 640px 이상일때 적용 */
				slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 24,
				grid: {
					rows: 2,
					fill: 'row',
				},
			},
		},
		//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		// autoplay: {  /* 팝업 자동 실행 */
		// 	delay: 2500,
		// 	disableOnInteraction: true,
		// },
	
		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.swiper-pagination', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
			type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		},
		grid: {
			rows: 1,
			fill: 'row',
		},
	});
});