// Get the language select element
const languageSelect = document.getElementById('language-select');

// Add an event listener to the language select element
languageSelect.addEventListener('change', function() {
    // Get the selected language value
    const selectedLanguage = this.value;

    // Get the current URL
    const currentURL = window.location.href;

    // Check if the current page is in the default language
    const isDefaultLanguage = currentURL.includes('/en/');

    // Construct the URL for the corresponding language version
    let newURL;
    if (selectedLanguage === 'de' && isDefaultLanguage) {
        newURL = currentURL.replace('/en/', '/de/');
    } else if (selectedLanguage === 'en' && !isDefaultLanguage) {
        newURL = currentURL.replace('/de/', '/en/');
    }

    // Navigate to the new URL
    if (newURL) {
        window.location.href = newURL;
    }
});
