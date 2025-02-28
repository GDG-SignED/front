import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './css/TestMainPage.css';
import TestPageContent from '../components/TestPageContent';
import BasicWordTest from '../components/BasicWordTest';
import AlphabetConsonantsTest from '../components/AlphabetConsonantsTest';
import AlphabetVowelsTest from '../components/AlphabetVowelsTest';

import Login from '../components/LoginComponent';
import Logout from '../components/LogoutComponent';

function TestMainPage() {
  // 사이드바 메뉴
  const [selectedTestSideMenu, setSelectedTestSideMenu] = useState(null);
  const testSideMenu = [
    { name: "자음", key: "consonants", testAI: [] },
    { name: "모음", key: "vowels", testAI: [] },
    { name: "기초 단어", key: "basicWords", testAI: [] },
  ];

  const accessToken = localStorage.getItem("accessToken");

  return (
    <div>
      <div className='test-container'>
        {/* 상단부 */}
        <header className='test-header'>
          {accessToken ? <Login /> : <Logout />}
          <div className='test-right-section'>
            {testSideMenu.map((sideMenu) => (
              <button
                className='test-side-button'
                key={sideMenu.key}
                onClick={() => setSelectedTestSideMenu(sideMenu)}
              >
                {sideMenu.name}
              </button>
            ))}
          </div>
        </header>

        {/* 하단부 */}
        <main className='test-content'>
        {!selectedTestSideMenu && <TestPageContent />}
        {selectedTestSideMenu && selectedTestSideMenu.key === "basicWords" && (<BasicWordTest />)}
        {selectedTestSideMenu && selectedTestSideMenu.key === "consonants" && (<AlphabetConsonantsTest />)}
        {selectedTestSideMenu && selectedTestSideMenu.key === "vowels" && (<AlphabetVowelsTest />)}
        </main>
      </div>
    </div>
  )
}

export default TestMainPage;