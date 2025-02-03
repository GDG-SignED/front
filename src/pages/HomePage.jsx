import '../css/HomePage.css';
import Nav from '../components/Nav';
import Intro from '../components/Intro';
import InfSection from '../components/infSection';
import SlideBanner from '../components/SlideBanner';
import Footer from '../components/Footer';

function HomePage() {

  return (
    <div>
      <Nav />
      <Intro />
      <InfSection />
      <Footer />
    </div>
  )
}

export default HomePage;