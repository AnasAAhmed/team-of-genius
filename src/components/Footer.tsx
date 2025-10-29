import { Instagram, Send } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { useState } from "react";
import { faqsColumn } from "@/lib/constants";

const Footer = () => {
  const [openIndexForMob, setOpenIndexForMob] = useState<number | null>(null);
  return (
    <section className="footersection container">
      {/* Desktop Footer */}
      <footer className="lg:mx-20 hidden md:flex flex-col bg-transparent text-white font-poppins sm:px-5 sm:py-10 md:px-5 md:py-10 lg:px-5 lg:py-10 xl:px-5 xl:py-10 text-sm sm:text-sm md:text-base lg:text-base xl:text-base px-2.5 py-[30px]">
        {/* Logo & CTA */}
        <div className="flex justify-between w-full mx-auto items-center lg:text-center md:gap-3">
          <div className="flex text-left lg:mb-5 sm:mb-0 sm:mt-7 cursor-pointer">
            <img loading="lazy" src="/assets/icons/logo.webp" alt="TOG Logo" />
            <span className="flex items-center pl-2.5 ml-0 sm:ml-0 max-[480px]:ml-2.5 mt-2.5 text-[9px] leading-3">
              #1 Social Media <br /> AI Agent
            </span>
          </div>
          <div className="text-right lg:text-center">
            <button className="hover:bg-[#fec007] text-black mb-3 border-none px-5 py-2.5 rounded-full text-base font-bold cursor-pointer transition duration-300 ease-in-out max-w-[250px] float-right bg-[#fec007] hover:-translate-y-1 hover:shadow-md uppercase">
              Try it free
            </button>
          </div>
        </div>

        {/* FAQ & Legal Links */}
        <div className="pt-[50px] border-t border-[#2e2e2e]">
          <div className="grid md:grid-cols-4 gap-2 justify-between lg:gap-5 md:items-start">
            {/* FAQ Column 1 */}
            <div className="text-left inline-block mr-2 lg:flex-[1_1_45%] lg:text-start md:flex-[1_1_100%] md:mr-0">
              <h4 className="text-[1.2rem] font-medium mb-2 max-[480px]:text-[1em]">FAQ's</h4>
              <ul className="list-none p-0 m-0">
                {faqsColumn.slice(0, 5).map((faq, index) => (
                  <HoverCard openDelay={0} closeDelay={0} key={index}>
                    <HoverCardTrigger
                      className="flex relative font-normal text-[0.9em] group items-center justify-between gap-2 text-gray-300 mb-2 cursor-pointer hover:text-white ">
                      {faq.que}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon shrink-0 tabler-icon-square-plus"
                      >
                        <path d="M9 12h6"></path>
                        <path d="M12 9v6"></path>
                        <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path>
                      </svg>
                    </HoverCardTrigger>
                    <HoverCardContent
                      className="w-80 p-2 rounded-[12px] bg-blue-100 text-black">
                      <p className="leading-[1.1] font-medium text-[16px] ">{faq.answer}</p>
                    </HoverCardContent>
                  </HoverCard>
                ))}
                <li className="flex justify-start items-center gap-2 text-base text-gray-300 mb-2 cursor-pointer hover:text-white text-[0.9em] sm:text-base2">
                  <a href="/faqs">See more FAQ's</a>
                </li>
              </ul>
            </div>

            {/* FAQ Column 2 */}
            <div className="text-left inline-block mr-2 lg:flex-[1_1_45%] lg:text-start md:flex-[1_1_100%] md:mr-0">
              <h4 className="text-[1.2em] mb-2 max-[480px]:text-[1em]"></h4>
              <ul className="list-none p-0 m-0">
                {faqsColumn.slice(5, 10).map((faq, index) => (
                  <HoverCard openDelay={0} closeDelay={0} key={index}>
                    <HoverCardTrigger
                      className="flex min-w-66s relative font-normal group items-center justify-between gap-2 text-sm text-gray-300 mb-2 cursor-pointer hover:text-white text-[0.9em]">
                      {faq.que}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon shrink-0 tabler-icon-square-plus"
                      >
                        <path d="M9 12h6"></path>
                        <path d="M12 9v6"></path>
                        <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path>
                      </svg>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 p-2 rounded-[12px] bg-blue-100 text-black">
                      <p className="leading-[1.1] font-medium text-[16px] ">{faq.answer}</p>

                    </HoverCardContent>
                  </HoverCard>
                ))}
                <li className="flex justify-start items-center gap-2 text-base text-gray-300 mb-2 cursor-pointer hover:text-white text-[0.9em] sm:text-base">
                  <a href="/faqs">See more FAQ's</a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col justify-center items-start">
              <h4 className="text-[1.2rem] font-medium w-full mb-2 max-[480x]:text-[1em]">Legal</h4>
              <ul className="list-none p-0 m-0">
                <li className="text-lg font-medium text-gray-300 mb-2 cursor-pointer hover:text-white text-[0.9em] sm:text-base">
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li className="text-lg font-medium text-gray-300 mb-2 cursor-pointer hover:text-white text-[0.9em] sm:text-base">
                  <a href="/tnc">Terms Of Service</a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="text-center md:text-left float-right inline-block lg:text-center">
              <p className="text-base mb-2.5">We are just one message away</p>
              <div className="flex gap-2.5 max-[480px]:justify-center w-full justify-center">
                <a title="Instagram" href="https://www.instagram.com/teamofgeniusdotcom" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-[30px] h-[30px] cursor-pointer object-none max-[480px]:w-[25px] max-[480px]:h-[25px] max-[480px]:object-contain" />
                </a>
                <a href="https://t.me/teamofgenius" title="Telegram" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/icons/telegram.webp"  className="w-[30px] h-[30px] cursor-pointer object-none max-[480px]:w-[25px] max-[480px]:h-[25px] max-[480px]:object-contain" alt="telegram" />
                </a>
              </div>
              <div className="mt-3 text-center">
                <a href="mailto:support@teamofgenius.com" className="underline">support@teamofgenius.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center flex justify-center md:justify-between flex-col md:flex-row items-center mt-5 border-t border-[#2e2e2e] pt-10 text-[1em] text-[#ccc]  font-medium max-w-[480px]:mt-1 max-w-[480px]:border-white/20 max-w-[480px]:text-[0.8em]">
          <p>2025 © Team of Genius. All rights reserved.</p>
          <p className="flex  items-center gap-2">
            Made in USA <img src="/assets/icons/us-flag.webp" alt="USA" className="w-4 h-4" />
          </p>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className="bg-transparent text-center text-white font-poppins px-5 pb-10 max-w-[480px]:px-2.5 max-w-[480px]:spy-7.5 md:hidden flex items-center flex-col relative">

        {/* FAQ & Legal Links */}
        <div className="pt-[50px] border-t border-[#2e2e2e]">
          <div className="grid md:grid-cols-4 gap-2 justify-between lg:gap-5 md:items-start">
            <div className="text-center md:text-left my-5 float-right inline-block lg:text-center">
              <p className="text-base mb-2.5">We are just one message away</p>
              <div className="flex gap-2.5 max-[480px]:justify-center w-full justify-center">
                <a title="Instagram" href="https://www.instagram.com/teamofgeniusdotcom" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-[30px] h-[30px] cursor-pointer object-none max-[480px]:w-[25px] max-[480px]:h-[25px] max-[480px]:object-contain" />
                </a>
                <a href="https://t.me/teamofgenius" title="Telegram" target="_blank" rel="noopener noreferrer">
                  <Send className="w-[30px] h-[30px] cursor-pointer object-none max-[480px]:w-[25px] max-[480px]:h-[25px] max-[480px]:object-contain" />
                </a>
              </div>
              <div className="mt-3 text-center">
                <a href="mailto:support@teamofgenius.com" className="underline">support@teamofgenius.com</a>
              </div>
            </div>
            {/* FAQ Column 1 */}
            <div className="text-center inline-block mr-2 lg:flex-[1_1_45%] lg:text-start md:flex-[1_1_100%] md:mr-0">
              <h4 className="text-[1.2rem] font-medium mb-2 max-[480px]:text-[1em]">FAQ's</h4>
              <ul className="list-none p-0 m-0">
                {faqsColumn.slice(0, 5).map((faq, index) => (
                  <HoverCard open={openIndexForMob === faq.id} onOpenChange={(open) => setOpenIndexForMob(open ? faq.id : null)} key={index}>
                    <HoverCardTrigger
                      onClick={() => {
                        setOpenIndexForMob(openIndexForMob === faq.id ? null : faq.id);
                      }}
                      className="flex relative text-center font-normal text-[0.9em] group items-center justify-between gap-2 text-gray-300 mb-2 cursor-pointer hover:text-white ">
                      {faq.que}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon shrink-0 tabler-icon-square-plus"
                      >
                        <path d="M9 12h6"></path>
                        <path d="M12 9v6"></path>
                        <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path>
                      </svg>
                    </HoverCardTrigger>
                    <HoverCardContent style={{
                      visibility: openIndexForMob === faq.id ? 'visible' : 'hidden',
                      opacity: openIndexForMob === faq.id ? 1 : 0,
                      background: ' radial-gradient(107.32% 141.42% at 0% 0%, rgba(53, 48, 48, 0.52) 0%, rgb(45, 41, 41) 100%);'
                    }} className="rounded-2xl backdrop-blur-md w-80 p-0 rounded-2.5 text-center">
                      <div className="bg-[#2D3s748]/60 rounded-2xl p-2">
                        <h4 className="leading-[1.1] border-b py-2 font-medium text-[16px] ">FAQs</h4>
                        <button
                          onClick={() => {
                            setOpenIndexForMob(openIndexForMob === faq.id ? null : faq.id);
                          }}
                          className="
                           outline-transparent outline 
                           outline-offset-2
                           flex items-center justify-center
                           shrink-0
                           w-6 h-6
                           rounded-md
                           transition-all duration-200
                           text-xs
                           absolute top-1 right-2
                           p-2
                          "
                        >
                          ✕
                        </button>
                        <p className="leading-[1.1] font-medium text-sm p-2 ">{faq.answer}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
                <li className="flex justify-start items-center gap-2 text-base text-gray-300 mb-2 cursor-pointer hover:text-white text-[0.9em] sm:text-base2">
                  <a href="/faqs">See more FAQ's</a>
                </li>
              </ul>
            </div>



            {/* Legal Column */}
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-[1.2rem] font-medium w-full mb-2 max-[480x]:text-[1em]">Legal</h4>
              <ul className="list-none p-0 m-0">
                <li className="text-lg font-medium text-gray-300 mb-2 cursor-pointer hover:text-white text-[0.9em] sm:text-base">
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li className="text-lg font-medium text-gray-300 mb-2 cursor-pointer hover:text-white text-[0.9em] sm:text-base">
                  <a href="/tnc">Terms Of Service</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 justify-between w-full mx-auto items-center lg:text-center md:gap-3">
              <div className="flex text-left lg:mb-5 sm:mb-0 sm:mt-7 cursor-pointer">
                <img loading="lazy" src="/assets/icons/logo.webp" alt="TOG Logo" />
                <span className="flex items-center pl-2.5 ml-0 sm:ml-0 max-[480px]:ml-2.5 mt-2.5 text-[9px] leading-3">
                  #1 Social Media <br /> AI Agent
                </span>
              </div>
              <div className="text-right lg:text-center">
                <button className="hover:bg-[#fec007] text-black mb-3 border-none px-5 py-2.5 rounded-full text-base font-bold cursor-pointer transition duration-300 ease-in-out max-w-[250px] float-right bg-[#fec007] hover:-translate-y-1 hover:shadow-md uppercase">
                  Try it free
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center flex justify-center md:justify-between flex-col md:flex-row items-center mt-5 border-t border-[#2e2e2e] pt-10 text-[1em] text-[#ccc]  font-medium max-w-[480px]:mt-1 max-w-[480px]:border-white/20 max-w-[480px]:text-[0.8em]">
          <p>2025 © Team of Genius. All rights reserved.</p>
          <p className="flex  items-center gap-2">
            Made in USA <img src="/assets/icons/us-flag.webp" alt="USA" className="w-4 h-4" />
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

