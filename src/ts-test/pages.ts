function navigate(page: string, lang: string): void {
    const content: HTMLElement | null = document.getElementById('content');
    if (content) {
        content.innerHTML = pages[page][lang] || '<p>Page non trouvée</p>';
    }
}

const pages: { [key: string]: { [key: string]: string } } = {
    home: {
        fr: `
            <h2>Bienvenue sur mon CV</h2>
            <p>Ceci est une démo interactive de mon CV multilingue. Vous pouvez naviguer à travers différentes sections pour voir mon parcours.</p>
        `,
        en: `
            <h2>Welcome to my Resume</h2>
            <p>This is an interactive demo of my multilingual resume. You can navigate through different sections to see my journey.</p>
        `
    },
    experience: {
        fr: `
            <h2>Expérience Professionnelle</h2>
            <ul>
                <li><strong>2023 - Aujourd'hui:</strong> Développeur Full-Stack chez XYZ</li>
                <li><strong>2020 - 2023:</strong> Ingénieur Logiciel chez ABC</li>
            </ul>
        `,
        en: `
            <h2>Professional Experience</h2>
            <ul>
                <li><strong>2023 - Present:</strong> Full-Stack Developer at XYZ</li>
                <li><strong>2020 - 2023:</strong> Software Engineer at ABC</li>
            </ul>
        `
    },
    education: {
        fr: `
            <h2>Formation</h2>
            <ul>
                <li><strong>2020:</strong> Master en Informatique à l'Université de Paris</li>
                <li><strong>2017:</strong> Licence en Informatique à l'Université de Lyon</li>
            </ul>
        `,
        en: `
            <h2>Education</h2>
            <ul>
                <li><strong>2020:</strong> Master's Degree in Computer Science from the University of Paris</li>
                <li><strong>2017:</strong> Bachelor's Degree in Computer Science from the University of Lyon</li>
            </ul>
        `
    },
    skills: {
        fr: `
            <h2>Compétences</h2>
            <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>React, Node.js, Express</li>
                <li>Bases de données: MySQL, MongoDB</li>
                <li>Git, Docker, CI/CD</li>
            </ul>
        `,
        en: `
            <h2>Skills</h2>
            <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>React, Node.js, Express</li>
                <li>Databases: MySQL, MongoDB</li>
                <li>Git, Docker, CI/CD</li>
            </ul>
        `
    },
    contact: {
        fr: `
            <h2>Contact</h2>
            <p>Email: contact@moncv.com</p>
            <p>Téléphone: +33 6 12 34 56 78</p>
        `,
        en: `
            <h2>Contact</h2>
            <p>Email: contact@myresume.com</p>
            <p>Phone: +33 6 12 34 56 78</p>
        `
    }
};

const langButtons: NodeListOf<Element> = document.querySelectorAll('.lang-btn');
let currentLang: string = 'fr';

langButtons.forEach((button: Element) => {
    button.addEventListener('click', function (this: HTMLElement): void {
        langButtons.forEach((btn: Element) => (btn as HTMLElement).classList.remove('active'));
        this.classList.add('active');
        currentLang = this.id;
        updateLanguage();
    });
});

function updateLanguage(): void {
    navigate(currentPage, currentLang);

    document.querySelectorAll('[data-lang]').forEach((element: Element) => {
        const lang: string | null = element.getAttribute('data-lang');
        if (lang) {
            element.style.display = (lang === currentLang) ? 'block' : 'none';
        }
    });
}

let currentPage: string = 'home';
document.querySelectorAll('nav ul li a').forEach((link: Element) => {
    link.addEventListener('click', function (e: MouseEvent) {
        e.preventDefault();
        const page: string | null = this.getAttribute('data-page');
        if (page) {
            currentPage = page;
            navigate(page, currentLang);
        }
    });
});

navigate('home', currentLang);