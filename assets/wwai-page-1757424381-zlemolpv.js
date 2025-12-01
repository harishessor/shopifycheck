/* Start Section drmtlgy_zive_24jun_wwai_hero_banner_video_image_2_b4mPPU */
function startTimerBanner(){const timerElement=document.getElementById('timer_count');const timerHTML=timerElement.innerHTML;const fixTime=new Date().getTime();const targetDate=new Date(fixTime+24*60*60*1000);let interval;const updateCountdown=()=>{const now=new Date().getTime();let distance=targetDate.getTime()-now;const totalDays=Math.floor(distance/(1000*60*60*24));const hours=String(Math.floor((distance%(1000*60*60*24))/(1000*60*60))).padStart(2,'0');const minutes=String(Math.floor((distance%(1000*60*60))/(1000*60))).padStart(2,'0');const seconds=String(Math.floor((distance%(1000*60))/1000)).padStart(2,'0');let display=`<span>${timerHTML}<strong>${hours<10?'0':''}${hours}:${minutes<10?'0':''}${minutes}:${seconds<10?'0':''}${seconds}</strong></span>`;timerElement.innerHTML=display;};interval=setInterval(updateCountdown,1000);updateCountdown();}
startTimerBanner();
/* End Section drmtlgy_zive_24jun_wwai_hero_banner_video_image_2_b4mPPU */
/* Start Section nwkw_val_zive_23jan_wwai_marquee_section_1_HKCgMX */
document.addEventListener("DOMContentLoaded",()=>{const ele=document.querySelector('.section-template--nwkw_val_zive_23jan_wwai_marquee_section_1_HKCgMX #marquee');const subject=ele.innerHTML;for(var i=0;i<=4;i++){ele.insertAdjacentHTML('beforeend',subject);}
const perentEle=document.querySelector('.section-template--nwkw_val_zive_23jan_wwai_marquee_section_1_HKCgMX .marquee-container');const perentSubject=perentEle.innerHTML;perentEle.insertAdjacentHTML('beforeend',perentSubject);});
/* End Section nwkw_val_zive_23jan_wwai_marquee_section_1_HKCgMX */
/* Start Section product_section_puracy_gFXzY8 */
function equalizeSlideHeights(){let maxHeight=0;let slides=document.querySelectorAll('.review-carousel-template--product_section_puracy_gFXzY8 .swiper-slide');slides.forEach(slide=>{slide.style.height='auto';});slides.forEach(slide=>{if(slide.offsetHeight>maxHeight){maxHeight=slide.offsetHeight;}});slides.forEach(slide=>{slide.style.height=maxHeight+'px';});}
setTimeout(function(){equalizeSlideHeights();},1000);window.addEventListener("resize",equalizeSlideHeights);document.addEventListener('DOMContentLoaded',function(){var swiper=new Swiper('.product-thumbnails-template--product_section_puracy_gFXzY8',{slidesPerView:4,spaceBetween:10,grabCursor:true,loop:false,slideToClickedSlide:true,watchSlidesVisibility:true,watchSlidesProgress:true,breakpoints:{768:{slidesPerView:4,spaceBetween:13,},},});var Swipes2=new Swiper('.product-carousel-template--product_section_puracy_gFXzY8',{shortSwipes:true,resizeObserver:true,observer:true,observeParents:true,loop:false,slidesPerView:1,grabCursor:true,navigation:{nextEl:'.product-carousel-template--product_section_puracy_gFXzY8 .swiper-button-next',prevEl:'.product-carousel-template--product_section_puracy_gFXzY8 .swiper-button-prev',},thumbs:{swiper:swiper,},});var Swipes3=new Swiper('.review-carousel-template--product_section_puracy_gFXzY8',{shortSwipes:true,resizeObserver:true,observer:true,observeParents:true,loop:false,slidesPerView:1,spaceBetween:10,grabCursor:true,breakpoints:{320:{slidesPerView:1.2,centeredSlides:false,loop:false,},768:{slidesPerView:2.2,centeredSlides:false,loop:false,},1024:{slidesPerView:3,centeredSlides:false,loop:false,},},});});document.addEventListener("DOMContentLoaded",function(){const productSection=document.querySelector('.section-template--product_section_puracy_gFXzY8.product_fixed');const parentSection=document.querySelector('#shopify-section-template--product_section_puracy_gFXzY8');window.addEventListener('scroll',(event)=>{let windowTop=Math.floor(window.scrollY);let parentTop=parentSection.offsetTop;let parentheight=parentSection.offsetHeight;if(windowTop<200){productSection.style.display='none';}else if(windowTop<parentTop){productSection.style.display='block';}else if(windowTop>parentTop&&windowTop<(parentTop+parentheight)){productSection.style.display='none';}else{productSection.style.display='block';}});});function scrollToVariantImage(imgId){const matchingSlide=document.querySelector(`.swiper-slide[data-mediaid="${imgId}"]`);if(!matchingSlide)return;const swiperContainer=matchingSlide.closest(".swiper");if(!swiperContainer||!swiperContainer.swiper)return;const index=Array.from(swiperContainer.querySelectorAll(".swiper-slide")).indexOf(matchingSlide);if(index>=0){swiperContainer.swiper.slideTo(index);}}
function initVariantImageScroll(){const variantInputs=document.querySelectorAll('.variant-tab-option-values input[type="radio"][data-img-id][data-variant="true"]');variantInputs.forEach((input)=>{input.addEventListener("input",function(event){if(!event.target.checked)return;const imgId=event.target.getAttribute("data-img-id");if(!imgId)return;scrollToVariantImage(imgId);});});}
document.addEventListener("DOMContentLoaded",initVariantImageScroll);document.addEventListener("DOMContentLoaded",function(){const productSection=document.querySelector('.section-template--product_section_puracy_gFXzY8.product_fixed');const parentSection=document.querySelector('#shopify-section-template--product_section_puracy_gFXzY8');window.addEventListener('scroll',(event)=>{let windowTop=Math.floor(window.scrollY);let parentTop=parentSection.offsetTop;let parentheight=parentSection.offsetHeight;if(windowTop<200){productSection.style.display='none';}else if(windowTop<parentTop){productSection.style.display='block';}else if(windowTop>parentTop&&windowTop<(parentTop+parentheight)){productSection.style.display='none';}else{productSection.style.display='block';}});});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".main_qty_wrap").forEach(wrapper=>{const minusBtn=wrapper.querySelector(".minus");const plusBtn=wrapper.querySelector(".plus");const input=wrapper.querySelector('input[type="number"]');minusBtn.addEventListener("click",()=>{let value=parseInt(input.value,10)||1;const min=parseInt(input.min,10)||1;if(value>min){input.value=value-1;input.dispatchEvent(new Event("change"));}});plusBtn.addEventListener("click",()=>{let value=parseInt(input.value,10)||1;const step=parseInt(input.step,10)||1;input.value=value+step;input.dispatchEvent(new Event("change"));});});});
/* End Section product_section_puracy_gFXzY8 */
/* Start Section nwkw_val_zive_23june_wwai_video_carousel_1_PtM77C */
document.addEventListener('DOMContentLoaded',function(){var swiperInstance;function initSwiper(){if(window.innerWidth>500&&!swiperInstance){swiperInstance=new Swiper('.section-template--nwkw_val_zive_23june_wwai_video_carousel_1_PtM77C .swiper',{loop:false,slidesPerView:1,spaceBetween:15,grabCursor:false,centeredSlides:true,initialSlide:0,roundLengths:true,speed:1500,breakpoints:{500:{slidesPerView:2,centeredSlides:false,loop:false,initialSlide:0,spaceBetween:15},768:{slidesPerView:3,centeredSlides:false,loop:false,initialSlide:0,spaceBetween:30},1199:{slidesPerView:4,centeredSlides:false,loop:false,initialSlide:0,spaceBetween:30}}});swiperInstance.on('slideChange',function(){document.querySelectorAll('.section-template--nwkw_val_zive_23june_wwai_video_carousel_1_PtM77C video-player').forEach(video=>{video.classList.remove('played');video.querySelectorAll('video').forEach(ele=>{ele.pause();});});});}
if(window.innerWidth<=500&&swiperInstance){swiperInstance.destroy(true,true);swiperInstance=undefined;}}
initSwiper();window.addEventListener('resize',function(){initSwiper();});});document.querySelectorAll('.section-template--nwkw_val_zive_23june_wwai_video_carousel_1_PtM77C video-player').forEach(video=>{video.addEventListener('click',function(){document.querySelectorAll('.section-template--nwkw_val_zive_23june_wwai_video_carousel_1_PtM77C video-player').forEach(ele=>{if(video!=ele){ele.classList.remove('played');ele.querySelectorAll('video').forEach(ele=>{ele.pause();});}});});});
/* End Section nwkw_val_zive_23june_wwai_video_carousel_1_PtM77C */
/* Start Section nwkw_val_zive_20fab_wwai_products_grid_1_T4jjed */
document.addEventListener('DOMContentLoaded',function(){const enableCarouselMobile=true;const enableCarouselDesktop=false;let topselling;function initSwiper(){topselling=new Swiper('.section-template--nwkw_val_zive_20fab_wwai_products_grid_1_T4jjed .swiper',{loop:false,slidesPerView:1,spaceBetween:15,grabCursor:true,navigation:{nextEl:'.section-template--nwkw_val_zive_20fab_wwai_products_grid_1_T4jjed .swiper-button-next',prevEl:'.section-template--nwkw_val_zive_20fab_wwai_products_grid_1_T4jjed .swiper-button-prev',},breakpoints:{640:{slidesPerView:1,centeredSlides:false,loop:false,},768:{slidesPerView:2,centeredSlides:false,loop:false,},1024:{slidesPerView:2,centeredSlides:false,loop:false,},1200:{slidesPerView:3,centeredSlides:false,loop:false,},},});}
function checkCarousel(){if((!enableCarouselDesktop&&!enableCarouselMobile)||(window.innerWidth<750&&!enableCarouselMobile)||(window.innerWidth>=750&&!enableCarouselDesktop)){if(topselling){topselling.destroy(true,true);topselling=null;}}else{if(!topselling){initSwiper();}}}
checkCarousel();window.addEventListener('resize',function(){checkCarousel();});});
/* End Section nwkw_val_zive_20fab_wwai_products_grid_1_T4jjed */
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
(function () {
  // Check if the custom element is already defined
  if (!customElements.get('video-player')) {
    class VideoPlayer extends HTMLElement {
      constructor() {
        super();
        this.videos = this.querySelectorAll('video');
        this.videoWeb = this.videos[0];
        this.videoMob = this.videos[1];
        this.playBtn = this.querySelector('.play-btn');
        this.soundBtn = this.querySelector('.mute-btn');
        this.disableClick = this.dataset.click;

        if (this.disableClick) {
          this.initEventListeners();
        }
      }

      initEventListeners() {
        this.videos.forEach(video => {
          video.addEventListener('click', () => this.togglePlay(video));
          video.addEventListener('ended', () => this.handleVideoEnded(video));
        });

        if (this.playBtn) {
          this.playBtn.addEventListener('click', () => this.handlePlayButton());
        }

        if (this.soundBtn) {
          this.soundBtn.addEventListener('click', () => this.toggleMute());
        }

        window.addEventListener('resize', () => this.handleResize());
      }

      togglePlay(video) {
        if (video.paused) {
          this.playVideo(video);
        } else {
          this.pauseVideo(video);
        }
      }

      playVideo(video) {
        this.videos.forEach(otherVideo => {
          if (otherVideo !== video) {
            otherVideo.pause();
            otherVideo.muted = true;
          }
        });

        video.muted = false;
        video.play();
        this.classList.add('played');

        // ✅ Hide the Play button
        if (this.playBtn) {
          this.playBtn.style.opacity = '0';
          this.playBtn.style.pointerEvents = 'none'; // Prevent clicking while hidden
        }

        if (this.soundBtn) {
          this.soundBtn.classList.remove('active');
        }
      }

      pauseVideo(video) {
        video.pause();
        video.muted = true;
        this.classList.remove('played');

        // ✅ Show the Play button again
        if (this.playBtn) {
          this.playBtn.style.opacity = '1';
          this.playBtn.style.pointerEvents = 'auto';
        }

        if (this.soundBtn) {
          this.soundBtn.classList.add('active');
        }
      }
      pauseAllVideo() {
        this.videos.forEach(video => {
          this.pauseVideo(video)
        });
      }

      handlePlayButton() {
        const targetVideo = window.innerWidth < 749 && this.videoMob ? this.videoMob : this.videoWeb;
        if (targetVideo) this.togglePlay(targetVideo);
      }

      toggleMute() {
        const targetVideo = window.innerWidth < 749 && this.videoMob ? this.videoMob : this.videoWeb;
        if (targetVideo) {
          targetVideo.muted = !targetVideo.muted;
          this.soundBtn.classList.toggle('active', targetVideo.muted);
        }
      }

      handleResize() {
        if (!this.videoMob) return;

        const isMobile = window.innerWidth < 749;
        const targetVideo = isMobile ? this.videoMob : this.videoWeb;

        this.videos.forEach(video => {
          video.pause();
          video.muted = true;
        });

        targetVideo.play();
        targetVideo.muted = false;
        targetVideo.pause();
      }

      handleVideoEnded(video) {
        if (!video.loop) {
          this.classList.remove('played');
          video.muted = true;

          // ✅ Show the Play button again
          if (this.playBtn) {
            this.playBtn.style.opacity = '1';
            this.playBtn.style.pointerEvents = 'auto';
          }
        }
      }
    }

    // Define the custom element
    customElements.define('video-player', VideoPlayer);
  }
})();

document.addEventListener("DOMContentLoaded", function(){
    equalizeSlideHeights();
});

// Also run after all resources (images) are loaded
window.addEventListener('load', function(){
    equalizeSlideHeights();
});

// function equalizeProductHeights() {
//   const section = document.getElementById('shopify-section-template--nwkw_val_zive_20fab_wwai_products_grid_1_T4jjed');
  
//   if (!section) return;
  
//   const productContainers = section.querySelectorAll('.product_container-class');
  
//   if (productContainers.length === 0) return;
  
//   // Reset heights
//   productContainers.forEach(container => {
//     container.style.height = 'auto';
//     container.style.display = 'flex';
//     container.style.flexDirection = 'column';
//   });
  
//   // Find max height
//   const maxHeight = Math.max(...Array.from(productContainers).map(c => c.offsetHeight));
  
//   // Apply height and ensure proper layout
//   productContainers.forEach(container => {
//     container.style.height = `${maxHeight}px`;
    
//     // Make the details section flex to push button to bottom
//     const details = container.querySelector('.product_container-detials');
//     if (details) {
//       details.style.display = 'flex';
//       details.style.flexDirection = 'column';
//       details.style.flex = '1';
      
//       // Push the CTA button to the bottom
//       const ctaWrapper = details.querySelector('[data-wwai-container-card-role="cta_btn"]');
//       if (ctaWrapper) {
//         ctaWrapper.style.marginTop = 'auto';
//       }
//     }
//   });
// }

// // Execute with multiple triggers for reliability
// document.addEventListener('DOMContentLoaded', equalizeProductHeights);
// window.addEventListener('load', equalizeProductHeights);
// window.addEventListener('resize', () => {
//   clearTimeout(window.resizeTimer);
//   window.resizeTimer = setTimeout(equalizeProductHeights, 250);
// });