var City = function( config ) {

    var self = this,
        populateCity = function( config ) {
            var arrObjects = [],
                geometry = new THREE.BoxGeometry( 1, 1, 1 ),
                material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ),
                cube = new THREE.Mesh( geometry, material );

            arrObjects.push( cube );

            return arrObjects;
        }

    this.objects = populateCity();

}
