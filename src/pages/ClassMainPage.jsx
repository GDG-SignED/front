import './css/ClassMainPage.css';
import VideoGrid from '../components/ClassVideoGrid';
import videoLinksConsonants from "../assets/ClassVideoData/ClassConsonants";
import videoLinksVowels from "../assets/ClassVideoData/ClassVowels";
import ClassPageContent from "../components/ClassPageContent";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import instance from '../auth/Axios';
import Login from '../components/LoginComponent';
import Logout from '../components/LogoutComponent';

function ClassMainPage() {
  // 백 api 연결 테스트
  const [vidioLinkFromBack, setVidioLinkFromBack] = useState([]);
  
  useEffect(() => {
    const getUrl = async () => {
      try {
        const response = await instance.get(`/edu?category=CONSONANT`);
        console.log("데이터 받아와지나 확인", response.data);
        setVidioLinkFromBack(response.data);
      } catch (error) {
        console.error('api 오류 발생:', error);
      }
    };

    getUrl();
}, []);


  // 사이드바 메뉴
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    { name: "문화와 역사", key: "history", videos: [] },
    { name: "자음", key: "consonants", videos: videoLinksConsonants },
    { name: "모음", key: "vowels", videos: videoLinksVowels },
    { name: "기초 단어", key: "basicWords", videos: [] },
  ];

  const accessToken = localStorage.getItem("accessToken");

  return (
    <div>
      <div className="class-container">
        {/* 상단부 */}
        <header className="class-header">
          {accessToken ? <Login /> : <Logout />}
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