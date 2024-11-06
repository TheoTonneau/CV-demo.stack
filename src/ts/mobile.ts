const burger: HTMLInputElement = document.getElementById('burger') as HTMLInputElement;

burger.addEventListener('click', (): void => {
    const ul: HTMLInputElement = document.getElementById('ulMobile') as HTMLInputElement;
    if (ul.style.display === 'flex') {
        ul.style.display = 'none';
        burger.classList.remove('active');
    } else {
        ul.style.display = 'flex';
        burger.classList.add('active');
    }
});
