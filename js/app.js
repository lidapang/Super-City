var Simulation = function() {

    var self = this,
        timer,
        MAX_LOG_ENTRIES = 20;

    for( var c in config ) {
        this[ c ] = config[ c ];
    }

    this.date = 0;

    this.start = function() {
        addToLog( 'starting Simulation' );
        startDay();
    }

    this.stop = function() {
        addToLog('Simulation ended');
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
}

var $btn_control = $( '.btn_control' ),
    config = {
        day_length: 1000,
        log_class: 'simulation-log'
    },
    Simulation = new Simulation( config );

$btn_control.on( 'click', function() {
    var type = $( this ).data( 'type' );

    switch( type ) {
        case 'start' :
            Simulation.start();
            break;
        case 'stop' :
            Simulation.stop();
            break;         
        default :
            console.log( 'Invalid button type' );   
    }

    console.log( type );
});
