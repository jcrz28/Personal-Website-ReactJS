import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './global.css';
import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage';
import BackgroundInfoPage from './pages/BackgroundInfoPage';
import SkillPage from './pages/SkillPage';
import ProjectPage from './pages/ProjectPage';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path = '/' element={<HomePage />} />
          <Route path = '/AboutMe' element={<BackgroundInfoPage />} />
          <Route path = '/Skills' element={<SkillPage />} />
          <Route path = '/Projects' element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
