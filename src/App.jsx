import React, { useState } from 'react';
import './App.css';
import HomePage from './pages/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSection from './components/LoginSection';
import WeaverDetails from './pages/weavers_details';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/supplier-login" element={<LoginSection toggleLogin={toggleLogin} />} />
          <Route path="/weaver-login" element={<weaver_login />} />
          <Route path="/weaver-details" element={<weavers_details/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;