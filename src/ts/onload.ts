import {updateNav} from './header';
import {getCookie} from './cookie';
import {langButtons} from './lang';
import {navigate} from './navigate';

function updateActiveButton(selectedLang: string): void {
    langButtons.forEach((button: Element) => {
        const btn = button as HTMLElement;
        if (btn.id === selectedLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

window.onload = function (){
    const savedLang: string = getCookie('lang');
    let selectedLang: string;
    if (savedLang !== "") {
        selectedLang = savedLang;
    } else {
        selectedLang = 'fr';
    }
    updateActiveButton(selectedLang);
    updateNav();
    navigate('home', selectedLang);
};