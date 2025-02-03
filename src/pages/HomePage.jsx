import '../css/HomePage.css';
import Intro from '../components/Intro';
import InfSection from '../components/infSection';
import SlideBanner from '../components/SlideBanner';
import Footer from '../components/Footer';

function HomePage() {

  return (
    <div className='home-wrapper'>
      <div className='home-body'> 
      <Intro />
      <InfSection />
      </div>
    </div>
  )
}

export default HomePage;