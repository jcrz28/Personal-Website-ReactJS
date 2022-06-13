import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './global.css';
import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillPage from './pages/SkillPage';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path = '/' element={<HomePage />} />
          <Route path = '/AboutMe' element={<AboutPage />} />
          <Route path = '/Skills' element={<SkillPage />} />
          <Route path = '/Projects' element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
