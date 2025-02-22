import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import ClassMainPage from './pages/ClassMainPage';
import TestMainPage from './pages/TestMainPage';
import ExtraPage from './pages/ExtraServicePage';
import LoginPage from './pages/LoginPage';
import GoogleLogin from './auth/GoogleAuth';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className='App-wrapper'>
        <Nav/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/class-main-page" element={<ClassMainPage />} />
          <Route path="/test-main-page" element={<TestMainPage />} />
          <Route path="/extra-page" element={<ExtraPage />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/login-handler" element={<GoogleLogin />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App