"use strict";
var LoadingComponent_1 = require('../components/LoadingComponent');
var GalleryController = (function () {
    function GalleryController(scrollMagicController, windowHeight, windowWidth) {
        var _this = this;
        this.sectionName = '#gallery-container';
        this.isThumbnailInitiated = false;
        this.photos = [
            'LUKE3199.jpg', 'LUKE3413.jpg', 'LUKE3446.jpg', 'LUKE3531.jpg', 'LUKE3646.jpg',
            'LUKE3649.jpg', 'LUKE3680.jpg', 'LUKE3733.jpg', 'LUKE3772.jpg',
            'LUKE3820.jpg', 'LUKE3934.jpg', 'LUKE3996.jpg', 'LUKE4018.jpg', 'LUKE4161.jpg',
            'LUKE4208.jpg', 'LUKE4339.jpg', 'LUKE4363.jpg', 'LUKE4391.jpg', 'LUKE4486.jpg',
            'LUKE4545.jpg', 'LUKE4559.jpg', 'LUKE4612.jpg', 'LUKE4680.jpg'
        ];
        this.videos = [
            '522496324'
        ];
        this.setLoadingImg();
        new ScrollMagic.Scene({
            triggerElement: this.sectionName,
            duration: windowHeight + $(this.sectionName).height()
        })
            .addTo(scrollMagicController)
            .on("enter", function (e) { return _this.loadThumbnail(); });
    }
    ;
    GalleryController.prototype.setLoadingImg = function () {
        var assets = this.videos.concat(this.photos);
        var thumbnailPaths = assets.reduce(function (array, photo) {
            var $asset = new LoadingComponent_1.LoadingComponent();
            array.push($asset.$element.addClass('photo'));
            return array;
        }, []);
        $(this.sectionName).find('.assets-content').html(thumbnailPaths);
    };
    ;
    GalleryController.prototype.loadThumbnail = function () {
        var _this = this;
        if (this.isThumbnailInitiated)
            return;
        this.isThumbnailInitiated = true;
        //videos part
        this.videos.forEach(function (video) {
            var path = "assets/video/" + video;
            var $asset = $("<div class=\"photo isVideo js-showcase-asset\" data-asset-url=\"" + path + ".mp4\">")
                .css('background-image', "url('" + path + ".jpg')")
                .hide();
            var $img = $("<img src=\"" + path + ".jpg\" />");
            $img.on('load', function (e) {
                _this.setThumbnail($asset);
            });
        });
        //photo part
        var height = $(window).height();
        var width = $(window).width();
        var size = (height > width) ? height : width;
        var folder = 1920;
        [1920, 1080, 720, 360].forEach(function (e) {
            folder = (e > size) ? e : folder;
        });
        var thumbnailPath = 'assets/gallery/360/';
        var galleryPath = "assets/gallery/" + folder + "/";
        this.photos.forEach(function (photo) {
            var src = "" + thumbnailPath + photo;
            var $asset = $("<div class=\"photo js-showcase-asset\" data-asset-url=\"" + galleryPath + photo + "\">")
                .css('background-image', "url('" + src + "')")
                .hide();
            var $img = $("<img src=\"" + src + "\" />");
            $img.on('load', function (e) {
                _this.setThumbnail($asset);
            });
        });
    };
    ;
    GalleryController.prototype.setThumbnail = function ($asset) {
        var $loader = $(this.sectionName).find('.assets-content .loader').first();
        $loader.before($asset);
        $loader.remove();
        $asset.fadeIn();
    };
    ;
    return GalleryController;
}());
exports.GalleryController = GalleryController;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FsbGVyeUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHYWxsZXJ5Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0EsaUNBQWlDLGdDQUFnQyxDQUFDLENBQUE7QUFHbEU7SUFlSSwyQkFDSSxxQkFBMEIsRUFDMUIsWUFBb0IsRUFDcEIsV0FBbUI7UUFsQjNCLGlCQThGQztRQTVGVyxnQkFBVyxHQUFHLG9CQUFvQixDQUFDO1FBQ25DLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUM3QixXQUFNLEdBQUc7WUFDYixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztZQUM5RSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO1lBQzlELGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO1lBQzlFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO1lBQzlFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7U0FDakUsQ0FBQztRQUNNLFdBQU0sR0FBRztZQUNiLFdBQVc7U0FDZCxDQUFDO1FBUUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNsQixjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDaEMsUUFBUSxFQUFFLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRTtTQUN4RCxDQUFDO2FBQ0csS0FBSyxDQUFDLHFCQUFxQixDQUFDO2FBQzVCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQztJQUNoRCxDQUFDOztJQUVPLHlDQUFhLEdBQXJCO1FBQ0ksSUFBTSxNQUFNLEdBQUcs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