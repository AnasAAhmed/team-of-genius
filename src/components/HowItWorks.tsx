import { useEffect, useRef, useState } from "react";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([])
  const steps = [
    {
      id: 1,
      text: "First step is to link your social media accounts with one easy click.",
      video: "https://teamofgenius.com/assets/images/how-its-work/1-1.mp4",
    },
    {
      id: 2,
      text: "Choose category of your 'Theme page' out of 250+ niches.",
      video: "https://teamofgenius.com/assets/images/how-its-work/2-2.mp4",
    },
    {
      id: 3,
      text: "Watch content being created-scheduled-published by our Genius AI Agent to your social media pages daily.",
      video: "https://teamofgenius.com/assets/images/how-its-work/3-3.mp4",
    },
    {
      id: 4,
      text: (
        <>
          Experience the follower growth and how it turns into{" "}
          <span className="text-[#34941c]">$</span>'s.
        </>
      ),
      video: "https://teamofgenius.com/assets/images/how-its-work/4-4.mp4",
    },
  ];

  // 🔹 Scroll detection logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) setActiveStep(index + 1);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);


  const handleStepClick = (id: number) => {
    setActiveStep(id);
    const el = sectionRefs.current[id - 1];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section
      id="howitswork"
      className="relative px-4 py-16 max-w-5xl w-full mx-auto"
    >
      <h1 className="font-extrabold text-center pb-6 mx-auto text-[clamp(1.375rem,0.7475rem+2.5743vw,3rem)]">
        Creating content is hard enough, Let the{" "}
        <span className="text-[#EAB101]">Genius AI</span> work for you
      </h1>

      {/* Sticky Navigation */}
      <div className="sticky top-4 z-20 backdrop-blur-md rounded-xl">
        <h1 className="font-extrabold text-center pt-6 pb-6 mx-auto text-[clamp(1.375rem,0.7475rem+2.5743vw,3rem)]">
          How It Works?
        </h1>

        <div className="flex bg-[#FEF08A] rounded-full max-w-[400px] mx-auto p-3 justify-between gap-1 mb-16">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => handleStepClick(step.id)}
              className={`w-full font-normal text-center rounded-full py-2 cursor-pointer transition-colors duration-300 ${activeStep === step.id
                ? "bg-[#333] text-[#F7BE15]"
                : "bg-[#FEC007] text-[#333] hover:bg-[#2c2b2b] hover:text-[#F7BE15]"
                }`}
            >
              Step {step.id}
            </button>
          ))}
        </div>
      </div>

      {/* Steps Content */}
      <div className="space-y-6">
        {steps.map((step, i) => (
          <div
            key={step.id}
            ref={(el: HTMLDivElement | null) => {
              if (el) {
                (sectionRefs!.current[i]! = el)
                console.log('Got the element:', el);
              }
            }}
            id={`step-${step.id}`}
            className="sticky top-68 border-2 border-[#42644452] shadow-black bg-cover! backdrop-blur-md rounded-2xl flex justify-center overflow-hidden transition-all duration-500"
            style={{
              background:
                "linear-gradient(269deg, rgb(39, 39, 39), rgb(65, 65, 65))",
              boxShadow:
                "rgba(255, 255, 255, 0.02) -5px -5px 250px 0px inset",
            }}
          >
            <div className="flex md:flex-nowrap flex-wrap h-efull items-center justify-center relative w-full max-h-[400px] h-[40vh] md:h-[60vh]">
              <div className="w-full md:w-6/12 px-4 md:px-8 py-5 md:py-2 flex items-center">
                <p className="font-bold text-[#D3D3D3] text-[clamp(0.75rem,0.3156rem+1.7822vw,1.875rem)]">
                  {step.text}
                </p>
              </div>
              <div className="w-10/12 md:w-6/12 flex items-end pb-10 md:pb-0 h-4/5 relative pr-4">
                <video
                  src={step.video}
                  autoPlay
                  className="w-full h-full object-contain rounded-xl md:rounded-none rounded-tl-xl rounded-bl-xl"
                  style={
                    { backgroundColor: step.id === 4 ? 'black' : "" }
                  }
                />
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default HowItWorks;
