import './css/HomePage.css';
import Intro from '../components/homepage/Intro';
import ServiceIntro from "../components/homepage/ServiceIntro";
import RecentNews from "../components/homepage/RecentNews";
import TeamSection from "../components/homepage/TeamSection";
import AdBanner from "../components/homepage/AdBanner";

function HomePage() {

  return (
    <div className='home-wrapper'>
      <div className='home-body'> 
      <Intro />
      <ServiceIntro />
      <RecentNews />
      <TeamSection />
      <AdBanner />
      </div>
    </div>
  )
}

export default HomePage;