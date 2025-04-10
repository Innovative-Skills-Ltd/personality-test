
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'da', 
    includedLanguages: 'en,pl',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

// Custom reset function
function resetTranslation() {
  if (document.querySelector('.goog-te-combo')) {
    document.querySelector('.goog-te-combo').value = '';
    document.querySelector('.goog-te-combo').dispatchEvent(new Event('change'));
  }

  // Hide the Google Translate toolbar manually
  const gtToolbar = document.querySelector('.goog-te-banner-frame');
  if (gtToolbar) {
    gtToolbar.style.display = 'none';
  }

  // Also remove iframe if any
  const iframe = document.querySelector('iframe.goog-te-banner-frame');
  if (iframe) {
    iframe.remove();
  }

  // Restore original HTML language
  document.documentElement.lang = "da";
}

function resetTranslation() {
  // Clear the translate cookie (which stores language preference)
  document.cookie = 'googtrans=; path=/; domain=' + location.hostname + '; expires=Thu, 01 Jan 1970 00:00:00 UTC';

  // Force reload without translation
  window.location.reload();
}