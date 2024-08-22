import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import FixtureDetails from "./components/FixtureDetails/FixtureDetails"; // Import the FixtureDetails component
import "./App.css";
import Footer from "./components/Footer/Footer";
import CreateMatch from "./components/AdminDashboard/CreateMatch";
import ReadMatch from "./components/AdminDashboard/ReadMatch";
import UpdateMatch from "./components/AdminDashboard/UpdateMatch";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main selectedSport="cricket" />} />
          <Route path="/cricket" element={<Main selectedSport="cricket" />} />
          <Route
            path="/basketball"
            element={<Main selectedSport="basketball" />}
          />
          <Route path="/football" element={<Main selectedSport="football" />} />

          <Route path="/kabaddi" element={<Main selectedSport="kabaddi" />} /> {/* Add Kabaddi route */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/:sport/:matchId" element={<FixtureDetails />} />{" "}
          {/* Route for fixture details */}
          <Route path="/create-match" element={<CreateMatch />} />
          <Route path="/read-match" element={<ReadMatch />} />
          <Route path="/update-match/:id" element={<UpdateMatch />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
