import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Analytics } from "@vercel/analytics/react"

import AppHeader from './components/header';
import AppHero from './components/hero';
import HomeAbout from './components/about';
import AppServices from './components/services';
import AppWorks from './pages/Gallery';
import AppContact from './components/Contact';
import AppFooter from './components/footer';
import Gallery from './Gallery';
import About from './pages/About';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import WatchOurWork from './components/Watchourwork';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

function App() {
  return (
    <Router>
    <div className='App d-flex flex-column min-vh-100 overflow-hidden'>
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

        {/* Floating WhatsApp Button */}
        <FloatingWhatsApp
          phoneNumber="+918619320719"
          accountName="Priyanshu"
          allowClickAway
          notification
          notificationSound
          avatar="https://your-image-url.com/avatar.jpg" // Optional: Add an avatar
        />
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
      <WatchOurWork />
      <AppContact />
    </>
  );
}

export default App;
