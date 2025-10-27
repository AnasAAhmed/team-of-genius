import { ChevronRight } from "lucide-react";
import React from "react";

const WhyPostMoreSection = () => {
    return (
        <section className="whypostmore relative mb-24">
            <div>
                <section
                    className="
            bg-[url('https://teamofgenius.com/assets/images/why-post-more-bg.webp')] bg-no-repeat bg-center bg-cover 
            py-[50px] text-white  overflow-hidden
            max-md:px-4 max-md:py-[30px]
            max-sm:px-[15px] max-sm:py-[20px] max-sm:w-[80%] max-sm:mx-auto max-sm:overflow-visible 
            max-sm:bg-none max-sm:bg-[position:center_bottom]
            !w-full !px-0 !pb-4 relative
          "
                >
                    {/* Decorative SVG */}
                    <div className="absolute -top-20 w-full left-0">
                        <svg
                            className="w-full"
                            height="780"
                            viewBox="0 0 390 680"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#filter0_f_108_12462)">
                                <path
                                    d="M402.321 339.933C402.321 445.884 308.645 531.774 193.09 531.774C77.5355 531.774 -16.1401 445.884 -16.1401 339.933C-16.1401 233.983 77.5355 148.093 193.09 148.093C308.645 148.093 402.321 233.983 402.321 339.933Z"
                                    fill="#EAB308"
                                    fillOpacity="0.1"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_f_108_12462"
                                    x="-163.65"
                                    y="0.58252"
                                    width="713.481"
                                    height="678.702"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feGaussianBlur
                                        stdDeviation="73.7551"
                                        result="effect1_foregroundBlur_108_12462"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </div>

                    <h2 className="font-bold text-center !text-[clamp(1.375rem,0.7475rem+2.5743vw,3rem)] mb-8">
                        <span className="text-[#f9a825]">Success</span> stories
                    </h2>

                    <div className="text-center grid grid-cols-1 md:grid-cols-2 z-[2] relative">
                        {/* Left content */}
                        <div className="px-4 md:px-4 md:text-start w-full">
                            <h3 className="font-bold text-[3.5vw] md:text-[1.8vw] text-center md:text-start text-[#fff]">
                                Imagine having an AI Employee that never sleeps!
                            </h3>
                            <p className="mt-3 text-[12px] md:text-[14px] text-justify md:text-left">
                                Every IG account has a virality rate. Let’s say yours is 10%. This means every 10th reel you post performs better than the others and reaches non-followers. So, if you post 10 times a month, only one reel reaches non-followers. But if you post 30 reels a month, you could have 3 viral reels. As a result, you’ll get more views, more new followers, and more potential clients. Does this mean that posting more guarantees you’ll get more followers? Absolutely not! If you post bad content, your virality rate will be 0%, and you might as well stop posting altogether. Our TOG AI is designed to create and post reels which can go viral in the category of the theme page that you choose. For example, see how our clients leveled up their content, automated TOG AI to post 3 videos a day at zero cost, and grew from nobody to somebody in just a couple of weeks.
                            </p>

                            <div className="flex flex-wrap gap-3 my-5 md:text-[16px] leading-7 font-[DM_Sans] lg:gap-2 text-[12px]">
                                <span className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#18A963"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="tabler-icon tabler-icon-check"
                                    >
                                        <path d="M5 12l5 5l10-10"></path>
                                    </svg>
                                    Trusted by 500+ Creators
                                </span>
                                <span className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#18A963"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="tabler-icon tabler-icon-check"
                                    >
                                        <path d="M5 12l5 5l10-10"></path>
                                    </svg>
                                    Easy to use
                                </span>
                                <span className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#18A963"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="tabler-icon tabler-icon-check"
                                    >
                                        <path d="M5 12l5 5l10-10"></path>
                                    </svg>
                                    Setup Instantly
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-5 my-5 max-[1024px]:justify-center max-[1024px]:gap-2.5 py-3">
                                <div className="flex transition-all group gap-4 md:gap-5">
                                    <button className="bg-[#fec007] text-black border-none px-5 py-2.5 rounded-full text-[12px] font-poppins font-bold leading-5 text-center bg-gradient-to-t from-[#fec007] to-[#fec007] hover:bg-[#d18f1e] lg:text-[14px] md:px-4 md:py-2 md:text-[12px] sm:px-3 sm:py-1.5">
                                        Create Account Now
                                    </button>
                                    <span className="h-[15px] w-[20px] -ml-[22px] mt-[18px] bg-gradient-to-t from-[#fec007] to-[#fec007] duration-150 group-hover:w-2"></span>
                                    <span className="w-[50px] h-[50px] rounded-full -ml-[30px] flex items-center justify-center bg-gradient-to-t from-[#fec007] to-[#fec007] md:-ml-[30px] sm:-ml-[22px]">
                                        <img
                                            loading="lazy"
                                            alt="arrow_up_icon"
                                            className="duration-150 group-hover:rotate-[42deg]"
                                            src="/assets/images/arrow_up_icon.webp"
                                        />
                                    </span>
                                </div>
                                <a
                                    href="/#howitswork"
                                    className="font-medium text-white text-[16px] underline bg-transparent border-transparent  leading-6 sm:text-[12px] !leading-9"
                                >
                                    See How It Works
                                </a>
                            </div>

                            <div className="items-center gap-5 mt-5 flex justify-center md:justify-start">
                                <div className="avatars flex">
                                    <img className="w-10 h-10 rounded-full -mr-2" loading="lazy" src="/assets/images/avatar4.webp" alt="User 4" />
                                    <img className="w-10 h-10 rounded-full -mr-2" loading="lazy" src="/assets/images/avatar3.webp" alt="User 3" />
                                    <img className="w-10 h-10 rounded-full -mr-2" loading="lazy" src="/assets/images/avatar2.webp" alt="User 2" />
                                    <img className="w-10 h-10 rounded-full -mr-2" loading="lazy" src="/assets/images/avatar1.webp" alt="User 1" />
                                </div>
                                <div className="text-[14px]">
                                    <span className="text-white">⭐️⭐️⭐️⭐️⭐️</span>
                                    <span>4.8</span> <br />
                                    <span className="text-[12px]">from 1368+ reviews</span>
                                </div>
                            </div>
                        </div>

                        {/* Right content (image/video container) */}
                        <div className="bg-[url('https://teamofgenius.com/assets/images/why-post-more-bg.webp')] md:bg-none bg-cover bg-center h-[450px] justify-self-center md:justify-self-start">
                            <div className="w-full max-w-[500px] mx-auto relative max-[480px]:w-[300px] max-[480px]:h-[460px] max-[480px]:overflow-y-hidden max-[480px]:mb-[-1px]">
                                <div className="w-[651px] h-[651px] bg-[url('https://teamofgenius.com/assets/images/hand_mobile.webp')] bg-contain bg-no-repeat relative flex justify-center items-start mx-auto bg-bottom bg-right max-[480px]:w-auto max-[480px]:h-[460px] max-[480px]:top-[-20px] md:top-[-100px] max-[480px]:bg-center">
                                    {/* <div className="absolute top-[48px] left-[274px] w-[228px] h-[456px] overflow-hidden bg-white rounded-[24px_31px_10px_22px] flex flex-col items-center justify-start p-0 transform [transform:skew(-0.5deg,0)] transition-opacity transition-transform duration-300 ease-in-out max-[480px]:w-[124px] max-[480px]:h-[245px] max-[480px]:top-[80px] max-[480px]:left-[97px] max-[480px]:rounded-[10px]">
                                      
                                    </div> */}
                                    <img
                                        className="absolute top-[48px] left-[274px] w-[228px] h-[456px] overflow-hidden bgd-white rounded-[24px_31px_10px_22px] flex flex-col items-center justify-start p-0 transform [transform:skew(-0.5deg,0)] transition-opacity transition-transform duration-300 ease-in-out max-[480px]:w-[124px] max-[480px]:h-[245px] max-[480px]:top-[80px] max-[480px]:left-[97px] max-[480px]:rounded-[10px]"
                                        src="/assets/images/review_2.webp"
                                        alt="" />
                                </div>
                                <div className="flex justify-center gap-4 mt-0 md:mt-0 absolute right-[25%] md:right-[50%] translate-x-[-50%] bottom-8 md:bottom-[12rem]">
                                    <div className="cursor-pointer text-black size-8 bg-[#eab101] rounded-full flex justify-center items-center swiper-button-prev">
                                        <svg className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M15 6l-6 6l6 6" />
                                        </svg>
                                    </div>
                                    <div className="cursor-pointer text-black size-8 bg-[#eab101] rounded-full flex justify-center items-center swiper-button-next">
                                        <ChevronRight />
                                    </div>
                                </div>
                            </div>

                            {/* Swiper navigation */}
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}
export default WhyPostMoreSection;