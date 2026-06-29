<template>
  <section id="services" class="services-section section-padding">
    <div class="container">
      <div class="section-header">
        <span class="subheading">Our Expertise</span>
        <h2 class="section-title">Comprehensive Home Remodeling Services</h2>
        <p class="section-subtitle">Delivering exceptional quality, luxury design, and lasting value across Weston Miami.</p>
      </div>
      
      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-card">
          <div class="card-image-wrapper">
            <img :src="service.image" :alt="service.title" class="card-image" />
            <div class="card-overlay"></div>
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ service.title }}</h3>
            <p class="card-desc">{{ service.description }}</p>
            <router-link :to="service.link" class="card-link">
              Learn More 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Bathroom Remodeling',
    description: 'Transform your bathroom into a modern, comfortable, and functional space. Our bathroom remodeling services include shower and bathtub upgrades, custom vanities, tile installation, flooring, lighting, fixtures, and complete bathroom renovations designed to enhance both beauty and value in your home.',
    image: '/images/hero_bathroom.png',
    link: '/services/bathroom'
  },
  {
    title: 'Kitchen Upgrades',
    description: 'Enhance the beauty, functionality, and value of your kitchen with professional upgrades. From new cabinets and countertops to modern lighting, backsplashes, flooring, and fixtures, we help transform your kitchen into a stylish and efficient space for everyday living and entertaining.',
    image: '/images/hero_kitchen.png',
    link: '/services/kitchen'
  },
  {
    title: 'Roofing Repairs',
    description: 'Protect your home with reliable roofing repair services. We address leaks, damaged shingles, storm-related issues, and general roof wear to restore your roof\'s safety, durability, and performance while helping prevent costly future damage.',
    image: '/images/hero_roofing.png',
    link: '/services/roofing'
  },
  {
    title: 'Painting',
    description: 'Refresh and enhance your home with professional interior and exterior painting services. We deliver smooth finishes, lasting quality, and beautiful results that improve the appearance and value of your property.',
    image: '/images/hero_painting.png',
    link: '/services/painting'
  },
  {
    title: 'Tiling and Flooring',
    description: 'Enhance your home with expertly installed tile and flooring solutions. We offer durable, stylish, and high-quality finishes that improve the beauty, comfort, and value of any space.',
    image: '/images/hero_flooring.png',
    link: '/services/flooring'
  },
  {
    title: 'Drywall',
    description: 'Create smooth, flawless walls and ceilings with our professional drywall installation and repair services. Whether for new construction, renovations, or repairs, we deliver clean finishes built to last.',
    image: '/images/gallery/gallery_drywall_2.png',
    link: '/services/drywall'
  },
  {
    title: 'Courtyards Design & Renovation',
    description: 'Transform your outdoor living space with beautiful and functional courtyard designs. We create inviting areas that enhance comfort, boost curb appeal, and increase your property\'s overall value.',
    image: '/images/hero_courtyards.png',
    link: '/services/courtyards'
  },
  {
    title: 'Gardening & Landscaping',
    description: 'Enhance your outdoor spaces with professional gardening and landscaping services. We create beautiful, functional environments that improve your home\'s curb appeal and overall value.',
    image: '/images/hero_landscaping.png',
    link: '/services/landscaping'
  },
  {
    title: 'Other Solutions',
    description: 'As part of our comprehensive remodeling solutions, we also provide plumbing, electrical, and air conditioning (HVAC) services. Our work is performed by licensed and qualified professionals, ensuring safety, reliability, and compliance with industry standards throughout every project.',
    image: '/images/hero_other.png',
    link: '/services/other'
  }
];
</script>

<style scoped>
.services-section {
  background-color: var(--color-bg-darker);
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4.5rem auto;
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
  margin-bottom: 1rem;
  color: var(--color-text-light);
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-muted);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

.service-card {
  background-color: var(--color-bg-dark);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 175, 55, 0.08);
  border-color: rgba(212, 175, 55, 0.4);
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card:hover .card-image {
  transform: scale(1.08);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, var(--color-bg-dark) 0%, rgba(18,18,18,0.2) 60%, transparent 100%);
  opacity: 0.9;
}

.card-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-text-light);
}

.card-desc {
  color: var(--color-text-muted);
  margin-bottom: 2rem;
  line-height: 1.7;
  font-size: 0.975rem;
  flex-grow: 1;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--color-accent);
  transition: gap 0.25s ease, color 0.25s ease;
  align-self: flex-start;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
}

.card-link:hover {
  gap: 0.75rem;
  color: var(--color-text-light);
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
