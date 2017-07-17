declare const $: any;
declare const ScrollMagic: any;
declare const TweenMax: any;
declare const PIXI: any;

import { SectionState } from '../SectionState.enum';


export class HeaderController {

    private sectionState: SectionState = SectionState.Inside;

    constructor(
        scrollMagicController: any,
        windowHeight: number,
        windowWidth: number
    ) {
        this.setTweenForImageIcon(scrollMagicController, windowHeight);
    };


    private setTweenForImageIcon(scrollMagicController: any, windowHeight: number) {

        new ScrollMagic.Scene({
            triggerElement: '#header .logo',
            triggerHook: '0.2',
            duration: windowHeight
        })
            .setTween(TweenMax.to('#header .logo', 1, {
                autoAlpha: 0,
                scale: 0.5,
                force3D: true
            }))
            .addTo(scrollMagicController);
    };

};