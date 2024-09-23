import {link, badgefr} from './informations';
import {currentLang} from './lang';

let shortLang: string = currentLang == 'fr' ? 'fr_FR' : 'en_US';

export const pages: { [key: string]: { [key: string]: string } } = {
    home: {
        fr: `
            <h2>Bienvenue sur mon CV</h2>
            <p>Ceci est une démo interactive de mon CV multilingue. Vous pouvez naviguer à travers différentes sections pour voir mon parcours.</p>
        `,
        en: `
            <h2>Welcome to my Resume</h2>
            <p>This is an interactive demo of my multilingual resume. You can navigate through different sections to see my journey.</p>
        `
    },
    experience: {
        fr: `
            <h2>Experience pro</h2>
        `,
        en: `
            <h2>professional</h2>
        `
    },
    education: {
        fr: `
            <h2>Formation</h2>
        `,
        en: `
            <h2>Education</h2>
        `
    },
    skills: {
        fr: `
            <h2>Comp&eacute;tences</h2>
        `,
        en: `
            <h2>Skills</h2>
        `
    },
    website: {
        fr: `
            <h2>Ce site web</h2>
        `,
        en: `
            <h2>This website</h2>
        `
    },
    contact: {
        fr: `
            <h2>Comment me contacter ?</h2>
            <br>
            <aside class="aside">
                <i class="fa fa-envelope icon"></i> En remplissant le formulaire suivant avec vos coordonnées afin que je vous recontacte
                <br>
                <br>
                Ou via <i class="fa fa-linkedin-square"></i> LinkedIn
                <br>
                <br>
                <hr>
                <br>
                <div>
                    ${badgefr}
                </div>
            </aside>
            
            <div class="divDroite">
                

            <form id="formEmail">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br><br>
                
                <label for="firstName">Prénom:</label>
                <input type="text" id="firstName" name="firstName"><br><br>
                
                <label for="name">Nom:</label>
                <input type="text" id="name" name="name" required><br><br>
                
                <label for="company">Company:</label>
                <input type="text" id="company" name="company" required><br><br>
                
                <label for="message">Message:</label><br>
                <textarea id="message" name="message" rows="4" cols="50" required></textarea><br><br>
                
                <button type="submit" id="submitButton">Envoyer</button>
            </form>
            </div>
            
        `,
        en: `
            <h2>How to get in touch ?</h2>
        `
    }
};



