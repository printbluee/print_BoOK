import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import BestRanking from './API/BestRaking/BestRaking';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ minHeight: '90vh' }}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/bestseller/:category" element={<BestRanking />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
