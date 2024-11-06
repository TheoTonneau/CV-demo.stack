let toggleInput: HTMLInputElement = window.innerWidth > 1024 ? document.getElementById('toggle') as HTMLInputElement : document.getElementById('darkmode-input') as HTMLInputElement;
const darkModePath = document.getElementById('darkModePath');
const starPath = "M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z";
const sunPath = "M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z";



function setCookie(name: string, value: string, days: number): void {
    const date: Date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires: string = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

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

window.onload = function (): void {
    setTimeout(function () {
        const darkModeCookie = getCookie('darkMode');
        if (darkModeCookie === 'true') {
            darkModePath.setAttribute('d', sunPath);
            toggleInput.checked = true;
            document.body.classList.add('dark-mode');
            document.querySelector('footer').classList.add('dark-mode');
            document.getElementById('header').classList.add('dark-mode');
            document.getElementById('code-background').classList.add('dark-mode');
            document.getElementById('introText-h1').classList.add('dark-mode');
            document.getElementById('introText-p1').classList.add('dark-mode');
            document.getElementById('introText-p2').classList.add('dark-mode');
            document.getElementById('overview1').classList.add('dark-mode');
            document.getElementById('overview2').classList.add('dark-mode');
            document.getElementById('overview3').classList.add('dark-mode');
            document.getElementById('overview1-p').classList.add('dark-mode');
            document.getElementById('overview2-p').classList.add('dark-mode');
            document.getElementById('overview3-p').classList.add('dark-mode');
            document.getElementById('github-1').classList.add('dark-mode');
            document.getElementById('github-2').classList.add('dark-mode');
            document.getElementById('linkedinHeader').classList.add('dark-mode');
            document.getElementById('linkedinContent').classList.add('dark-mode');
            document.getElementById('linkedinProfile').classList.add('dark-mode');
            document.getElementById('iconLinkedIn').classList.add('dark-mode');
            document.getElementById('linkedinName').classList.add('dark-mode');
            document.getElementById('linkedinPost').classList.add('dark-mode');
            document.getElementById('linkedinInfos').classList.add('dark-mode');
            document.getElementById('linkedInSchool').classList.add('dark-mode');
            document.getElementById('linkedInCompany').classList.add('dark-mode');
            document.getElementById('viewLinkedIn').classList.add('dark-mode');
            document.getElementById('formEmail').classList.add('dark-mode');


            document.querySelectorAll('.backAbout').forEach((element: HTMLElement) => {
                element.classList.add('dark-mode');
            });

            document.querySelectorAll('.title').forEach((element: HTMLElement) => {
                element.classList.add('dark-mode');
            });

            document.querySelectorAll('.text').forEach((element: HTMLElement) => {
                element.classList.add('dark-mode');
            });

            document.querySelectorAll('.text h3').forEach((element: HTMLElement) => {
                element.classList.add('dark-mode');
            });

            document.querySelectorAll('.text p').forEach((element: HTMLElement) => {
                element.classList.add('dark-mode');
            });

            document.querySelectorAll('.Iframe').forEach((element: HTMLElement) => {
                element.classList.add('dark-mode');
            });

            document.querySelectorAll('.illustration').forEach((element: HTMLElement) => {
                element.classList.add('dark-mode');
            });

            document.querySelectorAll('.cardExp').forEach((element: HTMLElement) => {
                element.classList.add('dark-mode');
            });

            document.querySelectorAll('.linkedinExp').forEach((element: HTMLElement) => {
                element.classList.add('dark-mode');
            });

            document.querySelectorAll('.expDetails').forEach((element: HTMLElement) => {
                element.classList.add('dark-mode');
            });

            document.querySelectorAll('.losangeExperiences').forEach((element: HTMLElement) => {
                element.classList.add('dark-mode');
            });

            document.querySelectorAll('.slides').forEach((element: HTMLElement) => {
                element.classList.add('dark-mode');
            });

            document.querySelectorAll('.links').forEach((element: HTMLElement) => {
                element.classList.add('dark-mode');
            });

            document.querySelectorAll('.button').forEach((element: HTMLElement) => {
                element.classList.add('dark-mode');
            });

            document.querySelectorAll('.logo-image').forEach((element: HTMLElement) => {
                element.classList.add('dark-mode');
            });

            document.querySelectorAll('.text-haut').forEach((element: HTMLElement) => {
                element.classList.add('dark-mode');
            });

            document.querySelectorAll('.text-bas').forEach((element: HTMLElement) => {
                element.classList.add('dark-mode');
            });
        } else {
            toggleInput.checked = false;
        }
    }, 200);
};

toggleInput.addEventListener('change', (): void => {
    if (toggleInput.checked) {
        setCookie('darkMode', 'true', 365);
        darkModePath.setAttribute('d', sunPath);
    } else {
        setCookie('darkMode', 'false', 365);
        darkModePath.setAttribute('d', starPath);
    }
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
