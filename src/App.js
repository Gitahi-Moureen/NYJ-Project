import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Portfolio1 from './components/Portfolio1';
import Portfolio2 from './components/Portfolio2';
import Portfolio3 from './components/Portfolio3';
import Portfolio4 from './components/Portfolio4';
import Portfolio5 from './components/Portfolio5';
import Navbar from './Home';
import Video from './Videos';
import Blog from './Blogs';
import Foot from './Footer';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <div>
    <Navbar/>
    <Video/>
    <Blog/>
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/portfolio/1" element={<Portfolio1 />} />
          <Route path="/portfolio/2" element={<Portfolio2 />} />
          <Route path="/portfolio/3" element={<Portfolio3 />} />
          <Route path="/portfolio/4" element={<Portfolio4 />} />
          <Route path="/portfolio/5" element={<Portfolio5 />} />
        </Routes>
      </div>
    </Router>
    <Foot/>
    </div>
  );
};

export default App;