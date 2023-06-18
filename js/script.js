// JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    var languageSelect = document.getElementById('language-select');

    languageSelect.addEventListener('change', function() {
        var selectedLanguage = this.value;

        fetchTranslation(selectedLanguage);
    });

    function fetchTranslation(language) {
        fetch(language + '.json')
            .then(response => response.json())
            .then(data => updateContent(data));
    }

    function updateContent(translations) {
        var translationKeys = Object.keys(translations);

        translationKeys.forEach(function(key) {
            var element = document.getElementById(key);
            if (element) {
                element.textContent = translations[key];
            }
        });
    }
});
