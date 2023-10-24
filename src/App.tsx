import './App.css';
//components
import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <SocialLinks />
    </div>
  );
}

export default App;
