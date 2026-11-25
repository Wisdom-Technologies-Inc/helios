import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import PainPoints from "@/components/PainPoints";
import Comparison from "@/components/Comparison";
import Services from "@/components/Services";
import Story from "@/components/Story";
import Why from "@/components/Why";
import Process from "@/components/Process";
import Hub from "@/components/Hub";
import Governance from "@/components/Governance";
import Faq from "@/components/Faq";
import Booking from "@/components/Booking";
import Policies from "@/components/Policies";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";

/**
 * HELIOS one-page site — sections in the exact order of the approved
 * HTML version: hero, tools marquee, pain points, decision matrix,
 * services, story/leadership, why HELIOS, process, Kigali hub,
 * governance, FAQ, booking, policies, final CTA, footer.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <PainPoints />
        <Comparison />
        <Services />
        <Story />
        <Why />
        <Process />
        <Hub />
        <Governance />
        <Faq />
        <Booking />
        <Policies />
        <FinalCta />
      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}
