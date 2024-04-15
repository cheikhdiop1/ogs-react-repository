import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AccountPage from './Pages/AccountPage';
import GamesPage from './Pages/GamesPage';
import ScoresPage from './Pages/ScoresPage';
import OurStoryPage from './Pages/OurStoryPage';
import SupportPage from './Pages/SupportPage';
import SettingsPage from './Pages/SettingsPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/scores" element={<ScoresPage />} />
        <Route path="/ourstory" element={<OurStoryPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;