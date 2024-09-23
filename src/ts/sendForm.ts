import { decrypt } from './decrypt';

interface Data {
    apiUrl: string;
    apiKey: string;
    key: string;
}

const data: Data = require('../js/data.json');

// Sélectionner l'input de type button

const submitButton: HTMLInputElement | null = document.getElementById('submitButton') as HTMLInputElement;

if (submitButton) {
    submitButton.addEventListener('click', async function (event: MouseEvent): Promise<void> {
        event.preventDefault();

        const email: string = (document.getElementById('email') as HTMLInputElement).value;
        const firstName: string = (document.getElementById('firstName') as HTMLInputElement).value;
        const name: string = (document.getElementById('name') as HTMLInputElement).value;
        const company: string = (document.getElementById('company') as HTMLInputElement).value;
        const message: string = (document.getElementById('message') as HTMLTextAreaElement).value;

        const formData: { email: string; firstName: string; name: string; company: string; message: string } = {
            email,
            firstName,
            name,
            company,
            message
        };

        try {
            submitButton.disabled = true;
            submitButton.value = 'Envoi en cours...';

            const response: Response = await fetch(data.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': decrypt(data.apiKey, data.key)
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result: any = await response.json();
                console.log('Réponse de l\'API :', result);
                alert('Message envoyé avec succès !');
            } else {
                console.error('Erreur de l\'API :', response.statusText);
                alert('Erreur lors de l\'envoi du message.');
            }
        } catch (error: unknown) {
            console.error('Erreur lors de l\'envoi :', error);
            alert('Erreur de connexion. Veuillez réessayer.');
        } finally {
            submitButton.disabled = false;
            submitButton.value = 'Envoyer';
        }
    });
}
