import {pages} from './pages';
import {currentLang} from './lang';

import {decrypt} from './decrypt';

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
        const form: HTMLFormElement | null = document.getElementById('formEmail') as HTMLFormElement;
        if (form) {
            form.addEventListener('submit', function(event) {
                event.preventDefault();

                const email: string = (document.getElementById('email') as HTMLInputElement).value;
                const fName: string = (document.getElementById('firstName') as HTMLInputElement).value;
                const name: string = (document.getElementById('name') as HTMLInputElement).value;
                const company: string = (document.getElementById('company') as HTMLInputElement).value;
                const message: string = ` ${currentLang} - ${(document.getElementById('message') as HTMLTextAreaElement).value}`;



                const formData = ({
                        email,
                        fName,
                        name,
                        company,
                        message

                });

                fetch(data.apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key': decrypt(data.apiKey, data.key)
                    },
                    body: `${JSON.stringify(formData)}`
                })
                    .then((response: Response) => response.json())
                    .then((data: any) => {
                        console.log('Success:', data);
                        alert('Form submitted successfully!');
                    })
                    .catch((error: Error) => {
                        console.error('Error:', error);
                        alert('Error submitting form.');
                    });
            });

            
        }

        const openModalButtons: NodeListOf<Element> = document.querySelectorAll('.more-info-btn');
        const closeModalButtons: NodeListOf<Element> = document.querySelectorAll('.close-btn');

        openModalButtons.forEach((button: Element) => {
            button.addEventListener('click', () => {
                const modalId: string | null = button.getAttribute('data-modal');
                if (modalId) {
                    const modal: HTMLElement | null = document.getElementById(modalId);
                    if (modal) {
                        modal.style.display = 'flex';
                    }
                }
            });
        });

        closeModalButtons.forEach((button: Element) => {
            button.addEventListener('click', () => {
                const modalId: string | null = button.getAttribute('data-close');
                if (modalId) {
                    const modal: HTMLElement | null = document.getElementById(modalId);
                    if (modal) {
                        modal.style.display = 'none';
                    }
                }
            });
        });

        window.addEventListener('click', (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.classList.contains('modal')) {
                target.style.display = 'none';
            }
        });

        drawAllLines();
        window.onresize = drawAllLines;


    }
}

function drawLine(pointSelector: string, divSelector: string, lineSelector: string): void {
    const point: Element | null = document.querySelector(pointSelector);
    const experienceDiv: Element | null = document.querySelector(divSelector);
    const line: HTMLElement | null = document.querySelector(lineSelector);

    if (point && experienceDiv && line) {
        const pointRect: DOMRect = point.getBoundingClientRect();
        const divRect: DOMRect = experienceDiv.getBoundingClientRect();

        const x1 = pointRect.x ;
        const y1 = pointRect.y + pointRect.height/2;
        const x2 = divRect.x ;
        const y2 = divRect.y + divRect.height/2;

        const length: number = Math.hypot(x1 - x2, y1 - y2);

        line.style.width = length + 'px';
        line.style.left = x1 - pointRect.width + 'px';
        line.style.top = '50%';

        const angle: number = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI)+180;
        line.style.transform = `rotate(${angle}deg)`;
    }
}

function drawAllLines(): void {
    drawLine('.point-1', '.experience-1', '.line-1');
    drawLine('.point-2', '.experience-2', '.line-2');
    drawLine('.point-3', '.experience-3', '.line-3');
    drawLine('.point-4', '.experience-4', '.line-4');
}

export function setCurrentPage(page: string): void {
    currentPage = page;
}