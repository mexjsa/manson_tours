const translations = {
    es: {
        nav_about: "Sobre Mí",
        nav_tours: "Recorridos",
        nav_contact: "Contacto",
        hero_title: "Storytelling Matters. Porque las narrativas que elegimos deciden nuestra historia.",
        hero_subtitle: "Descubre la metamorfosis de la Ciudad de México con Alejandro 'Aristóteles' Ruiz.",
        hero_cta: "Únete a la Aventura",
        about_title: "¿Quién es Aristóteles?",
        about_p1: "Alejandro Ruiz, conocido en el gremio como 'Aristóteles', no es solo un guía de turistas; es un intérprete del patrimonio y un contador de historias.",
        about_p2: "Su misión es mostrar la Ciudad de México no como un simple escenario de monumentos, sino como un organismo vivo lleno de historia, sincretismo arquitectónico y crónicas de la vida cotidiana.",
        nav_interviews: "Entrevistas",
        interviews_title: "Entrevistas y Medios",
        interviews_subtitle: "Conoce más sobre la labor de Aristóteles en la CDMX.",
        tours_title: "Mis Recorridos",
        tour1_title: "Templo Mayor y Sincretismo",
        tour1_desc: "Aprende a identificar cómo las piedras de los templos aztecas construyeron los palacios coloniales.",
        tour2_title: "Oficios y Vida Cotidiana",
        tour2_desc: "Desde los evangelistas en Santo Domingo hasta la gastronomía auténtica (maíz y chile).",
        tour3_title: "Leyendas de la Inquisición",
        tour3_desc: "Recorre las calles más antiguas de América y descubre los mitos populares del centro histórico.",
        tour_btn: "Reservar",
        nav_reviews: "Opiniones",
        reviews_title: "Opiniones de mis clientes",
        footer_title: "Comienza tu viaje",
        footer_text: "Escríbeme por WhatsApp y personalicemos tu experiencia en la CDMX."
    },
    en: {
        nav_about: "About Me",
        nav_tours: "Tours",
        nav_contact: "Contact",
        hero_title: "Storytelling Matters. Because the narratives we choose decide our history.",
        hero_subtitle: "Discover the metamorphosis of Mexico City with Alejandro 'Aristóteles' Ruiz.",
        hero_cta: "Join the Adventure",
        about_title: "Who is Aristóteles?",
        about_p1: "Alejandro Ruiz, known in the guild as 'Aristóteles', is not just a tour guide; he is an interpreter of heritage and a storyteller.",
        about_p2: "His mission is to show Mexico City not simply as a stage for monuments, but as a living organism full of history, architectural syncretism, and chronicles of daily life.",
        nav_interviews: "Interviews",
        interviews_title: "Interviews & Media",
        interviews_subtitle: "Learn more about Aristóteles' work in CDMX.",
        nav_reviews: "Reviews",
        reviews_title: "Client Reviews",
        footer_title: "Start your journey",
        footer_text: "Text me on WhatsApp and let's personalize your experience in CDMX."
    },
    fr: {
        nav_about: "À propos",
        nav_tours: "Visites",
        nav_contact: "Contact",
        hero_title: "Storytelling Matters. Parce que les récits que nous choisissons décident de notre histoire.",
        hero_subtitle: "Découvrez la métamorphose de Mexico avec Alejandro 'Aristóteles' Ruiz.",
        hero_cta: "Rejoignez l'Aventure",
        about_title: "Qui est Aristóteles ?",
        about_p1: "Alejandro Ruiz, connu dans la profession sous le nom de 'Aristóteles', n'est pas seulement un guide touristique ; il est un interprète du patrimoine et un conteur.",
        about_p2: "Sa mission est de montrer Mexico non pas comme un simple décor de monuments, mais comme un organisme vivant plein d'histoire, de syncrétisme architectural et de chroniques de la vie quotidienne.",
        nav_interviews: "Entretiens",
        interviews_title: "Entretiens et Médias",
        interviews_subtitle: "En savoir plus sur le travail d'Aristóteles à CDMX.",
        nav_reviews: "Avis",
        reviews_title: "Avis de mes clients",
        footer_title: "Commencez votre voyage",
        footer_text: "Écrivez-moi sur WhatsApp et personnalisons votre expérience à CDMX."
    },
    de: {
        nav_about: "Über Mich",
        nav_tours: "Touren",
        nav_contact: "Kontakt",
        hero_title: "Storytelling Matters. Weil die Erzählungen, die wir wählen, unsere Geschichte bestimmen.",
        hero_subtitle: "Entdecken Sie die Metamorphose von Mexiko-Stadt mit Alejandro 'Aristóteles' Ruiz.",
        hero_cta: "Kommen Sie Mit",
        about_title: "Wer ist Aristóteles?",
        about_p1: "Alejandro Ruiz, in der Branche als 'Aristóteles' bekannt, ist nicht nur ein Reiseleiter; er ist ein Interpret des Erbes und ein Geschichtenerzähler.",
        about_p2: "Seine Mission ist es, Mexiko-Stadt nicht nur als bloße Kulisse für Denkmäler zu zeigen, sondern als lebendigen Organismus voller Geschichte, architektonischem Synkretismus und Chroniken des täglichen Lebens.",
        nav_interviews: "Interviews",
        interviews_title: "Interviews und Medien",
        interviews_subtitle: "Erfahren Sie mehr über Aristóteles' Arbeit in CDMX.",
        nav_reviews: "Bewertungen",
        reviews_title: "Kundenbewertungen",
        footer_title: "Beginnen Sie Ihre Reise",
        footer_text: "Schreiben Sie mir auf WhatsApp und lassen Sie uns Ihr Erlebnis in CDMX personalisieren."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('languageSelect');

    // Check local storage for language preference
    const savedLang = localStorage.getItem('mansonLang') || 'es';
    langSelect.value = savedLang;
    setLanguage(savedLang);

    langSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        localStorage.setItem('mansonLang', lang);
        setLanguage(lang);
    });
});

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
}
