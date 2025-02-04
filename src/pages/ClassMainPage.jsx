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
        {/* 왼쪽 고정 사이드바 */}
        <div className="class-sidebar">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* 메인 컨텐츠 영역 */}
        <div className="class-main-content">
          <h1 className="text-2xl font-bold mb-4">로그인 후에 같이 공부해보아요!</h1>
          <button className="class-login-button">
            로그인/회원가입 →
          </button>

          {/* 선택한 카테고리에 따른 콘텐츠 변경 */}
          <div className="class-content-section">
            {selectedCategory ? (
              selectedCategory.videos.length > 0 ? (
                <VideoGrid videos={selectedCategory.videos} />
              ) : (
                <p className="text-center text-gray-500">
                  해당 카테고리의 영상이 없습니다.
                </p>
              )
              ) : (
                <p className="text-center text-gray-600">
                  수어를 배우는 첫 걸음, 영상을 통해 손끝의 언어를 만나보세요!
                </p>
              )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default ClassMainPage;