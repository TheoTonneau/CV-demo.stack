export function setCookie(name: string, value: string, days: number): void {
    const date: Date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires: string = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

export function getCookie(name: string): string {
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