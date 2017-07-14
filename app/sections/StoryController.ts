declare const $: any;
declare const ScrollMagic: any;
declare const TweenMax: any;
declare const Linear: any;

import { LoadingComponent } from '../components/LoadingComponent';

export class StoryController {

    private sectionName = '#story-container';
    private isThumbnailInitiated = false;
    private photos = [
        'IMG_3551.jpg', 'IMG_3552.jpg', 'IMG_3553.jpg', 'IMG_3554.jpg', 'IMG_3555.jpg',
        'IMG_3556.jpg', 'IMG_3557.jpg', 'IMG_3558.jpg', 'IMG_3559.jpg', 'IMG_3560.jpg',
        'IMG_3561.jpg', 'IMG_3562.jpg', 'IMG_3563.jpg', 'IMG_3564.jpg', 'IMG_3565.jpg',
        'IMG_3566.jpg', 'IMG_3567.jpg', 'IMG_3568.jpg', 'IMG_3569.jpg', 'IMG_3570.jpg',
        'IMG_3571.jpg', 'IMG_3572.jpg', 'IMG_3573.jpg', 'IMG_3574.jpg',
    ];

    constructor(
        scrollMagicController: any,
        windowHeight: number,
        windowWidth: number
    ) {

        this.setLoadingImg();

        new ScrollMagic.Scene({
            triggerElement: this.sectionName,
            duration: windowHeight + $(this.sectionName).height(),
        }).addTo(scrollMagicController)
            .on("enter", e => this.loadThumbnail());
    };

    private setLoadingImg() {
        const thumbnailPaths = this.photos.reduce((array, photo) => {
            const $asset = new LoadingComponent();
            array.push($asset.$element.addClass('photo'));
            return array;
        }, []);

        $(this.sectionName).find('.assets-content').html(thumbnailPaths);
    };

    private loadThumbnail() {
        if (this.isThumbnailInitiated) return;
        this.isThumbnailInitiated = true;

        const thumbnailPath = 'assets/life/360/';
        const galleryPath = 'assets/life/original/';

        this.photos.forEach((photo) => {
            const src = `${thumbnailPath}${photo}`;
            const $img = $(`<img src="${src}" />`);

            const $asset = $(`<div class="photo js-showcase-asset" data-asset-url="${galleryPath}${photo}">`)
                .css('background-image', `url(${src})`);

            $img.on('load', (e) => {
                this.setThumbnail($asset);
            });
        });
    };


    private setThumbnail($asset) {
        const $loader = $(this.sectionName).find('.assets-content .loader').first();
        $loader.before($asset);
        $loader.remove();
        $asset.fadeIn();
    };
};
