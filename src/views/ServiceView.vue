<template>
  <div class="service-page" v-if="serviceData">
    <!-- Service Hero -->
    <section class="service-hero">
      <div class="hero-bg">
        <img :src="serviceData.heroImage" :alt="serviceData.title" />
        <div class="overlay"></div>
      </div>
      <div class="container hero-content">
        <h1 class="hero-title">{{ serviceData.title }}</h1>
        <p class="hero-subtitle">{{ serviceData.subtitle }}</p>
      </div>
    </section>

    <!-- Details Section -->
    <section class="service-details section-padding">
      <div class="container">
        <div class="details-grid">
          <div class="details-text">
            <h2>About this Service</h2>
            <p v-for="(paragraph, index) in serviceData.description" :key="index">
              {{ paragraph }}
            </p>
            
            <h3>What's Included</h3>
            <ul class="features-list">
              <li v-for="(feature, index) in serviceData.features" :key="index">
                <svg xmlns="http://www.w3.org/-2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                {{ feature }}
              </li>
            </ul>
          </div>
          <div class="details-image">
            <img :src="serviceData.gallery[0]" alt="Detail view" class="rounded-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- Previous Works Gallery -->
    <section class="gallery-section section-padding">
      <div class="container">
        <div class="section-header">
          <h2>Previous Works</h2>
          <p>Explore some of our recently completed {{ serviceData.title.toLowerCase() }} projects.</p>
        </div>
        
        <div class="gallery-grid">
          <div v-for="(img, index) in serviceData.gallery" :key="index" class="gallery-item" @click="openLightbox(index)">
            <img :src="img" alt="Gallery item" />
            <div class="gallery-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <transition name="fade">
      <div v-if="lightboxOpen" class="lightbox-modal" @click.self="closeLightbox">
        <button class="lightbox-close" @click="closeLightbox" aria-label="Close modal">&times;</button>
        <button class="lightbox-nav lightbox-prev" @click.stop="prevImage" aria-label="Previous image">&#10094;</button>
        <div class="lightbox-content">
          <img :src="serviceData.gallery[currentImageIndex]" :alt="serviceData.title + ' preview'" class="lightbox-img" />
          <div class="lightbox-caption">{{ serviceData.title }} &mdash; Project {{ currentImageIndex + 1 }} of {{ serviceData.gallery.length }}</div>
        </div>
        <button class="lightbox-nav lightbox-next" @click.stop="nextImage" aria-label="Next image">&#10095;</button>
      </div>
    </transition>

    <!-- Contact Form Reused -->
    <ContactSection />
  </div>
  
  <div v-else class="not-found section-padding">
    <div class="container">
      <h2>Service not found</h2>
      <router-link to="/" class="btn btn-primary">Return to Home</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ContactSection from '../components/ContactSection.vue';

const route = useRoute();

const lightboxOpen = ref(false);
const currentImageIndex = ref(0);

const openLightbox = (index) => {
  currentImageIndex.value = index;
  lightboxOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  document.body.style.overflow = '';
};

const nextImage = () => {
  if (serviceData.value && serviceData.value.gallery) {
    currentImageIndex.value = (currentImageIndex.value + 1) % serviceData.value.gallery.length;
  }
};

const prevImage = () => {
  if (serviceData.value && serviceData.value.gallery) {
    currentImageIndex.value = (currentImageIndex.value - 1 + serviceData.value.gallery.length) % serviceData.value.gallery.length;
  }
};

const servicesDB = {
  bathroom: {
    title: 'Bathroom Remodeling',
    subtitle: 'Transform your bathroom into a modern, comfortable, and functional luxury space.',
    heroImage: '/images/hero_bathroom.png',
    description: [
      'Transform your bathroom into a modern, comfortable, and functional space. Our bathroom remodeling services include shower and bathtub upgrades, custom vanities, tile installation, flooring, lighting, fixtures, and complete bathroom renovations designed to enhance both beauty and value in your home.',
      'We bring spa-level tranquility directly to your Weston residence, utilizing intelligent lighting, seamless glass enclosures, and radiant marble finishes crafted with zero tolerance for imperfections.'
    ],
    features: [
      'Walk-in Luxury Showers & Bathtub Upgrades',
      'Bespoke Custom Vanities & Quartz Countertops',
      'Precision Tile & Waterproof Flooring Installation',
      'Designer Fixtures, Mirrors & Ambient Lighting',
      'Complete Turnkey Bathroom Renovations'
    ],
    gallery: [
      '/images/gallery/gallery_bathroom_1.png',
      '/images/gallery/gallery_bathroom_2.png',
      '/images/hero_bathroom.png'
    ]
  },
  kitchen: {
    title: 'Kitchen Upgrades',
    subtitle: 'Enhance the beauty, functionality, and value of your kitchen with professional upgrades.',
    heroImage: '/images/hero_kitchen.png',
    description: [
      'Enhance the beauty, functionality, and value of your kitchen with professional upgrades. From new cabinets and countertops to modern lighting, backsplashes, flooring, and fixtures, we help transform your kitchen into a stylish and efficient space for everyday living and entertaining.',
      'As the centerpiece of your home, your kitchen deserves flawless custom cabinetry, durable waterfall stone islands, and seamlessly integrated stainless steel appliances built for passionate culinary experiences.'
    ],
    features: [
      'Custom Matte & Wood Grain Cabinetry',
      'Marble, Quartz & Granite Countertops',
      'Designer Backsplashes & Waterproof Flooring',
      'Integrated High-End Fixtures & Smart Lighting',
      'Optimized Layouts for Daily Entertaining'
    ],
    gallery: [
      '/images/gallery/gallery_kitchen_1.png',
      '/images/gallery/gallery_kitchen_2.png',
      '/images/hero_kitchen.png'
    ]
  },
  roofing: {
    title: 'Roofing Repairs',
    subtitle: 'Protect your home with reliable, durable, and weather-resistant roofing repair services.',
    heroImage: '/images/hero_roofing.png',
    description: [
      'Protect your home with reliable roofing repair services. We address leaks, damaged shingles, storm-related issues, and general roof wear to restore your roof\'s safety, durability, and performance while helping prevent costly future damage.',
      'Our specialized South Florida roofing teams utilize premium architectural shingles, modern metal panels, and advanced weatherproofing membranes to guarantee complete structural security against heavy rain and hurricane winds.'
    ],
    features: [
      'Comprehensive Leak Detection & Sealing',
      'Architectural Shingle & Slate Replacement',
      'Storm Damage Restoration & Emergency Tarping',
      'High-Grade Weatherproof Underlayment',
      'Gutter, Fascia & Soffit Reinforcement'
    ],
    gallery: [
      '/images/hero_roofing.png',
      '/images/gallery/gallery_roofing_1.png',
      '/images/gallery/gallery_roofing_2.png'
    ]
  },
  painting: {
    title: 'Painting',
    subtitle: 'Refresh and enhance your home with professional interior and exterior painting services.',
    heroImage: '/images/hero_painting.png',
    description: [
      'Refresh and enhance your home with professional interior and exterior painting services. We deliver smooth finishes, lasting quality, and beautiful results that improve the appearance and value of your property.',
      'Tailored to the intense South Florida climate, we apply ultra-premium UV-resistant exterior coatings and eco-friendly low-VOC interior paints that maintain their vibrant luxury aesthetic for decades.'
    ],
    features: [
      'Flawless Interior Walls, Ceilings & Trim Refinishing',
      'Weather-Resistant Exterior Elastomeric Coatings',
      'Professional Architectural Color Consulting',
      'Cabinet & Woodwork Fine Spray Finishing',
      'Meticulous Surface Prep, Sanding & Masking'
    ],
    gallery: [
      '/images/gallery/gallery_painting_1.png',
      '/images/gallery/gallery_painting_2.png',
      '/images/hero_painting.png'
    ]
  },
  flooring: {
    title: 'Tiling and Flooring',
    subtitle: 'Enhance your home with expertly installed tile and ultra-premium flooring solutions.',
    heroImage: '/images/hero_flooring.png',
    description: [
      'Enhance your home with expertly installed tile and flooring solutions. We offer durable, stylish, and high-quality finishes that improve the beauty, comfort, and value of any space.',
      'From laser-leveled subfloors to intricate herringbone white oak hardwood and large-format Italian porcelain tile installations, our master craftsmen deliver absolute symmetry and acoustic comfort.'
    ],
    features: [
      'Large-Format Marble & Porcelain Tile Installation',
      'Luxury White Oak Hardwood & Herringbone Parquet',
      'Laser Subfloor Leveling & Acoustic Underlayment',
      'Custom Baseboard & Decorative Trim Molding',
      'Moisture Barrier & Waterproofing Systems'
    ],
    gallery: [
      '/images/gallery/gallery_flooring_1.png',
      '/images/gallery/gallery_flooring_2.png',
      '/images/hero_flooring.png'
    ]
  },
  drywall: {
    title: 'Drywall',
    subtitle: 'Create smooth, flawless walls and ceilings with professional drywall installation and repair.',
    heroImage: '/images/gallery/gallery_drywall_2.png',
    description: [
      'Create smooth, flawless walls and ceilings with our professional drywall installation and repair services. Whether for new construction, renovations, or repairs, we deliver clean finishes built to last.',
      'We eliminate cracks, water damage stains, and uneven textures through precision hanging, taping, and Level 5 skim coating plastering, leaving your walls ready for luxury architectural lighting.'
    ],
    features: [
      'Precision Drywall Hanging & Framing',
      'Level 5 Smooth Skim Coat Plastering',
      'Seamless Water Damage & Crack Repairs',
      'Custom Ceiling Archways & Architectural Niches',
      'Soundproofing & Fire-Rated Wall Assemblies'
    ],
    gallery: [
      '/images/hero_drywall.png',
      '/images/gallery/gallery_drywall_1.png',
      '/images/gallery/gallery_drywall_2.png'
    ]
  },
  courtyards: {
    title: 'Courtyards Design and Renovation',
    subtitle: 'Transform your outdoor living space with beautiful and functional luxury courtyard designs.',
    heroImage: '/images/hero_courtyards.png',
    description: [
      'Transform your outdoor living space with beautiful and functional courtyard designs. We create inviting areas that enhance comfort, boost curb appeal, and increase your property\'s overall value.',
      'We seamlessly connect your indoor and outdoor living areas in Weston Miami, integrating custom travertine decking, pergola shaded lounges, fire pits, and atmospheric evening lighting.'
    ],
    features: [
      'Custom Travertine & Natural Stone Pavers',
      'Shaded Pergolas & Covered Patio Lounges',
      'Outdoor Kitchens & Built-in Fire Pits',
      'Architectural Evening Landscape Lighting',
      'Seamless Indoor-Outdoor Threshold Integration'
    ],
    gallery: [
      '/images/gallery/gallery_courtyards_1.png',
      '/images/gallery/gallery_courtyards_2.png',
      '/images/hero_courtyards.png'
    ]
  },
  landscaping: {
    title: 'Gardening and Landscaping',
    subtitle: 'Enhance your outdoor spaces with professional gardening and bespoke landscaping services.',
    heroImage: '/images/hero_landscaping.png',
    description: [
      'Enhance your outdoor spaces with professional gardening and landscaping services. We create beautiful, functional environments that improve your home\'s curb appeal and overall value.',
      'From curated tropical foliage and mature palm installations to automated irrigation and crisp turf edging, our landscape architects design breathtaking natural sanctuaries around your home.'
    ],
    features: [
      'Architectural Tropical Garden & Palm Design',
      'Manicured Natural Turf & Putting Green Installation',
      'Automated Smart Irrigation & Drainage Systems',
      'Natural Stone Pathways & Decorative Mulching',
      'Complete Seasonal Property Maintenance'
    ],
    gallery: [
      '/images/gallery/gallery_landscaping_1.png',
      '/images/gallery/gallery_landscaping_2.png',
      '/images/hero_landscaping.png'
    ]
  },
  other: {
    title: 'Other Solutions',
    subtitle: 'Comprehensive licensed mechanical remodeling: Plumbing, Electrical, and Air Conditioning (HVAC).',
    heroImage: '/images/hero_other.png',
    description: [
      'As part of our comprehensive remodeling solutions, we also provide plumbing, electrical, and air conditioning (HVAC) services. Our work is performed by licensed and qualified professionals, ensuring safety, reliability, and compliance with industry standards throughout every project.',
      'Whether rewiring a kitchen for smart automation, upgrading plumbing lines for a luxury master spa, or optimizing HVAC airflow for whisper-quiet cooling, we manage every technical discipline seamlessly.'
    ],
    features: [
      'Licensed Residential Plumbing Rerouting & Fixtures',
      'Electrical Panel Upgrades & Smart Home Automation',
      'High-Efficiency AC (HVAC) Installation & Ductwork',
      'Code Compliance, Permitting & Rigorous Safety Inspections',
      'Turnkey Mechanical Engineering for Renovations'
    ],
    gallery: [
      '/images/gallery/gallery_other_1.png',
      '/images/gallery/gallery_other_2.png',
      '/images/hero_other.png'
    ]
  }
};

const serviceData = computed(() => {
  return servicesDB[route.params.id];
});

// Scroll to top when route changes
watch(() => route.params.id, () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
.service-hero {
  position: relative;
  height: 50vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 185px; /* ample offset for large cropped navbar logo */
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 18, 18, 0.7);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #ccc;
}

.details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.details-text h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-light);
}

.details-text p {
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
}

.details-text h3 {
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
}

.features-list {
  list-style: none;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 1.125rem;
  color: var(--color-text-light);
}

.features-list svg {
  color: var(--color-accent);
}

.rounded-img {
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  width: 100%;
  height: auto;
}

.gallery-section {
  background-color: var(--color-bg-darker);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-header p {
  color: var(--color-text-muted);
  font-size: 1.125rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.gallery-item {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 4/3;
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-overlay svg {
  color: white;
  transform: scale(0.5);
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-item:hover .gallery-overlay svg {
  transform: scale(1);
}

.not-found {
  text-align: center;
  margin-top: 100px;
}

@media (max-width: 992px) {
  .service-hero {
    margin-top: 105px;
  }
  .details-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

/* Lightbox Modal Styles */
.lightbox-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(10, 10, 10, 0.92);
  backdrop-filter: blur(12px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.lightbox-close {
  position: absolute;
  top: 2rem;
  right: 2.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 2.5rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10002;
  line-height: 1;
}

.lightbox-close:hover {
  background: var(--color-primary);
  border-color: var(--color-primary);
  transform: rotate(90deg) scale(1.1);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10002;
  user-select: none;
}

.lightbox-prev {
  left: 2.5rem;
}

.lightbox-next {
  right: 2.5rem;
}

.lightbox-nav:hover {
  background: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-50%) scale(1.15);
}

.lightbox-content {
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: zoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.lightbox-img {
  max-width: 100%;
  max-height: 78vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.lightbox-caption {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 1.25rem;
  letter-spacing: 0.5px;
  background: rgba(255, 255, 255, 0.08);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.92);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .lightbox-nav {
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
  }
  .lightbox-prev {
    left: 1rem;
  }
  .lightbox-next {
    right: 1rem;
  }
  .lightbox-close {
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
    font-size: 2rem;
  }
}
</style>
