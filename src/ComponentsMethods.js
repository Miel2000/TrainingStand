import { TimelineLite } from "gsap/TweenMax";
import { pageOptions } from "./PagesMethods";

const lettersRoll = function(component) {

    // on attend que l'animation de <transition> se termine
    setTimeout( () => {

        // Let's go ! 
        // on stock l'élement qui contient le texte
        const element = component.$el;

        // on pecho les animsparams pour quand on va lancer l'anim
        const animParams = JSON.parse(element.dataset.animparams);

        // on stock le texte
        const texte = element.innerHTML.trim();

        // on découpe le texte
        const texteArr = texte.split('');

       // on enveloppe chaque lettre d'un span.oneLetter
        element.innerHTML = texteArr.map(lettre => {

            let lettreOk = lettre;

            if (lettreOk === ' ') {
                // on remplace simplement un espace par un &nbsp; (espace insécable)
                lettreOk = '&nbsp;';
            }
            // on retourne la lettre enveloppée
            return `<span class="oneLetter">${lettreOk}</span>`;

        }).join('');

        // ici on fait une grosse séléction de tous les éléments contennant une lettre
        // ( donc nos 'enveloppes' )
        const letters = Array.from(element.querySelectorAll('.oneLetter'));

        // on initialise le Gsap TimelineLite pour gérer les anims
        const tl = new TimelineLite();
        
        

        // et ici on lance l'anim sur l'ensemble des lettres enveloppées
        tl.staggerFrom(
            letters, 
            parseFloat(animParams.duration), 
            {
                autoAlpha: 0,
                scale: 0.5,
                rotation: 90,
                y: 250
            },
            parseFloat(animParams.stagger)
        );

    }, pageOptions.routerTransitionDuration * 1000);


};

const timedGoNext = function(destination, delay) {

    setTimeout(function() {
        window.location.pathname = `/${destination}`;
    }, delay * 1000);

};


export { 
    lettersRoll,
    timedGoNext
}