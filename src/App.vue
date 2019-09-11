<template>
  <div id="app" class="mt-0">
    <!-- IMAGES PORTFOLIO -->
    <!-- PIXEL -->
    <div class="row container-fluid d-flex justify-content-center m-0 p-0 folioimages" v-if="pixel">
      <div class="row col-10 bg-dark pt-2 contenuimg">
        <div class="col-12 text-right text-white mb-3 p-0">
          <h3 style="display:inline-block" v-on:click="pixol">X</h3>
        </div>
        <div class="col-4 p-0 pr-1">
          <img :src="pixun" alt="port">
        </div>
        <div class="col-2 p-0 pl-1">
          <div class="col-6 p-0">
            <img :src="pixdeux" alt="port" v-on:click="stock=pixun; pixun=pixdeux; pixdeux=stock">
          </div>
          <div class="col-6 p-0">
            <img
              :src="pixtrois"
              alt="port"
              v-on:click="stock=pixun; pixun=pixtrois; pixtrois=stock"
            >
          </div>
          <div class="col-6 p-0">
            <img
              :src="pixquatre"
              alt="port"
              v-on:click="stock=pixun; pixun=pixquatre; pixquatre=stock"
            >
          </div>
          <div class="col-6 p-0">
            <img :src="pixcinq" alt="port" v-on:click="stock=pixun; pixun=pixcinq; pixcinq=stock">
          </div>
        </div>
        <div class="col-6 m-0 p-0 text-white">
          <h1>Pixel art :</h1>
          <br>
          <h4
            class="text-left"
          >J'utilise le logiciel Aseprite pour réaliser du pixel art. C'est un style que j'aime et que je travaille beaucoup, réminiscent des vieux jeux vidéos. J'ai une bonne maîtrise de cette technique et je peux aussi réaliser des animations fluides.</h4>
        </div>
      </div>
    </div>
    <div class="pc" v-if="!mobile">
      <div class="pinContainer" ref="pin">
        <section
          :key="(p,index)"
          v-for="(p, index) in panels"
          class="panel"
          :class="`panel-${index}`"
        >
          <div class="essai">
            <h1>{{p.coco}}</h1>
          </div>
          <div class="essai2">
            <h4>{{p.co}}</h4>
          </div>
          <div class="row d-flex container-fluid justify-content-center">
            <div :class="p.card" class="col-9 row d-flex container-fluid justify-content-center">
              <!-- PAGE 2 -->
              <div v-if="p.card == 'one'">
                <div class="row d-flex container-fluid justify-content-center">
                  <div class="row col-12">
                    <div class="col-3 mt-3">
                      <img src="../src/assets/img/tetenorb.png" alt="img">
                    </div>
                    <div class="col-4 mt-3">
                      <h4 class="text-dark">Corentin Pelaprat</h4>
                      <p
                        class="text-dark text-left pti"
                      >Je suis un développeur et designeur web formé à Molengeek, Bruxelles. J'ai acquéri mes compétences graphiques lors de mon cursus de 4 ans à l'institut Saint-Luc dans la classe de Bande Dessinée Éditions de l'ESA Bruxelles.</p>
                    </div>
                    <div class="col-5 text-dark text-left row info pl-5">
                      <h6 class="col-12 mt-5">Âge : 24</h6>
                      <h6 class="col-12">Pays : France / Belgique</h6>
                      <h6 class="col-12 pti">Email : corentin.pelaprat@gmail.com</h6>
                    </div>
                    <div class="col-12">
                      <h4 class="text-dark text-left under">Services</h4>
                    </div>
                    <div class="col-3 text-dark pt-5 pb-3">
                      <img src="../src/assets/img/web design.png" alt="serv">
                      <h5 class="mt-3">Web Design</h5>
                    </div>
                    <div class="col-3 text-dark pt-5 pb-3">
                      <img src="../src/assets/img/web dev.png" alt="serv">
                      <h5 class="mt-3">Web Developper</h5>
                    </div>
                    <div class="col-3 text-dark pt-5 pb-3">
                      <img src="../src/assets/img/graphisme.png" alt="serv">
                      <h5 class="mt-3">Graphisme</h5>
                    </div>
                    <div class="col-3 text-dark pt-5 pb-3">
                      <img src="../src/assets/img/illustration.png" alt="serv">
                      <h5 class="mt-3">Illustration, BD</h5>
                    </div>
                    <div class="col-12">
                      <h4 class="text-dark text-left under">Passions</h4>
                    </div>
                    <div class="col-2 text-dark pt-5 pb-5">
                      <img src="../src/assets/img/jeuxvid.png" alt="serv">
                      <h6 class="mt-3">Jeux vidéos</h6>
                    </div>
                    <div class="col-2 text-dark pt-5 pb-5">
                      <img src="../src/assets/img/bd.png" alt="serv">
                      <h6 class="mt-3">BD</h6>
                    </div>
                    <div class="col-2 text-dark pt-5 pb-5">
                      <img src="../src/assets/img/rp.png" alt="serv">
                      <h6 class="mt-3">RPG</h6>
                    </div>
                    <div class="col-2 text-dark pt-5 pb-5">
                      <img src="../src/assets/img/enigmes.png" alt="serv">
                      <h6 class="mt-3">Énigmes</h6>
                    </div>
                    <div class="col-2 text-dark pt-5 pb-5">
                      <img src="../src/assets/img/pixel.png" alt="serv">
                      <h6 class="mt-3">Pixel Art</h6>
                    </div>
                    <div class="col-2 text-dark pt-5 pb-5">
                      <img src="../src/assets/img/autruche.png" alt="serv">
                      <h6 class="mt-3">Autruches</h6>
                    </div>
                  </div>
                </div>
              </div>
              <!-- PAGE 2 -->
              <!-- PAGE 3 -->
              <div v-if="p.card == 'two'">
                <div class="row">
                  <div class="col-12 mb-3 mt-3">
                    <h2 class="titre">RESUME :</h2>
                  </div>
                  <div class="col-4 text-dark text-left row">
                    <h5 class="col-12">Etudes :</h5>
                    <h6 class="col-12">
                      <span>2013-2014:</span> Mise à Niveau en arts appliqués (MAANA) au Lycée Auguste Renoir, Paris. Apprentissage des logiciels de la suite Adobe : Photoshop, Indesign, Illusrator.
                    </h6>
                    <h6 class="col-12">
                      <span>2014-2018:</span> Bachelor en Bande Dessinée Éditions à l'ESA Saint-Luc, Bruxelles. Perfectionnement en dessin traditionnel, mise en page, scénario et maîtrise complète de Photoshop.
                    </h6>
                    <h6 class="col-12">
                      <span>2018-2019:</span> Formation de full-stack développeur à l'incubateur de start-up Molengeek, Bruxelles. Apprentissage en profondeurd'HTML, CSS, Bootstrap, Trello, Javascript, VueJS, ScrollMagic, Php/Laravel.
                    </h6>
                  </div>
                  <div class="col-4 text-dark text-left row">
                    <h5 class="col-12">Expériences :</h5>

                    <h6 class="col-12">
                      <span>2019:</span> Stage de 2 mois à Molengeek pour l'élaboration d'une bande dessinée interactive prévenant les jeunes des dangers du web. En collaboration avec Child Focus.
                    </h6>
                    <h6 class="col-12">
                      <span>2019:</span> Développement de plusieurs projets personnels de narration interactive lors de la formation à MolenGeek.
                    </h6>
                    <h6 class="col-12">
                      <span>Janvier 2019:</span> Encadrement d'une classe de débutants lors de la "coding week" de Molengeek.
                    </h6>
                    <h6 class="col-12">
                      <span>2018-2019:</span> Création, gestion, design et mise en page du projet "Gribouzine", un projet d'auto édition financé sur Ulule.
                    </h6>
                    <h6 class="col-12">
                      <span>2014-2019:</span> Création, organisation et animation de l'évènement "Rallye BD" à la MJC André Phillip.
                    </h6>
                  </div>
                  <div class="col-4 text-dark text-left row">
                    <h5 class="col-12">Compétences :</h5>
                    <h5 class="col-12 mt-3 mb-4">Code :</h5>
                    <h6 class="col-6 pt-0">HTML :</h6>
                    <div class="col-6 pb-2">
                      <img src="../src/assets/img/cent.png" alt="barre">
                    </div>
                    <h6 class="col-6 pt-0">CSS :</h6>
                    <div class="col-6 pb-2">
                      <img src="../src/assets/img/cent.png" alt="barre">
                    </div>
                    <h6 class="col-6 pt-0">JS :</h6>
                    <div class="col-6 pb-2">
                      <img src="../src/assets/img/cent.png" alt="barre">
                    </div>
                    <h6 class="col-6 pt-0">PHP :</h6>
                    <div class="col-6 pb-2">
                      <img src="../src/assets/img/quatre vingt dix.png" alt="barre">
                    </div>
                    <h6 class="col-6 pt-0">Trello :</h6>
                    <div class="col-6 pb-2">
                      <img src="../src/assets/img/cent.png" alt="barre">
                    </div>
                    <h5 class="col-12 mt-3 mb-4">Graphiques :</h5>
                    <h6 class="col-6 pt-0">Photoshop :</h6>
                    <div class="col-6 pb-2">
                      <img src="../src/assets/img/cent.png" alt="barre">
                    </div>
                    <h6 class="col-6 pt-0">Aseprite :</h6>
                    <div class="col-6 pb-2">
                      <img src="../src/assets/img/cent.png" alt="barre">
                    </div>
                    <h6 class="col-6 pt-0">Illustrator :</h6>
                    <div class="col-6 pb-2">
                      <img src="../src/assets/img/quatre vingt.png" alt="barre">
                    </div>
                    <h6 class="col-6 pt-0">InDesign :</h6>
                    <div class="col-6 pb-2">
                      <img src="../src/assets/img/quatre vingt.png" alt="barre">
                    </div>
                  </div>
                </div>
                <div class="mb-5 mt-4">
                  <a
                    href="https://www.pdfhost.net/index.php?Action=DownloadFile&id=0e2368f366592534901c572ed3b7b705"
                    class="download p-3 text-dark"
                  >Télécharger CV</a>
                </div>
              </div>
              <!-- PAGE 3 -->
              <div v-if="p.card == 'four'">
                <div class="row d-flex container-fluid justify-content-center">
                  <div class="col-12 titre pt-3"><h1>PORTFOLIO :</h1></div>
                  <div class="col-3 pb-3 pt-3">
                    <img src="../src/assets/img/Book_mockup_gribou.png" alt="fol">
                  </div>
                  <div class="col-3 pb-3 pt-3">
                    <img
                      src="../src/assets/img/norbocosmo.gif"
                      alt="fol"
                    >
                  </div>
                  <div class="col-3 pb-3 pt-3">
                    <img
                      src="../src/assets/img/tourbi.gif"
                      alt="fol"
                    >
                  </div>
                  <div class="col-12"></div>
                  <div class="col-3 pb-3" v-on:click="pixol">
                    <img src="../src/assets/img/grabu.png" alt="fol">
                  </div>
                  <div class="col-3 pb-3">
                    <img
                      src="../src/assets/img/dtiys.png"
                      alt="fol"
                    >
                  </div>
                  <div class="col-3 pb-3">
                    <img
                      src="../src/assets/img/Capture d’écran de 2019-03-19 10-49-00.png"
                      alt="fol"
                    >
                  </div>
                </div>
              </div>
              <!-- PAGE 4 -->
              <div v-if="p.card == 'tree'">
                <div class="row">
                  <div class="col-12 mb-3 mt-3">
                    <h1 class="titre">CONTACT :</h1>
                  </div>
                  <div class="col-5 text-dark text-left row">
                    <h3 class="col-12 mb-3">Me contacter :</h3>
                    <h6 class="col-12">
                      <span>Pays :</span> France / Belgique
                    </h6>
                    <h6 class="col-12">
                      <span>Email :</span> corentin.pelaprat@gmail.com
                    </h6>
                    <h6 class="col-12">
                      <span>Telephone :</span> +33 7 81 08 77 10
                    </h6>
                    <h6 class="col-12">
                      <span>Adresses :</span> 4 allée du Mascaret, 77200, Torcy, France /
                      <br>18 Rue Amedée Lynen, 1210, Bruxelles, Belgique
                    </h6>
                    <h6 class="col-12">
                      <span>Emploi :</span> Disponible
                    </h6>
                  </div>
                  <div
                    class="col-7 text-dark text-left row d-flex container-fluid justify-content-center"
                  >
                    <h3 class="col-12">Formulaire de contact :</h3>
                    <form
                      action="https://formspree.io/corentin.pelaprat@gmail.com"
                      target="blank"
                      method="POST"
                      class="col-10 row d-flex container-fluid justify-content-center"
                    >
                      <input
                        type="text"
                        name="Name"
                        class="col-5 mr-1"
                        placeholder="Nom"
                        v-model="nom"
                      >

                      <input
                        type="text"
                        name="Email"
                        id="Email"
                        class="col-5 ml-1"
                        placeholder="E-mail"
                        v-model="email"
                      >

                      <textarea
                        name="Message"
                        class="col-12 mt-3 mb-3"
                        id="Message"
                        v-model="message"
                      ></textarea>

                      <input
                        type="submit"
                        value="Envoyer"
                        class="col-4 mb-3 download mr-1"
                        v-if="nom!=='' && email!=='' && message!==''"
                      >
                      <input type="reset" value="Reset" class="col-4 mb-3 download ml-1">
                    </form>
                  </div>
                </div>
              </div>
              <!-- PAGE 4 -->
            </div>
          </div>
        </section>
        <div class="mont1"></div>
        <div class="mont2"></div>
        <div class="sol"></div>
        <div class="ciel"></div>
      </div>
      <div class="norbert">
        <img :src="norbert" alt="norb">
      </div>
    </div>
    <div class="mobile" v-if="mobile">
      <div class="row d-flex container-fluid justify-content-center p-0 m-0">
        <div class="col-12 row d-flex container-fluid justify-content-center">
          <h1 class="mt-3 text-white">Corentin Pelaprat</h1>
          <h4 class="mb-3 text-white">Full-stack developper, Web designer, Illustrateur</h4>
          <!-- PAGE 1 -->
          <div>
            <div class="row d-flex container-fluid justify-content-center page1 m-0">
              <div class="row col-12">
                <div class="col-3 mt-3">
                  <img src="../src/assets/img/tetenorb.png" alt="img">
                </div>
                <div class="col-5 mt-3">
                  <h4 class="text-dark">Corentin Pelaprat</h4>
                  <p
                    class="text-dark text-left pti"
                  >Je suis un développeur et designeur web formé à Molengeek, Bruxelles. J'ai acquéri mes compétences graphiques lors de mon cursus de 4 ans à l'institut Saint-Luc dans la classe de Bande Dessinée Éditions de l'ESA Bruxelles.</p>
                </div>
                <div class="col-4 text-dark text-left row info">
                  <h6 class="col-12 mt-5">Âge: 24</h6>
                  <h6 class="col-12">Pays: France / Belgique</h6>
                </div>
                <div class="col-12">
                  <h4 class="text-dark text-left under mb-3 mt-4">Services</h4>
                </div>
                <div class="col-3 text-dark pb-3">
                  <img src="../src/assets/img/web design.png" alt="serv">
                  <h5 class="mt-3">Web Design</h5>
                </div>
                <div class="col-3 text-dark pb-3">
                  <img src="../src/assets/img/web dev.png" alt="serv">
                  <h5 class="mt-3">Web Developper</h5>
                </div>
                <div class="col-3 text-dark pb-3">
                  <img src="../src/assets/img/graphisme.png" alt="serv">
                  <h5 class="mt-3">Graphisme</h5>
                </div>
                <div class="col-3 text-dark pb-3">
                  <img src="../src/assets/img/illustration.png" alt="serv">
                  <h5 class="mt-3">Illustration, BD</h5>
                </div>
                <div class="col-12">
                  <h4 class="text-dark text-left under mb-4">Passions</h4>
                </div>
                <div class="col-2 text-dark pb-5">
                  <img src="../src/assets/img/jeuxvid.png" alt="serv">
                  <h6 class="mt-3">Jeux vidéos</h6>
                </div>
                <div class="col-2 text-dark pb-5">
                  <img src="../src/assets/img/bd.png" alt="serv">
                  <h6 class="mt-3">BD</h6>
                </div>
                <div class="col-2 text-dark pb-5">
                  <img src="../src/assets/img/rp.png" alt="serv">
                  <h6 class="mt-3">RPG</h6>
                </div>
                <div class="col-2 text-dark pb-5">
                  <img src="../src/assets/img/enigmes.png" alt="serv">
                  <h6 class="mt-3">Énigmes</h6>
                </div>
                <div class="col-2 text-dark pb-5">
                  <img src="../src/assets/img/pixel.png" alt="serv">
                  <h6 class="mt-3">Pixel Art</h6>
                </div>
                <div class="col-2 text-dark pb-5">
                  <img src="../src/assets/img/autruche.png" alt="serv">
                  <h6 class="mt-3">Autruches</h6>
                </div>
              </div>
            </div>
          </div>
          <!-- PAGE 2 -->
          <!-- PAGE 3 -->
          <div>
            <div class="row d-flex justify-content-center container-fluid m-0">
              <div class="row page1 mt-5">
                <div class="col-12 mb-3 mt-3">
                  <h2 class="titre">RESUME :</h2>
                </div>
                <div class="col-4 text-dark text-left row">
                  <h5 class="col-12">Etudes :</h5>
                  <h6 class="col-12">
                    <span>2013-2014:</span> Mise à Niveau en arts appliqués (MAANA) au Lycée Auguste Renoir, Paris. Apprentissage des logiciels de la suite Adobe : Photoshop, Indesign, Illusrator.
                  </h6>
                  <h6 class="col-12">
                    <span>2014-2018:</span> Bachelor en Bande Dessinée Éditions à l'ESA Saint-Luc, Bruxelles. Perfectionnement en dessin traditionnel, mise en page, scénario et maîtrise complète de Photoshop.
                  </h6>
                  <h6 class="col-12">
                    <span>2018-2019:</span> Formation de full-stack développeur à l'incubateur de start-up Molengeek, Bruxelles. Apprentissage en profondeurd'HTML, CSS, Bootstrap, Trello, Javascript, VueJS, ScrollMagic, Php/Laravel.
                  </h6>
                </div>
                <div class="col-4 text-dark text-left row">
                  <h5 class="col-12">Expériences :</h5>

                  <h6 class="col-12">
                    <span>2019:</span> Stage de 2 mois à Molengeek pour l'élaboration d'une bande dessinée interactive prévenant les jeunes des dangers du web. En collaboration avec Child Focus.
                  </h6>
                  <h6 class="col-12">
                    <span>2019:</span> Développement de plusieurs projets personnels de narration interactive lors de la formation à MolenGeek.
                  </h6>
                  <h6 class="col-12">
                    <span>Janvier 2019:</span> Encadrement d'une classe de débutants lors de la "coding week" de Molengeek.
                  </h6>
                  <h6 class="col-12">
                    <span>2018-2019:</span> Création, gestion, design et mise en page du projet "Gribouzine", un projet d'auto édition financé sur Ulule.
                  </h6>
                  <h6 class="col-12">
                    <span>2014-2019:</span> Création, organisation et animation de l'évènement "Rallye BD" à la MJC André Phillip.
                  </h6>
                </div>
                <div class="col-4 text-dark text-left row">
                  <h5 class="col-12">Compétences :</h5>
                  <h5 class="col-12 mt-3 mb-4">Code :</h5>
                  <h6 class="col-6 pt-0">HTML :</h6>
                  <div class="col-6 pb-2">
                    <img src="../src/assets/img/cent.png" alt="barre">
                  </div>
                  <h6 class="col-6 pt-0">CSS :</h6>
                  <div class="col-6 pb-2">
                    <img src="../src/assets/img/cent.png" alt="barre">
                  </div>
                  <h6 class="col-6 pt-0">JS :</h6>
                  <div class="col-6 pb-2">
                    <img src="../src/assets/img/cent.png" alt="barre">
                  </div>
                  <h6 class="col-6 pt-0">PHP :</h6>
                  <div class="col-6 pb-2">
                    <img src="../src/assets/img/quatre vingt dix.png" alt="barre">
                  </div>
                  <h6 class="col-6 pt-0">Trello :</h6>
                  <div class="col-6 pb-2">
                    <img src="../src/assets/img/cent.png" alt="barre">
                  </div>
                  <h5 class="col-12 mt-3 mb-4">Graphiques :</h5>
                  <h6 class="col-6 pt-0">Photoshop :</h6>
                  <div class="col-6 pb-2">
                    <img src="../src/assets/img/cent.png" alt="barre">
                  </div>
                  <h6 class="col-6 pt-0">Aseprite :</h6>
                  <div class="col-6 pb-2">
                    <img src="../src/assets/img/cent.png" alt="barre">
                  </div>
                  <h6 class="col-6 pt-0">Illustrator :</h6>
                  <div class="col-6 pb-2">
                    <img src="../src/assets/img/quatre vingt.png" alt="barre">
                  </div>
                  <h6 class="col-6 pt-0">InDesign :</h6>
                  <div class="col-6 pb-2">
                    <img src="../src/assets/img/quatre vingt.png" alt="barre">
                  </div>
                </div>
                <div class="col-12 mb-5 mt-4 justify-content-center">
                  <a
                    href="https://www.pdfhost.net/index.php?Action=DownloadFile&id=0e2368f366592534901c572ed3b7b705"
                    class="download p-3 text-dark"
                  >Télécharger CV</a>
                </div>
              </div>
            </div>
          </div>
          <!-- PAGE 3 -->
          <!-- PAGE 4 -->
          <div>
            <div class="row container-fluid page1 mt-5 ml-0 mb-5">
              <div class="col-12 mb-3 mt-3">
                <h1 class="titre">CONTACT :</h1>
              </div>
              <div class="col-5 text-dark text-left row">
                <h4 class="col-12 mb-3">Me contacter :</h4>
                <h6 class="col-12">
                  <span>Pays :</span> France / Belgique
                </h6>
                <h6 class="col-12 mail">
                  <span>Email :</span> corentin.pelaprat@gmail.com
                </h6>
                <h6 class="col-12">
                  <span>Telephone :</span> +33 7 81 08 77 10
                </h6>
                <h6 class="col-12">
                  <span>Adresses :</span> 4 allée du Mascaret, 77200, Torcy, France /
                  <br>18 Rue Amedée Lynen, 1210, Bruxelles, Belgique
                </h6>
                <h6 class="col-12">
                  <span>Emploi :</span> Disponible
                </h6>
              </div>
              <div
                class="col-7 text-dark row d-flex container-fluid justify-content-center pr-0 ml-2"
              >
                <h4 class="col-12">Formulaire de contact :</h4>
                <form
                  action="https://formspree.io/corentin.pelaprat@gmail.com"
                  target="blank"
                  method="POST"
                  class="col-10 row d-flex container-fluid justify-content-center"
                >
                  <input type="text" name="Name" class="col-5 mr-1" placeholder="Nom" v-model="nom">

                  <input
                    type="text"
                    name="Email"
                    id="Email"
                    class="col-5 ml-1"
                    placeholder="E-mail"
                    v-model="email"
                  >

                  <textarea name="Message" class="col-12 mt-3 mb-3" id="Message" v-model="message"></textarea>

                  <input
                    type="submit"
                    value="Envoyer"
                    class="col-4 mb-3 download mr-1"
                    v-if="nom!=='' && email!=='' && message!==''"
                  >
                  <input type="reset" value="Reset" class="col-4 mb-3 download ml-1">
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
        

<script>
import Folio from "./projets/folio";
export default {
  mounted() {
    var that = this;
    this.$nextTick(this.pinContainerScene);
    window.addEventListener("scroll", that.responsive);
    if (window.innerWidth < 845) {
      that.mobile = true;
      that.pc = false;
      that.on = true;
      if (that.mob == false) {
        that.$nextTick(that.pinContainerScene);
      }
    } else if (window.innerWidth > 845) {
      that.mobile = false;
      that.mob = false;
      window.addEventListener("scroll", that.scrolling);
      if (that.pc == false) {
        that.$nextTick(that.pinContainerScene);
      }
    }
    window.onresize = function() {
      if (window.innerWidth < 845) {
        that.mobile = true;
        that.pc = false;
        if (that.mob == false) {
          window.removeEventListener("scroll", that.scrolling);
          that.$nextTick(that.pinContainerScene);
        }
      } else if (window.innerWidth > 845) {
        that.mobile = false;
        that.mob = false;
        that.on = false;
        if (that.pc == false) {
          window.addEventListener("scroll", that.scrolling);
          that.$nextTick(that.pinContainerScene);
        }
      }
    };
  },
  data() {
    return {
      test: "bg-danger p-5 norbert",
      scrollcount: 0,
      final: "0%",
      norbert: require("../src/assets/img/norbert.gif"),
      timer: null,
      nom: "",
      email: "",
      message: "",
      mob: false,
      mobile: false,
      pc: true,
      on: false,
      stock: "",
      pixun: require("./assets/img/grabu.png"),
      pixdeux: require("./assets/img/rex.png"),
      pixtrois: require("./assets/img/sheya.png"),
      pixquatre: require("./assets/img/capt.png"),
      pixcinq: require("./assets/img/flora.png"),
      pixel: false,
      keys: { 37: 1, 38: 1, 39: 1, 40: 1 },
      panels: [
        {
          title: "panel 1",
          coco: "CORENTIN PELAPRAT",
          co: "Full-stack developper, Web designer, Illustrateur",
          card: "hidden"
        },
        {
          title: "panel 2",
          card: "one"
        },
        {
          title: "panel 3",
          card: "two"
        },
        {
          title: "panel 4",
          card: "tree"
        },
        {
          title: "panel 4",
          card: "four"
        }
      ]
    };
  },
  components: {
    Folio
  },
  methods: {
    preventDefault(e) {
      e = e || window.event;
      if (e.preventDefault) e.preventDefault();
      e.returnValue = false;
    },

    preventDefaultForScrollKeys(e) {
      if (this.keys[e.keyCode]) {
        this.preventDefault(e);
        return false;
      }
    },

    disableScroll() {
      if (window.addEventListener)
        // older FF
        window.addEventListener("DOMMouseScroll", this.preventDefault, false);
      window.onwheel = this.preventDefault; // modern standard
      window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
      window.ontouchmove = this.preventDefault; // mobile
      document.onkeydown = this.preventDefaultForScrollKeys;
    },

    enableScroll() {
      if (window.removeEventListener)
        window.removeEventListener(
          "DOMMouseScroll",
          this.preventDefault,
          false
        );
      window.onmousewheel = document.onmousewheel = null;
      window.onwheel = null;
      window.ontouchmove = null;
      document.onkeydown = null;
    },
    pixol() {
      this.pixel = !this.pixel;
      if (this.pixel == true) {
        this.disableScroll();
      } else {
        this.enableScroll();
      }
    },
    responsive() {
      var that = this;
      if (window.innerWidth < 845) {
        that.mobile = true;
        that.pc = false;
        if (that.mob == false) {
          window.removeEventListener("scroll", that.scrolling);
          that.$nextTick(that.pinContainerScene);
        }
      } else if (window.innerWidth > 845) {
        that.mobile = false;
        that.mob = false;
        that.on = false;
        if (that.pc == false) {
          window.addEventListener("scroll", that.scrolling);
          that.$nextTick(that.pinContainerScene);
        }
      }
    },
    scrolling() {
      var ScrollTop = parseInt(document.documentElement.scrollTop);
      var x = 400;
      if (window.innerHeight < 750 && window.innerHeight > 651) {
        x = 370;
      } else if (window.innerHeight < 650 && window.innerHeight > 551) {
        x = 340;
      } else if (window.innerHeight < 550 && window.innerHeight > 451) {
        x = 200;
      } else if (window.innerHeight < 450 && window.innerHeight > 351) {
        x = 180;
      } else if (window.innerHeight < 350 && window.innerHeight > 251) {
        x = 160;
      } else if (window.innerHeight < 250 && window.innerHeight > 151) {
        x = 100;
      } else if (window.innerHeight < 150 && window.innerHeight > 51) {
        x = 50;
      }
      if (ScrollTop > x) {
        var that = this;
        const etape = window.pageYOffset;
        setTimeout(function() {
          const etape2 = window.pageYOffset;
          if (etape > etape2) {
            that.norbert = require("../src/assets/img/norbertcourtgauche.gif");
          } else if (etape < etape2) {
            that.norbert = require("../src/assets/img/norbertcourt.gif");
          }
        }, 30);
        if (that.timer !== null) {
          clearTimeout(that.timer);
        }
        that.timer = setTimeout(function() {
          that.norbert = require("../src/assets/img/norbert.gif");
        }, 150);
      }
    },
    pinContainerScene() {
      var that = this;
      that.pc = true;
      that.mob = true;
      const Length = this.panels.length;

      if (that.mobile == false) {
        const tl = new this.$gsap.TimelineMax();

        tl.fromTo(
          `div.essai`,
          0.05,
          { y: "-1000%", opacity: 0 },
          {
            opacity: 1,
            y: "-450%"
          }
        ),
          tl.fromTo(
            `div.essai2`,
            0.05,
            { y: "-1000%", opacity: 0 },
            {
              opacity: 1,
              y: "-400%"
            }
          ),
          tl.add([
            TweenMax.fromTo(
              `div.mont1`,
              2,
              { x: "0%" },
              {
                x: "-10%"
              }
            ),
            TweenMax.fromTo(
              `div.mont2`,
              2,
              { x: "0%" },
              {
                x: "-4%"
              }
            ),
            TweenMax.fromTo(
              `div.sol`,
              2,
              { x: "0%" },
              {
                x: "-50%"
              }
            ),
            TweenMax.fromTo(
              `div.pinContainer`,
              2,
              { x: "0%" },
              {
                x: "-400%",
                y: "0%"
              }
            )
          ]);

        const scene = new this.$scrollmagic.Scene({
          triggerElement: ".pinContainer",
          triggerHook: "onLeave",
          duration: `${Length * 250}%`
        })
          .setPin(".pinContainer")
          .setTween(tl);

        this.$ksvuescr.$emit("addScene", "pinContainerScene", scene);
      } else if (that.mobile == true && that.on == false) {
        this.$ksvuescr.$emit("destroy");
      }
    }
  },
  destroyed() {
    this.$ksvuescr.$emit("destroy");
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
