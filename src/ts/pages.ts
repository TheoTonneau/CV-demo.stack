import {link} from './informations';
import {currentLang} from './lang';

let shortLang: string = currentLang == 'fr' ? 'fr_FR' : 'en_US';


export const pages: { [key: string]: { [key: string]: string } } = {
    home: {
        fr: `
            <h2>Bienvenue sur mon CV</h2>
            <p>Ceci est une démo interactive de mon CV multilingue. Vous pouvez naviguer à travers différentes sections pour voir mon parcours.</p>
            <div class="badge-base LI-profile-badge" data-locale='${shortLang}' data-size="medium" data-theme="dark" data-type="VERTICAL"
                data-vanity="theo-tonneau-7515aa1ab" data-version="v1"><a class="badge-base__link LI-simple-link"
                                                               href='${link.LinkedIn.link}trk=profile-badge&locale=${shortLang}'></a>

        `,
        en: `
            <h2>Welcome to my Resume</h2>
            <p>This is an interactive demo of my multilingual resume. You can navigate through different sections to see my journey.</p>
            <div class="badge-base LI-profile-badge" data-locale='${shortLang}' data-size="medium" data-theme="dark" data-type="VERTICAL"
                data-vanity="theo-tonneau-7515aa1ab" data-version="v1"><a class="badge-base__link LI-simple-link"
                                                               href='${link.LinkedIn.link}trk=profile-badge&locale=${shortLang}'></a>

        `
    }
};

