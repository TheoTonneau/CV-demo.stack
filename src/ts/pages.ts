import {link, badgefr, badgeen} from './informations';
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
            <br>
            <div>
            
                <div class="formation">
                    <div>
                        <h3>
                            <span id="educationDate">Septembre 2023 - Aujourd'hui</span>
                            <span id="educationSchool">ESIGELEC</span>
                            <span id="educationLocation">Poitiers</span>
                        </h3>
                        <descript id="educationDescription" class="description-container">
                            <p>Diplôme d'ingénieur en alternance au poste de DevOps</p>
                            <button class="more-info-btn" data-modal="modal1">En savoir plus &rarr;</button>
                        </descript>
                    </div>
                    <div>
                        <h3>
                            <span id="educationDate">Septembre 2022 - Juin 2023</span>
                            <span id="educationSchool">Lyc&eacute;e Touchard-Washington</span>
                            <span id="educationLocation">Le Mans</span>
                        </h3>
                        <descript id="educationDescription" class="description-container">
                            <p>Classe pr&eacute;paratoire ATS (Adaptation Technicien Sup&eacute;rieur) aux Grandes &Eacute;coles</p>
                            <button class="more-info-btn" data-modal="modal2">En savoir plus &rarr;</button>
                        </descript>
                    </div>
                    <div>
                        <h3>
                            <span id="educationDate">Septembre 2020 - Juin 2022</span>
                            <span id="educationSchool">Universit&eacute; des Pays de l'Adour</span>
                            <span id="educationLocation">Mont-de-Marsan</span>
                        </h3>
                        <descript id="educationDescription" class="description-container">
                            <p>DUT en R&eacute;seaux et T&eacute;l&eacute;communications</p>
                            <button class="more-info-btn" data-modal="modal3">En savoir plus &rarr;</button>
                        </descript>
                    </div>
                    <div>
                        <h3>
                            <span id="educationDate">Septembre 2017 - Juin 2020</span>
                            <span id="educationSchool">Lyc&eacute;e Chevrollier</span>
                            <span id="educationLocation">Angers</span>
                        </h3>
                        <descript id="educationDescription" class="description-container">
                            <p>Baccalaur&eacute;at Scientifique - option sciences de l'ing&eacute;nieur</p>
                            <button class="more-info-btn" data-modal="modal4">En savoir plus &rarr;</button>
                        </descript>
                    </div>
                </div>
            
            </div>
            
            <div id="modal1" class="modal">
                <div class="modal-content">
                    <span class="close-btn" data-close="modal1">&times;</span>
                    <h3>D&eacute;tails sur l'ESIGELEC</h3>
                    <div class="modal-body">
                        <div class="info-left">
                            <p>Pour ce cursus ing&eacute;nieur, j'ai choisi de le faire en alternance au poste de DevOps.</p>
                            <br>
                            <p>&Agrave; travers cette premi&egrave;re ann&eacute; et ce d&egrave;but de seconde, j'ai pu appronfondir mes connaissances en :</p>
                            <ul>
                                <li>R&eacute;seaux</li>
                                <li>DevOps avec CI/CD & GitHub </li>
                                <li>Langage de programmationC avec un projet sur la gestion de microcontroleur, un robot</li>
                                <li>Langage Bash</li>
                                <li>Lagage de programmation Java avec un projet sur la gestion des commentaires dans un gestionnaire d'application</li>
                            </ul>
                            <br>
                            <p>J'ai &eacute;galement pu appronfondir mes connaissances sur la physique des signaux avec les CAN, CNA ou encore sur la technologie Lifi</p>
                        </div>
                        <aside class="aside-right">
                            <img src="./img/education/esigelec.jpg" alt="ESIGELEC" />
                            <h4>Localisation</h4>
                            <div class="map">
                                <img src="./img/education/poitiers.jpg" alt="Poitiers" />
                            </div>
                            <hr>
                            <i class="fa fa-linkedin-square"></i> <a href="https://www.linkedin.com/school/esigelec/posts/?feedView=all">LinkedIn de l'&eacute;cole</a>
                        </aside>
                    </div>
                </div>
            </div>
            
            <div id="modal2" class="modal">
                <div class="modal-content">
                    <span class="close-btn" data-close="modal2">&times;</span>
                    <h3>D&eacute;tails sur Lyc&eacute;e Touchard-Washington</h3>
                    <div class="modal-body">
                        <div class="info-left">
                            <p>Pendant cette ann&eacute;e de mise &agrave; niveau, j'ai pu d&eacute;velopper une m&eacute;thode de travail plus solide</p>
                            <br>
                            <p>C'est &agrave; travers les mati&egrave;res suivantes que j'ai pu approfondir cela et &eacute;galement accroitre mes connaissances dans ces domaines :</p>
                            <ul>
                                <li>Math&eacute;matique</li> 
                                <li>Physiques</li>
                                <li>Sciences de l'ing&eacute;nieur, soit m&eacute;canique et &eacute;lectronique</li>
                                <li>La langue fran&ccedil;aise</li>
                                <li>La langue anglaise</li>
                            </ul>
                            <br>
                            <p>C'est suite &agrave; la r&eacute;ussite du concours de fin de classe pr&eacute;paratoire, que j'int&egrave;gre une &eacute;cole d'ing&eacute;nieur</p>
                        </div>
                        <aside class="aside-right">
                            <img src="./img/education/touchard.jpg" alt="TOUCHARD-WASHINGTON" />
                            <h4>Localisation</h4>
                            <div class="map">
                                <img src="./img/education/leMans.jpg" alt="LE MANS" />
                            </div>
                            <hr>
                            <i class="fa fa-linkedin-square"></i> <a href="https://www.linkedin.com/company/touchard-washington/">LinkedIn de l'&eacute;cole</a>
                        </aside>
                    </div>                
                </div>
            </div>
            
            <div id="modal3" class="modal">
                <div class="modal-content">
                    <span class="close-btn" data-close="modal3">&times;</span>
                    <h3>D&eacute;tails sur Universit&eacute; des Pays de l'Adour</h3>
                    <div class="modal-body">
                        <div class="info-left">
                            <p>Durant 2 ann&eacute;es, j'ai pu d&eacute;couvrir les interconnexions de r&eacute;seaux et la t&eacute;l&eacute;communications</p>
                            <p>J'ai notamment manipul&eacute; :</p>
                            <ul>
                                <li>Des switchs</li>
                                <li>Des routeurs</li>
                                <li>Des machines virtuelles</li>
                                <li>La configuration de chacun de ces &eacute;quipements</li>
                                <li>La physique des t&eacute;l&eacute;communications</li>
                            </ul>
                            <br>
                            <p>J'ai &eacute;galement d&eacute;couvert :</p>
                            <ul>
                                <li>La programmation web : HTML, CSS, PHP, SQL, pour en faire un site web dynamique avec base de donn&eacute;es</li>
                                <li>La programmation orient&eacute;e objet avec Java</li>
                                
                            </ul>
                            <br>
                            <p>D&eacute;sireux d'un apprendre plus sur l'univers programmatique, je souhaite poursuivre vers un dipl&ocirc;me d'ing&eacute;nieur, en int&eacute;grant au pr&eacute;alable une classe pr&eacute;paratoire de mise &agrave; niveau</p>
                        </div>
                        <aside class="aside-right">
                            <img src="./img/education/iut.jpg" alt="IUT" />
                            <h4>Localisation</h4>
                            <div class="map">
                                <img src="./img/education/montDeMarsan.jpg" alt="MONT DE MARSAN" />
                            </div>
                            <hr>
                            <i class="fa fa-linkedin-square"></i> <a href="https://www.linkedin.com/school/university-of-pau/posts/?feedView=all/">LinkedIn de l'&eacute;cole</a>
                        </aside>
                    </div> 
                </div>
            </div>
            
            <div id="modal4" class="modal">
                <div class="modal-content">
                    <span class="close-btn" data-close="modal4">&times;</span>
                    <h3>D&eacute;tails sur Lyc&eacute;e Chevrollier</h3>
                    <div class="modal-body">
                        <div class="info-left">
                            <p>Au lyc&eacute;e chevrollier, j'ai obtenu mon Baccalaur&eacute;at scientifique avec une option sciences de l'ing&eacute;nieur</p>
                            <br>
                            <p>J'ai notamment d&eacute;couvert les bases dans les mati&egrave;res :</p>
                            <ul>
                                 <li>Math&eacute;matiques</li>
                                 <li>Physiques</li>
                                 <li>M&eacute;canique & &eacute;lectronique</li>
                                 <li>Programmation en python</li>                       
                            </ul>
                            <br>
                            <p>C'est avec toutes ces connaissances que j'ai souhait&eacute; m'orienter vers un dipl&ocirc;me universitaire dans les r&eacute;seaux et les t&eacute;l&eacute;communications</p>
                        </div>
                        <aside class="aside-right">
                            <img src="./img/education/chevrollier.jpg" alt="LYCEE CHEVROLLIER" />
                            <h4>Localisation</h4>
                            <div class="map">
                                <img src="./img/education/angers.jpg" alt="ANGERS" />
                            </div>
                            <hr>
                            <i class="fa fa-linkedin-square"></i> <a href="https://www.linkedin.com/school/chevrollier/">LinkedIn de l'&eacute;cole</a>
                        </aside>
                    </div>                
                </div>
            </div>
        `,
        en: `
            <h2>Education</h2>
            <br>
            <div>
            
                <div class="formation">
                    <div>
                        <h3>
                            <span id="educationDate">September 2023 - Present</span>
                            <span id="educationSchool">ESIGELEC</span>
                            <span id="educationLocation">Poitiers</span>
                        </h3>
                        <descript id="educationDescription" class="description-container">
                            <p>Master’s Degree in Engineering by Apprenticeship for DevOps position</p>
                            <button class="more-info-btn" data-modal="modal1">Find out more &rarr;</button>
                        </descript>
                    </div>
                    <div>
                        <h3>
                            <span id="educationDate">September 2022 - June 2023</span>
                            <span id="educationSchool">Lyc&eacute;e Touchard-Washington</span>
                            <span id="educationLocation">Le Mans</span>
                        </h3>
                        <descript id="educationDescription" class="description-container">
                            <p>Preparatory Class for the French Grandes Écoles</p>
                            <button class="more-info-btn" data-modal="modal2">Find out more &rarr;</button>
                        </descript>
                    </div>
                    <div>
                        <h3>
                            <span id="educationDate">September 2020 - June 2022</span>
                            <span id="educationSchool">Universit&eacute; des Pays de l'Adour</span>
                            <span id="educationLocation">Mont-de-Marsan</span>
                        </h3>
                        <descript id="educationDescription" class="description-container">
                            <p>Bachelor Degree in Network and Telecommunications</p>
                            <button class="more-info-btn" data-modal="modal3">Find out more &rarr;</button>
                        </descript>
                    </div>
                    <div>
                        <h3>
                            <span id="educationDate">September 2017 - June 2020</span>
                            <span id="educationSchool">Lyc&eacute;e Chevrollier</span>
                            <span id="educationLocation">Angers</span>
                        </h3>
                        <descript id="educationDescription" class="description-container">
                            <p>High School Diploma</p>
                            <button class="more-info-btn" data-modal="modal4">Find out more &rarr;</button>
                        </descript>
                    </div>
                </div>
            
            </div>
            
            <div id="modal1" class="modal">
                <div class="modal-content">
                    <span class="close-btn" data-close="modal1">&times;</span>
                    <h3>More details for ESIGELEC</h3>
                    <div class="modal-body">
                        <div class="info-left">
                            <p>For these 3 years of engineering school, I chose to do it by apprenticeship as a DevOps engineer.</p>
                            <br>
                            <p>Through first and second years, I can go deeper on subject as :</p>
                            <ul>
                                <li>Network</li>
                                <li>DevOps with CI/CD & GitHub </li>
                                <li>programming language C with a project where we manage microcontroller, a robot</li>
                                <li>Bash</li>
                                <li>Java and then we have a project where we manage commentaries and users on application manager</li>
                            </ul>
                            <br>
                            <p>I also grow my knowledge on signal physics with ADC, DAC or Lifi.</p>
                        </div>
                        <aside class="aside-right">
                            <img src="./img/education/esigelec.jpg" alt="ESIGELEC" />
                            <h4>Localisation</h4>
                            <div class="map">
                                <img src="./img/education/poitiers.jpg" alt="Poitiers" />
                            </div>
                            <hr>
                            <i class="fa fa-linkedin-square"></i> <a href="https://www.linkedin.com/school/esigelec/posts/?feedView=all">LinkedIn of the school</a>
                        </aside>
                    </div>
                </div>
            </div>
            
            <div id="modal2" class="modal">
                <div class="modal-content">
                    <span class="close-btn" data-close="modal2">&times;</span>
                    <h3>More details for Lyc&eacute;e Touchard-Washington</h3>
                    <div class="modal-body">
                        <div class="info-left">
                            <p>During this year of preparatory class, I can improve my working method</p>
                            <br>
                            <p>I developed my knowledge and my way of working with the following subjects :</p>
                            <ul>
                                <li>Mathematics</li> 
                                <li>Physics</li>
                                <li>Engineering science, being mecanics and electronics</li>
                                <li>French language</li>
                                <li>English language</li>
                            </ul>
                            <br>
                            <p>After passing the competitive entrance exam at the end of the year, I entered an engineering school.</p>
                        </div>
                        <aside class="aside-right">
                            <img src="./img/education/touchard.jpg" alt="TOUCHARD-WASHINGTON" />
                            <h4>Localisation</h4>
                            <div class="map">
                                <img src="./img/education/leMans.jpg" alt="LE MANS" />
                            </div>
                            <hr>
                            <i class="fa fa-linkedin-square"></i> <a href="https://www.linkedin.com/company/touchard-washington/">LinkedIn of the school</a>
                        </aside>
                    </div>                
                </div>
            </div>
            
            <div id="modal3" class="modal">
                <div class="modal-content">
                    <span class="close-btn" data-close="modal3">&times;</span>
                    <h3>More details for Universit&eacute; des Pays de l'Adour</h3>
                    <div class="modal-body">
                        <div class="info-left">
                            <p>For 2 years, I study Network and Telecommunications</p>
                            <p>I could handle :</p>
                            <ul>
                                <li>Swicths</li>
                                <li>Routers</li>
                                <li>Virtual Machines</li>
                                <li>Equipment configuration</li>
                                <li>The physic of Telecommunications</li>
                            </ul>
                            <br>
                            <p>I also discover programming language like :</p>
                            <ul>
                                <li>Web : HTML, CSS, PHP, SQL, to create dynamic websites with databases</li>
                                <li>Object-oriented programming with Java</li>
                                
                            </ul>
                            <br>
                            <p>Wanting to learn more about programming languages, I did like to continue to get an Master degree in Engineering, by first enrolling a preparatory class.</p>
                        </div>
                        <aside class="aside-right">
                            <img src="./img/education/iut.jpg" alt="IUT" />
                            <h4>Localisation</h4>
                            <div class="map">
                                <img src="./img/education/montDeMarsan.jpg" alt="MONT DE MARSAN" />
                            </div>
                            <hr>
                            <i class="fa fa-linkedin-square"></i> <a href="https://www.linkedin.com/school/university-of-pau/posts/?feedView=all/">LinkedIn of the school</a>
                        </aside>
                    </div> 
                </div>
            </div>
            
            <div id="modal4" class="modal">
                <div class="modal-content">
                    <span class="close-btn" data-close="modal4">&times;</span>
                    <h3>More details for Lyc&eacute;e Chevrollier</h3>
                    <div class="modal-body">
                        <div class="info-left">
                            <p>In High-School, I get my Sciences diploma with engineering sciences speciality</p>
                            <br>
                            <p>I discover, among other subject :</p>
                            <ul>
                                 <li>Mathematics</li>
                                 <li>Physics</li>
                                 <li>Mecanics & Electronics</li>
                                 <li>Programming language : Python</li>                       
                            </ul>
                            <br>
                            <p>Then, I decide to study in University to get a bachelor diploma in Network and Telecommunications</p>
                        </div>
                        <aside class="aside-right">
                            <img src="./img/education/chevrollier.jpg" alt="LYCEE CHEVROLLIER" />
                            <h4>Localisation</h4>
                            <div class="map">
                                <img src="./img/education/angers.jpg" alt="ANGERS" />
                            </div>
                            <hr>
                            <i class="fa fa-linkedin-square"></i> <a href="https://www.linkedin.com/school/chevrollier/">LinkedIn of the school</a>
                        </aside>
                    </div>                
                </div>
            </div>
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
                <hr>
                <div>
                    ${badgefr}
                </div>
            </aside>
            
            <div class="divDroite">
                

            <form id="formEmail">
        <!-- Première rangée: Email et Company -->
        <div class="form-row">
            <div class="half-width">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="half-width">
                <label for="company">Entreprise:</label>
                <input type="text" id="company" name="company" required>
            </div>
        </div>

        <!-- Deuxième rangée: Prénom et Nom -->
        <div class="form-row">
            <div class="half-width">
                <label for="firstName">Prénom:</label>
                <input type="text" id="firstName" name="firstName">
            </div>
            <div class="half-width">
                <label for="name">Nom:</label>
                <input type="text" id="name" name="name" required>
            </div>
        </div>

        <!-- Rangée pour le message -->
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" cols="50" required></textarea>

        <!-- Bouton d'envoi -->
        <button type="submit" id="submitButton">Envoyer</button>
    </form>
            </div>
            
        `,
        en: `
            <h2>How to get in touch ?</h2>
            <br>
            <aside class="aside">
                <i class="fa fa-envelope icon"></i> By filling the following form with your contact details, so I can get back to you
                <br>
                <br>
                Or on <i class="fa fa-linkedin-square"></i> LinkedIn
                <br>
                <hr>
                <div>
                    ${badgeen}
                </div>
            </aside>
            
            <div class="divDroite">
                

            <form id="formEmail">
        <!-- Première rangée: Email et Company -->
        <div class="form-row">
            <div class="half-width">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="half-width">
                <label for="company">Company:</label>
                <input type="text" id="company" name="company" required>
            </div>
        </div>

        <!-- Deuxième rangée: Prénom et Nom -->
        <div class="form-row">
            <div class="half-width">
                <label for="firstName">First name:</label>
                <input type="text" id="firstName" name="firstName">
            </div>
            <div class="half-width">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
            </div>
            </div>
    
            <!-- Rangée pour le message -->
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" cols="50" required></textarea>
    
            <!-- Bouton d'envoi -->
            <button type="submit" id="submitButton">Submit</button>
        </form>
            </div>
        `
    }
};



