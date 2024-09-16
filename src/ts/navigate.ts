import {pages} from './pages';
import {currentLang, langButtons} from './lang';

let currentPage: string = 'home';

export function navigate(page: string, lang: string): void {
    const content: HTMLElement | null = document.getElementById('content');
    if (content) {
        content.innerHTML = '';
        content.innerHTML = pages[page][lang] || '<p>Page non trouvée</p>';
    }
}

export const pageNav: NodeListOf<Element> = document.querySelectorAll('.pageNav');

pageNav.forEach((link: Element) => {
    link.addEventListener('click', function (e: MouseEvent) {
        e.preventDefault();
        const page: string | null = this.getAttribute('pageSelected');
        if (page) {
            currentPage = page;
            navigate(page, currentLang);
        }
    });
});