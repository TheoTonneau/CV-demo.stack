import {updateNav} from './header';
import {setCookie} from './cookie';
import {navigate, currentPage} from './navigate';
export const langButtons: NodeListOf<Element> = document.querySelectorAll('.buttonLanguage');
export let currentLang: string = 'fr';

langButtons.forEach((button: Element) => {
    button.addEventListener('click', function (this: HTMLElement): void {
        langButtons.forEach((btn: Element) => (btn as HTMLElement).classList.remove('active'));
        this.classList.add('active');
        currentLang = this.id;
        setCookie('lang', currentLang , 10);
        updateNav();
        navigate(currentPage, currentLang);
    });
});