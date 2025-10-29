import { brandLogos, socialProfiles } from "@/lib/constants";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Marquee = () => {
    

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
                <Mdarquee duration={10}>
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
                <Mdarquee reverse duration={25}>
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

