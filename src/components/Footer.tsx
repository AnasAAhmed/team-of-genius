
const Footer = () => {
  const faqsColumn1 = [
    "How does TOG’s AI work?",
    "Is it guaranteed that I will gain followers?",
    "When will I start seeing growth?",
    "What is TOG?",
    "How much money will I make using TOG?",
  ];

  const faqsColumn2 = [
    "Are there limited seats or licenses available?",
    "Do I need to link my existing social media accounts, or can I create new ones?",
    "Is TOG available worldwide?",
    "Do I need any special skills or devices to use TOG?",
    "When can I start using TOG after making a purchase?",
  ];

  return (
    <section className="footersection container">
      {/* Desktop Footer */}
      <footer className="bg-transparent text-white font-poppins sm:px-5 sm:py-10 md:px-5 md:py-10 lg:px-5 lg:py-10 xl:px-5 xl:py-10 text-sm sm:text-sm md:text-base lg:text-base xl:text-base px-[10px] py-[30px] max-[480px]:hidden">
        {/* Logo & CTA */}
        <div className="flex justify-between w-full mx-auto items-center lg:text-center md:gap-3">
          <div className="flex text-left lg:mb-5 sm:mb-0 sm:mt-7 cursor-pointer">
            <img loading="lazy" src="/assets/images/logo.webp" alt="TOG Logo" />
            <span className="flex items-center pl-[10px] ml-0 sm:ml-0 max-[480px]:ml-[10px] mt-[10px] text-[9px] leading-[12px]">
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
              <h4 className="text-[1.2em] mb-2 max-[480px]:text-[1em]">FAQ's</h4>
              <ul className="list-none p-0 m-0">
                {faqsColumn1.map((faq, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-start gap-2 text-sm text-gray-300 mb-2 cursor-pointer hover:text-white text-[0.9em]"
                  >
                    <p className="flex-1">{faq}</p>
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
                      className="tabler-icon tabler-icon-square-plus"
                    >
                      <path d="M9 12h6"></path>
                      <path d="M12 9v6"></path>
                      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path>
                    </svg>
                  </li>
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
                {faqsColumn2.map((faq, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between gap-2 text-sm text-gray-300 mb-2 cursor-pointer hover:text-white text-[0.9em]"
                  >
                    <p className="flex-1">{faq}</p>
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
                      className="tabler-icon tabler-icon-square-plus"
                    >
                      <path d="M9 12h6"></path>
                      <path d="M12 9v6"></path>
                      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path>
                    </svg>
                  </li>
                ))}
                <li className="flex justify-start items-center gap-2 text-base text-gray-300 mb-2 cursor-pointer hover:text-white text-[0.9em] sm:text-base">
                  <a href="/faqs">See more FAQ's</a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="text-left flex flex-col justify-center items-center mr-2 lg:flex-[1_1_45%] md:flex-[1_1_100%] md:mr-0">
              <h4 className="text-[1.2em] w-full mb-2 max-[480px]:text-[1em]">Legal</h4>
              <ul className="list-none p-0 m-0">
                <li className="text-base text-gray-300 mb-2 cursor-pointer hover:text-white text-[0.9em] sm:text-base">
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li className="text-base text-gray-300 mb-2 cursor-pointer hover:text-white text-[0.9em] sm:text-base">
                  <a href="/tnc">Terms Of Service</a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="text-left float-right inline-block lg:text-center">
              <p className="text-base mb-2.5">We are just one message away</p>
              <div className="flex gap-2.5 max-[480px]:justify-center w-full justify-center">
                <a href="https://www.instagram.com/teamofgeniusdotcom" target="_blank" rel="noopener noreferrer">
                  <img className="w-[30px] h-[30px] cursor-pointer object-none max-[480px]:w-[25px] max-[480px]:h-[25px] max-[480px]:object-contain" loading="lazy" src="/assets/images/instagram-white.webp" alt="Instagram" />
                </a>
                <a href="https://t.me/teamofgenius" target="_blank" rel="noopener noreferrer">
                  <img className="w-[30px] h-[30px] cursor-pointer object-none max-[480px]:w-[25px] max-[480px]:h-[25px] max-[480px]:object-contain" loading="lazy" src="/assets/images/footer-icon2.webp" alt="Telegram" />
                </a>
              </div>
              <div className="mt-3 text-center">
                <a href="mailto:support@teamofgenius.com" className="underline">support@teamofgenius.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center flex justify-center md:justify-between flex-col md:flex-row items-center mt-5 border-t border-[#2e2e2e] pt-10 text-[0.9em] text-[#ccc] max-w-[480px]:mt-1 max-w-[480px]:border-white/20 max-w-[480px]:text-[0.8em]">
          <p>2025 © Team of Genius. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Made in USA <img src="/assets/icons/us-flag.webp" alt="USA" className="w-4 h-4" />
          </p>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className="bg-transparent text-white font-poppins px-5 py-10 max-w-[480px]:px-2.5 max-w-[480px]:py-7.5 md:hidden flex flex-col relative">
        {/* Add mobile-specific layout here, similar to desktop but stacked */}
      </footer>
    </section>
  );
};

export default Footer;

