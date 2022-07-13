import React, {Suspense} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './globals.css';
import Nav from './components/Nav/Nav';
import Spinners from './UI/Spinner';
import ProjectPage from './pages/ProjectPage';

const HomePage = React.lazy(() => import( './pages/HomePage'));
const InformationPage = React.lazy(() => import( './pages/InformationPage'));
const SkillPage = React.lazy(() => import( './pages/SkillPage'));
const App = () => {
  return (
      <BrowserRouter>
        <Nav/>
        <Suspense fallback={<Spinners />}>
          <Routes>
            <Route path = '/' element={<HomePage />} />
            <Route path = '/AboutMe' element={<InformationPage />} />
            <Route path = '/Skills' element={<SkillPage />} />
          </Routes>
        </Suspense>
        <Routes>
            <Route path = '/Projects' element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
