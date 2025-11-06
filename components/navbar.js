class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: rgba(212, 179, 136, 0.9);
          backdrop-filter: blur(10px);
          color: white;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        nav.scrolled {
          background-color: rgba(212, 179, 136, 0.95);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px;
        }
        .brand {
          font-size: 1.75rem;
          font-weight: bold;
          font-family: serif;
          text-decoration: none;
          color: white;
          position: relative;
          padding: 0.5rem 0;
        }
        .brand::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: white;
          transition: width 0.3s ease;
        }
        .brand:hover::after {
          width: 100%;
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
        }
        .nav-link {
          color: white;
          text-decoration: none;
          position: relative;
          padding: 0.5rem 0;
          font-weight: 500;
          letter-spacing: 0.5px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: white;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link.active {
          font-weight: 600;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .mobile-menu-btn:hover {
          transform: scale(1.1);
        }
        @media (max-width: 768px) {
          .container {
            padding: 0 1.5rem;
          }
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
          .brand {
            font-size: 1.5rem;
          }
        }
</style>
      <nav id="main-nav">
        <div class="container">
          <a href="/" class="brand">Kafe Rabí</a>
          <div class="nav-links">
            <a href="/" class="nav-link" data-link="home">Domů</a>
            <a href="/menu.html" class="nav-link" data-link="menu">Menu</a>
            <a href="/gallery.html" class="nav-link" data-link="gallery">Galerie</a>
            <a href="/contact.html" class="nav-link" data-link="contact">Kontakt</a>
          </div>
<button class="mobile-menu-btn" aria-label="Otevřít menu">
            <i data-feather="menu"></i>
          </button>
        </div>
      </nav>
      <script>
        // Scroll effect
        window.addEventListener('scroll', function() {
          const nav = this.shadowRoot.getElementById('main-nav');
          if (window.scrollY > 50) {
            nav.classList.add('scrolled');
          } else {
            nav.classList.remove('scrolled');
          }
        });

        // Active link highlighting
        const links = this.shadowRoot.querySelectorAll('.nav-link');
        links.forEach(link => {
          link.addEventListener('click', function() {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
          });
        });
      </script>
`;
  }
}

customElements.define('custom-navbar', CustomNavbar);