import React, { useEffect } from 'react';
import './Front.css';
import Navbar from './LandingPage/Navbar';


const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll functionality
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll');
      scrollElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight / 1.2) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = (path: string) => {
    window.location.href = path;
  };

  return (
    <div>
      <Navbar></Navbar>
    <div className='appBody'>
    <div className="App">
      <header className="Header">
        <div className="HeaderContent">
          <h1 className="scroll">"Your Gateway to News, Health, and Skills Resources"</h1>
          <p className="scroll">Explore the latest news, enhance your skills, and improve your health!</p>
          <div className="Buttons">
            <button className="Button scroll" onClick={() => handleButtonClick('/news')}>
              News
            </button>
            <button className="Button scroll" onClick={() => handleButtonClick('/health')}>
              Health
            </button>
           
          </div>
        </div>
        <div className="HeroImageContainer scroll">
         
        </div>
      </header>
      <section className="Section scroll">
        <h2>Why Choose Our Platform?</h2>
        <p>
          Our platform offers a comprehensive suite of resources to keep you informed, skilled, and healthy. Whether you're seeking the latest news updates, want to enhance your professional skills, or prioritize your well-being, we've got you covered.
        </p>
      </section>
    </div>
    </div>
    </div>
  );
};

export default App;