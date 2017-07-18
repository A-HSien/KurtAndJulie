"use strict";
var AnnounceController = (function () {
    function AnnounceController(scrollMagicController, windowHeight, windowWidth) {
        this.sectionName = '#announce';
        this.setSelfiePortrait(scrollMagicController);
        this.setCountdownClock();
        this.setMap(windowWidth);
    }
    ;
    AnnounceController.prototype.setSelfiePortrait = function (scrollMagicController) {
        new ScrollMagic.Scene({
            triggerElement: this.sectionName,
        }).setTween(this.sectionName + ' .selfie-content-space', {
            css: { width: '0' }
        }).addTo(scrollMagicController);
    };
    ;
    AnnounceController.prototype.setCountdownClock = function () {
        var deadline = new Date(2017, 9 - 1, 30);
        new CountdownClock('clockdiv', deadline);
    };
    ;
    AnnounceController.prototype.setMap = function (windowWidth) {
        var location = '25.0637638,121.4584973';
        var size = windowWidth;
        var styles = toStaticMapStyle([
            {
                "featureType": "road",
                "stylers": [
                    {
                        "hue": "#a7c3de"
                    },
                    {
                        "saturation": -79
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "saturation": -78
                    },
                    {
                        "hue": "#6600ff"
                    },
                    {
                        "lightness": -47
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "lightness": 22
                    }
                ]
            },
            {
                "featureType": "landscape",
                "stylers": [
                    {
                        "hue": "#6600ff"
                    },
                    {
                        "saturation": -11
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        "saturation": -65
                    },
                    {
                        "hue": "#1900ff"
                    },
                    {
                        "lightness": 8
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "weight": 1.3
                    },
                    {
                        "lightness": 30
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#5e00ff"
                    },
                    {
                        "saturation": -16
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "stylers": [
                    {
                        "saturation": -72
                    }
                ]
            }
        ]);
        var mapUrl = "https://maps.googleapis.com/maps/api/staticmap?size=" + size + "x350&scale=2&zoom=12&center=" + location + "&style=" + styles + "&key=AIzaSyDCtN623rQpU2ARtvy-Uhzr-S7xfn5QYCs";
        $('.map').attr('src', mapUrl);
        function toStaticMapStyle(styles) {
            var result = [];
            styles.forEach(function (v, i, a) {
                var style = '';
                if (v.stylers.length > 0) {
                    style += (v.hasOwnProperty('featureType') ? 'feature:' + v.featureType : 'feature:all') + '|';
                    style += (v.hasOwnProperty('elementType') ? 'element:' + v.elementType : 'element:all') + '|';
                    v.stylers.forEach(function (val, i, a) {
                        var propertyname = Object.keys(val)[0];
                        var propertyval = val[propertyname].toString().replace('#', '0x');
                        style += propertyname + ':' + propertyval + '|';
                    });
                }
                result.push('style=' + encodeURIComponent(style));
            });
            return result.join('&');
        }
        ;
    };
    ;
    return AnnounceController;
}());
exports.AnnounceController = AnnounceController;
;
var CountdownClock = (function () {
    function CountdownClock(id, endtime) {
        this.endtime = endtime.toString();
        var clock = document.getElementById(id);
        this.daysSpan = clock.querySelector('.days');
        this.hoursSpan = clock.querySelector('.hours');
        this.minutesSpan = clock.querySelector('.minutes');
        this.secondsSpan = clock.querySelector('.seconds');
        this.updateClock();
        this.timeinterval = setInterval(this.updateClock.bind(this), 200);
    }
    ;
    CountdownClock.prototype.updateClock = function () {
        var t = this.getTimeRemaining();
        this.daysSpan.innerHTML = t.days;
        this.hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        this.minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        this.secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
            clearInterval(this.timeinterval);
        }
    };
    ;
    CountdownClock.prototype.getTimeRemaining = function () {
        var t = Date.parse(this.endtime) - Date.parse(new Date().toString());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };
    ;
    return CountdownClock;
}());
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3VuY2VDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQW5ub3VuY2VDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFPQTtJQUlJLDRCQUNJLHFCQUEwQixFQUMxQixZQUFvQixFQUNwQixXQUFtQjtRQUxmLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBUTlCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7SUFJTyw4Q0FBaUIsR0FBekIsVUFBMEIscUJBQTBCO1FBR2hELElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNsQixjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FFbkMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLHdCQUF3QixFQUFFO1lBQ3JELEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7U0FDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBRXBDLENBQUM7O0lBRU8sOENBQWlCLEdBQXpCO1FBQ0ksSUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekMsSUFBSSxjQUFjLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7O0lBR08sbUNBQU0sR0FBZCxVQUFlLFdBQW1CO1FBQzlCLElBQU0sUUFBUSxHQUFHLHdCQUF3QixDQUFDO1FBQzFDLElBQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQztRQUN6QixJQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQztZQUM1QjtnQkFDSSxhQUFhLEVBQUUsTUFBTTtnQkFDckIsU0FBUyxFQUFFO29CQUNQ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