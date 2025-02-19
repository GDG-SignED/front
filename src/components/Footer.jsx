import './css/Footer.css';
import notion from '../assets/images/notion_icon.png';
import github from '../assets/images/github_icon.png';

function Footer() {
    return(
      <footer className="footer">
        <div className='footer-content'>
          <div className='footer-content-left'>
            <h3>GDG Success Team4</h3>
            <a href="https://www.notion.so/SucceSS-4-175dd6a3a8f38096a916e2fe53720d39?pvs=4" target="_blank"> 
              <img src={notion} alt="notion" />
            </a>
            <a href="https://github.com/GDG-SignED" target="_blank"> 
              <img src={github} alt="github" />
            </a>
          </div>
          {/* <div className="footer-content-right">
            <a href="#">개인정보 처리방침</a>
            <a href="#">이용 약관</a>
            <a href="#">관계자 정보</a>
          </div> */}
        </div>       
        {/* <p className="footer-bottom-text">Copyright © 2025</p> */}
      </footer>
    )
}

export default Footer;