import './css/ClassMainPage.css';
import VideoGrid from '../components/ClassVideoGrid';
import videoLinksConsonants from "../assets/ClassVideoData/ClassConsonants";
import videoLinksVowels from "../assets/ClassVideoData/ClassVowels";
import ClassPageContent from "../components/ClassPageContent";
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function ClassMainPage() {
  // 사이드바 메뉴
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    { name: "문화와 역사", key: "history", videos: [] },
    { name: "자음", key: "consonants", videos: videoLinksConsonants },
    { name: "모음", key: "vowels", videos: videoLinksVowels },
    { name: "기초 단어", key: "basicWords", videos: [] },
  ];

  // 로그인 페이지 연결
  const navigate = useNavigate();
  function gotoLogin() {
    navigate('/login-page');
  }

  return (
    <div>
      <div className="class-container">
        {/* 상단부 */}
        <header className="class-header">
          <div className="class-left-section">
            <h2>로그인 후에 같이 공부해보아요!</h2>
            <button className="class-login-button" onClick={gotoLogin}>로그인/회원가입 →</button>
          </div>
          <div className="class-right-section">
            {categories.map((category) => (
              <button 
                className="class-category-button"
                key={category.key}
                onClick={() => setSelectedCategory(category)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </header>

        {/* 하단부 */}
        <main className="class-content">
          {selectedCategory ? (
            <VideoGrid videos={selectedCategory.videos} />
          ) : (
            <ClassPageContent />
          )}
        </main>
      </div>
    </div>
  )
}

export default ClassMainPage;