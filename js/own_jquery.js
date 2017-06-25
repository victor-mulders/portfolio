
// Logo in laten schuiven wanneer er op wordt geklikt

$( "#vmknop" ).click(function() {
    $( "#vmlogo" ).slideUp( "slow", function() {
        // Animation complete.
    });
});


