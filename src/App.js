import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Energy from "./components/Energy";
import Footer from './components/Footer';
import Service from './components/OurServices';
import Power from './components/PowerProduct';
import Main from './components/Main';
// import Contact from './components/ContactUs';
 
function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
        
    <Route path="/" element={<Main />} />
 <Route path="/energy" element={<Energy />} />
 <Route path="/service" element={<Service />} />
 <Route path="/power" element={<Power />} />
 
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
