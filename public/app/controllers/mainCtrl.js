angular.module('mainController', [])
    .controller('mainCtrl', function ($window) {

        var app = this;

        // jquery code 
        $(function () {

            // display Map 
            map = $('#map');
            var myMap;

            function getmyposition() {
                // availability
                if (navigator.geolocation) {
                    // get permisiion
                    navigator.geolocation.getCurrentPosition(getposition, errorhandeler);

                    map.css({ 'width': '100%', 'display': 'block', 'height': '350px' });
                    // map.style.width = "100%";
                    // map.style.display = "block";
                    // map.style.height = "300px";

                }
                else {
                    map.innerText = "Sorry ! Not Supported Geolocation !";
                }
            }

            function getposition(position) {

                lat = position.coords.latitude;
                lon = position.coords.longitude;
                accuracy = position.coords.accuracy;
                timeStamp = position.timestamp;

                coords = new google.maps.LatLng(lat, lon);
                paramas = {
                    zoom: 15,
                    center: coords,
                    disableDefaultUI: true,
                    scrollwheel: false,
                    // navigationControl: false,
                    // mapTypeControl: false,
                    // scaleControl: false,
                    draggable: false
                };

                myMap = new google.maps.Map(document.getElementById('map'), paramas);
                var MyMarker = new google.maps.Marker({
                    position: coords,
                    icon: {
                        url: "assets/images/markbig.png",
                        scaledSize: new google.maps.Size(32, 32)
                    }
                });

                MyMarker.setMap(myMap);

            }

            // to make the map responsive
            $(window).resize(function () {
                myMap.setCenter(coords);
            });

            function errorhandeler(error) {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        map.innerText = "PERMISSION_DENIED";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        map.innerText = "POSITION_UNAVAILABLE";
                        break;
                    case error.TIMEOUT:
                        map.innerText = "TIMEOUT";

                        break;
                    case error.UNKOWN_ERROR:
                        map.innerText = "UNKOWN_ERROR";

                        break;

                }
            }



            getmyposition();

            //style navbar when scrolling
            $(document).scroll(function () {
                if ($(this).scrollTop() > 100)
                    $('.navbar-default').addClass('navbar-fixed-top').css('border-bottom', '1px solid #f4f4f4')
                else
                    $('.navbar-default').removeClass('navbar-fixed-top').css('border-bottom', 'none')
            });


            // scroll to top code 
            scrollTop = $('#scroll-top');
            scrollTop.click(function () {
                $('html,body').animate({ 'scrollTop': '0' }, 600)
            })


        }) // end of jquery code



        // loader
        angular.element($window).bind('load', function () {

            $(".loading-overlay .spinner").fadeOut(500,
                function () {
                    $(this).parent().fadeOut(500,
                        function () {
                            $("body").css("overflow", "auto")
                            $(this).remove();
                        })
                })
        });


    });







