import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import Login from './LandingPage/Section/Login/Login'
import BestRanking from '../components/LandingPage/Section/BestRanking/BestRaking';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <NavBar />
        <div style={{ minHeight: '90vh' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Login />} />
            <Route path="/bestseller/:category" element={<BestRanking />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;