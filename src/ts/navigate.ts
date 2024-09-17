import {pages} from './pages';
import {currentLang} from './lang';

export let currentPage: string = 'home';

export function navigate(page: string, lang: string): void {
    const content: HTMLElement | null = document.getElementById('content');
    if (content) {
        content.innerHTML = '';
        content.innerHTML = pages[page][lang] || '<p>Page non trouvée</p>';
    }
}


export function setCurrentPage(page: string): void {
    currentPage = page;
}