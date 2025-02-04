import '../css/Footer.css';

function Footer(){
    return(
        <div className="footer-container" style={{ borderTop: '2px solid black', width: '100%' }}>
            <h3>GDG Success Team4</h3>

            <div className="icon-container">
                <a href="https://www.notion.so/SucceSS-4-175dd6a3a8f38096a916e2fe53720d39?pvs=4" target="_blank" rel="noopener noreferrer">
                    <div className="notion-icon"></div>
                </a>
                <a href="https://github.com/GDG-SignED" target="_blank" rel="noopener noreferrer">
                    <div className="github-icon"></div>
                </a>
            </div>
        </div>
    )
}

export default Footer;