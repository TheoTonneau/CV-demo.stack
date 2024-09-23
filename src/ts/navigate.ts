import {pages} from './pages';
import {currentLang} from './lang';

import { decrypt } from './decrypt';

interface Data {
    apiUrl: string;
    apiKey: string;
    key: string;
}

const data: Data = require('../js/data.json');

export let currentPage: string = 'home';

export function navigate(page: string, lang: string): void {
    const content: HTMLElement | null = document.getElementById('content');
    if (content) {
        content.innerHTML = '';
        content.innerHTML = pages[page][lang] || '<p>Page non trouvée</p>';
        const form: HTMLFormElement | null = document.getElementById('monFormulaire') as HTMLFormElement;
        if (form) {
            form.addEventListener('submit', function(event) {
                event.preventDefault();

                const email: string = (document.getElementById('email') as HTMLInputElement).value;
                const firstName: string = (document.getElementById('firstName') as HTMLInputElement).value;
                const name: string = (document.getElementById('name') as HTMLInputElement).value;
                const company: string = (document.getElementById('company') as HTMLInputElement).value;
                const message: string = (document.getElementById('message') as HTMLTextAreaElement).value;

                console.log(`Email: ${email}`);
                console.log(`Prénom: ${firstName}`);
                console.log(`Nom: ${name}`);
                console.log(`Company: ${company}`);
                console.log(`Message: ${message}`);

                
            });
        }
        
    }
}


export function setCurrentPage(page: string): void {
    currentPage = page;
}