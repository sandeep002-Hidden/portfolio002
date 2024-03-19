import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainBody from './components/body';
import ContactMe from './components/ConnectMe';
import Projects from './components/Project';
import AboutMe from './components/AboutMe';
function App() {
  return (
    <>
    <Router basename='/portfolio'>
      <Routes>
        <Route exact path="/" element={<MainBody/>} />
        <Route exact path="/Connect-me" element={<ContactMe/>} />
        <Route exact path="/Projects" element={<Projects/>} />
        <Route exact path="/About-Me" element={<AboutMe/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
