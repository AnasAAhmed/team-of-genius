import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-cards';

const Testimonials: React.FC = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);


  const handlePlayClick = (index: number) => {
    // Pause all videos first
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === index) {
          video.play();
        } else {
          video.pause();
        }
      }
    });

    setPlayingIndex(index);
  };
  const handlStopClick = (index: number) => {
    // Pause all videos first
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === index) {
          video.pause();
        }
      }
    });

    setPlayingIndex(index);
  };
  const customers = [
    {
      name: "Robert",
      country: "US",
      followers: "53010",
      duration: "61 days",
      video: "https://teamofgenius.com/assets/client-view/Robert_53000_followers_in_61_days.mp4",
      poster: "https://teamofgenius.com/assets/client-view/robert-post.webp",
      flag: "https://www.worldometers.info//img/flags/small/tn_us-flag.gif",
    },
    {
      name: "Jack",
      country: "UK",
      followers: "1.3 Million",
      duration: "5.3 months",
      video: "https://teamofgenius.com/assets/client-view/Arina_168000_followers_in_4_months.mp4",
      poster: "https://teamofgenius.com/assets/client-view/Arina_168000_followers_in_4_months.webp",
      flag: "https://www.worldometers.info//img/flags/small/tn_uk-flag.gif",
    },
    {
      name: "Marcus",
      country: "UK",
      followers: "100,470",
      duration: "100 days",
      video: "https://teamofgenius.com/assets/client-view/Jack_1.3_Million_followers_in_5.3_months.mp4",
      poster: "https://teamofgenius.com/assets/client-view/Jack_1.3_Million_followers_in_5.3_months.webp",
      flag: "https://www.worldometers.info//img/flags/small/tn_uk-flag.gif",
    },
    {
      name: "Jack",
      country: "UK",
      followers: "1.3 Million",
      duration: "5.3 months",
      video: "https://teamofgenius.com/assets/client-view/Jack_1.3_Million_followers_in_5.3_months.mp4",
      poster: "https://teamofgenius.com/assets/client-view/Jack_1.3_Million_followers_in_5.3_months.webp",
      flag: "https://www.worldometers.info//img/flags/small/tn_uk-flag.gif",
    },
    // Add more customers here
  ];

  return (
    <section className="happycustomers">
      <div className="flex flex-wrap md:flex-nowrap w-full justify-between items-start pt-12">
        {/* Text Content */}
        <div className="text-content md:mt-24 space-y-4 px-0 mx-0 flex-1">
          <h2 className="text-5xl md:ml-40 font-bold w-full max-w-[590px] leading-10">
            What our happy <span className="text-[#f9a825]">customers</span> have to say?
          </h2>
          <div className="bg-[#EAB101] rounded-r-full hidden md:flex items-center justify-between px-4 md:px-14 py-1 wide-tag relative">
            <p className="m-0 text-black font-semibold">Swipe on the cards to see all reviews</p>
            <div className="mr-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="h-10 text-[3rem] -rotate-180 text-[#0000003f]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M15.5 5H11l5 7-5 7h4.5l5-7z"></path>
                <path d="M8.5 5H4l5 7-5 7h4.5l5-7z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Swiper Cards */}
        <div className="md:w-6/12 w-full mt-8 md:mt-0 flex justify-center">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="w-full max-w-[300px]"
          >
            {customers.map((customer, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative p-1 rounded-[5px] bg-secondary">
                  <video
                    ref={(el) => {
                      videoRefs.current[idx] = el; // assign to the ref array
                    }}
                    className="w-full rounded-[6px] h-[400px] object-cover"
                    loop
                    poster={customer.poster}
                  >
                    <source src={customer.video} type="video/mp4" />
                  </video>

                  {/* Play Button */}
                  {playingIndex !== idx ? (
                    <button
                      onClick={() => handlePlayClick(idx)}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="text-6xl opacity-50 transition-all duration-300 hover:opacity-100"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path>
                      </svg>
                    </button>
                  ) : (
                    <button
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
                      onClick={() => handlStopClick(idx)}
                    >
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-6xl group-hover:opacity-100 opacity-50 transition-all duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"></path></svg>
                    </button>
                  )}
                  <div className="text-center mt-4">
                    <div className="flex items-center justify-center gap-2">
                      <h3 className="m-0 font-exo">{customer.name} -</h3>
                      <img
                        loading="lazy"
                        src={customer.flag}
                        alt={customer.country}
                        className="h-5 w-7"
                      />
                    </div>
                    <p className="font-exo font-bold m-0">{customer.followers} followers in</p>
                    <p className="font-exo font-bold">{customer.duration}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
