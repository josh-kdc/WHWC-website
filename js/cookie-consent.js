/* ============================================================
   Cookie Consent + Google Consent Mode v2 Logic
   Walking Home Wellness Coaching
   Save as: js/cookie-consent.js

   IMPORTANT: This file assumes gtag() has already been defined
   by the inline snippet in <head> (see cookie-consent-snippet.html).
   This file just needs to load AFTER the page's <body> content,
   or at least after #cookie-consent-banner exists in the DOM.
============================================================ */

(function () {
  const saved = localStorage.getItem('cookie_consent');

  if (saved) {
    // Returning visitor — re-apply their previous choice
    const consent = JSON.parse(saved);
    gtag('consent', 'update', consent);
  } else {
    // First-time visitor — show the banner
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) banner.style.display = 'flex';
  }
})();

function cookieConsentChoice(accepted) {
  const consent = {
    analytics_storage: accepted ? 'granted' : 'denied',
    ad_storage: 'denied',        // stays denied — no ads/remarketing on this site
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  };

  gtag('consent', 'update', consent);
  localStorage.setItem('cookie_consent', JSON.stringify(consent));

  const banner = document.getElementById('cookie-consent-banner');
  if (banner) banner.style.display = 'none';
}
