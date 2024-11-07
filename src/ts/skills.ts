document.addEventListener("scroll", function(): void {
    const displayText: HTMLElement | null = document.getElementById("displayText");
    const scrollY: number = window.scrollY;

    let yValue: number;
    yValue = -400 + ((scrollY - 2700) / (3300 - 2700)) * 200;

    if (displayText) {
        displayText.style.transform = `translate3d(0, ${yValue}px, 0)`;
    }
});