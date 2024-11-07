window.onload = function(): void {
    const savedLang: string = getCookie('lang');
    if (savedLang !== "") {
        savedLang === "fr" ? window.location.href = 'fr/index.html' : window.location.href = 'en/index.html';
    } else {
        window.location.href = 'fr/index.html';
    }
};

function getCookie(name: string): string {
    const cname: string = name + "=";
    const decodedCookie: string = decodeURIComponent(document.cookie);
    const cookieArray: string[] = decodedCookie.split(';');
    for (let i: number = 0; i < cookieArray.length; i++) {
        let c: string = cookieArray[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}