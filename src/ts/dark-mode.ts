const toggleInput: HTMLInputElement = document.getElementById('toggle') as HTMLInputElement;

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

window.onload = function(): void {
    setTimeout(function() {
        const darkModeCookie = getCookie('darkMode');
        if (darkModeCookie === 'true') {
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
        }
        else {
            toggleInput.checked = false;
        }
    }, 100);
};

toggleInput.addEventListener('change', (): void => {
    if (toggleInput.checked) {
        setCookie('darkMode', 'true', 365);
    } else {
        setCookie('darkMode', 'false', 365);
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
