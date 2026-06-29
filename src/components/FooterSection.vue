<template>
  <footer class="footer">
    <div class="footer-top-accent"></div>
    <div class="container">
      <div class="footer-content">
        <!-- Col 1: Huge Logo & Trust -->
        <div class="footer-brand">
          <router-link to="/">
            <img src="/images/logo.png" alt="Weston Haus Remodeling Logo" class="logo-image" />
          </router-link>
          <p class="footer-desc">
            Weston Haus LLC is South Florida's premier home remodeling and architectural design team. We transform residences with uncompromising craftsmanship, safety, and absolute transparency.
          </p>
          
          <div class="license-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            <span>Licensed & Insured Remodeling Contractor</span>
          </div>
        </div>
        
        <!-- Col 2: Navigation -->
        <div class="footer-nav">
          <h3 class="footer-heading">Navigation</h3>
          <ul class="nav-links">
            <li><router-link to="/">Home</router-link></li>
            <li><a href="#about">About Our Company</a></li>
            <li><a href="#services">Premium Services</a></li>
            <li><a href="#contact">Request Consultation</a></li>
          </ul>
        </div>
        
        <!-- Col 3: Concierge Contact & Hours -->
        <div class="footer-contact">
          <h3 class="footer-heading">Headquarters</h3>
          <div class="contact-list">
            <div class="contact-item">
              <span class="label">Location</span>
              <a href="https://www.google.com/maps/search/?api=1&query=124+W+Bayridge+Dr,+Weston,+FL+33326" target="_blank" rel="noopener noreferrer" class="location-link">124 W Bayridge Dr<br>Weston, FL 33326</a>
            </div>
            
            <div class="contact-item">
              <span class="label">Concierge Desk</span>
              <a href="tel:+17542722120" class="highlight-link">+1 (754) 272 2120</a>
              <a href="mailto:info@westonhaus.com" class="sub-link">info@westonhaus.com</a>
            </div>

            <div class="contact-item">
              <span class="label">Working Hours</span>
              <p class="hours">Monday &ndash; Saturday: 8:00 AM &ndash; 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p>&copy; 2026 Weston Haus LLC. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(180deg, var(--color-bg-darker) 0%, #0a0a0a 100%);
  position: relative;
  padding: 6rem 0 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

.footer-top-accent {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%);
  opacity: 0.6;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1.3fr;
  gap: 5rem;
  margin-bottom: 5rem;
}

/* Brand Col */
.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.logo-image {
  height: 150px;
  width: auto;
  object-fit: contain;
  margin-bottom: 1.25rem;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.5));
  transition: transform 0.4s ease;
}

.logo-image:hover {
  transform: scale(1.03);
}

.footer-desc {
  color: var(--color-text-muted);
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  max-width: 480px;
}

.license-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(212, 175, 55, 0.08);
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  color: var(--color-accent);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.05);
}

/* Nav & Contact Cols */
.footer-heading {
  font-size: 1.15rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-light);
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 0.75rem;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background-color: var(--color-accent);
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
}

.nav-links a {
  color: var(--color-text-muted);
  font-size: 1.05rem;
  transition: all 0.25s ease;
  display: inline-block;
}

.nav-links a:hover {
  color: var(--color-accent);
  transform: translateX(6px);
}

/* Contact List */
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-accent);
  font-weight: 600;
}

.contact-item p, .location-link {
  color: var(--color-text-light);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  transition: color 0.25s ease;
  display: inline-block;
}

.location-link:hover {
  color: var(--color-accent);
}

.highlight-link {
  color: var(--color-text-light);
  font-size: 1.15rem;
  font-weight: 600;
  transition: color 0.25s ease;
}

.highlight-link:hover {
  color: var(--color-accent);
}

.sub-link {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  transition: color 0.25s ease;
}

.sub-link:hover {
  color: var(--color-text-light);
}

.hours {
  color: #ccc !important;
  font-size: 0.95rem !important;
}

/* Bottom */
.footer-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
  
  .footer-brand {
    grid-column: span 2;
  }
}

@media (max-width: 640px) {
  .footer {
    padding: 4rem 0 2rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }

  .footer-brand {
    grid-column: span 1;
  }

  .logo-image {
    height: 85px;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
}
</style>
