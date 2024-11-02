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