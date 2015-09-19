var Model = function( viewport, city ) {
    // generate viewport
    var self = this,
        scene = new THREE.Scene(),
        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ),
        renderer = new THREE.WebGLRenderer();

    // set the renderer in the page
    renderer.setSize( viewport.offsetWidth, viewport.offsetHeight );
    viewport.appendChild( renderer.domElement );

    this.render = function() {
        drawObjects();
        renderer.render( scene, camera );        
    }

    var drawObjects = function() {
        var cntObjects = city.objects.length;

        for( var o = 0; o < cntObjects; o++ ) {
            scene.add( city.objects[ o ] );
        }

        camera.position.z = 5;
    }
}
