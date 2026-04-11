import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import CommunityForum from './pages/CommunityForum';
import LegalRights from './pages/LegalRights'
import Signup from './pages/signup/Signup';
import Chat from './pages/Chat';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';
import Skill from './pages/skill';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import LegalDefense from './components/LegalDefense';
import PoliceHarassmentModule from './components/PoliceHarassmentModule';
import EmergencyActionModule from './components/EmergencyActionModule';
import InteractiveScenario from './components/InteractiveScenario';
import ChildcareProtection from './components/ChildcareProtection';
import SchoolEnrollment from './components/SchoolEnrollment';
import GovernmentSchemes from './components/GovernmentSchemes';
import RTEEligibilityChecker from './components/RTEEligibilityChecker';

const App = () => {
  const { authUser } = useAuthContext();

  return (
    <div>
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/story" element={<SuccessStoriesPage />} />

        {/* Protected Routes */}
        <Route path="/chat" element={authUser ? <Chat /> : <Navigate to="/login" />} />
        <Route path="/forum" element={authUser ? <CommunityForum /> : <Navigate to="/login" />} />
        <Route path="/legal" element={<LegalRights /> }/>
        <Route path="/skill" element={authUser ? <Skill /> : <Navigate to="/login" />} />
        
        {/* Legal Defense Course Routes */}
        <Route path="/legal-defense" element={authUser ? <LegalDefense /> : <Navigate to="/login" />} />
        <Route path="/police-harassment" element={authUser ? <PoliceHarassmentModule /> : <Navigate to="/login" />} />
        <Route path="/emergency-action" element={authUser ? <EmergencyActionModule /> : <Navigate to="/login" />} />
        <Route path="/interactive-scenario/:moduleId" element={authUser ? <InteractiveScenario /> : <Navigate to="/login" />} />
        
        {/* Childcare Protection Routes */}
        <Route path="/childcare-protection" element={authUser ? <ChildcareProtection /> : <Navigate to="/login" />} />
        <Route path="/school-enrollment" element={authUser ? <SchoolEnrollment /> : <Navigate to="/login" />} />
        <Route path="/government-schemes" element={authUser ? <GovernmentSchemes /> : <Navigate to="/login" />} />
        <Route path="/rte-eligibility" element={authUser ? <RTEEligibilityChecker /> : <Navigate to="/login" />} />

        {/* Authentication Routes */}
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;