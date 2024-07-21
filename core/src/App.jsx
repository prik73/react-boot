import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppHeader from './components/header';
import AppHero from './components/hero'
import AppAbout from './components/about';
import AppServices from './components/services';
import AppWorks from './components/work';

function App() {
  return (
    <Router>
      <div className='App'>
        <header id='header'>
          <AppHeader />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<AppWorks />} />
          </Routes>
        </main>
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
    </>
  );
}

export default App;