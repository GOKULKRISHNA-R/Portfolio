import ContactForm from "./components/ContactForm";
import DashBoard from "./components/DashBoard";
import Projects from "./components/Projects";
import MyFooter from "./components/Footer";
import Service from "./components/Service";
import Skills from "./components/Skills";
import NavBar from "./components/NavBar";
import gk from './assets/GK-white.png';
import gk2 from './assets/GK.png';
import { useEffect, useState } from "react";

export default function App () {
  const [image, setImage] = useState(gk);
  const [scrollThreshold, setScrollThreshold] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 5 ;
      const screenHeight = window.innerHeight;
      if (scrollPosition > scrollThreshold) {
        const numScreensScrolled = Math.floor(scrollPosition / screenHeight) ;

        if (numScreensScrolled % 2 === 0) {
          setImage(gk);
        } else {
          setImage(gk2);
        }
      } else {
        setImage(gk);
      }
    };

    const updateScrollThreshold = () => {
      setScrollThreshold(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateScrollThreshold);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollThreshold);
    };
  }, [scrollThreshold]);

  return (
    <div className="bg-pBg overflow-hidden scroll-smooth">
       <img src={image} alt="logo" className="2xl:h-40 2xl:w-40 xl:h-32 xl:w-32 lg:h-24 lg:w-24 h-20 w-20 fixed md:top-6 md:left-6 top-3 left-3" />
       <div className="relative"><NavBar /></div>
       <div id="Home"  ><DashBoard /></div>
       <div id="Services"  ><Service /></div>
       <div id="Skills"  ><Skills /></div>
       <div id="Projects"  ><Projects /></div>
       <div id="About-Me" ><MyFooter /></div>
    </div>

  )
}