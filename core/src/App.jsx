import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css'; // If you are using Tailwind, make sure it's imported here

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppHeader from './components/header';
import AppHero from './components/hero';
import HomeAbout from './components/about';
import AppServices from './components/services';
import AppWorks from './components/work';
import AppContact from './components/Contact';
import AppFooter from './components/footer';
import AppContactUs from './pages/Contactus';
import Gallery from './Gallery';
import About from './pages/About';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className='App d-flex flex-column min-vh-100'>
        <header id='header'>
          <AppHeader />
        </header>
        <div className='flex-grow-1'>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/gallery" element={<AppWorks />} />
              <Route path="/about-us" element={<About />} />

              <Route path="/contact-us" element={<Contact/>} />

              <Route path="/donate-us" element={<Donate />} />

            </Routes>
          </main>
        </div>
        <footer id='footer'>
          <AppFooter />
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <AppHero />
      <HomeAbout />
      <AppServices />
      <AppContact />
    </>
  );
}

export default App;
