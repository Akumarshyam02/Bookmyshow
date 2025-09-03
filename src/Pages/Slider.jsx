import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

export default function Slider() {
  const banners = [
    {
      img: "https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
      title: "Avatar: The Way of Water",
      desc: "Experience the breathtaking world of Pandora in stunning detail.",
    },
    {
      img: "https://image.tmdb.org/t/p/original/5hKlKh62yLrbvOXXeciyCWxXetj.jpg",
      title: "Avengers: Endgame",
      desc: "The epic finale of the Infinity Saga. Heroes assemble!",
    },
    {
      img: "https://image.tmdb.org/t/p/original/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg",
      title: "Spider-Man: No Way Home",
      desc: "Spider-Man faces his biggest challenge yet across the multiverse.",
    },
  ];

  return (
    <div className="relative w-full h-[70vh] group">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {banners.map((banner, i) => (
          <SwiperSlide className="overflow-hidden" key={i}>
            <div
              className="h-full w-full mx-auto bg-cover bg-center relative rounded-2xl overflow-hidden"
              style={{ backgroundImage: `url(${banner.img})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute bottom-20 left-12 max-w-xl text-white space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                  {banner.title}
                </h2>
                <p className="text-lg md:text-xl opacity-90">{banner.desc}</p>
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium">
                  Watch Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            opacity: 0;
            transition: opacity 0.3s ease;
            width: 30px;
            height: 30px;
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 22px;
            color: #fff;
          }

          .group:hover .swiper-button-next,
          .group:hover .swiper-button-prev {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
}
