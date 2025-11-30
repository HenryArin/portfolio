import './App.css';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import BlogSection from './sections/BlogSection';
import FooterSection from './sections/FooterSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
}

export default App;
