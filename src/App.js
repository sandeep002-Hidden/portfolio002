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
          <Route path="/" element={<MainBody/>}>
            <Route path="About-Me" element={<AboutMe/>} />
            <Route path="Projects" element={<Projects/>} />
            <Route path="Connect-me" element={<ContactMe/>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
