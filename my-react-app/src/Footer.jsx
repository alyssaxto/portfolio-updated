import "./Footer.css";
function Footer() {
    return (
      <footer className="footer">
        <div className="footer__left">
          <h2>Thanks for stopping by!</h2>
          <p>&copy; Alyssa To {new Date().getFullYear()}</p>
          <p>Made with ♡ and 🍵</p>
        </div>
        <div className="footer__right">
          <h3>Alternatively, here’s a fancy sheet of paper, </h3>
            <h3><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume ↗</a></h3>
          <div className="footer__links">
            <p><a href="https://www.linkedin.com/in/alyssaxto" target="_blank" rel="noopener noreferrer">Linkedin ↗&nbsp;&nbsp;&nbsp;</a>
            <a href="mailto:alyssaxto@gmail.com">Email ↗&nbsp;&nbsp;&nbsp;</a>
            <a href="https://github.com/alyssaxto" target="_blank" rel="noopener noreferrer">GitHub ↗&nbsp;&nbsp;&nbsp;</a></p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  