import { useState } from 'react';
import './css/TestMainPage.css';
import TestPageContent from '../components/TestPageContent';


function TestMainPage() {
  // 사이드바 메뉴
  const [selectedTestSideMenu, setSelectedTestSideMenu] = useState(null);

  const testSideMenu = [
    { name: "자음", key: "consonants", testAI: [] },
    { name: "모음", key: "vowels", testAI: [] },
    { name: "기초 단어", key: "basicWords", testAI: [] },
  ];

  return (
    <div>
      <div className='test-container'>
        {/* 상단부 */}
        <header className='test-header'>
          <div className='test-left-section'>
            <h2>로그인 후에 같이 공부해보아요!</h2>
            <button className='test-login-button'>로그인/회원가입 →</button>
          </div>
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
          {selectedTestSideMenu ? (
            selectedTestSideMenu.testAI
          ) : (
            <TestPageContent />
          )}
        </main>
      </div>
    </div>
  )
}

export default TestMainPage;