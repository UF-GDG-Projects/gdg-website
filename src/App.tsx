import { Analytics } from "@vercel/analytics/react";
import About from "./components/About";
import CTA from "./components/CTA";
import Events from "./components/Events";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Officers from "./components/Officers";
import DevFest from "./components/DevFest";

export default function App() {
  return (
    <>
      <Nav />
      <div className="px-1">
        <div className="mx-auto min-h-screen max-w-[1200px] border-x border-grayer px-1.5 sm:px-3">
          <CTA />
          <About />
          <DevFest />
          <Events />
          <Officers />
          <FAQ />
        </div>
        <Footer />
      </div>
      <Analytics />
    </>
  );
}
