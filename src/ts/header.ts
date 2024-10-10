import {currentLang, langButtons, setCurrentLang} from './lang';
import {getCookie} from './cookie';
import {navigate, setCurrentPage} from './navigate';
import {decrypt} from './decrypt';

const header = {
    home: {fr: 'À propos', en: 'About me'},
    experience: {fr: 'Expérience', en: 'Experience'},
    education: {fr: 'Formation', en: 'Education'},
    skills: {fr: 'Compétences', en: 'Skills'},
    website: {fr: 'Ce site', en: 'This website'},
    contact: {fr: 'Contact', en: 'Contact'}
};

const nav: HTMLElement | null = document.querySelector('nav');
export function updateNav(): void {

    let languageSelected: string;

    if (getCookie('lang') !== "") {
        languageSelected = getCookie('lang');
    } else{
        languageSelected = currentLang;
    }

    setCurrentLang(languageSelected);

    if (nav) {
        let ul: HTMLElement | null = nav.querySelector('ul');
        if (!ul) {
            ul = document.createElement('ul');
            nav.appendChild(ul);
        }
        ul.innerHTML = '';

        Object.keys(header).forEach((page: string) => {
            const li: HTMLElement = document.createElement('li');
            const a: HTMLElement = document.createElement('a');

            a.textContent = header[page][languageSelected];
            a.setAttribute('class', 'pageNav');
            a.setAttribute('data-pageselected', page);
            a.setAttribute('style', 'color:white;cursor:pointer');

            li.appendChild(a);
            ul.appendChild(li);
        });
    }

    const pageNavButtons: NodeListOf<Element> = document.querySelectorAll('.pageNav');

    pageNavButtons.forEach((button: Element) => {
        button.addEventListener('click', function (this: HTMLElement): void {
            let newPage: string = this.dataset.pageselected;
            setCurrentPage(newPage);
            navigate(newPage, currentLang);
            const navBar: HTMLElement | null = document.getElementById('navBar');
            if (navBar) {
                navBar.classList.toggle('active');
            }
        });
    });

    const menuToggle: HTMLElement | null = document.getElementById('menuToggle');
    const newToggle = menuToggle.cloneNode(true); // Clone l'élément pour enlever tous les anciens événements
    menuToggle.replaceWith(newToggle); // Remplace l'ancien bouton par le nouveau (sans événements)

    document.getElementById('menuToggle')!.addEventListener('click', function() {
        const navBar: HTMLElement | null = document.getElementById('navBar');
        if (navBar) {
            navBar.classList.toggle('active');
        }
    });

}