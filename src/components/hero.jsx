import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

// Swiper
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperData from "../data/SwiperData";
import "swiper/css";
import "swiper/css/pagination";

const rawItems = Object.entries(SwiperData);
const slides =
  rawItems.length > 0 && rawItems.length < 8
    ? Array.from(
      { length: Math.ceil(8 / rawItems.length) },
      () => rawItems
    ).flat()
    : rawItems;

export default function Hero() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const transitionDuration = 700;
  const autoplayDelay = 3500;

  return (
    <div className="main relative mx-auto w-full px-4 py-8 flex justify-center items-center overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={-20}
        slidesPerView={1.35}
        grabCursor={true}
        loop={true}
        loopAdditionalSlides={2}
        loopPreventsSliding={true}
        watchSlidesProgress={true}
        centeredSlides={true}
        slideToClickedSlide={true}
        speed={transitionDuration}
        initialSlide={0}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.15,
            spaceBetween: -20,
          },
          768: {
            slidesPerView: 1.25,
            spaceBetween: -35,
          },
          1024: {
            slidesPerView: 1.35,
            spaceBetween: -50,
          },
        }}
        onSwiper={setSwiperInstance}
        className="w-full pb-12 [&_.swiper-slide]:z-10 [&_.swiper-slide-active]:z-30 [&_.swiper-slide-active]:relative [--swiper-pagination-color:#F38426] [--swiper-pagination-bullet-inactive-color:#ffffff] [--swiper-pagination-bullet-inactive-opacity:0.35]"
      >
        {slides.map(([id, item], index) => (
          <SwiperSlide key={`${id}-${index}`}>
            {({ isActive }) => (
              <div
                className={`w-full h-72 sm:h-80 md:h-88 relative overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer select-none group ${isActive
                    ? "border-[#F38426]/70 shadow-[0_20px_50px_rgba(0,0,0,0.9)] scale-100 opacity-100 ring-1 ring-white/10"
                    : "border-white/10 shadow-lg scale-90 opacity-40 hover:opacity-60"
                  }`}
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.HookLine || id}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay for High Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-5 sm:p-7 flex flex-col justify-end text-left z-10 pointer-events-none">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/60 text-[#F38426] border border-[#F38426]/40 mb-2 w-fit backdrop-blur-sm">
                    Featured Category
                  </span>
                  <h2 className="text-white text-2xl sm:text-3xl font-extrabold tracking-wide drop-shadow-md">
                    {id}
                  </h2>
                  {item.HookLine && (
                    <p className="text-gray-300 text-xs sm:text-sm font-medium mt-1 drop-shadow-sm">
                      {item.HookLine}
                    </p>
                  )}
                  {item.line2 && (
                    <p className="text-[#F38426] text-xl sm:text-2xl font-black mt-2 tracking-tight drop-shadow-md">
                      {item.line2}
                    </p>
                  )}
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-2 right-2 sm:left-4 sm:right-4 z-20 flex items-center justify-between pointer-events-none">
        <button
          type="button"
          onClick={() => swiperInstance?.slidePrev()}
          className="pointer-events-auto rounded-full border border-[#F38426]/60 bg-[#0B0B0C]/80 p-2.5 sm:p-3 text-[#F38426] hover:bg-[#F38426] hover:text-black hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-xl backdrop-blur-md"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          type="button"
          onClick={() => swiperInstance?.slideNext()}
          className="pointer-events-auto rounded-full border border-[#F38426]/60 bg-[#0B0B0C]/80 p-2.5 sm:p-3 text-[#F38426] hover:bg-[#F38426] hover:text-black hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-xl backdrop-blur-md"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
}
