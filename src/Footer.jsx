import "./Footer.css";
import Resume from "/assets/AlyssaTo_Resume.pdf";

function Footer() {
    return (
<footer className="footer">
    <div className="linedivider">
<span className="sparkle">✦</span>    </div>
    
    <div className="footer__wrapper">
        <div className="footer__left">
            <h9>Thanks for stopping by!</h9>
            <p>&copy; Alyssa To {new Date().getFullYear()} (๑˃ᴗ˂)ﻭ</p>
            <p>Made with ♡ and vietnamese coffee</p>
        </div>

        <div className="footer__right">
            <h3>Alternatively, here’s a fancy sheet of paper,</h3>
            <div className="resume-container">
                <a href={Resume} className="resumelink" target="_blank" rel="noopener noreferrer">
                    Résumé <span className="emoji">&#8599;</span>
                </a>
            </div>
            <div className="footer__links">
<a href="https://www.linkedin.com/in/alyssaxto" target="_blank" rel="noopener noreferrer">
  LinkedIn&nbsp;<span className="emoji">&#8599;</span>
</a>
<a href="mailto:alyssaxto@gmail.com" target="_blank" rel="noopener noreferrer">
  Email&nbsp;<span className="emoji">&#8599;</span>
</a>
<a href="https://github.com/alyssaxto" target="_blank" rel="noopener noreferrer">
  GitHub&nbsp;<span className="emoji">&#8599;</span>
</a>

            </div>
        </div>
    </div>
</footer>

    );
}

export default Footer;
