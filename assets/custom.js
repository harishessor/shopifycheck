// A. Run on initial load (use a delay for safety)
document.addEventListener('DOMContentLoaded', () => {
   
const product_data = async () => {

    function getScopedProductData() {
        // 1. Identify the scope (Quick View or Main Body)
        // Check for a common Quick View modal container selector
        const quickViewModal = document.querySelector('.quick-buy-modal__content, .product-modal, [data-quick-view-modal]');
        
        // The scope for our selectors will be the modal if it exists, otherwise the main document body.
        const scope = quickViewModal || document;
        
        // Find the product form within the determined scope
        const productForm = scope.querySelector('form[action*="/cart/add"]');
        
        let productHandle = null;
        let selectedVariantId = null;
        
        if (quickViewModal) {
                const product_detail = quickViewModal.parentElement;
                let pro_handle = product_detail.getAttribute('handle');
                productHandle = pro_handle.split("?")[0];
            const variantIdInput = productForm.querySelector('[name="id"][type="hidden"], select[name="id"]');
            selectedVariantId = variantIdInput ? parseInt(variantIdInput.value) : null;
        } else if (scope === document) {
            
            productHandle = window.location.pathname.split('/products')[1];
            productHandle = productHandle.replace("/", "");
            const variantIdInput = document.querySelector('[name="id"][type="hidden"], select[name="id"]');
            selectedVariantId = variantIdInput ? parseInt(variantIdInput.value) : null;
        }


        if (!productHandle || !selectedVariantId) {
            console.warn('Could not reliably retrieve product data.', { productHandle, selectedVariantId });
            return null;
        }

        return { productHandle, selectedVariantId };
    }

    async function fetchAndUpdateProductData(productData) {
        const { productHandle, selectedVariantId } = productData;
        const productUrl = `/products/${productHandle}.js`;

        const response = await fetch(productUrl);
        if (!response.ok) throw new Error(`Failed to fetch product data.`);
        const data = await response.json();
        const currentVariant = data.variants.find(variant => variant.id === selectedVariantId);
        if (currentVariant) {
            const defaultPrice = currentVariant.price / 100;
            const defaultCompareAtPrice = currentVariant.compare_at_price ? currentVariant.compare_at_price / 100 : null;
                       
            return { defaultPrice, defaultCompareAtPrice }; 
        }
        return null;
           
    }
    const productData = getScopedProductData();
    if (productData) {        
        return await fetchAndUpdateProductData(productData); 
    }
}
    // const updateDiscountBadge = async () => {
    //     console.log("discount badge")
    //     const subscription_widget = document.querySelector("recharge-subscription-widget")?.shadowRoot.querySelector(".rc-widget__root");
    //     if ( !subscription_widget ) return;
    //     const root = subscription_widget.querySelector(".rc-selection__root");
    //     const btn_selected = root.querySelector(".rc-purchase-option__subscription");
    //     const one_time = root.querySelector('[part*="rc-purchase-option__onetime"][rc-selected]');
    //     if ( one_time ) {
    //         const price_one = await product_data()
    //         const price_list = document.querySelector('[data-block-type="price"] .price-list');            
    //         let discount_badge = price_list.querySelector('.discount-badge');
    //         if ( price_one?.defaultPrice >= price_one?.defaultCompareAtPrice ) {
    //             const newPriceListHTML = `
    //                     <sale-price class="h4 text-on-sale">
    //                         <span class="sr-only">Sale price</span>$${price_one?.defaultPrice}
    //                     </sale-price>
    //                 `;
    //             price_list.innerHTML = newPriceListHTML;  
                
    //         } else {
    //             let cal_discounte = price_one?.defaultCompareAtPrice - price_one?.defaultPrice;
    //             let amt = cal_discounte / price_one?.defaultCompareAtPrice;
    //             amt = amt*100;
    //             amt = Math.round(amt);
    //             const newPriceListHTML = `
    //                     <sale-price class="h4 text-on-sale">
    //                         <span class="sr-only">Sale price</span>$${price_one?.defaultPrice}
    //                     </sale-price>
    //                     <compare-at-price class="h5 text-subdued line-through">
    //                         <span class="sr-only">Regular price</span>$${price_one?.defaultCompareAtPrice}
    //                     </compare-at-price>
    //                     <span class="discount-badge text-bold">${amt}% Off</span>
    //                 `;
    //             price_list.innerHTML = newPriceListHTML;  
    //         }
              
    //         return;
    //     }


    //     let label = btn_selected.querySelector(".rc-purchase-option__label");
    //     let prices = btn_selected.querySelector(".rc-purchase-option__prices");
    //     let strike_th = prices.querySelector('[part*="rc-purchase-option__discounted-price"]')?.textContent.split(":")[1];
    //     let original = prices.querySelector('[part*="rc-purchase-option__original-price"]')?.textContent;
    //     original = original.trim();
    //     strike_th = strike_th.trim();
    //     let discounted = btn_selected.querySelector(".rc-purchase-option__badge")?.textContent;
    //     discounted = discounted.split(" ")[1];
    //     btn_selected.part.forEach(element => {
            
    //         if ( element == "rc-purchase-option__selected" ) {
    //             console.log("discount badge", original )
    //             const price_list = document.querySelector('[data-block-type="price"] .price-list');            
    //             let discount_badge = price_list.querySelector('.discount-badge');
    //                 const newPriceListHTML = `
    //                     <sale-price class="h4 text-on-sale">
    //                         <span class="sr-only">Sale price</span>${strike_th}
    //                     </sale-price>
    //                     <compare-at-price class="h5 text-subdued line-through">
    //                         <span class="sr-only">Regular price</span>${original}
    //                     </compare-at-price>
    //                     <span class="discount-badge text-bold">${discounted} Off</span>
    //                 `;
    //                 price_list.innerHTML = newPriceListHTML;
                
    //         }
    //     });
    // }
const updateDiscountBadge = async () => {
    
    const widgetElements = document.querySelectorAll("recharge-subscription-widget");
    const len = widgetElements.length;
    // 1. Get ALL potential product containers once outside the loop
    // const allProductContainers = document.querySelectorAll('product-form, .product-block, [data-product-container]'); 
    const allProductContainers = document.querySelectorAll('[data-block-type="price"] .price-list');
    
    // We assume the order of 'widgetElements' and 'allProductContainers' is the same.
    // This is the most common and necessary assumption for this index-based approach to work.

    for (let index = 0; index < len; index++) { 
        const widgetEl = widgetElements[index]; 
        
        let subscription_widget = null; 
    if (widgetEl.shadowRoot) {
        const root = widgetEl.shadowRoot.querySelector(".rc-widget__root");
        if (root) {
            subscription_widget = root;
        }
    }
    
        // If a valid widget root was found for this element, proceed
        if (!subscription_widget) continue; 

        // 🎯 FIX 1: ACCESS THE SPECIFIC CONTAINER USING THE INDEX
        const price_list = allProductContainers[index]; 
        
        
        // Skip if the container for this index doesn't exist
        // if (!productContainer) {
        //     console.warn(`Could not find a product container at index ${index}. Skipping price update.`);
        //     continue;
        // }

        // 🎯 FIX 2: PRICE LIST SEARCH IS NOW CORRECTLY SCOPED
        // 'productContainer' is now a single Element, so .querySelector works.
        // const price_list = productContainer.querySelector('[data-block-type="price"] .price-list');
        // console.log("price_list", price_list)
        if (!price_list) continue;

        const root = subscription_widget.querySelector(".rc-selection__root");
        const btn_selected = root.querySelector(".rc-purchase-option__subscription");
        const one_time = root.querySelector('[part*="rc-purchase-option__onetime"][rc-selected]');
        
        // --- One-Time Selected Logic ---
        if (one_time) {
            const price_one = await product_data()
            
            // let discount_badge = price_list.querySelector('.discount-badge'); // Removed unnecessary line

            if (price_one?.defaultPrice >= price_one?.defaultCompareAtPrice) {
                const newPriceListHTML = `
                    <sale-price class="h4 text-on-sale">
                        <span class="sr-only">Sale price</span>$${price_one?.defaultPrice}
                    </sale-price>
                `;
                price_list.innerHTML = newPriceListHTML;
            } else {
                let cal_discounte = price_one?.defaultCompareAtPrice - price_one?.defaultPrice;
                let amt = cal_discounte / price_one?.defaultCompareAtPrice;
                amt = amt * 100;
                amt = Math.round(amt);
                const newPriceListHTML = `
                    <sale-price class="h4 text-on-sale">
                        <span class="sr-only">Sale price</span>$${price_one?.defaultPrice}
                    </sale-price>
                    <compare-at-price class="h5 text-subdued line-through">
                        <span class="sr-only">Regular price</span>$${price_one?.defaultCompareAtPrice}
                    </compare-at-price>
                    <span class="discount-badge text-bold">${amt}% Off</span>
                `;
                price_list.innerHTML = newPriceListHTML;
            }
            
            continue;
        }

        // --- Subscription selected logic ---
        
        if (!btn_selected) continue;

        let prices = btn_selected.querySelector(".rc-purchase-option__prices");
        
        let strike_th_raw = prices?.querySelector('[part*="rc-purchase-option__discounted-price"]')?.textContent;
        let strike_th = strike_th_raw ? strike_th_raw.split(":")[1]?.trim() : '';

        let original_text = prices?.querySelector('[part*="rc-purchase-option__original-price"]')?.textContent;
        let original = original_text ? original_text.trim() : '';
        
        let discounted_text = btn_selected.querySelector(".rc-purchase-option__badge")?.textContent;
        let discounted = discounted_text ? discounted_text.split(" ")[1] : '';

        if (btn_selected?.part?.contains("rc-purchase-option__selected")) {
            console.log(`Subscription selected for widget index ${index}.`);
            
            const newPriceListHTML = `
                <sale-price class="h4 text-on-sale">
                    <span class="sr-only">Sale price</span>${strike_th}
                </sale-price>
                <compare-at-price class="h5 text-subdued line-through">
                    <span class="sr-only">Regular price</span>${original}
                </compare-at-price>
                <span class="discount-badge text-bold">${discounted} Off</span>
            `;
            price_list.innerHTML = newPriceListHTML;
        }
    }
}
    
    if ( window.location.href.includes("/products")) {
        setTimeout(() => {
            updateDiscountBadge();
        }, 1000);

    }

    document.addEventListener("click", () => {
        
        setTimeout(() => {
            updateDiscountBadge();
        }, 1000);
    })



});

// $(document).ready(function(){
// 	$('a[href^="#"]').on('click',function (e) {
//         console.log("video play")
// 	    e.preventDefault();
// 	    var target = this.hash;
// 	    var $target = $(target);
// 	    $('html, body').stop().animate({
// 	        'scrollTop': $target.offset().top - 130
// 	    }, 900, 'swing', function () {
// 	        // window.location.hash = target;
// 	    });
// 	});
// });

// Testimonial slider
$(document).ready(function(){
    $('.testimonial__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        dots: true,        
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        prevArrow: '<div class="slick-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none"><path d="M0.5 12.5L6.5 6.5L0.5 0.5" stroke="#035C68" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
        nextArrow: '<div class="slick-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none"><path d="M0.5 12.5L6.5 6.5L0.5 0.5" stroke="#035C68" stroke-linecap="round" stroke-linejoin="round"/></svg></div>'
    });
});

// Testimonial slider
$(document).ready(function(){
    $('.before-after__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: true,
        dots: false,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: false,
        prevArrow: '<div class="slick-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none"><path d="M4.54054 10L12 2.33333L9.72973 -4.253e-07L0 10L9.72973 20L12 17.6667L4.54054 10Z" fill="#035C68"/></svg></div>',
        nextArrow: '<div class="slick-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none"><path d="M7.45946 10L0 2.33333L2.27027 -4.253e-07L12 10L2.27027 20L0 17.6667L7.45946 10Z" fill="#035C68"/></svg></div>'
    });
});

// Fancybox
Fancybox.bind("[data-fancybox]", {
    dragToClose: false,
});

// Custom Tab for ingredient popup
$('.tab-link').click( function() {	
	var tabID = $(this).attr('data-tab');	
	$(this).addClass('active').siblings().removeClass('active');	
	$('#tab-'+tabID).addClass('active').siblings().removeClass('active');
});
document.addEventListener("DOMContentLoaded", () => {
  // When the popup trigger is clicked — add class to body
  document.querySelectorAll(".ingredients_popup_trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      document.body.classList.add("ingredient_popup_open");
    });
  });

  // Bind Fancybox events globally
  Fancybox.bind("[data-fancybox]", {
    on: {
      close: () => {
        // Remove the class once the modal fully closes
        document.body.classList.remove("ingredient_popup_open");
      },
    },
  });

  // Handle close button clicks *inside* Fancybox
  document.addEventListener("click", (e) => {
    const closeBtn = e.target.closest(".is-close-button");
    if (closeBtn && Fancybox.getInstance()) {
      Fancybox.getInstance().close();
      document.body.classList.remove("ingredient_popup_open");
    }
  });
});


// Video reels play/pause 
document.addEventListener("DOMContentLoaded", () => {

  // 🎥 Play video on .reel_play click
  document.addEventListener("click", (e) => {
    const playBtn = e.target.closest(".reel_play");
    if (!playBtn) return;

    const popup = playBtn.closest(".video_reel__popup");
    const video = popup?.querySelector("video");

    if (video) {
      video.play();
      popup.classList.add("is-playing");
      playBtn.style.display = "none"; // hide play icon when playing
    }
  });

  // 🔇 Mute/unmute video
  document.addEventListener("click", (e) => {
    const muteBtn = e.target.closest(".reel_mute");
    if (!muteBtn) return;

    const popup = muteBtn.closest(".video_reel__popup");
    const video = popup?.querySelector("video");
    const iconMute = muteBtn.querySelector(".icon_mute");
    const iconUnmute = muteBtn.querySelector(".icon_unmute");

    if (video) {
      if (video.muted) {
        video.muted = false;
        iconMute.style.display = "none";
        iconUnmute.style.display = "block";
      } else {
        video.muted = true;
        iconMute.style.display = "block";
        iconUnmute.style.display = "none";
      }
    }
  });

  // ⏸ Pause, reset, and restore poster image
  function resetAllVideos() {
    document.querySelectorAll(".video_reel__popup video").forEach(video => {
      video.pause();
      video.currentTime = 0;
      video.load(); // 👈 ensures poster image shows again

      const popup = video.closest(".video_reel__popup");
      const playBtn = popup?.querySelector(".reel_play");
      if (playBtn) playBtn.style.display = "block"; // show play icon again
      popup?.classList.remove("is-playing");
    });
  }

  // 🧭 Fancybox event listeners
  Fancybox.bind("[data-fancybox]", {
    Hash: false, // 👈 disables #hash fragments like #reels-1
    on: {
      close: () => {
        resetAllVideos();
      },
      "Carousel.change": () => {
        resetAllVideos();
      },
    },
  });

  // ⏹ Manual close button
  document.addEventListener("click", (e) => {
    const closeBtn = e.target.closest(".is-close-button");
    if (!closeBtn) return;
    resetAllVideos();
  });

});

// Meet Your Fragrances slider
jQuery(document).ready(function($) {
  var mainSlider = $('.fragrances-slider');
  var dotItems   = $('.select-scent-slider .item');

  if (mainSlider.length && dotItems.length) {

    // Slick init → active without delay
    mainSlider.on('init', function(event, slick) {
      dotItems.removeClass('active');
      dotItems.eq(slick.currentSlide).addClass('active');
    });

    // Initialize main slider
    mainSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      infinite: true,
      centerMode: true,
      centerPadding: '196px',

      responsive: [
        { breakpoint: 1399, settings: { centerPadding: '184px' } },
        { breakpoint: 1199, settings: { centerPadding: '140px' } },
        { breakpoint: 991,  settings: { centerPadding: '196px' } },
        { breakpoint: 567,  settings: { centerPadding: '124px' } }
      ]
    });

    // CLICK → no delay
    dotItems.on('click', function () {
      var index = $(this).index();
      dotItems.removeClass('active');
      $(this).addClass('active');
      mainSlider.slick('slickGoTo', index, true);

      // NEW — Show matching scent content
      showScentContent($(this).data("id"));
    });

    // SYNC when slider changes
    mainSlider.on('afterChange', function(event, slick, currentSlide){
      dotItems.removeClass('active');
      dotItems.eq(currentSlide).addClass('active');

      // NEW — Sync scent content on slide change
      var matchID = dotItems.eq(currentSlide).data("id");
      showScentContent(matchID);
    });

    // Function to show matching scent content
    function showScentContent(id) {
      $(".scent-content").hide();   // Hide all
      $("." + id).show();           // Show matching (e.g. .scent1)
    }

    // DEFAULT STATE
    setTimeout(function() {
      dotItems.first().addClass("active");
      $(".scent-content").hide();
      $(".scent1").show(); // Default show first scent
    }, 50);

  }
});



// Meet Your Fragrances slider
jQuery(document).ready(function($) {
  var mainSlider = $('.fragrances-slider');
  var dotItems   = $('.select-scent-slider .item');

  if (mainSlider.length && dotItems.length) {

    // Slick init → active without delay
    mainSlider.on('init', function(event, slick) {
      dotItems.removeClass('active');
      dotItems.eq(slick.currentSlide).addClass('active');
    });

    // Initialize main slider
    mainSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      infinite: true,
      centerMode: true,
      centerPadding: '196px',

      responsive: [
        { breakpoint: 1399, settings: { centerPadding: '184px' } },
        { breakpoint: 1199, settings: { centerPadding: '140px' } },
        { breakpoint: 991,  settings: { centerPadding: '196px' } },
        { breakpoint: 567,  settings: { centerPadding: '124px' } },
        { breakpoint: 410,  settings: { centerPadding: '106px' } }
      ]
    });

    // CLICK → no delay
    dotItems.on('click', function () {
      var index = $(this).index();
      dotItems.removeClass('active');
      $(this).addClass('active');
      mainSlider.slick('slickGoTo', index, true);

      // NEW — Show matching scent content
      showScentContent($(this).data("id"));
    });

    // SYNC when slider changes
    mainSlider.on('afterChange', function(event, slick, currentSlide){
      dotItems.removeClass('active');
      dotItems.eq(currentSlide).addClass('active');

      // NEW — Sync scent content on slide change
      var matchID = dotItems.eq(currentSlide).data("id");
      showScentContent(matchID);
    });

    // Function to show matching scent content
    function showScentContent(id) {
      $(".scent-content").hide();   // Hide all
      $("." + id).show();           // Show matching (e.g. .scent1)
    }

    // DEFAULT STATE
    setTimeout(function() {
      dotItems.first().addClass("active");
      $(".scent-content").hide();
      $(".scent1").show(); // Default show first scent
    }, 50);

  }
});





// $('.select-scent-slider').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   arrows: false,
//   dots: false,
//   infinite: false,
//   variableWidth: true,
//   cssEase: 'linear',
//   asNavFor: '.fragrances-slider',
//   focusOnSelect: true,
//   responsive: [
//     {
//       breakpoint: 767,
//       settings: {
//         slidesToShow: 3
//       }
//     }    
//   ]
// });




// Product Navigation scroll
$(document).ready(function () {
  // Smooth scroll on nav click
  $('.product-nav-item a[href*="#"]').on('click', function (e) {
    console.log("stick scroll")
    e.preventDefault();

    var target = $(this).attr("href");

    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 170 // adjust offset if you have a sticky header
    }, 600);
  });

  // Highlight nav item on scroll
  $(window).on('scroll', function () {
    console.log("scrolled")
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();

    $('.shopify-section').each(function () {
      var sectionTop = $(this).offset().top;
      var sectionHeight = $(this).outerHeight();
      var sectionId = $(this).attr('id');

      // Check if section is in viewport (visible area)
      if (scrollPos + windowHeight / 2 >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        $('.product-nav-item a').removeClass('active');
        $('.product-nav-item a[href="#' + sectionId + '"]').addClass('active');
      }
    });
  }).scroll(); // trigger on load
});


// Add class in product navigation once header shown
$(document).ready(function () {
  const header = document.querySelector('x-header');
  const productNav = document.querySelector('.shopify-section--product-navigation');

  if (header && productNav) {
    const observer = new MutationObserver(() => {
      if ($(header).hasClass('is-hidden')) {
        $(productNav).addClass('header-hidden');
      } else {
        $(productNav).removeClass('header-hidden');
      }
    });

    // Watch for attribute changes (like class changes)
    observer.observe(header, { attributes: true, attributeFilter: ['class'] });
  }
});

// Add class in product navigation touch to header
// jQuery(function($) {

//   $(window).on('scroll', function() {

//     const body = $('body');
//     const header = $('x-header');
//     const section = $('.shopify-section--product-navigation');

//     if (!header.length || !section.length) return;

//     // Header bottom Y position
//     const headerBottom = header.offset().top + header.outerHeight() + 60;

//     // Section top Y position
//     const sectionTop = section.offset().top;

//     // If header bottom touches (or reaches) the section top
//     if (headerBottom >= sectionTop) {
//       body.addClass('touched-nav');
//     } else {
//       body.removeClass('touched-nav');
//     }

//   });

// });




// Sticky add to cart toggle option
jQuery(function($) {
  $(document).on('click', '.change-subscription', function() {
    console.log("jquery scroll");

    $(this).toggleClass('active');

    // Change text based on active class
    if ($(this).hasClass('active')) {
      $(this).text('Close');
    } else {
      $(this).text('Change');
    }

    $('.product-sticky-bar__options').stop(true, true).slideToggle(300);
  });
});


$(document).on('click', 'recharge-subscription-widget', function(e) {
  var plan = document.querySelector('recharge-subscription-widget')?.shadowRoot.querySelector('input[name="purchaseOption"]:checked');
  if (plan) {
    if (plan.value == 'onetime') {
      $('#SellingPlanSelector').val('');  
    } else if (plan.value == 'subscription') {
      setTimeout(function() {
        var checkedPlan = document.querySelector('recharge-subscription-widget')?.shadowRoot?.querySelector('rc-selling-plans')?.shadowRoot?.querySelector('input:checked');
        if (checkedPlan) {
          var subscription = checkedPlan.value;
          $('#SellingPlanSelector').val(subscription);
        }
      }, 500)
    }
  }
});

$(document).on('change', '#SellingPlanSelector', function(e) {
    var value = $('#SellingPlanSelector').val();
    if (value) {
      if (
        document.querySelector('recharge-subscription-widget') &&
        document.querySelector('recharge-subscription-widget').shadowRoot &&
        document.querySelector('recharge-subscription-widget').shadowRoot.querySelector('input[name="purchaseOption"][value="subscription"]')  
      ) {
        document.querySelector('recharge-subscription-widget').shadowRoot.querySelector('input[name="purchaseOption"][value="subscription"]').checked = true;
        document.querySelector('recharge-subscription-widget').shadowRoot.querySelector('input[name="purchaseOption"][value="subscription"]').dispatchEvent(new Event('change'));
      }
      setTimeout(function() {
        if (
          document.querySelector('recharge-subscription-widget') &&
          document.querySelector('recharge-subscription-widget').shadowRoot &&
          document.querySelector('recharge-subscription-widget').shadowRoot.querySelector('rc-selling-plans').shadowRoot &&
          document.querySelector('recharge-subscription-widget').shadowRoot.querySelector('rc-selling-plans').shadowRoot.querySelector(`input[value="${value}"]`)
        ) {
          console.log(document.querySelector('recharge-subscription-widget').shadowRoot.querySelector('rc-selling-plans').shadowRoot.querySelector(`input[value="${value}"]`))
          document.querySelector('recharge-subscription-widget').shadowRoot.querySelector('rc-selling-plans').shadowRoot.querySelector(`input[value="${value}"]`).checked = true;
          document.querySelector('recharge-subscription-widget').shadowRoot.querySelector('rc-selling-plans').shadowRoot.querySelector(`input[value="${value}"]`).dispatchEvent(new Event('click'));
        }
      }, 500)
    } else {
      if (
        document.querySelector('recharge-subscription-widget') &&
        document.querySelector('recharge-subscription-widget').shadowRoot &&
        document.querySelector('recharge-subscription-widget').shadowRoot.querySelector('input[name="purchaseOption"][value="onetime"]')  
      ) {
        document.querySelector('recharge-subscription-widget').shadowRoot.querySelector('input[name="purchaseOption"][value="onetime"]').checked = true;
        document.querySelector('recharge-subscription-widget').shadowRoot.querySelector('input[name="purchaseOption"][value="onetime"]').dispatchEvent(new Event('input'));
      }
    }
});