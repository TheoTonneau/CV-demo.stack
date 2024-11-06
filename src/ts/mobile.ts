const burger: HTMLInputElement = document.getElementById('burger') as HTMLInputElement;

burger.addEventListener('click', (): void => {
    const ul: HTMLInputElement = document.getElementById('ulMobile') as HTMLInputElement;
    if (ul.style.opacity === '1') {
        ul.style.opacity = '0';
        burger.classList.remove('active');
    } else {
        ul.style.opacity = '1';
        burger.classList.add('active');
    }
});
