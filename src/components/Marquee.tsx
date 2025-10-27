import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Marquee = () => {
    const socialProfiles = [
        { name: "Clips", followers: "14.5M", src: "https://teamofgenius.com/assets/PFPs/instagram/Clips 14.5M.webp" },
        { name: "Earthpix", followers: "23.7M", src: "https://teamofgenius.com/assets/PFPs/instagram/earthpix 23.7M.webp" },
        { name: "Fuckboyproblem", followers: "15.8M", src: "https://teamofgenius.com/assets/PFPs/instagram/fuckboyproblem.s 15.8M.webp" },
        { name: "Historyphotographed", followers: "8.7M", src: "https://teamofgenius.com/assets/PFPs/instagram/historyphotographed 8.7M.webp" },
        { name: "Wasted", followers: "16.1M", src: "https://teamofgenius.com/assets/PFPs/instagram/wasted 16.1M.webp" },
        { name: "Barstoolsports", followers: "47.4M", src: "https://teamofgenius.com/assets/PFPs/tiktok/barstoolsprorts 47.4M.webp" },
        { name: "Championsleague", followers: "50.7M", src: "https://teamofgenius.com/assets/PFPs/tiktok/Championsleague 50.7M.webp" },
        { name: "Foodies", followers: "21.7M", src: "https://teamofgenius.com/assets/PFPs/tiktok/foodies 21.7M.webp" },
        { name: "Memes", followers: "12.1M", src: "https://teamofgenius.com/assets/PFPs/tiktok/memes 12.1M.webp" },
        { name: "Chills", followers: "6.2M", src: "https://teamofgenius.com/assets/PFPs/youtube/Chills 6.2M.webp" },
        { name: "Failarmy", followers: "17.3M", src: "https://teamofgenius.com/assets/PFPs/youtube/failarmy 17.3M.webp" },
        { name: "Peopleareawesome", followers: "5.9M", src: "https://teamofgenius.com/assets/PFPs/youtube/peopleareawesome 5.9M.webp" },
        { name: "Therichest", followers: "14.8M", src: "https://teamofgenius.com/assets/PFPs/youtube/therichest 14.8M.webp" },
    ];

    const brandLogos = [
        "https://teamofgenius.com/assets/images/logitech.webp",
        "https://teamofgenius.com/assets/images/ibm.webp",
        "https://teamofgenius.com/assets/images/samsung.webp",
        "https://teamofgenius.com/assets/images/meta.webp",
        "https://teamofgenius.com/assets/images/uber.webp",
        "https://teamofgenius.com/assets/images/ingenico.webp",
        "https://teamofgenius.com/assets/images/accenture.webp",
        "https://teamofgenius.com/assets/images/addidas.webp",
        
         "https://teamofgenius.com/assets/images/logitech.webp",
        "https://teamofgenius.com/assets/images/ibm.webp",
        "https://teamofgenius.com/assets/images/samsung.webp",
    ];

    const Mdarquee = ({ reverse = false, children, duration =20 }: { reverse?: boolean; children: React.ReactNode, duration: number }) => {
       const controls = useAnimation();

    useEffect(() => {
      controls.start({
        x: reverse ? ["-40%", "0%"] : ["0%", "-50%"],
        transition: {
          ease: "linear",
          duration,
          repeat: Infinity,
        },
      });
    }, [controls, duration, reverse]);

    return (
      <motion.div
        className="flex"
        animate={controls}
        // onMouseEnter={() => controls.stop()}
        // onMouseLeave={() =>
        //   controls.start({
        //     x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        //     transition: {
        //       ease: "linear",
        //       duration,
        //       repeat: Infinity,
        //     },
        //   })
        // }
      >
        {children}
        {children /* duplicate for seamless scroll */}
      </motion.div>
    );
    };

    return (
        <section className="carousel_section max-w-screen-xxxl mx-auto mt-10 relative overflow-hidden">
            {/* Gradient overlays */}
            <span className="absolute top-[9%] left-0 w-[20%] z-10 bg-linear-to-r from-[#191919] to-[#19191900] h-[200px] md:h-[350px]" />
            <span className="absolute top-[9%] right-0 w-[20%] z-10 bg-linear-to-r to-[#191919] md:to-[#191919] from-[#19191900] h-[200px] md:h-[350px]" />

            {/* Social Profiles Marquee */}
            <div className="overflow-hidden py-6 relative">
                <Mdarquee duration={20}>
                    <div className="flex gap-8 md:gap-14">
                        {socialProfiles.map((profile, idx) => (
                            <div
                                key={idx}
                                className="brandsSocialProfileSlider flex flex-col items-center justify-center"
                            >
                                <div className="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center">
                                    <img
                                        loading="lazy"
                                        src={profile.src}
                                        alt={profile.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <p className="text-[10px] md:text-xs font-semibold mt-1">
                                    {profile.name}
                                </p>
                                <p className="text-[8px] md:text-xs text-gray-400">
                                    {profile.followers}
                                </p>
                            </div>
                        ))}
                    </div>
                </Mdarquee>
            </div>

            {/* Brand Logos Marquee */}
            <div className="overflow-hidden py-12 pb-6">
                <Mdarquee reverse duration={35}>
                    <div className="flex gap-10">
                        {brandLogos.map((logo, idx) => (
                            <div key={idx} className="w-20 md:w-[120px] slider-item flex items-center justify-center">
                                <img
                                    loading="lazy"
                                    src={logo}
                                    alt={`Logo ${idx + 1}`}
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </Mdarquee>
            </div>
        </section>
    );
};

export default Marquee;

