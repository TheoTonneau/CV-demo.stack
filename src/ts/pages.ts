import {badgefr, badgeen} from './informations';
import {currentLang} from './lang';

let shortLang: string = currentLang == 'fr' ? 'fr_FR' : 'en_US';

export const pages: { [key: string]: { [key: string]: string } } = {
    home: {
        fr: `
            <h2>Bienvenue sur mon CV</h2>
            <br>
            <div class="homeContainer">
                <div class="column left">
                    ${badgefr}
                </div>
            
                <div class="column middle">
                    <h3 style="margin-bottom: 20px">Th&eacute;o Tonneau</h3>
                    <p>
                        &Eacute;tudiant en <strong>ing&eacute;nierie DevOps</strong> par apprentissage, 
                        je travaille actuellement chez <strong>Soregies</strong>, 
                        o&ugrave; je g&egrave;re des <strong>infrastructures AWS</strong> 
                        et mets en place des <strong>pipelines CICD</strong>.
                        <br>
                        Passionn&eacute; par l'optimisation des ressources, 
                        je cherche &agrave; contribuer &agrave; des projets innovants et durables. 
                        <strong>Organis&eacute;</strong>, <strong>curieux</strong> 
                        et <strong>orient&eacute; solutions</strong>, 
                        je suis toujours pr&ecirc;t &agrave; relever de nouveaux d&eacute;fis dans le domaine du cloud et des technologies DevOps.
                    </p>
                </div>
            
                <div class="column right">
                    <div class="github-section">
                        <h4>GitHub</h4>
                        <br>
                        <a href="https://github.com/TheoTonneau" class="github-button" style="color: #fff">Mon GitHub</a>
                        <br>
                        <br>                       
                        <a href="https://github.com/TheoTonneau/CV-demo.stack" class="github-button" style="color: #fff">Le repo GitHub de ce site</a>
                    </div>
                    <br>
                    <div class="certification-section">
                        <h4 style="margin-top: 20px">Dernière Certification</h4>
                        <br>
                        <iframe name="acclaim-badge" allowtransparency="true" frameborder="0" id="embedded-badge-235a8d70-918c-494b-8ca7-5a697ea7b3b4" scrolling="no" src="https://www.credly.com/embedded_badge/235a8d70-918c-494b-8ca7-5a697ea7b3b4" style="height: 270px; width: 100%" title="View my verified achievement on Credly."></iframe>
                    </div>
                </div>
            </div>

        `,
        en: `
            <h2>Welcome to my Resume</h2>
            <br>
            <div class="homeContainer">
                <div class="column left">
                    ${badgeen}
                </div>
            
                <div class="column middle">
                    <h3 style="margin-bottom: 20px">Th&eacute;o Tonneau</h3>
                    <p>
                        Studying for the <strong>DevOps engineering</strong> diploma by apprenticeship, 
                        I'm currently working at Soregies, where I manage <strong>AWS infrastructures</strong> 
                        and set up <strong>CICD pipelines.</strong>
                        <br>
                        Passionate about optimizing resources, 
                        I'm looking to contribute to innovative and sustainable projects. 
                        <strong>Organized</strong>, <strong>curious</strong> and <strong>solutions-oriented</strong>, 
                        I'm always up for new challenges in cloud and DevOps technologies. 
                    </p>
                </div>
            
                <div class="column right">
                    <div class="github-section">
                        <h4>GitHub</h4>
                        <br>
                        <a href="https://github.com/TheoTonneau" class="github-button" style="color: #fff">My GitHub account</a>
                        <br>
                        <br>
                        <a href="https://github.com/TheoTonneau/CV-demo.stack" class="github-button" style="color: #fff">This site's GitHub repo</a>
                    </div>
                    <br>
                    <div class="certification-section">
                        <h4 style="margin-top: 20px">Dernière Certification</h4>
                        <br>
                        <iframe name="acclaim-badge" allowtransparency="true" frameborder="0" id="embedded-badge-235a8d70-918c-494b-8ca7-5a697ea7b3b4" scrolling="no" src="https://www.credly.com/embedded_badge/235a8d70-918c-494b-8ca7-5a697ea7b3b4" style="height: 270px; width: 100%" title="View my verified achievement on Credly."></iframe>
                    </div>
                </div>
            </div>
        `
    },
    experience: {
        fr: `
            <h2>Exp&eacute;riences Professionnelles</h2>
            <section class="timeline-container">
              <div class="timeline-track">
              
                <span id="point" class="point-1" style="left: 25%;"></span>
                <span id="point" class="point-2" style="left: 50%;"></span>
                <span id="point" class="point-3" style="left: 73%;"></span>
                <span id="point" class="point-4" style="left: 80%;"></span>

                <span class="year" style="left: 10%;">
                  <h3>2021</h3>
                </span>
                <span class="year" style="left: 35%;">
                  <h3>2022</h3>
                </span>
                <span class="year" style="left: 60%;">
                  <h3>2023</h3>
                </span>
                <span class="year" style="left: 85%;">
                  <h3>2024</h3>
                </span>
              </div>
            
              <div class="timeline-item top experience experience-1">
                <div class="content-box">
                    <div class="timeline-header">
                        <span>
                            <h3>2021</h3>
                            <p>Juillet</p>
                            <p>-</p>
                            <p>Ao&ucirc;t</p>
                        </span>
                    </div>
                    <span class="description">
                        <h4>Zed Multim&eacute;dia - Travail saisonnier</h4>
                        <p>Installation de salle de cin&eacute;ma priv&eacute;, salle de projection</p>
                        <p>Syst&egrave;me audiovisuel, sonorisation d'un restaurant</p>
                    </span>
                </div>
              </div>
            
              <div class="timeline-item bottom experience experience-2">
                <div class="content-box">
                    <div class="timeline-header">
                        <span>
                            <h3>2022</h3>
                            <p>Avril</p>
                            <p>-</p>
                            <p>Juin</p>
                        </span>
                    </div>
                    <span class="description">
                        <h4>Adour Gestion Informatique (AGI) - Stagiaire</h4>
                        <p>R&eacute;seau & maintenance</p>
                        <p>D&eacute;veloppement progiciel monitoring en HTML/CCS/PHP/SQL/Python/Powershell</p>
                    </span>                  
                </div>
              </div>
            
              <div class="timeline-item top experience experience-3">
                <div class="content-box">
                    <div class="timeline-header">
                        <span>
                            <h3>2023</h3>
                            <p>Juillet</p>
                            <p>-</p>
                            <p>Ao&ucirc;t</p>
                        </span>
                    </div>
                    <span class="description">
                        <h4>Cr&eacute;dit Agricole - Travail Saisonnier</h4>
                        <p>H&ocirc;te d'accueil</p>
                        <p>R&eacute;ception et gestion des ch&egrave;ques et cartes client</p>
                    </span>      
                </div>
              </div>
            
              <div class="timeline-item bottom experience experience-4">
                <div class="content-box">
                    <div class="timeline-header">
                        <span>
                            <h3>2023 - 2024</h3>
                            <p>Septembre</p>
                            <p>-</p>
                            <p>Aujourd'hui</p>
                        </span>
                    </div>
                    <span class="description">
                        <h4>Soregies - Alternant DevOps</h4>
                        <p>Cr&eacute;ation de pipeline CICD en YAML sur GitHub</p>
                        <p>Gestion des ressources AWS en Terraform</p>
                        <p>Bash, Javascript, JSON</p>
                    </span>      
                </div>
              </div>
              
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
            <div class="line line-4"></div>
            </section>

        `,
        en: `
            <h2>Professional Experiences</h2>
            <section class="timeline-container">
              <div class="timeline-track">
              
                <span id="point" class="point-1" style="left: 25%;"></span>
                <span id="point" class="point-2" style="left: 50%;"></span>
                <span id="point" class="point-3" style="left: 73%;"></span>
                <span id="point" class="point-4" style="left: 80%;"></span>
                
                <span class="year" style="left: 10%;">
                  <h3>2021</h3>
                </span>
                <span class="year" style="left: 35%;">
                  <h3>2022</h3>
                </span>
                <span class="year" style="left: 60%;">
                  <h3>2023</h3>
                </span>
                <span class="year" style="left: 85%;">
                  <h3>2024</h3>
                </span>
              </div>
            
              <div class="timeline-item top experience experience-1">
                <div class="content-box">
                    <div class="timeline-header">
                        <span>
                            <h3>2021</h3>
                            <p>July</p>
                            <p>-</p>
                            <p>August</p>
                        </span>
                    </div>
                    <span class="description">
                        <h4>Zed Multim&eacute;dia - Season Worker</h4>
                        <p>Installation Private theater, Projection room</p>
                        <p>Audiovisual system, Restaurant sound system</p>
                    </span>
                </div>
              </div>
            
              <div class="timeline-item bottom experience experience-2">
                <div class="content-box">
                    <div class="timeline-header">
                        <span>
                            <h3>2022</h3>
                            <p>April</p>
                            <p>-</p>
                            <p>June</p>
                        </span>
                    </div>
                    <span class="description">
                        <h4>Adour Gestion Informatique (AGI) - Intern</h4>
                        <p>Network & Maintenance</p>
                        <p>Monitoring software development in HTML/CCS/PHP/SQL/Python/Powershell</p>
                    </span>                  
                </div>
              </div>
            
              <div class="timeline-item top experience experience-3">
                <div class="content-box">
                    <div class="timeline-header">
                        <span>
                            <h3>2023</h3>
                            <p>July</p>
                            <p>-</p>
                            <p>August</p>
                        </span>
                    </div>
                    <span class="description">
                        <h4>Cr&eacute;dit Agricole - Season Worker</h4>
                        <p>Receptionist</p>
                        <p>Customer checks and bank card management</p>
                    </span>      
                </div>
              </div>
            
              <div class="timeline-item bottom experience experience-4">
                <div class="content-box">
                    <div class="timeline-header">
                        <span>
                            <h3>2023 - 2024</h3>
                            <p>September</p>
                            <p>-</p>
                            <p>Present</p>
                        </span>
                    </div>
                    <span class="description">
                        <h4>Soregies - DevOps by Apprenticeship</h4>
                        <p>Create CICD pipeline with YAML on GitHub</p>
                        <p>Manage AWS resources with Terraform</p>
                        <p>Bash, Javascript, JSON</p>
                    </span>      
                </div>
              </div>
              
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
            <div class="line line-4"></div>
            </section>

        `
    },
    education: {
        fr: `
            <h2>Formations</h2>
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
                            <p>Diplôme d'ing&eacute;nieur en alternance au poste de DevOps</p>
                            <button class="more-info-btn" data-modal="modal1">En savoir plus &rarr;</button>
                        </descript>
                    </div>
                    <div>
                        <h3>
                            <span id="educationDate">Septembre 2022 - June 2023</span>
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
                            <div class="imgContainer">
                                <img src="./img/education/esigelec.jpg" alt="ESIGELEC" />
                                <h4>Localisation</h4>
                                <div class="map">
                                    <img src="./img/education/poitiers.jpg" alt="Poitiers" />
                                </div>
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
                            <div class="imgContainer">
                                <img src="./img/education/touchard.jpg" alt="TOUCHARD-WASHINGTON" />
                                <h4>Localisation</h4>
                                <div class="map">
                                    <img src="./img/education/leMans.jpg" alt="LE MANS" />
                                </div>
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
                            <div class="imgContainer">
                                <img src="./img/education/iut.jpg" alt="IUT" />
                                <h4>Localisation</h4>
                                <div class="map">
                                    <img src="./img/education/montDeMarsan.jpg" alt="MONT DE MARSAN" />
                                </div>
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
                            <div class="imgContainer">
                                <img src="./img/education/chevrollier.jpg" alt="LYCEE CHEVROLLIER" />
                                <h4>Localisation</h4>
                                <div class="map">
                                    <img src="./img/education/angers.jpg" alt="ANGERS" />
                                </div>
                            </div>
                            <hr>
                            <i class="fa fa-linkedin-square"></i> <a href="https://www.linkedin.com/school/chevrollier/">LinkedIn de l'&eacute;cole</a>
                        </aside>
                    </div>                
                </div>
            </div>
        `,
        en: `
            <h2>Educations</h2>
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
                            <p>Preparatory Class for the French Grandes &eacute;coles</p>
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
                            <div class="imgContainer">
                                <img src="./img/education/esigelec.jpg" alt="ESIGELEC" />
                                <h4>Localisation</h4>
                                <div class="map">
                                    <img src="./img/education/poitiers.jpg" alt="Poitiers" />
                                </div>
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
                            <div class="imgContainer">
                                <img src="./img/education/touchard.jpg" alt="TOUCHARD-WASHINGTON" />
                                <h4>Localisation</h4>
                                <div class="map">
                                    <img src="./img/education/leMans.jpg" alt="LE MANS" />
                                </div>
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
                            <div class="imgContainer">
                                <img src="./img/education/iut.jpg" alt="IUT" />
                                <h4>Localisation</h4>
                                <div class="map">
                                    <img src="./img/education/montDeMarsan.jpg" alt="MONT DE MARSAN" />
                                </div>
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
                            <div class="imgContainer">
                                <img src="./img/education/chevrollier.jpg" alt="LYCEE CHEVROLLIER" />
                                <h4>Localisation</h4>
                                <div class="map">
                                    <img src="./img/education/angers.jpg" alt="ANGERS" />
                                </div>
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
            <br>
            <section class="container">
                <div class="left-section">
                    <h3>Certifications</h3>
                    <br>
                    <div class="certification-item">
                        <iframe name="acclaim-badge" allowtransparency="true" frameborder="0" id="embedded-badge-235a8d70-918c-494b-8ca7-5a697ea7b3b4" scrolling="no" src="https://www.credly.com/embedded_badge/235a8d70-918c-494b-8ca7-5a697ea7b3b4" style="height: 270px; width: 100%" title="View my verified achievement on Credly."></iframe>
                    </div>
                    <br>
                    <h4>Liste des certifications :</h4>
                    <p>AWS Cloud Practitioner</p>
                </div>
        
                <div class="center-section">
                    <h3>Comp&eacute;tences IT</h3>
                    <br>
                    <ul class="skills-list">
                        <li>
                            <h4>Syst&egrave;mes d'exploitations</h4>
                            <p>MacOS, Windows, Linux</p>
                        </li>
                        <li>
                            <h4>Outils</h4>
                            <p>AWS, GitHub</p>
                        </li>
                        <li>
                            <h4>Langages de Programmation</h4>
                            <div class="li-container">
                                <div>
                                    <h5>AWS</h5>
                                    <p>Terraform</p>
                                </div>
                                <div>
                                    <h5>GitHub</h5>
                                    <p>YAML</p>
                                </div>
                                <div>
                                    <h5>Connaissances Scolaires</h5>
                                    <p>C, Java, Python</p>
                                </div>
                                <div>
                                    <h5>Site Internet</h5>
                                    <p>Javascript, HTML, CSS, PHP, SQL</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
        
                <div class="right-section">
                    <h3>Langues</h3>
                    <br>
                    <ul class="languages-list">
                        <li>Français : Langue maternelle</li>
                        <li>Anglais : Niveau B2 – TOEIC 870 points</li>
                    </ul>
                    <br>
                    <div class="certification-item">
                        <h4>TOEIC</h4>
                    <a href="./img/certification/TOEIC.pdf" target="_blank">Voir le certificat TOEIC</a>
                    </div>
                </div>
            </section>
        `,
        en: `
            <h2>Skills</h2>
            <br>
            <section class="container">
                <div class="left-section">
                    <h3>Certifications</h3>
                    <br>
                    <div class="certification-item">
                        <iframe name="acclaim-badge" allowtransparency="true" frameborder="0" id="embedded-badge-235a8d70-918c-494b-8ca7-5a697ea7b3b4" scrolling="no" src="https://www.credly.com/embedded_badge/235a8d70-918c-494b-8ca7-5a697ea7b3b4" style="height: 270px; width: 100%" title="View my verified achievement on Credly."></iframe>
                    </div>
                    <br>
                    <h4>List of certifications :</h4>
                    <p>AWS Cloud Practitioner</p>
                </div>
        
                <!-- Section des comp&eacute;tences IT au centre -->
                <div class="center-section">
                    <h3>IT Skills</h3>
                    <br>
                    <ul class="skills-list">
                        <li>
                            <h4>Operating Systems</h4>
                            <p>MacOS, Windows, Linux</p>
                        </li>
                        <li>
                            <h4>Tools</h4>
                            <p>AWS, GitHub</p>
                        </li>
                        <li>
                            <h4>Programming Languages</h4>
                            <div class="li-container">
                                <div>
                                    <h5>AWS</h5>
                                    <p>Terraform</p>
                                </div>
                                <div>
                                    <h5>GitHub</h5>
                                    <p>YAML</p>
                                </div>
                                <div>
                                    <h5>School Knowledge</h5>
                                    <p>C, Java, Python</p>
                                </div>
                                <div>
                                    <h5>Website</h5>
                                    <p>Javascript, HTML, CSS, PHP, SQL</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
        
                <div class="right-section">
                    <h3>Languages</h3>
                    <br>
                    <ul class="languages-list">
                        <li>French : native langugae</li>
                        <li>English : B2 Level – TOEIC 870 points</li>
                    </ul>
                    <br>
                    <div class="certification-item">
                        <h4>TOEIC</h4>
                    <a href="./img/certification/TOEIC.pdf" target="_blank">TOEIC certificate</a>
                    </div>
                </div>
            </section>
        `
    },
    website: {
        fr: `
            <h2>Ce site web</h2>
            <section class="info-table">
                <div class="info-card technologies">
                    <h3>Technologies Utilis&eacute;es</h3>
                    <ul>
                        <li><strong>AWS</strong> : H&eacute;bergement et gestion du backend</li>
                        <li><strong>GitHub Actions</strong> : Int&eacute;gration et D&eacute;ploiement Continu (CI/CD)</li>
                        <li><strong>Typescript</strong> : Langage pour le d&eacute;veloppement frontend et backend</li>
                        <li><strong>HTML/CSS</strong> : Structure et styles de la page web</li>
                    </ul>
                </div>
    
                <div class="info-card cicd">
                    <h3>Pipeline CI/CD avec GitHub Actions</h3>
                    <p>Les GitHub Actions permettent d'automatiser le processus de build, test, et d&eacute;ploiement. Voici un aperçu bref des workflows utilis&eacute;s :</p>
                    <ul>
                        <li><strong>Build:</strong> Compile le code Typescript en Javascript.</li>
                        <li><strong>Test:</strong> Lancement des tests unitaires et des tests d'int&eacute;gration.</li>
                        <li><strong>D&eacute;ploiement:</strong> D&eacute;ploiement automatique sur AWS après validation.</li>
                    </ul>
                    <a href="https://github.com/TheoTonneau/CV-demo.stack" class="github-button" style="color: #fff">Le repo GitHub de ce site</a>
                </div>
            </section>
    
            <section class="schema">
                <h3>Sch&eacute;ma de l'infrastructure</h3>
                <img src="./img/website/infrastructure.png" alt="INFRASTRUCTURE" />
            </section>
        `,
        en: `
            <h2>This website</h2>
            <section class="info-table">
                <div class="info-card technologies">
                    <h3>Technologies Used</h3>
                    <ul>
                        <li><strong>AWS</strong> : Hosting and Backend Management</li>
                        <li><strong>GitHub Actions</strong> : Continuous Integration et Continuous Deployment (CI/CD)</li>
                        <li><strong>Typescript</strong> : Programming Language for frontend and backend</li>
                        <li><strong>HTML/CSS</strong> : Webpage structure and styles</li>
                    </ul>
                </div>
    
                <div class="info-card cicd">
                    <h3>CI/CD pipelines with GitHub Actions</h3>
                    <p>
                        GitHub Actions automate the build, test and deployment process. 
                        Here's an overview of the workflows used :
                    </p>
                    <ul>
                        <li><strong>Build:</strong> Build Typescript code in Javascript.</li>
                        <li><strong>Test:</strong> Launch unit and integration tests.</li>
                        <li><strong>Deployment:</strong> Automatic deployment on AWS after validation.</li>
                    </ul>
                    <a href="https://github.com/TheoTonneau/CV-demo.stack" class="github-button" style="color: #fff">This site's GitHub repo</a>
                </div>
            </section>
    
            <section class="schema">
                <h3>Infrastructure diagram</h3>
                <img src="./img/website/infrastructure.png" alt="INFRASTRUCTURE" />
            </section>
        `
    },
    contact: {
        fr: `
            <h2>Comment me contacter ?</h2>
            <br>
            <aside class="aside">
                <i class="fa fa-envelope icon"></i> En remplissant le formulaire suivant avec vos coordonn&eacute;es afin que je vous recontacte
                <br>
                <br>
                Ou via <a href="https://www.linkedin.com/in/theo-tonneau/?locale=fr_FR" style="color: #008CBA"><i class="fa fa-linkedin-square"></i> LinkedIn</a>
                <br>
                <hr>
                <div>
                    ${badgefr}
                </div>
            </aside>
            
            <div class="divDroite">
                

            <form id="formEmail">
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

        <div class="form-row">
            <div class="half-width">
                <label for="firstName">Pr&eacute;nom:</label>
                <input type="text" id="firstName" name="firstName">
            </div>
            <div class="half-width">
                <label for="name">Nom:</label>
                <input type="text" id="name" name="name" required>
            </div>
        </div>

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" cols="50" required></textarea>

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
                Or on <a href="https://www.linkedin.com/in/theo-tonneau/?locale=en_US" style="color: #008CBA"><i class="fa fa-linkedin-square"></i> LinkedIn</a>
                <br>
                <hr>
                <div>
                    ${badgeen}
                </div>
            </aside>
            
            <div class="divDroite">
                

            <form id="formEmail">
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
    
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" cols="50" required></textarea>
    
            <button type="submit" id="submitButton">Submit</button>
        </form>
            </div>
        `
    }
};


