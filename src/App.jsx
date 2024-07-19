import Layout from "./Layout.jsx";
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Contact from "./pages/Contact.jsx";
import AboutUs from "./pages/University/AboutUs.jsx";
import Leadership from "./pages/University/Leadership.jsx";
import Partners from "./pages/University/Partners.jsx";
import GlobalFaculty from "./pages/University/GlobalFaculty.jsx";
import Careers from "./pages/University/Careers.jsx";
import Tairova from "./pages/University/Professors/Tairova.jsx";
import Urmanov from "./pages/University/Professors/Urmanov.jsx";
import BekzodRuzimov from "./pages/University/Professors/BekzodRuzimov.jsx";
import Mehrangiz from "./pages/University/Professors/Mehrangiz.jsx";
import KholmatovaKibriyo from "./pages/University/Professors/KholmatovaKibriyo.jsx";
import Haneen from "./pages/University/Professors/Haneen.jsx";
import Giyasov from "./pages/University/Professors/Giyasov.jsx";
import DurdonaDavletova from "./pages/University/Professors/DurdonaDavletova.jsx";
import DurdonaBakhodirova from "./pages/University/Professors/DurdonaBakhodirova.jsx";
import DrBalbaa from "./pages/University/Professors/DrBalbaa.jsx";
import DildoraKhodjaeva from "./pages/University/Professors/DildoraKhodjaeva.jsx";
import AzizaUsmanova from "./pages/University/Professors/AzizaUsmanova.jsx";
import InternationalBusinessManagement from "./pages/InternationalBusinessManagement.jsx";
import NewsDetail from "./pages/NewsDetail.jsx";
import Internships from "./pages/Internships.jsx";
import ExchangeProgram from "./pages/ExchangeProgram.jsx";
import TLM from "./pages/TLM.jsx";
import Scholarship from "./pages/Scholarship.jsx";
import WhyChooseIMC from "./pages/WhyChooseIMC.jsx";
import StudyFees from "./pages/StudyFees.jsx";
import HowToApply from "./pages/HowToApply.jsx";
import FAQ from "./pages/FAQ.jsx";
import EntryRequirements from "./pages/EntryRequirements.jsx";
import KTATPage from "./pages/KTATPage.jsx";
import Foundation from "./pages/Foundation.jsx";
import NewsEvents from "./pages/NewsEvents.jsx";
import EventsDetail from "./pages/EventsDetail.jsx";
import StudentCareer from "./components/StudentCareer.jsx";
import GraduationCeremony from "./pages/GraduationCeremony.jsx";

function App() {

  return (
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route path="/" index element={<Homepage/>} />
              <Route path="/about-us"  element={<AboutUs/>} />
              <Route path="/leadership"  element={<Leadership/>} />
              <Route path="/global-faculty"  element={<GlobalFaculty/>} />
              <Route path="/professors/toirova"  element={<Tairova/>} />
              <Route path="/professors/urmanov"  element={<Urmanov/>} />
              <Route path="/professors/ruzimov"  element={<BekzodRuzimov/>} />
              <Route path="/professors/mehrangiz"  element={<Mehrangiz/>} />
              <Route path="/professors/kibriyo"  element={<KholmatovaKibriyo/>} />
              <Route path="/professors/haneen"  element={<Haneen/>} />
              <Route path="/professors/giyasov"  element={<Giyasov/>} />
              <Route path="/professors/davletova"  element={<DurdonaDavletova/>} />
              <Route path="/professors/bakhodirova"  element={<DurdonaBakhodirova/>} />
              <Route path="/professors/balbaa"  element={<DrBalbaa/>} />
              <Route path="/professors/khodjaeva"  element={<DildoraKhodjaeva/>} />
              <Route path="/professors/usmanova"  element={<AzizaUsmanova/>} />
              <Route path="/ibm" element={<InternationalBusinessManagement/>} />
              <Route path="/tlm" element={<TLM/>} />
              <Route path="/foundation" element={<Foundation/>} />
              <Route path="/partners" element={<Partners/>} />
              <Route path="/scholarships" element={<Scholarship/>} />
              <Route path="/why-choose-imc" element={<WhyChooseIMC/>} />
              <Route path="/careers" element={<Careers/>} />
              <Route path="/contact"  element={<Contact/>} />
              <Route path="/internships"  element={<Internships/>} />
              <Route path="/study-fees"  element={<StudyFees/>} />
              <Route path="/how-to-apply"  element={<HowToApply/>} />
              <Route path="/entry-requirements"  element={<EntryRequirements/>} />
              <Route path="/faq"  element={<FAQ/>} />
              <Route path="/ktat"  element={<KTATPage/>} />
              <Route path="/news-events"  element={<NewsEvents/>} />
              <Route path="/exchange-program"  element={<ExchangeProgram/>} />
              <Route path="/news/:id" element={<NewsDetail/>} />
              <Route path="/events/:id" element={<EventsDetail/>} />
              <Route path="/student-career" element={<StudentCareer/>} />
              <Route path="/graduation-ceremony" element={<GraduationCeremony/>} />
          </Route>
      </Routes>
  )
}

export default App
