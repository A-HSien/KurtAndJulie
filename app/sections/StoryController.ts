declare const $: any;
declare const ScrollMagic: any;
declare const TweenMax: any;
declare const Linear: any;

import { LoadingComponent } from '../components/LoadingComponent';

export class StoryController {

    private sectionName = '#story-container';
    private isThumbnailInitiated = false;
    private photos = [
        'IMG_3551.JPG', 'IMG_3552.JPG', 'IMG_3553.JPG', 'IMG_3554.JPG', 'IMG_3555.JPG',
        'IMG_3556.JPG', 'IMG_3557.JPG', 'IMG_3558.JPG', 'IMG_3559.JPG', 'IMG_3560.JPG',
        'IMG_3561.JPG', 'IMG_3562.JPG', 'IMG_3563.JPG', 'IMG_3564.JPG', 'IMG_3565.JPG',
        'IMG_3566.JPG', 'IMG_3567.JPG', 'IMG_3568.JPG', 'IMG_3569.JPG', 'IMG_3570.JPG',
        'IMG_3571.JPG', 'IMG_3572.JPG', 'IMG_3573.JPG', 'IMG_3574.JPG',
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
