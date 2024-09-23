import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import CreateContact from "./pages/Contact/CreateContact";
import { ProfileImageProvider } from "./contexts/ProfileImageContext";

function App() {
  return (
    <ProfileImageProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/create-contact" element={<CreateContact />} />
        </Routes>
      </Router>
    </ProfileImageProvider>
  );
}

export default App;
