import React,{ useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNavigation from './components/layout/BottomNavigation';
import Home from './pages/Home';
import Courses from './pages/courses/Course';
import Store from './pages/store/Store';
import Profile from './pages/profile/Profile';
import config from "../config.json";

const App: React.FC = () => {
  

  useEffect(() => {
    const env = config["ENV"]
    const api = config["VITE_APP_API_URL"]
    console.log("Config", env)
    console.log("API", api)

  }, [])

  return (
    <Router>
      <div className="pb-24"> {/* Add padding to prevent overlap with BottomNavigation */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/store" element={<Store />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <BottomNavigation />
    </Router>
  );
};

export default App;
