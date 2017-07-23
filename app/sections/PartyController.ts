declare const $: any;

export class PartyController {

    constructor() {

        $('#map-container .map').on('click', e => {
            window.open('https://www.google.com.tw/maps/place/頤品大飯店-+新莊晶冠館', '_blank');
        })
    }
}