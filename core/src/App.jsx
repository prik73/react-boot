import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'
import AppHeader from './components/header';
import AppHero from './components/hero'
import AppAbout from './components/about';
function App() {
 

  return (
    <div className='App'>
      <header id ='header'>
        <AppHeader />
      </header>

      <main>
        <AppHero />
        <AppAbout />
      </main>
    </div>
  );
}

export default App
