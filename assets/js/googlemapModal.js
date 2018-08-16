
        function initialize() 
        {
            var myLatlng = new google.maps.LatLng(37.409448, 126.695204);
            var mapOptions = {
            zoom: 15,
            draggable: false,
            scrollwheel: false,
            center: myLatlng
        }
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        var marker = new google.maps.Marker
            ({
                position: myLatlng,
                map: map,
                title: 'Incheon Nonhyeon Prugio-city 2nd Project'
            });
        }

        google.maps.event.addDomListener(window, 'load', initialize);

        function initialize1() 
        {
            var myLatlng1 = new google.maps.LatLng(3.156649, 101.711308);
            var mapOptions1 = {
            zoom: 16,
            draggable: false,
            scrollwheel: false,
            center: myLatlng1
        }
        var map1 = new google.maps.Map(document.getElementById('map-canvas1'), mapOptions1);

        var marker1 = new google.maps.Marker
            ({
                position: myLatlng1,
                map: map1,
                title: 'KLCC Tower Project'
            });
        }

        google.maps.event.addDomListener(window, 'load', initialize1);
        
        $('#myModal').on('shown.bs.modal', function(){
            initialize();
        });
        $('#portfolioModal3').on('shown.bs.modal', function(){
            initialize();
        });