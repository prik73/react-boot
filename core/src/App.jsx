import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppWorks from './components/work';
import AppContact from './components/Contact';
import AppFooter from './components/footer';
import Gallery from './Gallery';

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
              <Route path="/gallery" element={<AppWorks/>} />
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
      <AppAbout />
      <AppServices />
      <AppContact />
    </>
  );
}

export default App;
