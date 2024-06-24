import Layout from "./Layout.jsx";
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Contact from "./pages/Contact.jsx";
import AboutUs from "./pages/University/AboutUs.jsx";
import Leadership from "./pages/University/Leadership.jsx";
import Partners from "./pages/University/Partners.jsx";
import GlobalFaculty from "./pages/University/GlobalFaculty.jsx";
import Careers from "./pages/University/Careers.jsx";

function App() {

  return (
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route path="/" index element={<Homepage/>} />
              <Route path="/about-us" index element={<AboutUs/>} />
              <Route path="/leadership" index element={<Leadership/>} />
              <Route path="/global-faculty" index element={<GlobalFaculty/>} />
              <Route path="/partners" element={<Partners/>} />
              <Route path="/careers" element={<Careers/>} />
              <Route path="/contact" index element={<Contact/>} />
          </Route>
      </Routes>
  )
}

export default App
