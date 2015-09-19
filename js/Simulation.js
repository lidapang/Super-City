var Simulation = function() {

    var self = this,
        timer,
        MAX_LOG_ENTRIES = 20;

    for( var c in config ) {
        this[ c ] = config[ c ];
    }

    this.date = 0;

    // generate viewport
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    // get viewport size
    var viewport = document.getElementById( this.viewport );

    console.log( viewport.offsetWidth, viewport.offsetHeight );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( viewport.offsetWidth, viewport.offsetHeight );
    viewport.appendChild( renderer.domElement );

    this.start = function() {
        addToLog( 'starting Simulation' );
        startDay();
    }

    this.stop = function() {
        addToLog('Simulation ended');
        clearTimeout( timer );
    }

    this.reset = function() {
        this.date = 0;
        clearLog();
        clearTimeout( timer );
    }    

    var startDay = function() {
        self.date++;
        addToLog( 'Day ' + self.date + ' has started' );
        timer = setTimeout( endOfDay, self.day_length );
    }

    var endOfDay = function() {
        addToLog( 'Day ' + self.date + ' has ended' );
        startDay();
    }

    var addToLog = function( msg ) {
        $log = $( '#' + self.log_class );

        // check count of log entries
        $entries = $log.find( 'li' );

        cnt_entries = $entries.length;

        if( cnt_entries >= MAX_LOG_ENTRIES ) {
            $entries[ 0 ].remove();
        }

        $log.append( '<li>' + msg + '</li>' );
    }

    var clearLog = function() {
        $log = $( '#' + self.log_class );

        $log.empty();
    }
}