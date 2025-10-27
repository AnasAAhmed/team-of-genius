
const plans = [
    {
        "id": 2,
        "plan_name": "Premium",
        "plan_price": "29.00",
        "top_notch": "~ $1 per day",
        "plan_sequence": 1,
        "plan_duration": "month",
        "plan_platforms": ["instagram", 'facebook'],
        "plan_description": [
            "Auto Content Generation Through TOG AI",
            "<span> <b>30</b> Reels/Shorts/Posts Based On Your Category Every Month</span>",
            "Full Analytics (Up To 6 Months Of Data)",
            "Access To All Future Updates For FREE",
            "Guaranteed Results (10,000 Followers)",
            "Dedicated Account Manager",
            "Money Back Guarantee"
        ],
        "plan_bonuses": [
            {
                "text": "Premium ChatGPT V5.0 + 5000 Prompts Bundle",
                "image": "/assets/images/benefit-icon.png"
            }
        ],
        "plan_package": "/assets/images/aibook.png",
        "plan_free": "FREE (worth $799)",
        "trial_period_days": 3,
        "button_text": "Start 3-Days Free trial"
    },
    {
        "id": 3,
        "plan_name": "Premium Plus +",
        "plan_price": "49.00",
        "top_notch": "~ $1.50 per day",
        "plan_sequence": 2,
        "plan_duration": "month",
        "plan_platforms": ["instagram", 'facebook', "youtube"],
        "plan_description": [
            "Auto Content Generation Through TOG AI",
            "<span> <b>60</b> Reels/Shorts/Posts Based On Your Category Every Month </span>",
            "Full Analytics (Up To 1 Year Of Data)",
            "Access To All Future Updates For FREE",
            "Guaranteed Results (30,000 Followers)",
            "Priority Customer Support",
            "Dedicated Account Manager"
        ],
        "plan_bonuses": [
            {
                "text": "Premium ChatGPT V5.0 + 5000 Prompts Bundle",
                "image": "/assets/images/benefit-icon.png"
            }
        ],
        "plan_package": "/assets/images/aibook.png",
        "plan_free": "FREE (worth $799)",
        "trial_period_days": 0,
        "button_text": "Buy Now"
    },
    {
        "id": 5,
        "plan_name": "Lifetime",
        "plan_price": "999.00",
        "top_notch": "",
        "plan_sequence": 3,
        "plan_duration": "lifetime",
        "plan_platforms": ["instagram", 'facebook', "youtube", "tiktok", "x"],
        "plan_description": [
            "Auto Content Generation Through TOG AI",
            "<span><b>90</b> Reels/Shorts/Posts Based On Your Category Every Month</span>",
            "Full Analytics (Up To 1 Year Of Data)",
            "Access To All Future Updates For FREE",
            "Guaranteed Results (1M+ Followers)",
            "Priority Customer Support",
            "Dedicated Account Manager",
            "Brand Deals Platform Access"
        ],
        "plan_bonuses": [
            {
                "text": "Premium ChatGPT V5.0 + 5000 Prompts Bundle",
                "image": "/assets/images/benefit-icon.png"
            },
            {
                "text": "Become A Pro Trader In 5 Days + Start Earning From Today",
                "image": "/assets/images/pro-trader.png"
            },
            {
                "text": "DropShipping Business Setup Course",
                "image": "/assets/images/aws.png"
            }
        ],
        "plan_package": "/assets/images/packages.png",
        "plan_free": "FREE (worth $6843)",
        "trial_period_days": 0,
        "button_text": "Buy Lifetime"
    }
]


const PricingSection = () => {
    return (
        <section className="relative text-white font-poppins">
            {/* Background SVG */}
            <div className="absolute w-full md:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 390 891"
                    fill="none"
                    className="w-full h-[892px]"
                >
                    <g filter="url(#filter0_f)">
                        <path
                            d="M371.957 445.429C371.957 569.369 271.484 669.841 147.545 669.841C23.6055 669.841 -76.8672 569.369 -76.8672 445.429C-76.8672 321.49 23.6055 221.017 147.545 221.017C271.484 221.017 371.957 321.49 371.957 445.429Z"
                            fill="#EAB308"
                            fillOpacity="0.1"
                        ></path>
                    </g>
                    <defs>
                        <filter
                            id="filter0_f"
                            x="-297.691"
                            y="0.193375"
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
                                result="effect1_foregroundBlur"
                            ></feGaussianBlur>
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 bg-[url('https://teamofgenius.com//assets/images/pricing-plan-bg.webp')] bg-center bg-cover px-5 py-12 text-center">
                {/* Marquee */}
                <div className="overflow-hidden whitespace-nowrap mb-14">
                    <div className="animate-marquee flex gap-12 text-4xl font-extrabold max-[480px]:text-2xl">
                        {Array(30)
                            .fill("★ Limited licenses to be sold")
                            .map((item, index) => (
                                <span key={index}>{item}</span>
                            ))}
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-4xl font-extrabold mb-2 max-[480px]:text-2xl">
                    OUR PRICING <span className="text-[#f9a825]">PLANS</span>
                </h2>
                <p className="text-lg font-bold mb-8 max-[480px]:text-sm">
                    Pick a plan that suits your needs.
                </p>

                {/* Plans */}
                <div className="flex flex-wrap justify-center gap-5">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className="grow bg-linear-to-r from-white/20 to-gray backdrop-blur-[21px] rounded-2xl shadow-lg p-5 flex flex-col max-w-[400px] text-left relative"
                        >
                            {plan.top_notch && (
                                <p className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#f9a825] text-white font-bold py-2 px-5 rounded-[8px]">
                                    {plan.top_notch}
                                </p>
                            )}

                            {/* Icon + Title */}
                            <div className="flex justify-center items-center gap-2 my-2">
                                <img src="/assets/icons/diamond.svg" className="w-6 h-6 md:w-12 md:h-12" alt="diamond" />
                                <h3 className="text-3xl font-bold">{plan.plan_name}</h3>
                            </div>

                            {/* Price */}
                            <p className="text-lg self-center font-bold mb-3">
                                {plan.plan_price}/{plan.plan_duration}
                            </p>

                            {/* Platforms */}
                            {plan.plan_platforms.length > 0 && (
                                <div className="flex gap-2 items-center mb-2">
                                    <img src="/assets/icons/check.png" className="size-6" alt="check" />

                                    <span className="font-bold">Platforms:</span>
                                    {plan.plan_platforms.map((platform) => (
                                        <img
                                            key={platform}
                                            src={`https://teamofgenius.com/assets/images/${platform}-icon.webp`}
                                            alt={platform}
                                            className="w-5 h-5 rounded-full object-contain"
                                        />
                                    ))}
                                </div>
                            )}

                            {/* Features */}
                            <ul className="mb-2 text-sm">
                                {plan.plan_description.map((feature, i) => (
                                    <li key={i} className="mb-1 border-b py-1 font-medium text-[16px] border-white/40 gap-2 flex items-center">
                                        <img src="/assets/icons/check.png" className="size-6" alt="check" /> <div
                                            // className="text-gray-800 text-base"
                                            dangerouslySetInnerHTML={{ __html: feature }}
                                        />
                                    </li>
                                ))}
                            </ul>

                            {/* Bonuses */}
                            {plan.plan_bonuses.length > 0 && (
                                <div>
                                    <h4 className="text-lg font-semibold mb-1">Bonuses:</h4>
                                    <ul className="text-sm">
                                        {plan.plan_bonuses.map((bonus, i) => (
                                            <li key={i} className="flex gap-2 items-center">
                                                <img
                                                    src={bonus.image}
                                                    alt="bonus"
                                                    className="w-5 h-5 object-contain"
                                                />
                                                <span>{bonus.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Image */}
                            {plan.plan_package && (
                                <img
                                    src={plan.plan_package}
                                    alt={`${plan.plan_name} Benefits`}
                                    className="w-full h-48 object-contain mt-4"
                                />
                            )}

                            {/* Free text */}
                            {plan.plan_free && (
                                <div className="text-center font-bold mt-2">{plan.plan_free}</div>
                            )}

                            {/* Button */}
                            <button className="mt-4 w-full text-lg  hover:bg-[#f9a825] border-white border cursor-pointer py-3 rounded-[30px] font-bold">
                                {plan.button_text}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <style >{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default PricingSection;

