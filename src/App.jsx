import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import ClassMainPage from './pages/ClassMainPage';


function App() {
  return (
    <BrowserRouter>
      <div className='App-wrapper'>
        <Nav/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/class-main-page" element={<ClassMainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App