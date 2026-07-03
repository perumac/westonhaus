<template>
  <section id="about" class="about-section section-padding">
    <div class="container">
      <!-- Top Part: Mission & Reliability -->
      <div class="about-top-grid">
        <div class="about-text-col">
          <span class="subheading">{{ currentLang === 'en' ? 'Reliability & Commitment' : 'Confiabilidad y Compromiso' }}</span>
          <h2 class="section-title">{{ currentLang === 'en' ? 'Built on Trust, Crafted for Elegance' : 'Construidos en Confianza, Diseñados con Elegancia' }}</h2>
          <p class="mission-text" v-html="t.about.p1"></p>
          <p class="mission-text" v-html="t.about.p2"></p>
          <div class="cta-wrapper">
            <a href="#contact" class="btn btn-primary">{{ currentLang === 'en' ? 'Schedule a Consultation →' : 'Agendar Consulta Privada →' }}</a>
          </div>
        </div>

        <div class="about-visual-col">
          <div class="image-frame">
            <img src="/images/about_team.png" alt="Weston Haus Remodeling Craftsmanship" class="main-about-img" />
            <div class="glass-badge">
              <span class="badge-num">100%</span>
              <span class="badge-label" v-if="currentLang === 'en'">Client Satisfaction<br>Guaranteed</span>
              <span class="badge-label" v-else>Satisfacción del<br>Cliente Garantizada</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Part: Why Choose Us Grid -->
      <div class="why-choose-us">
        <div class="section-header-center">
          <span class="subheading">{{ currentLang === 'en' ? 'The Weston Haus Difference' : 'Diferencia Weston Haus' }}</span>
          <h3 class="grid-main-title">{{ currentLang === 'en' ? 'Why Homeowners Choose Us' : 'Por Qué Nos Eligen Los Propietarios' }}</h3>
          <p class="grid-subtitle">{{ currentLang === 'en' ? 'Delivering excellence across every dimension of home remodeling.' : 'Brindamos excelencia y perfección en cada dimensión de su remodelación.' }}</p>
        </div>

        <div class="reasons-grid">
          <div class="reason-card" v-for="item in reasons" :key="item.title">
            <div class="icon-wrapper" v-html="item.icon"></div>
            <h4 class="reason-title">{{ item.title }}</h4>
            <p class="reason-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useLanguage } from '../composables/useLanguage';
import { translations } from '../data/translations';

const { currentLang } = useLanguage();
const t = computed(() => translations[currentLang.value]);

const reasons = computed(() => {
  if (currentLang.value === 'es') {
    return [
      {
        title: 'Seguridad Ante Todo',
        desc: 'Cumplimos rigurosamente con los protocolos de construcción para mantener un entorno limpio y seguro para su familia y propiedad.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`
      },
      {
        title: 'Entrega Puntual',
        desc: 'Planificación meticulosa de hitos y disciplina operativa diseñada para honrar los tiempos acordados sin demoras ni interrupciones.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
      },
      {
        title: 'Soluciones Eficientes en Presupuesto',
        desc: 'Ingeniería de valor estratégica que maximiza la inversión del propietario ofreciendo acabados de alto impacto sin costos ocultos.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
      },
      {
        title: 'Calidad Artesanal de Lujo',
        desc: 'Nos enorgullece entregar acabados dignos de revista e instalaciones estructurales diseñadas para resistir el paso del tiempo.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`
      },
      {
        title: 'Comunicación Profesional',
        desc: 'Transparencia tipo concierge. Gerentes de proyecto dedicados lo mantienen informado proactivamente durante todo el proceso de remodelación.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
      },
      {
        title: 'Aumento del Valor de Propiedad',
        desc: 'Nuestras remodelaciones arquitectónicas a la medida elevan drásticamente la habitabilidad y la tasación comercial de su residencia.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`
      }
    ];
  }
  return [
    {
      title: 'Safety First',
      desc: 'We strictly adhere to professional construction protocols to maintain an immaculate, hazard-free environment for your family, property, and our specialized crew.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`
    },
    {
      title: 'On-Time Completion',
      desc: 'Meticulous milestone planning and disciplined workflow execution engineered to honor agreed timelines and eliminate stressful disruptions to your daily life.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
    },
    {
      title: 'Budget-Conscious Solutions',
      desc: 'Strategic value engineering that helps homeowners maximize their equity by providing practical, high-impact remodeling options without hidden costs.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
    },
    {
      title: 'Quality Craftsmanship',
      desc: 'We take immense pride in delivering durable, magazine-grade finishes and structural installations that stand the test of time with enduring luxury.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`
    },
    {
      title: 'Professional Communication',
      desc: 'Concierge-level transparency. Dedicated project managers keep you proactively informed with clear updates throughout the entire remodeling journey.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
    },
    {
      title: 'Increase Home Value',
      desc: 'Our bespoke architectural remodeling and design solutions dramatically enhance both the everyday livability and top-tier market valuation of your property.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`
    }
  ];
});
</script>

<style scoped>
.about-section {
  background-color: var(--color-bg-darker);
  position: relative;
  overflow: hidden;
}

.about-top-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 5rem;
  align-items: center;
  margin-bottom: 7rem;
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
  margin-bottom: 2rem;
  color: var(--color-text-light);
  letter-spacing: -0.02em;
}

.mission-text {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.mission-text strong {
  color: var(--color-text-light);
  font-weight: 600;
}

.cta-wrapper {
  margin-top: 2.5rem;
}

.about-visual-col {
  position: relative;
}

.image-frame {
  position: relative;
  border-radius: 12px;
}

.main-about-img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-badge {
  position: absolute;
  bottom: -2rem;
  left: -2rem;
  background: rgba(25, 25, 25, 0.9);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(212, 175, 55, 0.4);
  padding: 1.75rem 2.25rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}

.badge-num {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-accent);
  line-height: 1;
}

.badge-label {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-light);
  line-height: 1.3;
}

/* Why Choose Us Grid */
.why-choose-us {
  padding-top: 5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.section-header-center {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4.5rem;
}

.grid-main-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: var(--color-text-light);
  margin-bottom: 1rem;
}

.grid-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-muted);
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.reason-card {
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.reason-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--color-accent), transparent);
  opacity: 0;
  transition: opacity 0.35s ease;
}

.reason-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.045);
  border-color: rgba(212, 175, 55, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 25px rgba(212, 175, 55, 0.08);
}

.reason-card:hover::before {
  opacity: 1;
}

.icon-wrapper {
  color: var(--color-accent);
  margin-bottom: 1.75rem;
  display: inline-flex;
  padding: 0.75rem;
  background: rgba(212, 175, 55, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(212, 175, 55, 0.2);
}

.reason-title {
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--color-text-light);
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.reason-desc {
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.7;
}

/* Responsive */
@media (max-width: 1024px) {
  .about-top-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .reasons-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .glass-badge {
    left: 1rem;
    bottom: -1.5rem;
  }
}

@media (max-width: 768px) {
  .reasons-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2.25rem;
  }

  .glass-badge {
    position: static;
    margin-top: 1.5rem;
    justify-content: center;
  }
}
</style>
