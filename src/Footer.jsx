import "./Footer.css";
import Resume from "/assets/AlyssaTo_Resume.pdf";

function Footer() {
    return (
        <footer className="footer">
            <div className="linedivider">
                <span className="emoji">✨</span>
            </div>
            <div className="footer__left">
                <h22>Thanks for stopping by!</h22>
                <p>&copy; Alyssa To {new Date().getFullYear()}</p>
                <p>Made with <span className="emoji">♡</span> and <span className="emoji">🍵</span></p>
            </div>
            <div className="footer__right">
                <h3>Alternatively, here’s a fancy sheet of paper,</h3>
                <div className="resume-container">
                    <a href={Resume} className="resumelink" target="_blank" rel="noopener noreferrer">
                        Resume <span className="emoji">&#8599;</span>
                    </a>
                </div>
                <div className="footer__links">
                    <a href="https://www.linkedin.com/in/alyssaxto" target="_blank" rel="noopener noreferrer">
                        LinkedIn <span className="emoji">&#8599;</span>
                    </a>
                    <a href="mailto:alyssaxto@gmail.com" target="_blank" rel="noopener noreferrer">
                        Email <span className="emoji">&#8599;</span>
                    </a>
                    <a href="https://github.com/alyssaxto" target="_blank" rel="noopener noreferrer">
                        GitHub <span className="emoji">&#8599;</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
