import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import AskAIPage from './pages/AskAIPage';
import ContractPage from './pages/ContractPage';
import FunnyZonePage from './pages/FunnyZonePage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ask-ai" element={<AskAIPage />} />
            <Route path="/contracts" element={<ContractPage />} />
            <Route path="/funny-zone" element={<FunnyZonePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;