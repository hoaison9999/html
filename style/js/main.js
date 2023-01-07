
$(document).ready(function ($) {
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		gallery: {
			enabled: true,
		}
	});

	$('#nonono').parents('li').find('.submenu-level1-children-a').click();







	$(".menu-mobile .submenu-level1-children-a").on("click", function() {
		var n = $(this),
				t;

		var t =  $(n).attr('data-top');
		if(n.hasClass('active')){
			console.log(t);

			$("#menu-mobile").animate({
				scrollTop: t 
			}, "slow")
		}else{
			$("#menu-mobile").animate({
				scrollTop: 0  
			}, "slow")
		}
	});

	$('aside.active ').parents('li').addClass('arrowDown');
	$('aside.active ').parents('li').find('.gd-menu').addClass('showz');
	$('aside.active ').parents('li').find('.gd-menu').css('display','block');

	$('.callmenu').click(function(e){
		e.preventDefault();
		$(".navbar-toggle").click(); 
		$('.navbar-toggle').trigger('click');

		return false;
	});

	$('#orderclick').click(function(e){
		e.preventDefault();
		$(this).toggleClass('show');
		//	$('.linkfooter').slideToggle();


		$( ".linkfooter" ).slideToggle( "fast", function() {
			$("html, body").animate({ scrollTop: $(document).height() }, 1000);
		});

	});
	$('.viewmore.noafter').click(function(e){
		e.preventDefault();
		var self = $(this);
		var handle = $(this).attr('data-loadmore');

		var pagez = parseInt($(this).attr('data-page'));

		var dothis = $(this);

		var pageStart = $(this).attr('data-pageStart');

		var countEle = dothis.parent().find('.countxx');
		var count = countEle.html();

		if(pageStart == 1){

			if($(this).next().hasClass('cate-prom')){
				setTimeout(function(){ self.next().addClass('ok'); }, 1000);


			}
		}



		if(pageStart <= pagez){
			$.ajax({url: handle+'?view=loadmore&page='+pageStart, success: function(result){
				var pageStartFinal = parseInt(pageStart) + 1;
				dothis.attr('data-pageStart',pageStartFinal);
				dothis.parent().find('.section_tab_product-owl').append(result);  
				if(pageStart == 1){
					var count2 = count - 8;

				}else{
					var count2 = count - 12;

				}
				countEle.html(count2);
			}});
		}else{

			$.ajax({url: handle+'?view=loadmore&page='+pageStart, success: function(result){
				//dothis.attr('data-pageStart',pageStartFinal);
				dothis.parent().find('.section_tab_product-owl').append(result);  
				if(pageStart == 1){
					var count2 = count - 8;

				}else{
					var count2 = count - 12;

				}
				countEle.html(count2);
				dothis.remove();

			}});
		}

	});


	$('.menu-item-count h3').click(function(e){
		e.preventDefault();
		var $this = $(this);

		if ($this.next().hasClass('showz')) {
			$this.next().removeClass('showz');
			$this.next().slideUp(350);

			$this.parent().removeClass('arrowDown');

		} else {
			$this.parent().parent().find('.subcate ').removeClass('showz');

			$this.parent().parent().find('.menu-item-count ').removeClass('arrowDown');

			$this.parent().addClass('arrowDown');

			$this.parent().parent().find('.subcate').slideUp(350);
			$this.next().toggleClass('showz');
			$this.next().slideToggle(350);
		}

	});
	awe_backtotop();
	awe_owl();
	awe_category();
	awe_menumobile();
	awe_tab();
	$('.btn--view-more').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		$this.parents('#home').find('.product-well').toggleClass('expanded');
		return false;
	});
	$('.header-search .search-i').click(function(e){
		e.stopPropagation();
		$( ".search-header" ).toggle( "slow", function() {
		});
	});
	$('[data-toggle="tooltip"]').tooltip();
	$('.index-cart a, .mobile-cart a').click(function() {
		$("#cart-sidebars").addClass('active');
		$(".backdrop__body-backdrop___1rvky").addClass('active');
	});
	$('#cart-sidebars .cart_btn-close').click(function() {
		$("#cart-sidebars").removeClass('active');
		$(".backdrop__body-backdrop___1rvky").removeClass('active');
	});
	$('.backdrop__body-backdrop___1rvky').click(function() {
		$("#cart-sidebars").removeClass('active');
		$(".backdrop__body-backdrop___1rvky").removeClass('active');
	});
	if($('.cart_body>div').length == '0' ){
		$('.cart-footer').hide();
		jQuery('<div class="cart-empty">'
					 + '<img src="//bizweb.dktcdn.net/100/270/860/themes/606449/assets/empty-bags.jpg?1510132489127" class="img-responsive center-block" alt="Giỏ hàng trống" />'
					 + '<div class="btn-cart-empty">'
					 + '<a class="btn btn-default" href="/" title="Tiếp tục mua sắm">Tiếp tục mua sắm</a>'
					 + '</div>'
					 + '</div>').appendTo('.cart_body');
	}
});
var Ant = {
	clone_item_view: function(product) { 
		var src = Haravan.resizeImage(product.featured_image, 'small');
		if(src == null){
			src = "//bizweb.dktcdn.net/thumb/medium/assets/themes_support/noimage.gif";
		}
		jQuery('<div class="item recently-item-pro clearfix">'
					 +'<div class="wrp">'
					 +'<div class="box-image">'
					 +'<a class="image url-product" href="'+product.url+'" title="'+product.name+'">'
					 +'<img class="image-review" src="' + src +  '" alt="'+product.name+'" />'
					 +'</a>'
					 +'</div>'
					 +'<div class="info">'
					 +'<h3>'
					 +'<a href="'+product.url+'" title="'+product.name+'" class="url-product"><span class="title-review">'+product.name+'</span></a>'
					 +'</h3>'
					 +'</div>'
					 +'</div>'
					 +'</div>').appendTo('#owl-demo-daxem > .product-item');
	},
	setCookiePopup: function (cvalue, exdays, nameCookie) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		$.cookie(nameCookie, cvalue, { expires: d, path: '/' });
	},
	getCookiePopup: function (nameCookie) {
		return $.cookie(nameCookie);
	}
};
$(window).resize(function() {
	if ($(window).width()<993){
		$('.aside-filter .fiter-title').on('click', function(e){
			e.preventDefault();
			var $this = $(this);
			$this.parents('.aside-filter').find('.aside-hidden-mobile').stop().slideToggle();
			$(this).toggleClass('active')
			return false;
		});
	};
});

if ($(window).width() < 1200){
	$('.removeMB').remove();

}else{
	$('.removePC').remove();

}

if ($(window).width() < 1200){


	$('.more-mb-brand').on('click', function(e){
		e.preventDefault();
		$('.brand-fixed').fadeIn();
	});

	$('.more-mb-type').on('click', function(e){

		e.preventDefault();

		if($('#xxx').hasClass('show')){
			$('.cus-filter-mb').removeClass('show');

			$('body ').removeClass('overlay');

			$('#xxx').removeClass('show');

		}else{
			$('.cus-filter-mb').addClass('show');

			$('body ').addClass('overlay');
			$('#xxx').addClass('show');


		}


	});



	$('.filterxx.removePC a').on('click', function(e){
		//$('.filterxx.removePC').fadeOut();

		$('.cus-filter-mb').removeClass('show');

		$('body ').removeClass('overlay');

		$('#xxx').removeClass('show');


	});


	$('.closebrand,.filter-brand.filterxx.bot a').on('click', function(e){
		e.preventDefault();
		$('.brand-fixed').fadeOut();

		var t = $('.filter-tyle .flex'),
				i;
		t.length > 0 && t.find("a").hasClass("choosed") && (i = t.find("a.choosed").offset().left + t.find("a.choosed").outerWidth(!0) / 2 + t.scrollLeft() - t.width() / 2, t.animate({
			scrollLeft: i
		}, "slow"))

	});
}

if ($(window).width() < 767){
	$('.aside-filter .fiter-title').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		$this.parents('.aside-filter').find('.aside-hidden-mobile').stop().slideToggle();
		$(this).toggleClass('active')
		return false;
	});
	
	$('.section_group_product_1 .menu-button-edit').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		$this.parents('.section_group_product_1 .box-shock').find('ul').stop().slideToggle();
		$(this).toggleClass('active')
		return false;
	});
	 
	$('.section_group_product_2 .menu-button-edit').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		$this.parents('.section_group_product_2 .box-shock').find('ul').stop().slideToggle();
		$(this).toggleClass('active')
		return false;
	});
	 
	$('.section_group_product_3 .menu-button-edit').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		$this.parents('.section_group_product_3 .box-shock').find('ul').stop().slideToggle();
		$(this).toggleClass('active')
		return false;
	});
	 
	$('.section_group_product_4 .menu-button-edit').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		$this.parents('.section_group_product_4 .box-shock').find('ul').stop().slideToggle();
		$(this).toggleClass('active')
		return false;
	});
	 
	$('.section_group_product_5 .menu-button-edit').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		$this.parents('.section_group_product_5 .box-shock').find('ul').stop().slideToggle();
		$(this).toggleClass('active')
		return false;
	});
	 
	$('.section_group_product_6 .menu-button-edit').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		$this.parents('.section_group_product_6 .box-shock').find('ul').stop().slideToggle();
		$(this).toggleClass('active')
		return false;
	});
	 
	$('.section_group_product_7 .menu-button-edit').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		$this.parents('.section_group_product_7 .box-shock').find('ul').stop().slideToggle();
		$(this).toggleClass('active')
		return false;
	});
	 
	$('.section_group_product_8 .menu-button-edit').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		$this.parents('.section_group_product_8 .box-shock').find('ul').stop().slideToggle();
		$(this).toggleClass('active')
		return false;
	});
	 
	$('.section_group_product_9 .menu-button-edit').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		$this.parents('.section_group_product_9 .box-shock').find('ul').stop().slideToggle();
		$(this).toggleClass('active')
		return false;
	});
	 
	$('.section_group_product_10 .menu-button-edit').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		$this.parents('.section_group_product_10 .box-shock').find('ul').stop().slideToggle();
		$(this).toggleClass('active')
		return false;
	});
	 
	$('.section_group_product_11 .menu-button-edit').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		$this.parents('.section_group_product_11 .box-shock').find('ul').stop().slideToggle();
		$(this).toggleClass('active')
		return false;
	});
	 
	 };
	 $(window).on("load resize",function(e){	
		 setTimeout(function(){					 
			 awe_resizeimage();
		 },200);
		 setTimeout(function(){	
			 awe_resizeimage();
		 },1000);
	 });
	 $(document).on('click','.close-popup, .btn-continue, .fancybox-close', function() {   
		 hidePopup('.awe-popup'); 	
		 setTimeout(function(){
			 $('.loading').removeClass('loaded-content');
		 },500);
		 return false;
	 });

	 $(document).on('click','#overlay', function() {   
		 $('.listgroup ').removeClass('show');
		 $('body ').removeClass('overlay');

		 $('.listxx ').removeClass('show');



		 $('.groupcate.top.type.hidden-lg').removeClass('show');

		 $('.cus-filter-mb').removeClass('show');

		 // return false;
	 })

	 function awe_showNoitice(selector) {
		 $(selector).animate({right: '0'}, 500);
		 setTimeout(function() {
			 $(selector).animate({right: '-300px'}, 500);
		 }, 3500);
	 }  window.awe_showNoitice=awe_showNoitice;
	 function awe_showLoading(selector) {
		 var loading = $('.loader').html();
		 $(selector).addClass("loading").append(loading); 
	 }  window.awe_showLoading=awe_showLoading;
	 function awe_hideLoading(selector) {
		 $(selector).removeClass("loading"); 
		 $(selector + ' .loading-icon').remove();
	 }  window.awe_hideLoading=awe_hideLoading;
	 function awe_showPopup(selector) {
		 $(selector).addClass('active');
	 }  window.awe_showPopup=awe_showPopup;
	 function awe_hidePopup(selector) {
		 $(selector).removeClass('active');
	 }  window.awe_hidePopup=awe_hidePopup;
	 function awe_convertVietnamese(str) { 
		 str= str.toLowerCase();
		 str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
		 str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
		 str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
		 str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
		 str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
		 str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
		 str= str.replace(/đ/g,"d"); 
		 str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");
		 str= str.replace(/-+-/g,"-");
		 str= str.replace(/^\-+|\-+$/g,""); 
		 return str; 
	 } window.awe_convertVietnamese=awe_convertVietnamese;
	 function awe_resizeimage() { 
		 $('.product-box .product-thumbnail a img').each(function(){
			 var t1 = (this.naturalHeight/this.naturalWidth);
			 var t2 = ($(this).parent().height()/$(this).parent().width());
			 if(t1<= t2){
				 $(this).addClass('bethua');
			 }
			 var m1 = $(this).height();
			 var m2 = $(this).parent().height();
			 if(m1 <= m2){
				 $(this).css('padding-top',(m2-m1)/2 + 'px');
			 }
		 })	
	 } window.awe_resizeimage=awe_resizeimage;
	 function awe_category(){
		 $('.nav-category .fa-angle-down').click(function(e){
			 $(this).parent().toggleClass('active');
		 });
	 } window.awe_category=awe_category;
	 function awe_menumobile(){
		 $('.menu-bar').click(function(e){
			 e.preventDefault();
			 $('#nav').toggleClass('open');
		 });
		 $('#nav .fa').click(function(e){		
			 e.preventDefault();
			 $(this).parent().parent().toggleClass('open');
		 });
	 } window.awe_menumobile=awe_menumobile;
	 function awe_accordion(){
		 $('.accordion .nav-link').click(function(e){
			 e.preventDefault;
			 $(this).parent().toggleClass('active');
		 })
	 } window.awe_accordion=awe_accordion;
	 function awe_owl() { 
		 $('.owl-carousel:not(.not-dqowl)').each( function(){
			 var xs_item = $(this).attr('data-xs-items');
			 var md_item = $(this).attr('data-md-items');
			 var sm_item = $(this).attr('data-sm-items');	
			 var margin=$(this).attr('data-margin');
			 var dot=$(this).attr('data-dot');
			 if (typeof margin !== typeof undefined && margin !== false) {    
			 } else{
				 margin = 30;
			 }
			 if (typeof xs_item !== typeof undefined && xs_item !== false) {    
			 } else{
				 xs_item = 1;
			 }
			 if (typeof sm_item !== typeof undefined && sm_item !== false) {    

			 } else{
				 sm_item = 3;
			 }	
			 if (typeof md_item !== typeof undefined && md_item !== false) {    
			 } else{
				 md_item = 3;
			 }
			 if (typeof dot !== typeof undefined && dot !== true) {   
				 dot= true;
			 } else{
				 dot = false;
			 }
			 $(this).owlCarousel({
				 loop:false,
				 margin:Number(margin),
				 responsiveClass:true,
				 dots:dot,
				 nav:true,
				 responsive:{
					 0:{
						 items:Number(xs_item)				
					 },
					 600:{
						 items:Number(sm_item)				
					 },
					 1000:{
						 items:Number(md_item)				
					 }
				 }
			 })
		 })
	 } window.awe_owl=awe_owl;
	 
	 $(".section_tab_product-owl").owlCarousel({
		 nav:true,
		 slideSpeed : 600,
		 paginationSpeed : 400,
		 singleItem:true,
		 pagination : false,
		 dots: true,
		 autoplay:false,
		 lazyLoad:true,
		 margin:0,
		 autoplayTimeout:6000,
		 autoplayHoverPause:true,
		 autoHeight: false,
		 loop: false,
		 responsive: {
			 0: {
				 items: 2
			 },
			 543: {
				 items: 3
			 },
			 768: {
				 items: 4
			 },
			 991: {
				 items: 4
			 },
			 992: {
				 items: 4
			 },
			 1024: {
				 items: 4
			 },
			 1200: {
				 items: 4
			 },
			 1590: {
				 items: 4
			 }
		 }
	 });

$("#slide-home").owlCarousel({
		 nav:false,
		 slideSpeed : 600,
		 paginationSpeed : 400,
		 singleItem:true,
		 pagination : false,
		 dots: false,
		 autoplay:false,
		 margin:0,
		 autoplayTimeout:6000,
		 autoplayHoverPause:true,
		 autoHeight: false,
		 loop: false,
		 responsive: {
			 0: {
				 items: 1
			 },
			 543: {
				 items: 1
			 },
			 768: {
				 items:3
			 },
			 991: {
				 items: 3
			 },
			 992: {
				 items: 2
			 },
			 1024: {
				 items: 2
			 },
			 1200: {
				 items:4
			 },
			 1590: {
				 items: 4
			 }
		 }
	 });
	 $(".section_blogs_owl").owlCarousel({
		 nav:false,
		 slideSpeed : 600,
		 paginationSpeed : 400,
		 singleItem:true,
		 pagination : false,
		 dots: true,
		 autoplay:false,
		 margin:0,
		 autoplayTimeout:6000,
		 autoplayHoverPause:true,
		 autoHeight: false,
		 loop: false,
		 responsive: {
			 0: {
				 items: 1
			 },
			 543: {
				 items: 1
			 },
			 768: {
				 items: 2
			 },
			 991: {
				 items: 2
			 },
			 992: {
				 items: 2
			 },
			 1024: {
				 items: 2
			 },
			 1200: {
				 items:4
			 },
			 1590: {
				 items: 4
			 }
		 }
	 });
$(".section_blogs_owl2").owlCarousel({
		 nav:false,
		 slideSpeed : 600,
		 paginationSpeed : 400,
		 singleItem:true,
		 pagination : false,
		 dots: true,
		 autoplay:false,
		 margin:0,
		 autoplayTimeout:6000,
		 autoplayHoverPause:true,
		 autoHeight: false,
		 loop: false,
		 responsive: {
			 0: {
				 items: 1
			 },
			 543: {
				 items: 1
			 },
			 768: {
				 items: 2
			 },
			 991: {
				 items: 2
			 },
			 992: {
				 items: 2
			 },
			 1024: {
				 items: 2
			 },
			 1200: {
				 items:2
			 },
			 1590: {
				 items: 2
			 }
		 }
	 });
	 $(".section-feature-product-slider").owlCarousel({
		 nav:true,
		 slideSpeed : 600,
		 paginationSpeed : 400,
		 singleItem:true,
		 pagination : false,
		 dots: false,
		 autoplay:true,
		 margin:20,
		 autoplayTimeout:6000,
		 autoplayHoverPause:true,
		 autoHeight: false,
		 loop: false,
		 responsive: {
			 0: {
				 items: 2
			 },
			 543: {
				 items: 3
			 },
			 768: {
				 items: 3
			 },
			 991: {
				 items: 3
			 },
			 992: {
				 items: 4
			 },
			 1300: {
				 items: 4
			 },
			 1590: {
				 items: 4
			 }
		 }
	 });
	 $(".section-group-product-slider").owlCarousel({
		 nav:true,
		 slideSpeed : 600,
		 paginationSpeed : 400,
		 singleItem:true,
		 pagination : false,
		 dots: false,
		 autoplay:true,
		 margin:5,
		 autoplayTimeout:6000,
		 autoplayHoverPause:true,
		 autoHeight: false,
		 loop: false,
		 responsive: {
			 0: {
				 items: 2
			 },
			 543: {
				 items: 3
			 },
			 768: {
				 items: 3
			 },
			 991: {
				 items: 4
			 },
			 992: {
				 items: 5
			 },
			 1300: {
				 items: 5
			 },
			 1590: {
				 items: 5
			 }
		 }
	 });


	 $("#bannerhome").owlCarousel({
		 nav:false,
		 slideSpeed : 600,
		 paginationSpeed : 400,
		 singleItem:true,
		 pagination : false,
		 dots: true,
		 autoplay:true,
		 autoplayTimeout:4500,
		 autoplayHoverPause:false,
		 autoHeight: false,
		 loop: true,
		 responsive: {
			 0: {
				 items: 1
			 },
			 543: {
				 items: 1
			 },
			 768: {
				 items: 1
			 },
			 991: {
				 items: 1
			 },
			 992: {
				 items: 1
			 },
			 1300: {
				 items: 1,
			 },
			 1590: {
				 items: 1,
			 }
		 }
	 });



	 $(".lst-video").owlCarousel({
		 nav:true,
		 slideSpeed : 600,
		 paginationSpeed : 400,
		 singleItem:true,
		 pagination : false,
		 dots: false,
		 autoplay:true,
		 autoplayTimeout:4500,
		 autoplayHoverPause:false,
		 autoHeight: false,
		 loop: true,
		 margin:20,
		 responsive: {
			 0: {
				 items: 1
			 },
			 543: {
				 items: 1
			 },
			 768: {
				 items: 2
			 },
			 991: {
				 items: 2
			 },
			 992: {
				 items: 2
			 },
			 1300: {
				 items: 2,
			 },
			 1590: {
				 items: 2,
			 }
		 }
	 });

	 $(".home-slider").owlCarousel({
		 nav:true,
		 slideSpeed : 600,
		 paginationSpeed : 400,
		 singleItem:true,
		 pagination : false,
		 dots: true,
		 autoplay:true,
		 autoplayTimeout:4500,
		 autoplayHoverPause:false,
		 autoHeight: false,
		 loop: true,
		 responsive: {
			 0: {
				 items: 1
			 },
			 543: {
				 items: 1
			 },
			 768: {
				 items: 1
			 },
			 991: {
				 items: 1
			 },
			 992: {
				 items: 1
			 },
			 1300: {
				 items: 1,
			 },
			 1590: {
				 items: 1,
			 }
		 }
	 });
	 $(".owl-policy-mobile").owlCarousel({
		 nav:false,
		 slideSpeed : 600,
		 paginationSpeed : 400,
		 singleItem:false,
		 pagination : false,
		 dots: false,
		 autoplay:true,
		 autoplayTimeout:4500,
		 autoplayHoverPause:false,
		 autoHeight: false,
		 loop: false,
		 responsive: {
			 0: {
				 items: 2
			 },
			 543: {
				 items: 2
			 },
			 768: {
				 items: 3
			 },
			 991: {
				 items: 3
			 },
			 992: {
				 items: 4
			 },
			 1300: {
				 items: 4,
			 },
			 1590: {
				 items: 4,
			 }
		 }
	 });
	 $('#collection-owl').owlCarousel({
		 loop:true,
		 margin:0,
		 responsiveClass:true,
		 dots:true,
		 nav:false,
		 autoplay:true,
		 autoplayTimeout:3000,
		 autoplayHoverPause:true,
		 responsive:{
			 0:{
				 items:1	
			 },
			 600:{
				 items:1
			 },
			 1000:{
				 items:1
			 }
		 }
	 });
	 function awe_backtotop() { 
		 if ($('.back-to-top').length) {
			 var scrollTrigger = 100,
					 backToTop = function () {
						 var scrollTop = $(window).scrollTop();
						 if (scrollTop > scrollTrigger) {
							 $('.back-to-top').addClass('show');
						 } else {
							 $('.back-to-top').removeClass('show');
						 }
					 };
			 backToTop();
			 $(window).on('scroll', function () {
				 backToTop();
			 });
			 $('.back-to-top').on('click', function (e) {
				 e.preventDefault();
				 $('html,body').animate({
					 scrollTop: 0
				 }, 700);
			 });
		 }
	 } window.awe_backtotop=awe_backtotop;
	 function awe_tab() {
		 $(".e-tabs").each( function(){
			 $(this).find('.tabs-title li:first-child').addClass('current');
			 $(this).find('.tab-content').first().addClass('current');

			 $(this).find('.tabs-title li').click(function(){
				 var tab_id = $(this).attr('data-tab');
				 var url = $(this).attr('data-url');
				 $(this).closest('.e-tabs').find('.tab-viewall').attr('href',url);
				 $(this).closest('.e-tabs').find('.tabs-title li').removeClass('current');
				 $(this).closest('.e-tabs').find('.tab-content').removeClass('current');
				 $(this).addClass('current');
				 $(this).closest('.e-tabs').find("#"+tab_id).addClass('current');
			 });    
		 });
	 } window.awe_tab=awe_tab;
	 $('.dropdown-toggle').click(function() {
		 $(this).parent().toggleClass('open'); 	
	 }); 
	 $('.btn-close').click(function() {
		 $(this).parents('.dropdown').toggleClass('open');
	 }); 
	 $('body').click(function(event) {
		 if (!$(event.target).closest('.dropdown').length) {
			 $('.dropdown').removeClass('open');
		 };
	 });
	 (function($) {
		 "use strict";
		 $(document).on(
			 "show.bs.tab",
			 '.nav-tabs-responsive [data-toggle="tab"]',
			 function(e) {
				 var $target = $(e.target);
				 var $tabs = $target.closest(".nav-tabs-responsive");
				 var $current = $target.closest("li");
				 var $parent = $current.closest("li.dropdown");
				 $current = $parent.length > 0 ? $parent : $current;
				 var $next = $current.next();
				 var $prev = $current.prev();
				 var updateDropdownMenu = function($el, position) {
					 $el
					 .find(".dropdown-menu")
					 .removeClass("pull-xs-left pull-xs-center pull-xs-right")
					 .addClass("pull-xs-" + position);
				 };
				 $tabs.find(">li").removeClass("next prev");
				 $prev.addClass("prev");
				 $next.addClass("next");
				 updateDropdownMenu($prev, "left");
				 updateDropdownMenu($current, "center");
				 updateDropdownMenu($next, "right");
			 }
		 );
	 })(jQuery);

	 $('.closemenu').bind( "touchstart", function(){
		 $("body").removeClass("responsive helper-overflow-hidden");
		 $('html').removeClass('helper-overflow-hidden');
		 $('body').addClass('hideresponsive');
	 });
	 $(document).on("click", ".closemenu", function(){
		 $("body").removeClass("responsive helper-overflow-hidden");
		 $('html').removeClass('helper-overflow-hidden');
		 $('body').addClass('hideresponsive');
	 });
	 $(document).on("click", "#trigger-mobile", function(){
		 if ($('body').hasClass('responsive') == false) {
			 $('body').addClass('responsive helper-overflow-hidden');
			 $('html').addClass('helper-overflow-hidden');
			 $('body').removeClass('hideresponsive');
			 $("#box-wrapper").bind('click', function () {
				 $("body").removeClass("responsive helper-overflow-hidden");
				 $('html').removeClass('helper-overflow-hidden');
				 $('body').addClass('hideresponsive');
				 $("#box-wrapper").unbind('click');
			 });
		 }
		 else {
			 $("body").removeClass("responsive helper-overflow-hidden");
			 $('html').removeClass('helper-overflow-hidden');
			 $('body').addClass('hideresponsive');
		 }
	 });


	 $('#menu-mobile .menu-mobile .submenu-level1-children-a').on('click', function(e){
		 e.preventDefault();
		 var $this = $(this);
		 $('#menu-mobile .menu-mobile li .submenu-level1-children').stop().slideUp();

		 $this.parents('#menu-mobile .menu-mobile li').find('.submenu-level1-children').stop().slideToggle();

		 if( $(this).hasClass('active')){
			 $(this).removeClass('active');
		 }else{
			 $('#menu-mobile .menu-mobile li .submenu-level1-children-a').removeClass('active');
			 $(this).addClass('active');

		 }
		 return false;
	 });
	 $('#menu-mobile .menu-mobile .submenu-level1-children .submenu-level2-children-a i').on('click', function(e){
		 e.preventDefault();
		 var $this = $(this);
		 $this.parents('#menu-mobile .menu-mobile .submenu-level1-children li').find('.submenu-level2-children').stop().slideToggle();
		 $(this).toggleClass('active')
		 return false;
	 });

	 if ($(window).width() > 1100){
		 
		 
		 var menu_limit = "20";
			if (isNaN(menu_limit)){
				menu_limit = 10;
			} else {
				menu_limit = 19;
		 }
		 }else{
			 
			 
			 var menu_limit = "8";
				if (isNaN(menu_limit)){
					menu_limit = 8;
				} else {
					menu_limit = 7;
			 }
			 }
				/*** menu list ***/
				var sidebar_length = $('.menu-item-count').length;
				//	thiết lập số menu danh mục hiển thị
				if (sidebar_length > (menu_limit + 1) ){
					$('.nav-cate:not(.site-nav-mobile) > ul').each(function(){
						$('.menu-item-count',this).eq(menu_limit).nextAll().hide().addClass('toggleable');
						$(this).append('<li class="more"><h3><a><label>Xem thêm ... </label></a></h3></li>');
					});
					$('.nav-cate > ul').on('click','.more', function(){
						if($(this).hasClass('less')){
							$(this).html('<h3><a><label>Xem thêm ...</label></a></h3>').removeClass('less');
						} else {
							$(this).html('<h3><a><label>Thu gọn ... </label></a></h3>').addClass('less');;
						}
						$(this).siblings('li.toggleable').slideToggle({
							complete: function () {
								var divHeight = $('#menu2017').height(); 
								$('.subcate.gd-menu').css('min-height', divHeight+'px');
							}
						});
					});
				}
				$(document).on('keydown','#qty, #quantity-detail, .number-sidebar',function(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,110,190])||/65|67|86|88/.test(e.keyCode)&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()});