$('.site_header .toggle, .mobile_menu .close_btn').click(function () {
	$('.mobile_menu').toggleClass('opened');
	$('.nav_menu').toggleClass('opened');
	$('.site_header .toggle').toggleClass('opened')
});



$('.tab-nav span').on('click', function () {
	$([$(this).parent()[0], $($(this).data('href'))[0]]).addClass('active').siblings('.active').removeClass('active');
});




$('.mobile_menu .menu .dropdown .nav_link').click(function (e) {
	$(this).next().toggleClass('opened');
	return false;
});
$('.mobile_menu .menu .back_btn').click(function (e) {
	$(this).parent().removeClass('opened');
});

// end


// end
if ($(window).width() < 991) {
	$(document).click(function (event) {
		if (!$(event.target).closest(".site_header .toggle, .mobile_menu .inner").length) {
			$("body").find(".mobile_menu .inner").parent().removeClass("opened");
			$('.site_header .toggle').removeClass('opened');
		}
	});
}



var product_slider = new Swiper(".content_box .slider1", {
	freeMode: true,
	slidesPerView: "auto",
	spaceBetween: 25,

	navigation: {
		nextEl: ".content_box .next_arrow ",
		prevEl: ".content_box .prev_arrow",
	},
	// pagination: {
	// 	el: ".hero .swiper-pagination",
	// },
	// autoplay: {
	// 	delay: 2000,
	// 	disableOnInteraction: false,
	// },
});


var product_slider = new Swiper(".content_box .slider2", {
	freeMode: true,
	slidesPerView: "auto",
	spaceBetween: 25,

	navigation: {
		nextEl: ".content_box .next_arrow ",
		prevEl: ".content_box .prev_arrow",
	},
	// pagination: {
	// 	el: ".hero .swiper-pagination",
	// },
	// autoplay: {
	// 	delay: 2000,
	// 	disableOnInteraction: false,
	// },
});


$(document).click(function (event) {
	if (!$(event.target).closest(".popup .inner, .flatpickr-calendar").length) {
		$("body").find(".popup .inner").parent().removeClass("opened");
		$('.site_header .toggle').removeClass('opened');
	}
});


$(document).click(function (event) {
	if (!$(event.target).closest(".popup .inner, .dashboard0 .invoices table tbody .sec_btn, ").length) {
		$("body").find(".modal.invoice > .inner").parent().removeClass("opened");
	}
});




$('.popup .head .close_btn').click(function () {
	$(this).parents().eq(2).removeClass('opened');
});

// 
$('.dashboard0 .list_items .inner .btn2').click(function () {
	$('.popup.book_appointment').addClass('opened');
	return false
});

$('.dashboard0 .list_items .inner .bottom a, .my_reviews.items_grid .review_item .btn_group .edit_btn').click(function () {
	$('.popup.add_review').addClass('opened');
	return false
});

$('.appointment_item .profile .details .details_btn').click(function () {
	$('.modal.appointment_details.details0').addClass('opened')
	return false
});

$('.dashboard0 .header .settings_btn').click(function () {
	$('.popup.settings').addClass('opened')
	return false
});
// 
$('.popup .head .close_btn').click(function () {
	$(this).parents().eq(3).removeClass('opened');
});

$('.tab.coupons .appointment_item .details_btn').click(function () {
	$('.modal.coupons').addClass('opened');
	return false
});
$('.tab.active_coupons .appointment_item .details_btn').click(function () {
	$('.modal.active_coupons').addClass('opened');
	return false
});

$('.popup.book_appointment .service_items .item .arrow').click(function () {
	$(this).toggleClass('opened')
	$(this).parent().next().slideToggle()
});

// Select Services 
$('.popup.book_appointment .select_services .service_item').click(function () {
	$('.popup.book_appointment .body_inner.service_item').addClass('opened')
});

$('.popup.book_appointment .select_services .master_item').click(function () {
	$('.popup.book_appointment .body_inner.master_item').addClass('opened')
});

$('.popup.book_appointment .select_services .date_item').click(function () {
	$('.popup.book_appointment .body_inner.select_date').addClass('opened')
});

// End




$('.popup.book_appointment .body_inner .back_btn').click(function () {
	$(this).parents().eq(1).removeClass('opened')
});

$('.modal .cancel_btn').click(function () {
	$(this).parents().eq(2).removeClass('opened')
});

$('.modal .close_btn').click(function () {
	$(this).parents().eq(4).removeClass('opened')
});

$('.popup.book_appointment .body_inner .bottom .next_btn').click(function () {
	$(this).parents().eq(1).removeClass('opened')
});

$('.popup.book_appointment .bottom .cancel_btn, .my_reviews.items_grid .review_item .btn_group .dlt_btn').click(function () {
	$('.modal.cancel').addClass('opened')
	return false
});

$('.modal.cancel .btn').click(function () {
	$('.modal.cancel').removeClass('opened')
});


$('.dashboard0 .my_invoices.invoices table tbody .sec_btn').click(function () {
	$('.modal.my_invoices').addClass('opened')
});

$('.dashboard0 .my_offers.invoices table tbody .sec_btn').click(function () {
	$('.modal.offers').addClass('opened')
});

// 


$('.select_date .bottom .next_btn').click(function () {
	$('.modal.appointment_booked').addClass('opened')
	$('.popup.book_appointment').removeClass('opened')
});

const dropArea = document.querySelector(".drop_box"),
	button = dropArea.querySelector("button"),
	dragText = dropArea.querySelector("header"),
	input = dropArea.querySelector("input");
let file;
var filename;

button.onclick = () => {
	input.click();
};

input.addEventListener("change", function (e) {
	var fileName = e.target.files[0].name;
	let filedata = `
    <form action="" method="post">
    <div class="form">
    <h4>${fileName}</h4>
    <input type="email" placeholder="Enter email upload file">
    <button class="btn">Upload</button>
    </div>
    </form>`;
	dropArea.innerHTML = filedata;
});

// 



$('.dashboard0 .list_items .inner .favorite_btn').click(function () {
	$(this).toggleClass('active')
});





const starEls = document.querySelectorAll('.star.rating');
starEls.forEach(star => {
	star.addEventListener('click', function (e) {
		let starEl = e.currentTarget;
		console.log(starEl.parentNode.dataset.stars + ", " + starEl.dataset.rating);
		starEl.parentNode.setAttribute('data-stars', starEl.dataset.rating);
	});
})



const datePickerRef = document.querySelector('[data-date-picker]');
window.CarbonComponents.DatePicker.init(datePickerRef);
const datePicker = window.CarbonComponents.DatePicker.components.get(datePickerRef);

datePicker.calendar.set('clicksOpen', 'false');
datePicker.calendar.open();

