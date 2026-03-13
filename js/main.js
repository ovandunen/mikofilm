/**
 * main.js – Sprachumschalter + globale Logik
 * mikofilm Landing Page
 */

// Übersetzungen DE / EN
const i18n = {
  de: {
    conference:   'Meeting & Conference Rooms',
    office:       'Office',
    projects:     'Projects',
    cooperations: 'Cooperations & Partnerships',
    free:         'frei',
    occupied:     'besetzt',
    about:        'About',
    contact:      'Contact',
    disclaimer:   'Disclaimer',
    impressum:    'Impressum',
    datenschutz:  'Datenschutz',
  },
  en: {
    conference:   'Meeting & Conference Rooms',
    office:       'Office',
    projects:     'Projects',
    cooperations: 'Cooperations & Partnerships',
    free:         'available',
    occupied:     'occupied',
    about:        'About',
    contact:      'Contact',
    disclaimer:   'Disclaimer',
    impressum:    'Legal Notice',
    datenschutz:  'Privacy Policy',
  }
};

let currentLang = localStorage.getItem('lang') || 'de';

/**
 * Sprache anwenden und in localStorage speichern
 */
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  // Alle data-i18n Elemente übersetzen
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
  });

  // Aktiven Sprachbutton markieren
  document.querySelectorAll('.lang').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });
}

/**
 * Sprachumschalter EN/DE initialisieren
 */
function setupLanguageSwitcher() {
  document.querySelectorAll('.lang').forEach(el => {
    el.addEventListener('click', () => applyLanguage(el.dataset.lang));
  });
}

/**
 * Hover-Effekt für Kategorie-Links und Raum-Items
 */
function setupHoverEffects() {
  document.querySelectorAll('.category-link, .room-item').forEach(el => {
    el.addEventListener('mouseenter', () => { el.style.opacity = '0.6'; });
    el.addEventListener('mouseleave', () => { el.style.opacity = '1'; });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupLanguageSwitcher();
  setupHoverEffects();
  applyLanguage(currentLang);
});
