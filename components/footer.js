
class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
          color: white;
          padding: 4rem 1rem 2rem;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }
        footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #D4B388, #BE9154);
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          position: relative;
          z-index: 1;
        }
        .footer-section h3 {
          font-size: 1.375rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #D4B388;
          position: relative;
          display: inline-block;
        }
        .footer-section h3::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 50px;
          height: 2px;
          background: #D4B388;
        }
        .footer-section p, .footer-section a {
          color: #e2e8f0;
          margin-bottom: 1rem;
          display: block;
          text-decoration: none;
          transition: all 0.3s ease;
          line-height: 1.6;
        }
        .footer-section a:hover {
          color: #D4B388;
          transform: translateX(5px);
        }
        .social-links {
          display: flex;
          gap: 1.25rem;
          margin-top: 1.5rem;
        }
        .social-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: rgba(255,255,255,0.08);
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .social-links a:hover {
          background: #D4B388;
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 20px rgba(212, 179, 136, 0.2);
        }
        .copyright {
          text-align: center;
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          color: #a0aec0;
          font-size: 0.875rem;
          letter-spacing: 0.5px;
        }
        .footer-bg {
          position: absolute;
          bottom: 0;
          right: 0;
          opacity: 0.03;
          width: 300px;
          height: 300px;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23D4B388"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>');
          background-repeat: no-repeat;
          background-size: contain;
        }
      </style>
      <footer>
        <div class="footer-bg"></div>
        <div class="footer-container">
          <div class="footer-section">
            <h3>Kontakt</h3>
            <p><i data-feather="map-pin" width="16" height="16" style="margin-right: 8px;"></i> Rabí 123, 342 01</p>
            <p><i data-feather="phone" width="16" height="16" style="margin-right: 8px;"></i> +420 123 456 789</p>
            <p><i data-feather="mail" width="16" height="16" style="margin-right: 8px;"></i> info@kaferabi.cz</p>
          </div>
          <div class="footer-section">
            <h3>Otevírací doba</h3>
            <p><i data-feather="clock" width="16" height="16" style="margin-right: 8px;"></i> Pondělí - Pátek: 8:00 - 18:00</p>
            <p><i data-feather="clock" width="16" height="16" style="margin-right: 8px;"></i> Sobota: 9:00 - 16:00</p>
            <p><i data-feather="clock" width="16" height="16" style="margin-right: 8px;"></i> Neděle: 10:00 - 15:00</p>
          </div>
          <div class="footer-section">
            <h3>Sledujte nás</h3>
            <div class="social-links">
              <a href="https://instagram.com/kaferabi" aria-label="Instagram">
                <i data-feather="instagram"></i>
              </a>
              <a href="https://facebook.com/kaferabi" aria-label="Facebook">
                <i data-feather="facebook"></i>
              </a>
              <a href="https://tiktok.com/@kaferabi" aria-label="TikTok">
                <i data-feather="video"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; ${new Date().getFullYear()} Kafe Rabí. Všechna práva vyhrazena.</p>
        </div>
      </footer>
`;
  }
}

customElements.define('custom-footer', CustomFooter);