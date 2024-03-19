import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainBody from "./components/body";
import ContactMe from "./components/ConnectMe";
import Projects from "./components/Project";
import AboutMe from "./components/AboutMe";
function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/portfolio" element={<MainBody/>}/>
            <Route path="/portfolio/About-Me" element={<AboutMe/>} />
            <Route path="/portfolio/Projects" element={<Projects/>} />
            <Route path="/portfolio/Connect-me" element={<ContactMe/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
