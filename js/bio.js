function detectUserLanguage() {
    var language = navigator.language || navigator.userLanguage;
    return language.split('-')[0];
}

function setId(language) {
    var tdElements = document.querySelectorAll("td.current_lang");
    tdElements.forEach(function (td) {
        td.classList.remove("current_lang");
    });

    var element = document.getElementById("switch-" + language);
    element.classList.add("current_lang");
}

function changeLanguage(lang) {
    var paragraphDisplayed = false;

    document.querySelectorAll('p.bio').forEach(function (paragraph) {
        if (paragraph.lang === lang) {
            paragraphDisplayed = true;
            paragraph.hidden = false;
        } else {
            paragraph.hidden = true;
        }
    });

    if (!paragraphDisplayed) {
        document.querySelectorAll('p[lang="en"]').forEach(function (paragraph) {
            paragraph.hidden = false;
        });
    }


    document.querySelectorAll('ul').forEach(function (ul) {
        if (ul.lang === lang) {
            ul.hidden = false;
        } else {
            ul.hidden = true;
        }
    });

    if (!document.querySelector('ul:not([hidden])')) {
        document.querySelectorAll('ul[lang="en"]').forEach(function (ul) {
            ul.hidden = false;
        });
    }
    setId(lang);
}

var detectedLang = detectUserLanguage()

changeLanguage(detectedLang);
