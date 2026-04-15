import Hero from "./components/Hero.jsx";
import StorySection from "./components/StorySection.jsx";
import MenuHighlights from "./components/MenuHighlights.jsx";
import Gallery from "./components/Gallery.jsx";
import Reservations from "./components/Reservations.jsx";
import VisitUs from "./components/VisitUs.jsx";
import Footer from "./components/Footer.jsx";

import heroImg from "./assets/hero.png";
import storyImg from "./assets/story.png";
import dimsumImg from "./assets/dimsum.png";
import menuImg from "./assets/menu.png";
import reservationsImg from "./assets/reservations.png";
import hoursImg from "./assets/hours.png";

const menuHighlights = [
  {
    title: "Dragon Soup Dumplings",
    description:
      "Silky wrappers filled with rich broth, black vinegar, and ginger.",
  },
  {
    title: "Lotus Blossom Prawns",
    description:
      "Wok-fried prawns with sweet chili glaze, toasted sesame, and herbs.",
  },
  {
    title: "Golden Tea-Smoked Duck",
    description:
      "Slow-smoked with jasmine tea, served with scallion pancakes.",
  },
  {
    title: "Crisp Tofu Lanterns",
    description:
      "Hand-cut tofu with five-spice salt and fermented chili sauce.",
  },
];

const galleryImages = [dimsumImg, menuImg, hoursImg];

export default function App() {
  return (
    <div className="app">
      <Hero image={heroImg} />
      <main>
        <StorySection image={storyImg} />
        <MenuHighlights items={menuHighlights} />
        <Gallery images={galleryImages} />
        <Reservations image={reservationsImg} />
        <VisitUs image={hoursImg} />
      </main>
      <Footer />
    </div>
  );
}
