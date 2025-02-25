import "./RecentNews.css";

const RecentNews = () => {
  return (
    <section className="recent-news">
      <hr/>
      <p className="news-top">요즘 손이랑은요</p>
      <div className="news-box">
        <p className="news-date">2025년 2월 28일</p>
        <p className="news-title">🎉 서비스 오픈! 지금 바로 수어를 배워보세요!</p>
        <p className="news-text">드디어 손이랑 학습 서비스가 정식 오픈했습니다.</p>
        <p className="news-text">누구나 쉽고 재미있게 수어를 배울 수 있도록 다양한 콘텐츠를 준비했어요. 지금 바로 시작해보세요!</p>
      </div>
    </section>
  );
};

export default RecentNews;
