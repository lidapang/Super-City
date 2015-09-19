var Simulation = function() {

    for( var c in config ) {
        this[ c ] = config[ c ];
    }

    var self = this,
        timer,
        MAX_LOG_ENTRIES = 20,
        city = new City({}),
        viewport = document.getElementById( this.viewport_id ),
        model = new Model( viewport, city );

    this.date = 0;

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

        model.render();
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