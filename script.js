require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/Camera",
  "esri/widgets/Home",
  "dojo/domReady!"
], function(WebScene, SceneView, Camera, Home) {


  /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
  var scene = new WebScene({
    basemap: "dark-gray-vector",
    portalItem:{
      id:"8046207c1c214b5587230f5e5f8efc77" 
    }
  });

  var camera = new Camera({
    position: [
      -71.060217,
      42.382655,
      2500// elevation in meters
    ],
    tilt:0,
    heading: 0
  })

  var camera2 = new Camera({
    position: {
      longitude: -71.0589,
      latitude: 42.3601,
      z: 3000 // elevation in meters
    }, 
  });
  
  var camera3 = new Camera({
    position: {
      longitude: -71.0957,
      latitude: 42.3462,
      z: 2000
    },
  });
  
    var camera4 = new Camera({
    position: {
      longitude: -70.98746,
      latitude: 42.34340,
      z: 100 // elevation in meters
    },
    tilt: 85,
    heading: 270
  });

  var view = new SceneView({
    container: "viewDiv",
    map: scene,
    camera: camera
  });

  var homeBtn = new Home({
    view: view
  });

  // Add the home button to the top left corner of the view
  view.ui.add(homeBtn, "top-left");

  [v1, v2, v3].forEach(function(button) {
    button.style.display = 'flex';
    view.ui.add(button, 'top-right');
  });

  v1.addEventListener('click', function() {
    // reuse the default camera position already established in the homeBtn
    view.goTo({
      target:camera2
    });
  });

  v2.addEventListener('click', function() {
    // reuse the default camera position already established in the homeBtn
    view.goTo({
      target:camera3
    });
  });
  
  v3.addEventListener('click', function() {
    // reuse the default camera position already established in the homeBtn
    view.goTo({
      target:camera4
    });
  });

});