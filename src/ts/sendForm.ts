import { decrypt } from './decrypt';

interface Data {
    apiUrl: string;
    apiKey: string;
    key: string;
}

const data: Data = require('../js/data.json')!;
console.log(data);
setTimeout(function() {
    const form: HTMLFormElement | null = document.getElementById('formEmail') as HTMLFormElement;
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const emailInput = document.getElementById('email') as HTMLInputElement;
            const fNameInput = document.getElementById('firstName') as HTMLInputElement;
            const nameInput = document.getElementById('name') as HTMLInputElement;
            const companyInput = document.getElementById('company') as HTMLInputElement;
            const messageInput = document.getElementById('message') as HTMLTextAreaElement;
            
            const email: string = (document.getElementById('email') as HTMLInputElement).value;
            const fName: string = (document.getElementById('firstName') as HTMLInputElement).value;
            const name: string = (document.getElementById('name') as HTMLInputElement).value;
            const company: string = (document.getElementById('company') as HTMLInputElement).value;
            const message: string = ` ${document.documentElement.lang} - ${(document.getElementById('message') as HTMLTextAreaElement).value}`;
    
    
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
                    emailInput.placeholder = email;
                    fNameInput.placeholder = fName;
                    nameInput.placeholder = name;
                    companyInput.placeholder = company;
                    messageInput.placeholder = messageInput.value;

                    emailInput.value = '';
                    fNameInput.value = '';
                    nameInput.value = '';
                    companyInput.value = '';
                    messageInput.value = '';
                })
                .catch((error: Error) => {
                    console.error('Error:', error);
                    alert('Error submitting form.');
                });
        });
    }
}, 300);