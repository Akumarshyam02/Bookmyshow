import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const HeroSection = () => {
  const events = [
    {
      tag: "POPULAR",
      tagColor: "bg-red-600",
      title: "ED SHEERAN LIVE IN BINAN",
      date: "AUG 15, 2017",
      location: "Binan Ampitheatre",
      img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    },
    {
      tag: "NEW",
      tagColor: "bg-blue-600",
      title: "RONNIE ALONTE #KILIGKING",
      date: "NOV 04, 2017",
      location: "MOA Grounds",
      img: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae",
    },
    {
      tag: "TRENDING",
      tagColor: "bg-green-600",
      title: "COLDPLAY MUSIC FESTIVAL",
      date: "DEC 20, 2017",
      location: "Wembley Stadium",
      img: "https://images.unsplash.com/photo-1521334884684-d80222895322",
    },
  ];

  return (
    <section className="h-screen px-6 bg-[#06142e] flex justify-center no-scroll">
      <div className="w-full max-w-6xl">
        {/* ==== Header ==== */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Upcoming Events
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[#1A98FF] to-[#4facfe] mt-2 rounded-full"></div>
        </div>

        {/* ==== Swiper Slider ==== */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 2 } }}
          className="pb-10 slider-group"
        >
          {events.map((event, i) => (
            <SwiperSlide key={i}>
              <div className="relative overflow-hidden shadow-lg group bg-[#0a1a2f] rounded-lg">
                {/* Image */}
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-3">
                  <span
                    className={`inline-block text-[11px] md:text-xs font-bold px-2 py-0.5 rounded ${event.tagColor}`}
                  >
                    {event.tag}
                  </span>

                  <h2 className="text-lg md:text-xl font-bold leading-snug">
                    {event.title}
                  </h2>

                  <hr className="border-t border-gray-400/50 my-2" />

                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-xs md:text-sm opacity-80">
                        {event.date}
                      </p>
                      <p className="text-xs md:text-sm opacity-80">
                        {event.location}
                      </p>
                    </div>

                    <button className="bg-gradient-to-r from-[#1A98FF] to-[#4facfe] px-5 py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition">
                      BUY TICKETS
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ==== Custom CSS Fix ==== */}
      <style>{`
        .no-scroll {
          overflow-x: hidden; /* Prevent horizontal scroll */
        }

        .slider-group .swiper-button-next,
        .slider-group .swiper-button-prev {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.3s ease, visibility 0.3s ease;
          width: 40px;
          height: 40px;
        }

        .slider-group .swiper-button-next {
          right: 10px; /* Prevent overflow */
        }

        .slider-group .swiper-button-prev {
          left: 10px; /* Prevent overflow */
        }

        .slider-group .swiper-button-next::after,
        .slider-group .swiper-button-prev::after {
          font-size: 22px;
          color: #fff;
        }

        .slider-group:hover .swiper-button-next,
        .slider-group:hover .swiper-button-prev {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
