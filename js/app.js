var $btn_control = $( '.btn_control' ),
    config = {
        day_length: 1000,
        area: {
            x: 100,
            y: 100,
            z: 100
        },
        log_class: 'simulation-log',
        viewport: 'viewport'
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
        case 'reset' :
            Simulation.reset();
            break;   
        default :
            console.log( 'Invalid button type' );   
    }

});
