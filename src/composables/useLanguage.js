import { ref } from 'vue';

const savedLang = localStorage.getItem('westonhaus_lang') || 'en';
const currentLang = ref(savedLang);

export function useLanguage() {
  const toggleLanguage = () => {
    currentLang.value = currentLang.value === 'en' ? 'es' : 'en';
    localStorage.setItem('westonhaus_lang', currentLang.value);
  };

  const setLanguage = (lang) => {
    currentLang.value = lang;
    localStorage.setItem('westonhaus_lang', lang);
  };

  return {
    currentLang,
    toggleLanguage,
    setLanguage
  };
}
