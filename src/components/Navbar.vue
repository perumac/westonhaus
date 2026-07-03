<template>
  <header class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="navbar-container">
      <div class="navbar-left">
        <div class="navbar-logo">
          <router-link to="/">
            <img src="/images/logo.png" alt="Company Logo" class="logo-image" />
          </router-link>
        </div>
        
        <nav class="navbar-links" :class="{ 'navbar-open': mobileMenuOpen }">
          <router-link to="/" @click="closeMenu">{{ t.navbar.home }}</router-link>
          <router-link :to="{ path: '/', hash: '#about' }" @click="closeMenu">{{ t.navbar.about }}</router-link>
          
          <!-- Services Dropdown -->
          <div class="dropdown" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <a href="#" class="dropdown-toggle" @click.prevent="toggleDropdown">
              {{ t.navbar.services }}
              <svg :class="{ 'rotated': dropdownOpen }" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
            <transition name="dropdown-fade">
              <div class="dropdown-menu" v-show="dropdownOpen">
                <router-link to="/services/bathroom" @click="closeMenu">{{ t.navbar.servicesList.bathroom }}</router-link>
                <router-link to="/services/kitchen" @click="closeMenu">{{ t.navbar.servicesList.kitchen }}</router-link>
                <router-link to="/services/roofing" @click="closeMenu">{{ t.navbar.servicesList.roofing }}</router-link>
                <router-link to="/services/painting" @click="closeMenu">{{ t.navbar.servicesList.painting }}</router-link>
                <router-link to="/services/flooring" @click="closeMenu">{{ t.navbar.servicesList.flooring }}</router-link>
                <router-link to="/services/drywall" @click="closeMenu">{{ t.navbar.servicesList.drywall }}</router-link>
                <router-link to="/services/courtyards" @click="closeMenu">{{ t.navbar.servicesList.courtyards }}</router-link>
                <router-link to="/services/landscaping" @click="closeMenu">{{ t.navbar.servicesList.landscaping }}</router-link>
                <router-link to="/services/other" @click="closeMenu">{{ t.navbar.servicesList.other }}</router-link>
              </div>
            </transition>
          </div>

          <router-link :to="{ path: '/', hash: '#contact' }" @click="closeMenu">{{ t.navbar.contact }}</router-link>
          
          <!-- Mobile Language Button inside menu -->
          <button @click="toggleLanguage" class="lang-toggle-btn mobile-lang-btn">
            <span v-if="currentLang === 'en'">🇪🇸 Español</span>
            <span v-else>🇺🇸 English</span>
          </button>
        </nav>
      </div>
      
      <div class="navbar-actions">
        <button @click="toggleLanguage" class="lang-toggle-btn desktop-lang-btn" :title="currentLang === 'en' ? 'Traducir al Español' : 'Translate to English'">
          <span v-if="currentLang === 'en'">🇪🇸 ES</span>
          <span v-else>🇺🇸 EN</span>
        </button>
        <router-link :to="{ path: '/', hash: '#contact' }" class="btn btn-primary btn-quote">{{ t.navbar.quote }} &rarr;</router-link>
        
        <button class="mobile-toggle" @click="toggleMenu" aria-label="Toggle menu">
          <span class="hamburger" :class="{ 'open': mobileMenuOpen }"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useLanguage } from '../composables/useLanguage';
import { translations } from '../data/translations';

const { currentLang, toggleLanguage } = useLanguage();
const t = computed(() => translations[currentLang.value]);

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);
const dropdownOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMenu = () => {
  mobileMenuOpen.value = false;
  dropdownOpen.value = false;
};

const handleMouseEnter = () => {
  if (window.innerWidth > 992) {
    dropdownOpen.value = true;
  }
};

const handleMouseLeave = () => {
  if (window.innerWidth > 992) {
    dropdownOpen.value = false;
  }
};

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.5rem 0;
  transition: all var(--transition-normal);
  background: transparent;
}

.navbar-scrolled {
  background: rgba(18, 18, 18, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-border);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 5%;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.navbar-logo .logo-image {
  height: 120px;
  width: auto;
  transition: transform var(--transition-fast);
}

.navbar-logo a:hover .logo-image {
  transform: scale(1.03);
}

.navbar-links {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.navbar-links a, .navbar-links .dropdown-toggle {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-light);
  opacity: 0.8;
  transition: opacity var(--transition-fast);
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.dropdown-toggle svg {
  transition: transform 0.3s ease;
}

.dropdown-toggle svg.rotated {
  transform: rotate(180deg);
}

.navbar-links a:hover,
.navbar-links a.router-link-active:not(.navbar-logo a) {
  opacity: 1;
}

/* Dropdown Styles */
.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-bg-darker);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 0.5rem 0;
  min-width: 220px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  margin-top: 1rem;
}

.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 12px;
  height: 12px;
  background-color: var(--color-bg-darker);
  border-top: 1px solid var(--color-border);
  border-left: 1px solid var(--color-border);
}

.dropdown-menu a {
  display: block;
  padding: 0.75rem 1.5rem;
  opacity: 0.7;
}

.dropdown-menu a:hover, .dropdown-menu a.router-link-exact-active {
  background-color: rgba(255,255,255,0.05);
  opacity: 1;
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.2s ease;
}
.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -10px);
}

.lang-toggle-btn {
  background: rgba(212, 175, 55, 0.12);
  border: 1px solid rgba(212, 175, 55, 0.4);
  color: var(--color-text-light);
  padding: 0.45rem 0.9rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.lang-toggle-btn:hover {
  background: rgba(212, 175, 55, 0.25);
  border-color: var(--color-accent);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(212, 175, 55, 0.25);
}

.mobile-lang-btn {
  display: none;
  margin-top: 1.5rem;
  padding: 0.6rem 1.4rem;
  font-size: 1.1rem;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.mobile-toggle {
  display: none;
  width: 30px;
  height: 24px;
  position: relative;
  z-index: 1001;
}

.hamburger {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--color-text-light);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.3s;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: var(--color-text-light);
  transition: transform 0.3s;
  left: 0;
}

.hamburger::before {
  top: -8px;
}

.hamburger::after {
  bottom: -8px;
}

.hamburger.open {
  background-color: transparent;
}

.hamburger.open::before {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.open::after {
  transform: translateY(-8px) rotate(-45deg);
}

@media (max-width: 992px) {
  .navbar-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background-color: var(--color-bg-darker);
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 110px;
    padding-bottom: 50px;
    overflow-y: auto;
    align-items: center;
    transition: right var(--transition-normal);
  }
  
  .navbar-links.navbar-open {
    right: 0;
  }
  
  .navbar-links a, .navbar-links .dropdown-toggle {
    font-size: 1.4rem;
    padding: 0.5rem 0;
  }

  .dropdown {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .dropdown-menu {
    position: static;
    transform: none;
    box-shadow: none;
    border: none;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 8px;
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    width: 90%;
    max-width: 320px;
    padding: 0.5rem;
  }

  .dropdown-menu::before {
    display: none;
  }

  .dropdown-menu a {
    font-size: 1.15rem;
    padding: 0.6rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .dropdown-menu a:last-child {
    border-bottom: none;
  }
  
  .mobile-toggle {
    display: block;
  }
  
  .btn-quote, .desktop-lang-btn {
    display: none;
  }

  .mobile-lang-btn {
    display: flex;
    justify-content: center;
  }

  .navbar {
    background: rgba(18, 18, 18, 0.96);
    backdrop-filter: blur(10px);
    padding: 0.15rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .navbar-logo .logo-image {
    height: 85px;
  }

  .navbar-container {
    padding: 0 1.5rem;
  }
}
</style>
