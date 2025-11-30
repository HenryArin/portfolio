const FooterSection = () => {
    return (
      <footer className="footer" id="contact">
        <div className="footer-inner">
          <div className="footer-content">
            <h2 className="footer-title">Let&apos;s connect</h2>
  
            <p className="footer-text">
              I&apos;m always open to chatting about backend development, systems work,
              internships, or cool side projects. Feel free to reach out.
            </p>
  
            <div className="footer-contact">
              <div className="footer-contact-group">
                <span className="footer-label">Email</span>
                <a href="mailto:your.email@example.com" className="footer-link">
                  your.email@example.com
                </a>
              </div>
  
              <div className="footer-contact-group">
                <span className="footer-label">GitHub</span>
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  github.com/your-username
                </a>
              </div>
  
              <div className="footer-contact-group">
                <span className="footer-label">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  linkedin.com/in/your-linkedin
                </a>
              </div>
  
              <div className="footer-contact-group">
                <span className="footer-label">Location</span>
                <span className="footer-link">Wasco, CA</span>
              </div>
            </div>
          </div>
  
          {/* Hill / tree / cat / person illustration */}
          <div className="footer-scene">
            <div className="footer-hill footer-hill-left"></div>
            <div className="footer-hill footer-hill-right"></div>
  
            <div className="footer-tree">
              <div className="tree-trunk"></div>
              <div className="tree-crown"></div>
            </div>
  
            <div className="footer-person">
              <div className="person-body"></div>
              <div className="person-head"></div>
            </div>
  
            <div className="footer-cat">
              <div className="cat-body"></div>
              <div className="cat-head"></div>
              <div className="cat-tail"></div>
            </div>
          </div>
  
          <div className="footer-bottom">
            <span className="footer-bottom-text">
              © {new Date().getFullYear()} Henry Arinaga. Shooting for the stars ✨
            </span>
          </div>
        </div>
      </footer>
    );
  };
  
  export default FooterSection;
  