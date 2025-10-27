import { useState } from "react";

const EarnWhileYouRelax = () => {
  const [followers, setFollowers] = useState(10000);

  return (
    <section className="earnwhileyourelax relative">
      <div className="z-[2] relative">
        <section className="bg-transparent px-5 py-[50px] text-white font-medium mt-0 sm:mt-0">
          <h2 className="md:text-[48px] md:leading-[48px] font-extrabold text-center font-sans  mb-[10px] decoration-skip-ink-none text-[24px] leading-[30px]">
            <span className="text-[#f7be15] !text-[clamp(1.375rem,0.7475rem+2.5743vw,3rem)]">
              Earn
            </span>{" "}
            while you relax
          </h2>
          <p className="text-[12px] leading-[13.45px] font-bold text-center font-s[Poppins] mb-0 sm:text-[18px] sm:leading-[28px] sm:mb-[30px]">
            Generate passive income
          </p>

          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left lg:gap-[30px]">
            {/* Performance Card */}
            <div className="performance-card">
              <h3 className="inline-block bg-[url('https://teamofgenius.com/assets/images/Free.webp')] bg-cover bg-center bg-no-repeat text-white py-[10px] md:px-[40px] md:py-[10px] font-poppins md:font-semibold leading-[11.07px] px-0 sm:rounded-[20px] text-[10px] md:text-[1rem] font-sm md:leading-[16.07px] text-center mb-[30px] md:mb-0 w-full">
                Our top performer gained millions of followers in few months
              </h3>
              <img
                loading="lazy"
                src="/assets/images/top-performer.webp"
                alt="Performance Report"
                className="w-full rounded-[10px] mb-[10px]"
              />
              <p className="text-[0.9em] text-[#ccc] mt-[10px] text-center">
                Source: socialblade.com
              </p>
            </div>

            {/* Earnings Calculator */}
            <div className="p-2 rounded-[23.521px] max-w-md bg-white shadow-[0_0_15.858px_rgba(0,0,0,0.2)] md:w-full">
              <div
                className="rounded-[20px] pt-[5px] px-[20px] pb-0 md:pb-[20px] text-center text-black shadow-[0_8px_16px_rgba(0,0,0,0.2)] bg-gradient-to-b from-white to-[#f9a825]"
                style={{
                  background: "url('https://teamofgenius.com//assets/images/calculator-bg1.webp') center center / cover no-repeat",
                }}
              >
                <h3 className="text-black font-poppins text-[18px] font-bold text-center [text-underline-position:from-font] [text-decoration-skip-ink:none]">
                  Earnings Calculator
                </h3>

                <div className="flex justify-around mb-5">
                  <div className="text-center">
                    <p className="font-poppins text-[25px] md:text-[32.69px] font-bold text-left text-black">
                      $ {followers*3.84}
                    </p>
                    <p className="font-poppins text-[17.43px] font-bold text-center text-black">
                      YEARLY
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-poppins text-[25px] md:text-[32.69px] font-bold text-left text-black">
                      $ {followers*0.32}
                    </p>
                    <p className="font-poppins text-[17.43px] font-bold text-center text-black">
                      MONTHLY
                    </p>
                  </div>
                </div>

                <div>
                  <label
                    className="block mb-[10px] text-base text-black font-bold"
                    htmlFor="followers"
                  >
                    Enter no. of followers
                  </label>
                  <input
                    type="text"
                    id="followers"
                    className="w-[96%] px-[10px] py-[10px] rounded-[15px] text-center mb-[10px] border-[2.18px] border-gray-400 text-[17.43px] font-bold leading-[26.15px] bg-white"
                    value={followers.toLocaleString()}
                    onChange={(e) =>
                      setFollowers(Number(e.target.value.replace(/,/g, "")))
                    }
                  />
                  <input
                    id="followers-range"
                    type="range"
                    className="slider followers-slider mt-2 w-full"
                    min="1000"
                    max="1000000"
                    step="1000"
                    value={followers}
                    onChange={(e) => setFollowers(Number(e.target.value))}
                  />
                  <button className="hidden bg-[linear-gradient(260.2deg,#efda18_8.57%,#eab101_48.58%,#efda18_87.8%)] text-white border-none px-5 py-[15px] rounded-[20px] text-base font-bold cursor-pointer transition duration-300 ease-in-out transform hover:scale-[1.02] mx-auto w-full shadow-[inset_0px_3px_10px_#000033]">
                    See Results
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Background SVG */}
      <div className="absolute w-full md:hidden bottom-[-450px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 390 892"
          fill="none"
          style={{ width: "100%", height: "892px" }}
        >
          <g filter="url(#filter0_f_108_12454)">
            <path
              d="M426.611 445.907C426.611 569.846 326.139 670.319 202.199 670.319C78.2598 670.319 -22.2129 569.846 -22.2129 445.907C-22.2129 321.967 78.2598 221.495 202.199 221.495C326.139 221.495 426.611 321.967 426.611 445.907Z"
              fill="#EAB308"
              fillOpacity="0.1"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_f_108_12454"
              x="-243.037"
              y="0.670914"
              width="890.472"
              height="890.472"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="110.412"
                result="effect1_foregroundBlur_108_12454"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default EarnWhileYouRelax;

