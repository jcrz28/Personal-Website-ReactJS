import './App.css';

import NavigationBar from './Components/NavigationBar/NavigationBar';
import Card from './Components/Card/Card';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Card/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;