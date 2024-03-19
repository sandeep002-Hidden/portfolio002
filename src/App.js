import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainBody from "./components/body";
import ContactMe from "./components/ConnectMe";
import Projects from "./components/Project";
import AboutMe from "./components/AboutMe";
function App() {
  return (
    <>
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route path="/" element={<MainBody />} />
          <Route path="/About-Me" element={<AboutMe/>} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Connect-me" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
