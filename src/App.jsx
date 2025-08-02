import React, { useState } from 'react';
import './App.css';
import HomePage from './pages/home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import LoginSection from './components/LoginSection';
import WeaverLogin from './pages/weaver_login';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="App">
    <Router>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/supplier-login" element={<LoginSection toggleLogin={toggleLogin}/>}/>
            <Route path="/weaver-login" element={<WeaverLogin/>}/>

     </Routes>
    </Router>
    </div>
  );
}

export default App;