import {currentLang} from './lang';
import {getCookie} from './cookie';

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
            a.setAttribute('href', '#');
            a.setAttribute('class', 'pageNav');
            a.setAttribute('pageSelected', page);
            
            li.appendChild(a);
            ul.appendChild(li);
        });
    }
}