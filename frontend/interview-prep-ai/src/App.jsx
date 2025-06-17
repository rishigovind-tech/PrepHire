import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Home/Dashboard";
import InterviewPrep from "./pages/Interviewprep/InterviewPrep";
import UserProvider from "./context/userContext";
import Home from "./pages/job/Home";
import Applyjob from "./pages/job/Applyjob";
import Application from "./pages/job/Application";
import {ClerkProvider} from '@clerk/clerk-react'





const App = () => {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/interview-prep/:sessionId"
              element={<InterviewPrep />}
            />
            <Route path="/jobhome" element={<Home />} />
            <Route path="/apply-job/:id" element={<Applyjob />} />
            <Route path="/applications" element={<Application />} />



          </Routes>
        </Router>

        <Toaster
          toastOptions={{
            className: "",
            style: {
              fontSize: "13px",
            },
          }}
        />
      </div>
    </UserProvider>
  );
};

export default App;
