const toggleInput: HTMLInputElement = document.getElementById('toggle') as HTMLInputElement;

toggleInput.addEventListener('change', (): void => {
    document.body.classList.toggle('dark-mode', toggleInput.checked);
    document.querySelector('footer').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('header').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('code-background').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('introText-h1').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('introText-p1').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('introText-p2').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('overview1').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('overview2').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('overview3').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('overview1-p').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('overview2-p').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('overview3-p').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('github-1').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('github-2').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('linkedinHeader').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('linkedinContent').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('linkedinProfile').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('iconLinkedIn').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('linkedinName').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('linkedinPost').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('linkedinInfos').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('linkedInSchool').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('linkedInCompany').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('viewLinkedIn').classList.toggle('dark-mode', toggleInput.checked);
    document.getElementById('formEmail').classList.toggle('dark-mode', toggleInput.checked);
    
    
    document.querySelectorAll('.backAbout').forEach((element: HTMLElement) => {
        element.classList.toggle('dark-mode', toggleInput.checked);
    });
    
    document.querySelectorAll('.title').forEach((element: HTMLElement) => {
        element.classList.toggle('dark-mode', toggleInput.checked);
    });
    
    document.querySelectorAll('.text').forEach((element: HTMLElement) => {
        element.classList.toggle('dark-mode', toggleInput.checked);
    });

    document.querySelectorAll('.text h3').forEach((element: HTMLElement) => {
        element.classList.toggle('dark-mode', toggleInput.checked);
    });
    
    document.querySelectorAll('.text p').forEach((element: HTMLElement) => {
        element.classList.toggle('dark-mode', toggleInput.checked);
    });
    
    document.querySelectorAll('.Iframe').forEach((element: HTMLElement) => {
        element.classList.toggle('dark-mode', toggleInput.checked);
    });
    
    document.querySelectorAll('.illustration').forEach((element: HTMLElement) => {
        element.classList.toggle('dark-mode', toggleInput.checked);
    });

    document.querySelectorAll('.cardExp').forEach((element: HTMLElement) => {
        element.classList.toggle('dark-mode', toggleInput.checked);
    });
    
    document.querySelectorAll('.linkedinExp').forEach((element: HTMLElement) => {
        element.classList.toggle('dark-mode', toggleInput.checked);
    });
    
    document.querySelectorAll('.expDetails').forEach((element: HTMLElement) => {
        element.classList.toggle('dark-mode', toggleInput.checked);
    });
    
    document.querySelectorAll('.losangeExperiences').forEach((element: HTMLElement) => {
        element.classList.toggle('dark-mode', toggleInput.checked);
    });
    
    document.querySelectorAll('.slides').forEach((element: HTMLElement) => {
        element.classList.toggle('dark-mode', toggleInput.checked);
    });
    
    document.querySelectorAll('.links').forEach((element: HTMLElement) => {
        element.classList.toggle('dark-mode', toggleInput.checked);
    });
    
    document.querySelectorAll('.button').forEach((element: HTMLElement) => {
        element.classList.toggle('dark-mode', toggleInput.checked);
    });
    
    document.querySelectorAll('.logo-image').forEach((element: HTMLElement) => {
        element.classList.toggle('dark-mode', toggleInput.checked);
    });

    document.querySelectorAll('.text-haut').forEach((element: HTMLElement) => {
        element.classList.toggle('dark-mode', toggleInput.checked);
    });
    
    document.querySelectorAll('.text-bas').forEach((element: HTMLElement) => {
        element.classList.toggle('dark-mode', toggleInput.checked);
    });

});
