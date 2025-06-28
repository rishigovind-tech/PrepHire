import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Landing from "./pages/Landing";

import InterviewPrep from "./pages/Interviewprep/InterviewPrep";
import UserProvider from "./context/userContext";
import Home from "./pages/job/Home";
import Applyjob from "./pages/job/Applyjob";
import Application from "./pages/job/Application";
import { ClerkProvider } from "@clerk/clerk-react";
import { AppContext } from "./context/jobContext/AppContext";
import RecruiterLogin from "./components/jobComponents/RecruiterLogin";
import DashboardHR from "./pages/job/DashboardHR";
import AddJob from "./pages/job/AddJob";
import ManageJobs from "./pages/job/ManageJobs";
import ViewApplication from "./pages/job/ViewApplication";
import Dashboard from "./pages/Home/Dashboard";
import "quill/dist/quill.snow.css";
import ProtectJobRoutes from "./components/protectRoute/ProtectJobRoutes";
import Hrwelcome from "./components/jobComponents/Hrwelcome";

const App = () => {
  const { showRecruiterLogin, companyToken } = useContext(AppContext);

  return (
    <UserProvider>
      {" "}
      <Router>
        <div>
          {showRecruiterLogin && <RecruiterLogin />}

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
            <Route
              path="/jobhome/dashboard"
              element={
                <ProtectJobRoutes>
                  <DashboardHR />
                </ProtectJobRoutes>
              }
            >
              {/* {companyToken ? ( */}
              <>
                <Route path="hr-welcome" element={<Hrwelcome />} />
                <Route path="add-job" element={<AddJob />} />
                <Route path="manage-jobs" element={<ManageJobs />} />
                <Route path="view-applications" element={<ViewApplication />} />
              </>
              {/* ) : null}  */}
            </Route>
          </Routes>

          <Toaster
            toastOptions={{
              className: "",
              style: {
                fontSize: "13px",
              },
            }}
          />
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
