function setCookieLang(name: string, value: string, days: number): void {
    const date: Date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires: string = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

setTimeout(function() {

    let englishButton: HTMLInputElement = window.innerWidth > 1024 ? document.getElementById('langButton') as HTMLInputElement : document.getElementById('lang-input') as HTMLInputElement;

    englishButton.addEventListener('click', (): void => {
        if (document.documentElement.lang === 'fr') {
            setCookieLang('lang', 'en', 365);
        } else {
            setCookieLang('lang', 'fr', 365);
        }
        document.location.href='../index.html';
    });


    fetch('./module/homeWrapper.html')
    .then((response: Response) => response.text())
    .then((data: string) => {
        const homeElement: HTMLElement | null = document.getElementById('home');
        if (homeElement) {
            homeElement.innerHTML = data;
        }
    })
    .catch((error: Error) => console.error('Erreur de chargement:', error));

    fetch('./module/about.html')
        .then((response: Response) => response.text())
        .then((data: string) => {
            const homeElement: HTMLElement | null = document.getElementById('about');
            if (homeElement) {
                homeElement.innerHTML = data;
            }
        })
        .catch((error: Error) => console.error('Erreur de chargement:', error));


    fetch('./module/skills.html')
        .then((response: Response) => response.text())
        .then((data: string) => {
            const homeElement: HTMLElement | null = document.getElementById('skills');
            if (homeElement) {
                homeElement.innerHTML = data;
            }
        })
        .catch((error: Error) => console.error('Erreur de chargement:', error));

    fetch('./module/formation.html')
        .then((response: Response) => response.text())
        .then((data: string) => {
            const homeElement: HTMLElement | null = document.getElementById('formations');
            if (homeElement) {
                homeElement.innerHTML = data;
            }
        })
        .catch((error: Error) => console.error('Erreur de chargement:', error));

    fetch('./module/experiences.html')
        .then((response: Response) => response.text())
        .then((data: string) => {
            const homeElement: HTMLElement | null = document.getElementById('experiences');
            if (homeElement) {
                homeElement.innerHTML = data;
            }
        })
        .catch((error: Error) => console.error('Erreur de chargement:', error));

    fetch('./module/website.html')
        .then((response: Response) => response.text())
        .then((data: string) => {
            const homeElement: HTMLElement | null = document.getElementById('website');
            if (homeElement) {
                homeElement.innerHTML = data;
            }
        })
        .catch((error: Error) => console.error('Erreur de chargement:', error));

    fetch('./module/contact.html')
        .then((response: Response) => response.text())
        .then((data: string) => {
            const homeElement: HTMLElement | null = document.getElementById('contact');
            if (homeElement) {
                homeElement.innerHTML = data;
            }
        })
        .catch((error: Error) => console.error('Erreur de chargement:', error));
}, 100);