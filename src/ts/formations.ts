window.addEventListener("load", function() {
    setTimeout(function() {
        
        let index: number = 0;
    
        const slideDef: HTMLElement | null = document.querySelector('.slideDef');
        const slides: NodeListOf<HTMLElement> = document.querySelectorAll('.slides');
        const totalSlides: number = slides.length;
    
        const firstSlideClone: HTMLElement = slides[0].cloneNode(true) as HTMLElement;
        const secondSlideClone: HTMLElement = slides[1].cloneNode(true) as HTMLElement;
        const lastSlideClone: HTMLElement = slides[totalSlides - 1].cloneNode(true) as HTMLElement;
        slideDef?.appendChild(firstSlideClone);
        slideDef?.appendChild(secondSlideClone);
        slideDef?.insertBefore(lastSlideClone, slides[0]);
    
        function showNextSlide(): void {
            index++;
            const slideWidth: number = (document.querySelector('.slides') as HTMLElement).offsetWidth + 20;
            if (index > totalSlides) {
                if (slideDef) {
                    slideDef.style.transition = 'none';
                    index = 0;
                    slideDef.style.transform = `translateX(0)`;
                    setTimeout(() => {
                        index = 1;
                        slideDef.style.transition = 'none';
                        slideDef.style.transition = 'transform 1s ease-in-out';
                        slideDef.style.transform = `translateX(-${slideWidth * index}px)`;
                    }, 1);
                }
            } else {
                if (slideDef) {
                    slideDef.style.transform = `translateX(-${slideWidth * index}px)`;
                }
            }
        }
        setInterval(showNextSlide, 5000);
    }, 100);
});