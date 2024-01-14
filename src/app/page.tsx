// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import TopBookCategories from "./top-book-categories";
import OtherBookOffers from "./other-book-offers";
import GetYourBookFromUs from "./get-your-book-from-us";
import Faq from "./faq";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopBookCategories />
      <OtherBookOffers />
      <GetYourBookFromUs />
      <Faq />
      <Footer />
    </>
  );
}
