import {currentLang, langButtons} from './lang';
import {getCookie} from './cookie';
import {navigate, setCurrentPage} from './navigate';

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
            a.setAttribute('class', 'pageNav');
            a.setAttribute('data-pageselected', page);
            
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
        });
    });
}
