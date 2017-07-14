declare const $: any;
declare const ScrollMagic: any;
declare const TweenMax: any;
declare const Linear: any;

import { LoadingComponent } from '../components/LoadingComponent';


export class GalleryController {

    private sectionName = '#gallery-container';
    private isThumbnailInitiated = false;
    private photos = [
        'LUKE3199.jpg', 'LUKE3413.jpg', 'LUKE3446.jpg', 'LUKE3531.jpg', 'LUKE3646.jpg',
        'LUKE3649.jpg', 'LUKE3680.jpg', 'LUKE3733.jpg', 'LUKE3772.jpg', 'LUKE3817.jpg',
        'LUKE3820.jpg', 'LUKE3934.jpg', 'LUKE3996.jpg', 'LUKE4018.jpg', 'LUKE4161.jpg',
        'LUKE4208.jpg', 'LUKE4339.jpg', 'LUKE4363.jpg', 'LUKE4391.jpg', 'LUKE4486.jpg',
        'LUKE4545.jpg', 'LUKE4559.jpg', 'LUKE4612.jpg', 'LUKE4680.jpg'
    ];
    private videos = [
    ];

    constructor(
        scrollMagicController: any,
        windowHeight: number,
        windowWidth: number
    ) {

        this.setLoadingImg();

        new ScrollMagic.Scene({
            triggerElement: this.sectionName,
            duration: windowHeight + $(this.sectionName).height()
        })
            .addTo(scrollMagicController)
            .on("enter", e => this.loadThumbnail());
    };

    private setLoadingImg() {
        const assets = this.videos.concat(this.photos);
        const thumbnailPaths = assets.reduce((array, photo) => {
            const $asset = new LoadingComponent();
            array.push($asset.$element.addClass('photo'));
            return array;
        }, []);

        $(this.sectionName).find('.assets-content').html(thumbnailPaths);
    };

    private loadThumbnail() {
        if (this.isThumbnailInitiated) return;
        this.isThumbnailInitiated = true;

        //videos part
        this.videos.forEach((video) => {
            const path = `assets/video/${video}`;

            const $asset = $(`<div class="photo isVideo js-showcase-asset" data-asset-url="${path}.mp4">`)
                .css('background-image', `url('${path}.jpg')`)
                .hide();

            const $img = $(`<img src="${path}.jpg" />`);
            $img.on('load', (e) => {
                this.setThumbnail($asset);
            });
        });

        //photo part
        const height = $(window).height() as number;
        const width = $(window).width() as number;
        const size = (height > width) ? height : width;
        let folder = 1920;
        [1920, 1080, 720, 360].forEach(e => {
            folder = (e > size) ? e : folder;
        });

        const thumbnailPath = 'assets/gallery/360/';
        const galleryPath = `assets/gallery/${folder}/`;

        this.photos.forEach((photo) => {
            const src = `${thumbnailPath}${photo}`;

            const $asset = $(`<div class="photo js-showcase-asset" data-asset-url="${galleryPath}${photo}">`)
                .css('background-image', `url('${src}')`)
                .hide();

            const $img = $(`<img src="${src}" />`);
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