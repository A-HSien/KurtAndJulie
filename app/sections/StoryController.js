"use strict";
var LoadingComponent_1 = require('../components/LoadingComponent');
var StoryController = (function () {
    function StoryController(scrollMagicController, windowHeight, windowWidth) {
        var _this = this;
        this.sectionName = '#story-container';
        this.isThumbnailInitiated = false;
        this.photos = [
            'IMG_3551.jpg', 'IMG_3552.jpg', 'IMG_3553.jpg', 'IMG_3554.jpg', 'IMG_3555.jpg',
            'IMG_3556.jpg', 'IMG_3557.jpg', 'IMG_3558.jpg', 'IMG_3559.jpg', 'IMG_3560.jpg',
            'IMG_3561.jpg', 'IMG_3562.jpg', 'IMG_3563.jpg', 'IMG_3564.jpg', 'IMG_3565.jpg',
            'IMG_3566.jpg', 'IMG_3567.jpg', 'IMG_3568.jpg', 'IMG_3569.jpg', 'IMG_3570.jpg',
            'IMG_3571.jpg', 'IMG_3572.jpg', 'IMG_3573.jpg', 'IMG_3574.jpg',
        ];
        this.setLoadingImg();
        new ScrollMagic.Scene({
            triggerElement: this.sectionName,
            duration: windowHeight + $(this.sectionName).height(),
        }).addTo(scrollMagicController)
            .on("enter", function (e) { return _this.loadThumbnail(); });
    }
    ;
    StoryController.prototype.setLoadingImg = function () {
        var thumbnailPaths = this.photos.reduce(function (array, photo) {
            var $asset = new LoadingComponent_1.LoadingComponent();
            array.push($asset.$element.addClass('photo'));
            return array;
        }, []);
        $(this.sectionName).find('.assets-content').html(thumbnailPaths);
    };
    ;
    StoryController.prototype.loadThumbnail = function () {
        var _this = this;
        if (this.isThumbnailInitiated)
            return;
        this.isThumbnailInitiated = true;
        var thumbnailPath = 'assets/life/360/';
        var galleryPath = 'assets/life/original/';
        this.photos.forEach(function (photo) {
            var src = "" + thumbnailPath + photo;
            var $img = $("<img src=\"" + src + "\" />");
            var $asset = $("<div class=\"photo js-showcase-asset\" data-asset-url=\"" + galleryPath + photo + "\">")
                .css('background-image', "url(" + src + ")");
            $img.on('load', function (e) {
                _this.setThumbnail($asset);
            });
        });
    };
    ;
    StoryController.prototype.setThumbnail = function ($asset) {
        var $loader = $(this.sectionName).find('.assets-content .loader').first();
        $loader.before($asset);
        $loader.remove();
        $asset.fadeIn();
    };
    ;
    return StoryController;
}());
exports.StoryController = StoryController;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcnlDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3RvcnlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQSxpQ0FBaUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUVsRTtJQVlJLHlCQUNJLHFCQUEwQixFQUMxQixZQUFvQixFQUNwQixXQUFtQjtRQWYzQixpQkFnRUM7UUE5RFcsZ0JBQVcsR0FBRyxrQkFBa0IsQ0FBQztRQUNqQyx5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDN0IsV0FBTSxHQUFHO1lBQ2IsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7WUFDOUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7WUFDOUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7WUFDOUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7WUFDOUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYztTQUNqRSxDQUFDO1FBUUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNsQixjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDaEMsUUFBUSxFQUFFLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRTtTQUN4RCxDQUFDLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO2FBQzFCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQztJQUNoRCxDQUFDOztJQUVPLHVDQUFhLEdBQXJCO1FBQ0ksSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSztZQUNuRCxJQUFNLE1BQU0sR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7WUFDdEMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7SUFFTyx1Q0FBYSxHQUFyQjtRQUFBLGlCQWtCQztRQWpCRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUVqQyxJQUFNLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQztRQUN6QyxJQUFNLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQztRQUU1QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7WUFDdEIsSUFBTSxHQUFHLEdBQUcsS0FBRyxhQUFhLEdBQUcsS0FBTyxDQUFDO1lBQ3ZDLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxnQkFBYSxHQUFHLFVBQU0sQ0FBQyxDQUFDO1lBRXZDLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyw2REFBd0QsV0FBVyxHQUFHLEtBQUssUUFBSSxDQUFDO2lCQUM1RixHQUFHLENBQUMsa0JBQWtCLEVBQUUsU0FBTyxHQUFHLE1BQUcsQ0FBQyxDQUFDO1lBRTVDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsQ0FBQztnQkFDZCxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztJQUdPLHNDQUFZLEdBQXBCLFVBQXFCLE1BQU07UUFDdkIsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1RSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqQixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7SUFDTCxzQkFBQztBQUFELENBQUMsQUFoRUQsSUFnRUM7QUFoRVksdUJBQWUsa0JBZ0UzQixDQUFBO0FBQUEsQ0FBQyJ9