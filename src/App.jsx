import './App.css';
import { useRef } from 'react';
import Header from './sections/Header/Header';
import Aboutme from './sections/Aboutme/Aboutme';
import Digital from './sections/Digital/Digital';
import Footer from './sections/Footer/Footer';
import Mywork from './sections/Mywork/Mywork';
import Skills from './sections/Skills/Skills';

function App() {
  // Creating refs for each section
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Header aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} />
      <div ref={aboutRef}>
        <Aboutme />
      </div>
        <Digital />
        <Skills />
        <div ref={workRef}>
        <Mywork />
      </div>
      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
