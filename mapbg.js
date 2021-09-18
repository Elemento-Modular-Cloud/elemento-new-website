const styles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffc600"
            },
            {
                "lightness": 17
            }
        ]
    }
]

$(document).ready(function(){
    var lat = -31.9600;
    var long = 115.8300;

    navigator.geolocation.getCurrentPosition((position) => {
        console.log("Getting your position");
        lat = position.coords.latitude;
        long = position.coords.longitude;

        google.maps.event.addDomListener(window, 'load', init);
    
        function init() {
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 15,

            disableDefaultUI: true,
    
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(lat, long), // Kings Park
    
            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: styles
        };
    
        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');
    
        // Create the Google Map using out element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);
        }
    },
    () => {
        console.log("Defaulting to Cuneo");
        lat = 44.384477
        long = 7.542671

        google.maps.event.addDomListener(window, 'load', init);
    
        function init() {
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 15,

            disableDefaultUI: true,
    
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(lat, long), // Kings Park
    
            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: styles
        };
    
        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');
    
        // Create the Google Map using out element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);
        }
    },
    { timeout: 500});
  });