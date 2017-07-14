"use strict";
var LoadingComponent_1 = require('../components/LoadingComponent');
var GalleryController = (function () {
    function GalleryController(scrollMagicController, windowHeight, windowWidth) {
        var _this = this;
        this.sectionName = '#gallery-container';
        this.isThumbnailInitiated = false;
        this.photos = [
            'LUKE3199.jpg', 'LUKE3413.jpg', 'LUKE3446.jpg', 'LUKE3531.jpg', 'LUKE3646.jpg',
            'LUKE3649.jpg', 'LUKE3680.jpg', 'LUKE3733.jpg', 'LUKE3772.jpg', 'LUKE3817.jpg',
            'LUKE3820.jpg', 'LUKE3934.jpg', 'LUKE3996.jpg', 'LUKE4018.jpg', 'LUKE4161.jpg',
            'LUKE4208.jpg', 'LUKE4339.jpg', 'LUKE4363.jpg', 'LUKE4391.jpg', 'LUKE4486.jpg',
            'LUKE4545.jpg', 'LUKE4559.jpg', 'LUKE4612.jpg', 'LUKE4680.jpg'
        ];
        this.videos = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FsbGVyeUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHYWxsZXJ5Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0EsaUNBQWlDLGdDQUFnQyxDQUFDLENBQUE7QUFHbEU7SUFjSSwyQkFDSSxxQkFBMEIsRUFDMUIsWUFBb0IsRUFDcEIsV0FBbUI7UUFqQjNCLGlCQTZGQztRQTNGVyxnQkFBVyxHQUFHLG9CQUFvQixDQUFDO1FBQ25DLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUM3QixXQUFNLEdBQUc7WUFDYixjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztZQUM5RSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztZQUM5RSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztZQUM5RSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztZQUM5RSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO1NBQ2pFLENBQUM7UUFDTSxXQUFNLEdBQUcsRUFDaEIsQ0FBQztRQVFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQixJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbEIsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQ2hDLFFBQVEsRUFBRSxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUU7U0FDeEQsQ0FBQzthQUNHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzthQUM1QixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7SUFDaEQsQ0FBQzs7SUFFTyx5Q0FBYSxHQUFyQjtRQUNJLElBQU0sTUFBTSxHQUFH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