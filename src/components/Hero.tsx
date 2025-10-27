import { useState } from "react";
import { Gradient } from "./ui/Gradient";

const Hero = () => {
    const [play, setPlay] = useState(false);
    return (
        <section >
            <img fetchPriority="high" src="/assets/images/banner-texture.webp" alt="main_bg1" className="w-fit h-screen -z-10 absolute object-cover top-0 left-0" loading="eager"></img>
            <Gradient />
            <section className="flex max-md:flex-col  max-md:justify-center justify-between items-start gap-8 max-w-7xl pt-4 sm:pt-16 w-full mx-auto  ">
                <div className="w-full  md:w-6/12 pt-12 md:pl-4" style={{ opacity: '1', transform: 'none' }}>
                    <div className="hero-content max-md:text-center space-y-4.5">
                        <h1 className="text-4xl font-bold leading-10">Gain Millions of followers on your social media accounts with the
                            <span className="text-[#EAB101]"> #1 AI Agent </span>
                            powered&nbsp;by&nbsp;Team of Genius
                        </h1>
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <p className="m-0 flex items-center font-medium text-left md:text-center gap-2 text-[12px] md:text-lg text-[#EAB101]">Made in USA
                                <img src="/assets/icons/us-flag.webp" alt="USA" className="w-4 h-4" /> Trusted Worldwide 🌎
                            </p>
                        </div>
                        <button className="bg-[#fec007] px-5 py-2.5 rounded-[20px] font-medium text-black">Start 3-days Free Trial</button>
                    </div>
                </div>
                <div className="w-full flex-1 md:ws-6/12" style={{ opacity: '1', transform: 'none' }}>
                    <div className="relative w-full max-w-sm md:max-w-lg  md:ml-16">
                        {
                            play ? (
                                <video
                                    src={'https://teamofgenius.com/assets/banner-video.mp4'}
                                    poster="/assets/images/hero-image.webp"
                                    controls
                                    autoPlay
                                    className="relative z-10 object-contain w-full h-full"
                                />
                            ) : (
                                <div
                                    className="relative z-10 w-full max-w-sm md:max-w-lg h-full cursor-pointer flex items-center justify-center"
                                    onClick={() => setPlay(true)}
                                >
                                    <img
                                        src={'/assets/images/hero-image.webp'}
                                        alt={'play-button-home'}
                                        className=" w-full h-full object-cover"
                                    />
                                    {/* Play button overlay */}
                                    <div className="bg-black/50 absolute insset-0 rounded-full p-4 z-20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="white"
                                            viewBox="0 0 24 24"
                                            stroke="none"
                                            className="w-10 h-10"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="btntexther" style={{ opacity: '1', transform: 'none' }}>
                </div>
            </section>
            <section className="wepublish flex justify-center items-center z-40">
                <div className="flex justify-center items-center msin-w-3xl rounded-[20px] bg-secondary/40 py-4 flex-col px-2 gap-3 text-sm md:text-bold">
                    <div className="text-lg font-medium">Your AI Agent That Finds, Edits &amp; Posts Viral Content – Automatically!
                    </div>
                    <div className="flex gap-4 flex-wrap justify-center">
                        <img className="size-8" loading="lazy" src="https://teamofgenius.com/assets/images/instagram-icon.webp" alt="Instagram" />
                        <img loading="lazy" className="size-8" src="https://teamofgenius.com/assets/images/youtube-icon.webp" alt="YouTube" />
                        <img loading="lazy" className="size-8" src="https://teamofgenius.com/assets/images/facebook-icon.webp" alt="Facebook" />
                        <img className="size-8" loading="lazy" src="https://teamofgenius.com/assets/images/tiktok-icon.webp" alt="TikTok" />
                        <img className="size-8" loading="lazy" src="https://teamofgenius.com/assets/images/x-icon.webp" alt="TikTok" />
                    </div>
                </div>
            </section>
        </section>
    )
}



export default Hero
