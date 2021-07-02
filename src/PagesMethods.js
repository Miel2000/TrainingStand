import { TimelineLite } from "gsap/TweenMax";

const pageOptions = {
    routerTransitionDuration: 0.5,
    ratioDeltaEnterLeave: 0.85,
    staggerComponents: 0.2
};

const pageEnter = (el) => {
    // console.log('hey, ici le pageEnter', el);

    const tl = new TimelineLite();

    tl.from(
        el,
        pageOptions.routerTransitionDuration,
        {
            autoAlpha: 0,
            x: 500,
            force3D: false
        }
    )
    .staggerFrom(
        el.querySelectorAll('.component') || el.querySelectorAll('div'),
        pageOptions.routerTransitionDuration * 0.5,
        {
            y: -250,
            autoAlpha: 0
        },
        pageOptions.staggerComponents
    );
    
};

const pageLeave = (el) => {
    // console.log('hey, ici le pageLeave', el);

    const tl = new TimelineLite();

    tl.to(
        el,
        pageOptions.routerTransitionDuration * pageOptions.ratioDeltaEnterLeave,
        {
            autoAlpha: 0,
            scale: 0.5,
            rotation: -25,
            force3D: false

        }
    );

};

export {
    pageOptions,
    pageEnter,
    pageLeave
 };