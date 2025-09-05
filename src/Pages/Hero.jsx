import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const HeroSection = () => {
  const events = [
    {
      tag: "POPULAR",
      tagColor: "bg-red-600",
      title: "ED SHEERAN LIVE",
      date: "AUG 15, 2017",
      location: "Binan Ampitheatre",
      img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    },
    {
      tag: "NEW",
      tagColor: "bg-blue-600",
      title: "RONNIE ALONTE",
      date: "NOV 04, 2017",
      location: "MOA Grounds",
      img: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae",
    },
    {
      tag: "TRENDING",
      tagColor: "bg-green-600",
      title: "COLDPLAY 2025",
      date: "MAR 22, 2025",
      location: "Wembley Stadium",
      img: "https://images.unsplash.com/photo-1485217988980-11786ced9454",
    },
    {
      tag: "HOT",
      tagColor: "bg-yellow-500 text-black",
      title: "JUSTIN BIEBER TOUR",
      date: "APR 10, 2025",
      location: "Madison Square Garden",
      img: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    },
    {
      tag: "FEATURED",
      tagColor: "bg-purple-600",
      title: "ARIANA GRANDE LIVE",
      date: "JUN 02, 2025",
      location: "Crypto.com Arena",
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
    },
    {
      tag: "NEW",
      tagColor: "bg-blue-600",
      title: "SHAWN MENDES",
      date: "JUL 18, 2025",
      location: "Toronto",
      img: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef",
    },
    {
      tag: "POPULAR",
      tagColor: "bg-red-600",
      title: "BRUNO MARS",
      date: "SEP 10, 2025",
      location: "Las Vegas Arena",
      img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    },
    {
      tag: "HOT",
      tagColor: "bg-yellow-500 text-black",
      title: "DUA LIPA",
      date: "OCT 02, 2025",
      location: "O2 Arena, London",
      img: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    },
    {
      tag: "POPULAR",
      tagColor: "bg-red-600",
      title: "ED SHEERAN LIVE",
      date: "AUG 15, 2017",
      location: "Binan Ampitheatre",
      img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    },
    {
      tag: "NEW",
      tagColor: "bg-blue-600",
      title: "RONNIE ALONTE",
      date: "NOV 04, 2017",
      location: "MOA Grounds",
      img: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae",
    },
    {
      tag: "TRENDING",
      tagColor: "bg-green-600",
      title: "COLDPLAY 2025",
      date: "MAR 22, 2025",
      location: "Wembley Stadium",
      img: "https://images.unsplash.com/photo-1485217988980-11786ced9454",
    },
    {
      tag: "HOT",
      tagColor: "bg-yellow-500 text-black",
      title: "JUSTIN BIEBER TOUR",
      date: "APR 10, 2025",
      location: "Madison Square Garden",
      img: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    },
    {
      tag: "FEATURED",
      tagColor: "bg-purple-600",
      title: "ARIANA GRANDE LIVE",
      date: "JUN 02, 2025",
      location: "Crypto.com Arena",
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
    },
    {
      tag: "NEW",
      tagColor: "bg-blue-600",
      title: "SHAWN MENDES",
      date: "JUL 18, 2025",
      location: "Toronto",
      img: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef",
    },
    {
      tag: "POPULAR",
      tagColor: "bg-red-600",
      title: "BRUNO MARS",
      date: "SEP 10, 2025",
      location: "Las Vegas Arena",
      img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    },
    {
      tag: "HOT",
      tagColor: "bg-yellow-500 text-black",
      title: "DUA LIPA",
      date: "OCT 02, 2025",
      location: "O2 Arena, London",
      img: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    },
  ];

  
  const rows = [];
  for (let i = 0; i < events.length; i += 8) {
    rows.push(events.slice(i, i + 8));
  }

  return (
    <section className="py-10 px-4 bg-gradient-to-br from-[#00050d] via-[#0a1a2f] to-[#1a2a40]">
      <h1 className="text-white text-2xl md:text-3xl font-bold text-center mb-8">
        🎶 Upcoming Concerts & Events
      </h1>

      <div className="space-y-12">
        {rows.map((rowEvents, rowIndex) => (
          <Swiper
            key={rowIndex}
            modules={[Navigation, Autoplay]}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={2}
            slidesPerGroup={2}
            loop={rowEvents.length > 2}
            breakpoints={{
              768: { slidesPerView: 3, slidesPerGroup: 3 },
              1024: { slidesPerView: 4, slidesPerGroup: 4 },
            }}
            onSwiper={(swiper) => {
              
              const container = swiper.el;

              
              swiper.autoplay.stop();

              
              if (window.innerWidth >= 1024) {
                container.addEventListener("mouseenter", () => {
                  swiper.autoplay.start();
                });
                container.addEventListener("mouseleave", () => {
                  swiper.autoplay.stop();
                });
              }
            }}
          >
            {rowEvents.map((event, i) => (
              <SwiperSlide key={i}>
                <div className="relative rounded-lg overflow-hidden shadow-md group">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-[180px] md:h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span
                      className={`text-[10px] md:text-xs font-bold px-1.5 py-0.5 rounded ${event.tagColor}`}
                    >
                      {event.tag}
                    </span>
                    <h2 className="mt-1 text-sm md:text-lg font-bold">
                      {event.title}
                    </h2>
                    <p className="text-xs md:text-sm mt-0.5 opacity-80">
                      {event.date}
                    </p>
                    <p className="text-xs md:text-sm opacity-80">
                      {event.location}
                    </p>
                    <button className="mt-2 bg-gradient-to-r from-[#1A98FF] to-[#4facfe] px-3 py-1.5 rounded-md text-[12px] md:text-sm font-semibold hover:opacity-90 transition">
                      BUY
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
