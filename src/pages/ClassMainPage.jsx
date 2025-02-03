import './css/ClassMainPage.css';
import VideoGrid from '../components/ClassVideoGrid';
import videoLinksConsonants from "../assets/ClassVideoData/ClassConsonants";

function ClassMainPage() {


  return (
    <div>
      <h1>classMainPage</h1>
      <VideoGrid videos={videoLinksConsonants} />
    </div>
  )
}

export default ClassMainPage;