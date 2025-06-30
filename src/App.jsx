import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import EventPage from "./Pages/EventGrid/EventGrid";
import StatsSection from "./Pages/Years/Years";
import Video from "./Pages/Video/Video";
import About from "./Pages/About/About";
import Wedding from "./Pages/Wedding/Wedding";
import Birthday from "./Pages/Birthday/Birthday";
import Corporate from "./Pages/Corporate/Corporate";
import EventVenuePage from "./Pages/EventVenue/EventVenuePage";
import ContactPage from "./Pages/Contact/Contact";
import Entry from "./Components/EntryPage/Entry";
import LoginPage from "./Pages/Test/Test";
import Gallery from "./Pages/Gallery/Gallery";
import WeddingGallery from "./Pages/WeddingGallery/WeddingGallery";
import ProgramOne from "./Components/EventBooking/Program1";
import ProgramTwo from "./Components/EventBooking/Program2";
import ProgramThree from "./Components/EventBooking/Program3";
import EventBookingForm from "./Components/EventBooking/booking";
import ProgramFour from "./Components/EventBooking/Program4";
import ProgramFive from "./Components/EventBooking/Program5";
import ProgramSix from "./Components/EventBooking/Program6";
import ProgramSeven from "./Components/EventBooking/Program7";
import ProgramEight from "./Components/EventBooking/Program8";
import ProgramNine from "./Components/EventBooking/Program9";
import BookingSuccess from "./Pages/Success/Success";
import ProgramTen from "./Components/EventBooking/Program10";
import Catering from "./Pages/Catering/Catering";
import ScrollToTop from "./Components/ScrollTop/ScrollTop";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/home" element={<Home />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/years" element={<StatsSection />} />
          <Route path="/video" element={<Video />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/wedding" element={<Wedding />} />
          <Route path="/services/birthday" element={<Birthday />} />
          <Route path="/services/corporate" element={<Corporate />} />
          <Route path="/venue" element={<EventVenuePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/test" element={<LoginPage />} />
          <Route path="/weddinggallery" element={<WeddingGallery />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/programone" element={<ProgramOne />} />
          <Route path="/programtwo" element={<ProgramTwo />} />
          <Route path="/programthree" element={<ProgramThree />} />
          <Route path="/programfour" element={<ProgramFour />} />
          <Route path="/programfive" element={<ProgramFive />} />
          <Route path="/programsix" element={<ProgramSix />} />
          <Route path="/programseven" element={<ProgramSeven />} />
          <Route path="/programeight" element={<ProgramEight />} />
          <Route path="/programnine" element={<ProgramNine />} />
          <Route path="/programTen" element={<ProgramTen />} />
          <Route path="/booking" element={<EventBookingForm />} />
          <Route path="/success" element={<BookingSuccess />} />
          <Route path="/catering" element={<Catering />} />
        </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
