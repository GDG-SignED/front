import './css/ClassMainPage.css';
import VideoGrid from '../components/ClassVideoGrid';
import videoLinksConsonants from "../assets/ClassVideoData/ClassConsonants";
import videoLinksVowels from "../assets/ClassVideoData/ClassVowels";
import ClassPageContent from "../components/ClassPageContent";
import { useState } from 'react';

function ClassMainPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // 사이드바 메뉴
  const categories = [
    { name: "문화와 역사", key: "history", videos: [] },
    { name: "자음", key: "consonants", videos: videoLinksConsonants },
    { name: "모음", key: "vowels", videos: videoLinksVowels },
    { name: "기초 단어", key: "basicWords", videos: [] },
  ];

  return (
    <div>
      <div className="class-container">
        {/* 상단부 */}
        <header className="header">
          <div className="left-section">
            <h2>로그인 후에 같이 공부해보아요!</h2>
            <button className="login-button">로그인/회원가입 →</button>
          </div>
          <div className="right-section">
            {categories.map((category) => (
              <button 
                className="category-button"
                key={category.key}
                onClick={() => setSelectedCategory(category)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </header>

        {/* 하단부 */}
        <main className="content">
          {selectedCategory ? (
            <VideoGrid videos={selectedCategory.videos} />
          ) : (
            <div className="default-text">
              <p>수어를 배우는 첫 걸음,</p>
              <p>영상을 통해 손끝의 언어를 만나보세요!</p>
              <p>더 많은 사람들과 소통할 수 있는 특별한 능력을 키워보세요.</p>
              <p>오른쪽에 있는 카테고리 중 원하는 것을 골라 공부해보아요. ✏️</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default ClassMainPage;