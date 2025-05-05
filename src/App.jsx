import './App.css';
import Hero from "./components/hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Blog from "./components/Blog";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Star = ({ top, left, animationDelay }) => (
  <div
    className="star"
    style={{
      top: `${top}%`,
      left: `${left}%`,
      animationDelay: `${animationDelay}s`
    }}
  />
);

const GalaxyBackground = () => {
  const stars = Array.from({ length: 100 }, () => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5
  }));

  return (
    <div className="galaxy-background">
      {stars.map((star, i) => (
        <Star key={i} top={star.top} left={star.left} animationDelay={star.delay} />
      ))}
    </div>
  );
};

const ScrollToHomeLink = ({ className, children }) => {
  const [shouldScroll, setShouldScroll] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setShouldScroll(true);
  };

  useEffect(() => {
    if (shouldScroll && location.pathname === '/') {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }
      setShouldScroll(false);
    }
  }, [shouldScroll, location]);

  return (
    <Link to="/" onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isBlogPage = location.pathname === '/blog';

  return (
    <nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      style={{ background: isBlogPage ? 'transparent' : '' }}
    >
      <ScrollToHomeLink className="logo">Kobe</ScrollToHomeLink>
      <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
        {!isBlogPage && (
          <>
            <li className="desktop-only"><a href="#about"><span>About</span></a></li>
            <li className="desktop-only"><a href="#experience"><span>Experience</span></a></li>
            <li className="desktop-only"><a href="#projects"><span>Projects</span></a></li>
            <div className="divider"></div>
            <li className="mobile-only"><Link to="/blog"><span>My Blog</span></Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-list a");

    const onScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 100) {
        navLinks.forEach(link => link.classList.remove("active"));
        document.querySelector('.nav-list a[href="#home"]')?.classList.add("active");
        return;
      }

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active");
            }
          });
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section id="home" className="hero">
        <Hero />
      </section>
      <section id="about" className="about">
        <About />
      </section>
      <section id="experience" className="experience-section">
        <Experience />
      </section>
      <section id="projects" className="projects">
        <Projects />
      </section>
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <GalaxyBackground />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
