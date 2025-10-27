import EarnWhileYouRelax from "@/components/EarnWhileURelax"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import Marquee from "@/components/Marquee"
import PricingSection from "@/components/Pricing"
import WhyPostMoreSection from "@/components/WhyPostMore"

const Home = () => {
  return (<>
  <Hero/>
  <Marquee/>
  <HowItWorks/>
  <EarnWhileYouRelax/>
  {/* <Testimonials/> */}
  <PricingSection/>
  <WhyPostMoreSection/>
  </>
  )
}

export default Home
