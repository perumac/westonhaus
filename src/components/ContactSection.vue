<template>
  <section id="contact" class="contact-section section-padding">
    <div class="container">
      <div class="contact-grid">
        <!-- Contact Info Col -->
        <div class="contact-info">
          <span class="subheading">{{ t.contactSection.tag }}</span>
          <h2 class="section-title">{{ t.contactSection.heading }}</h2>
          <p class="section-desc">
            {{ t.contactSection.subheading }}
          </p>
          
          <div class="contact-cards">
            <!-- Phone -->
            <div class="info-card">
              <div class="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div class="card-details">
                <span class="detail-label">{{ t.contactSection.cards.phoneLabel }}</span>
                <a href="tel:+17542722120" class="detail-value">+1 (754) 272 2120</a>
              </div>
            </div>

            <!-- Email -->
            <div class="info-card">
              <div class="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div class="card-details">
                <span class="detail-label">{{ t.contactSection.cards.emailLabel }}</span>
                <a href="mailto:info@westonhaus.com" class="detail-value">info@westonhaus.com</a>
              </div>
            </div>

            <!-- Address -->
            <a href="https://www.google.com/maps/search/?api=1&query=124+W+Bayridge+Dr,+Weston,+FL+33326" target="_blank" rel="noopener noreferrer" class="info-card address-card">
              <div class="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div class="card-details">
                <span class="detail-label">{{ t.contactSection.cards.addressLabel }}</span>
                <span class="detail-value detail-value-text">124 W Bayridge Dr, Weston, FL 33326</span>
              </div>
            </a>
          </div>
        </div>
        
        <!-- Contact Form Col -->
        <div class="contact-form-wrapper">
          <div class="form-glow-border">
            <form @submit.prevent="submitForm" class="contact-form">
              <h3 class="form-heading">{{ t.contactSection.form.heading }}</h3>
              <p class="form-subheading">{{ t.contactSection.form.subheading }}</p>

              <div class="form-group">
                <label for="name">{{ t.contactSection.form.nameLabel }}</label>
                <input type="text" id="name" v-model="form.name" required :placeholder="t.contactSection.form.namePlaceholder">
              </div>
              
              <div class="form-grid">
                <div class="form-group">
                  <label for="email">{{ t.contactSection.form.emailLabel }}</label>
                  <input type="email" id="email" v-model="form.email" required :placeholder="t.contactSection.form.emailPlaceholder">
                </div>
                <div class="form-group">
                  <label for="phone">{{ t.contactSection.form.phoneLabel }}</label>
                  <input type="tel" id="phone" v-model="form.phone" required :placeholder="t.contactSection.form.phonePlaceholder">
                </div>
              </div>
              
              <div class="form-grid">
                <div class="form-group">
                  <label for="service">{{ t.contactSection.form.serviceLabel }}</label>
                  <div class="select-wrapper">
                    <select id="service" v-model="form.service" required>
                      <option value="" disabled selected>{{ t.contactSection.form.serviceSelect }}</option>
                      <option value="Bathroom Remodeling">{{ t.navbar.servicesList.bathroom }}</option>
                      <option value="Kitchen Upgrades">{{ t.navbar.servicesList.kitchen }}</option>
                      <option value="Roofing Repairs">{{ t.navbar.servicesList.roofing }}</option>
                      <option value="Painting">{{ t.navbar.servicesList.painting }}</option>
                      <option value="Tiling and Flooring">{{ t.navbar.servicesList.flooring }}</option>
                      <option value="Drywall">{{ t.navbar.servicesList.drywall }}</option>
                      <option value="Courtyards Design & Renovation">{{ t.navbar.servicesList.courtyards }}</option>
                      <option value="Gardening and Landscaping">{{ t.navbar.servicesList.landscaping }}</option>
                      <option value="Other Solutions">{{ t.navbar.servicesList.other }}</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="zipcode">{{ currentLang === 'en' ? 'City / Zip Code' : 'Ciudad / Código Postal' }}</label>
                  <input type="text" id="zipcode" v-model="form.zipcode" required placeholder="Weston, FL 33326">
                </div>
              </div>

              <div class="form-group">
                <label for="message">{{ t.contactSection.form.messageLabel }}</label>
                <textarea id="message" v-model="form.message" rows="3" :placeholder="t.contactSection.form.messagePlaceholder"></textarea>
              </div>
              
              <button type="submit" class="btn-whatsapp-submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/></svg>
                <span>{{ t.contactSection.form.btnText }}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useLanguage } from '../composables/useLanguage';
import { translations } from '../data/translations';

const { currentLang } = useLanguage();
const t = computed(() => translations[currentLang.value]);

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  zipcode: '',
  message: ''
});

const submitForm = () => {
  const whatsappNumber = '17542722120';
  const text = `*Nueva Cotización Web - Weston Haus LLC*%0A%0A` +
    `*Nombre:* ${encodeURIComponent(form.value.name)}%0A` +
    `*Email:* ${encodeURIComponent(form.value.email)}%0A` +
    `*Teléfono:* ${encodeURIComponent(form.value.phone)}%0A` +
    `*Servicio Solicitado:* ${encodeURIComponent(form.value.service)}%0A` +
    `*Ciudad / Zip Code:* ${encodeURIComponent(form.value.zipcode)}%0A` +
    `*Descripción del Proyecto:* ${encodeURIComponent(form.value.message || 'Sin detalles adicionales')}`;
    
  const url = `https://wa.me/${whatsappNumber}?text=${text}`;
  window.open(url, '_blank');
  
  form.value = {
    name: '',
    email: '',
    phone: '',
    service: '',
    zipcode: '',
    message: ''
  };
};
</script>

<style scoped>
.contact-section {
  background-color: var(--color-bg-darker);
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 5rem;
  align-items: center;
}

.subheading {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-accent);
  display: block;
  margin-bottom: 0.75rem;
}

.section-title {
  font-size: clamp(2.25rem, 4.5vw, 3.5rem);
  font-weight: 600;
  line-height: 1.15;
  margin-bottom: 1.5rem;
  color: var(--color-text-light);
  letter-spacing: -0.02em;
}

.section-desc {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  margin-bottom: 3rem;
  line-height: 1.8;
}

.contact-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.75rem 2rem;
  border-radius: 16px;
  transition: all 0.35s ease;
}

.address-card {
  text-decoration: none;
  cursor: pointer;
}

.info-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(212, 175, 55, 0.4);
  transform: translateX(8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

.info-card:hover .detail-value {
  color: var(--color-accent);
}

.icon-wrapper {
  width: 56px;
  height: 56px;
  background: rgba(212, 175, 55, 0.12);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  flex-shrink: 0;
}

.card-details {
  display: flex;
  flex-direction: column;
}

.detail-label {
  font-size: 0.85rem;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  margin-bottom: 0.35rem;
}

.detail-value {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-text-light);
  transition: color 0.25s ease;
}

.detail-value:hover {
  color: var(--color-accent);
}

.detail-value-text {
  font-size: 1.15rem;
  color: var(--color-text-light);
  line-height: 1.4;
}

/* Form Container */
.contact-form-wrapper {
  position: relative;
}

.form-glow-border {
  background: rgba(22, 22, 22, 0.95);
  border: 1px solid rgba(212, 175, 55, 0.25);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(212, 175, 55, 0.06);
  position: relative;
  backdrop-filter: blur(20px);
}

.form-heading {
  font-size: 1.85rem;
  font-weight: 600;
  color: var(--color-text-light);
  margin-bottom: 0.5rem;
}

.form-subheading {
  color: var(--color-text-muted);
  font-size: 0.975rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #ccc;
}

input, select, textarea {
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  color: var(--color-text-light);
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--color-accent);
  background-color: rgba(255, 255, 255, 0.07);
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.15);
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
  cursor: pointer;
}

select option {
  background-color: var(--color-bg-darker);
  color: white;
}

textarea {
  resize: vertical;
}

.btn-whatsapp-submit {
  background: linear-gradient(135deg, #25D366 0%, #1EBE5D 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1.25rem 2rem;
  font-size: 1.15rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  margin-top: 1rem;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 25px rgba(37, 211, 102, 0.25);
}

.btn-whatsapp-submit:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(37, 211, 102, 0.4);
  filter: brightness(1.05);
}

.btn-whatsapp-submit:active {
  transform: translateY(0);
}

@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}

@media (max-width: 640px) {
  .form-glow-border {
    padding: 2rem 1.5rem;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .info-card {
    padding: 1.25rem 1.5rem;
  }
}
</style>
