<template>
  <section id="home" class="hero-slider">
    <!-- Left Panel (Content) 40% -->
    <div class="hero-content">
      <div class="content-wrapper">
        <transition name="fade" mode="out-in">
          <div :key="currentIndex" class="slide-text">
            <h1 class="hero-title">{{ slides[currentIndex].title }}</h1>
            <p class="hero-desc">{{ slides[currentIndex].description }}</p>
          </div>
        </transition>
        
        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary">Get a quote &rarr;</a>
          <a href="#services" class="btn btn-outline">Learn more</a>
        </div>
        
        <div class="slider-controls">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: progress + '%' }"></div>
          </div>
          <div class="dots">
            <button 
              v-for="(_, index) in slides" 
              :key="index"
              class="dot"
              :class="{ active: index === currentIndex }"
              @click="goToSlide(index)"
              aria-label="Go to slide"
            ></button>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Panel (Visual) 60% -->
    <div class="hero-visual">
      <transition-group name="crossfade" tag="div" class="image-container">
        <div 
          v-for="(slide, index) in slides" 
          :key="slide.id"
          v-show="index === currentIndex"
          class="slide-image-wrapper"
        >
          <img :src="slide.image" :alt="slide.title" class="slide-image" />
          <div class="image-overlay"></div>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const slides = [
  {
    id: 1,
    title: 'Creating spaces that inspire',
    description: 'We design functional and inviting interiors with precision to bring your vision to life through our expertise in real estate solutions.',
    image: '/images/hero_living_room.png'
  },
  {
    id: 2,
    title: 'Luxury Bathroom Remodeling',
    description: 'Transform your bathroom into a personal oasis with our high-end fixtures, marble tiles, and flawless modern designs.',
    image: '/images/hero_bathroom.png'
  },
  {
    id: 3,
    title: 'Modern Kitchen Upgrades',
    description: 'Elevate your culinary experience with sleek matte cabinets, large marble islands, and state-of-the-art stainless appliances.',
    image: '/images/hero_kitchen.png'
  },
  {
    id: 4,
    title: 'Premium Roofing Repairs',
    description: 'Protect your home with pristine, high-quality roofing solutions that enhance your property\'s curb appeal and longevity.',
    image: '/images/hero_roofing.png'
  },
  {
    id: 5,
    title: 'Custom Flooring Solutions',
    description: 'Upgrade your Weston home with immaculate white oak hardwood, luxury porcelain tiles, and flawless herringbone layouts built to last.',
    image: '/images/hero_flooring.png'
  },
  {
    id: 6,
    title: 'Masterful House Painting',
    description: 'Revitalize your property inside and out with weather-resistant premium coatings, smooth luxury finishes, and expert color consulting.',
    image: '/images/hero_painting.png'
  }
];

const currentIndex = ref(0);
const progress = ref(0);
let timer = null;
let progressTimer = null;
const SLIDE_DURATION = 5000;
const PROGRESS_INTERVAL = 50;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length;
  resetProgress();
};

const goToSlide = (index) => {
  currentIndex.value = index;
  resetProgress();
};

const resetProgress = () => {
  progress.value = 0;
  clearInterval(timer);
  clearInterval(progressTimer);
  startAutoPlay();
};

const startAutoPlay = () => {
  progressTimer = setInterval(() => {
    progress.value += (PROGRESS_INTERVAL / SLIDE_DURATION) * 100;
  }, PROGRESS_INTERVAL);
  
  timer = setInterval(() => {
    nextSlide();
  }, SLIDE_DURATION);
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  clearInterval(timer);
  clearInterval(progressTimer);
});
</script>

<style scoped>
.hero-slider {
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: var(--color-bg-darker);
  overflow: hidden;
}

/* Left Panel */
.hero-content {
  width: 40%;
  display: flex;
  align-items: center;
  padding: 0 5%;
  position: relative;
  z-index: 10;
}

.content-wrapper {
  max-width: 500px;
  width: 100%;
}

.hero-title {
  font-size: clamp(3rem, 5vw, 4.5rem);
  font-weight: 600;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.hero-desc {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  margin-bottom: 2.5rem;
  max-width: 90%;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 4rem;
}

.slider-controls {
  width: 100%;
}

.progress-bar {
  width: 100%;
  height: 2px;
  background-color: var(--color-border);
  margin-bottom: 1rem;
  position: relative;
}

.progress-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: var(--color-accent);
  transition: width 0.1s linear;
}

.dots {
  display: flex;
  gap: 1rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-border);
  transition: all var(--transition-fast);
}

.dot.active {
  background-color: var(--color-accent);
  transform: scale(1.5);
}

/* Right Panel */
.hero-visual {
  width: 60%;
  position: relative;
}

.image-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.slide-image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, var(--color-bg-darker) 0%, rgba(10, 10, 10, 0) 30%);
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.crossfade-enter-active,
.crossfade-leave-active {
  transition: opacity 1.5s ease;
}

.crossfade-enter-from,
.crossfade-leave-to {
  opacity: 0;
}

/* Mobile First Adjustments */
@media (max-width: 992px) {
  .hero-slider {
    flex-direction: column-reverse;
  }
  
  .hero-content {
    width: 100%;
    min-height: 50vh;
    padding: 3rem 1.5rem;
    align-items: flex-start;
  }
  
  .hero-visual {
    width: 100%;
    height: 50vh;
  }
  
  .image-overlay {
    background: linear-gradient(0deg, var(--color-bg-darker) 0%, rgba(10, 10, 10, 0) 40%);
  }
  
  .content-wrapper {
    max-width: 100%;
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .hero-actions .btn {
    width: 100%;
  }
}
</style>
