import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Layout/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "./Utils/helper";
import Footer from "./Layout/Footer/Footer";
import SkillsPage from "./Pages/SkillsPage/SkillsPage";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage/PrivacyPolicyPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();

  const currentPath = location.pathname;

  const [isAboutPageVisible, setIsAboutPageVisible] = useState(false);
  const [isContactPageVisible, setIsContactPageVisible] = useState(false);
  const [isSkillsPageVisible, setIsSkillsPageVisible] = useState(false);
  const [isProjectsPageVisible, setIsProjectsPageVisible] = useState(false);

  // Custom callback function for AboutPage
  const handleAboutIntersect = () => {
    // Perform any action when AboutPage becomes visible (optional)
  };
  // Custom callback function for SkillsPage
  const handleSkillsIntersect = () => {
    // Perform any action when AboutPage becomes visible (optional)
  };
  // Custom callback function for ProjectsPage
  const handleProjectsIntersect = () => {
    // Perform any action when AboutPage becomes visible (optional)
  };
  // Custom callback function for ContactPage
  const handleContactIntersect = () => {
    // Perform any action when AboutPage becomes visible (optional)
  };

  const showAboutPage = useIntersectionObserver(aboutRef, handleAboutIntersect, { threshold: 0.6 });
  const showSkillsPage = useIntersectionObserver(skillsRef, handleSkillsIntersect, { threshold: 0.6 });
  const showProjectsPage = useIntersectionObserver(projectsRef, handleProjectsIntersect, { threshold: 0.6 });
  const showContactPage = useIntersectionObserver(contactRef, handleContactIntersect, { threshold: 0.6 });

  useEffect(() => {
    // Add a scroll event listener to track the scroll position
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const aboutTop = aboutRef.current.offsetTop;
      const aboutBottom = aboutTop + aboutRef.current.offsetHeight;
      const contactTop = contactRef.current.offsetTop;
      const contactBottom = contactTop + contactRef.current.offsetHeight;
      const skillsTop = skillsRef.current.offsetTop;
      const projectsTop = projectsRef.current.offsetTop;

      if (aboutTop < scrollHeight + 15 && aboutBottom > scrollHeight) {
        // Set the color to red
        setIsAboutPageVisible(true);
        setIsContactPageVisible(false);
        setIsSkillsPageVisible(false);
        setIsProjectsPageVisible(false);
        return;
      } else if (contactTop < scrollHeight + 15) {
        // Set the color to red
        setIsAboutPageVisible(false);
        setIsContactPageVisible(true);
        setIsSkillsPageVisible(false);
        setIsProjectsPageVisible(false);
        return;
      } else if (projectsTop < scrollHeight + 15) {
        // Set the color to red
        setIsAboutPageVisible(false);
        setIsContactPageVisible(false);
        setIsSkillsPageVisible(false);
        setIsProjectsPageVisible(true);
        return;
      } else if (skillsTop < scrollHeight + 15) {
        // Set the color to red
        setIsAboutPageVisible(false);
        setIsContactPageVisible(false);
        setIsSkillsPageVisible(true);
        setIsProjectsPageVisible(false);
        return;
      }
      setIsAboutPageVisible(false);
      setIsContactPageVisible(false);
      setIsSkillsPageVisible(false);
      setIsProjectsPageVisible(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App bg-white">
      <Header
        isAboutPageVisible={isAboutPageVisible}
        isContactPageVisible={isContactPageVisible}
        isSkillsPageVisible={isSkillsPageVisible}
        isProjectsPageVisible={isProjectsPageVisible}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <div ref={aboutRef}>{currentPath === "/home" && showAboutPage && <AboutPage />}</div>
      <div ref={skillsRef}>{currentPath === "/home" && showSkillsPage && <SkillsPage />}</div>
      <div ref={projectsRef}>{currentPath === "/home" && showProjectsPage && <ProjectPage />}</div>
      <div ref={contactRef}>{currentPath === "/home" && showContactPage && <ContactPage />}</div>
      <Footer />
    </div>
  );
}

export default App;
