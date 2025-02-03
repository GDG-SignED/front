import '../css/Footer.css';
import notion from '../assets/images/notion_icon.png';
import github from '../assets/images/github_icon.png';

function Footer(){
    return(
        <div className="footer-container" style={{ borderTop: '2px solid black', width: '100%' }}>
            <h3>GDG Success Team4</h3>
            <a href="https://www.notion.so/SucceSS-4-175dd6a3a8f38096a916e2fe53720d39?pvs=4" target="_blank"><img src={notion} alt="notion" /></a>
            <a href="https://github.com/GDG-SignED" target="_blank"><img src={github} alt="github" /></a>
        </div>
    )
}

export default Footer;