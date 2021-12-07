
$(document).ready(
    function() {
        $("#name-container:nth-child(3)").click(function() {
        	// $('#bio-container').css('display', 'flex');
            $("#bio-copy").fadeToggle();
            $("#bio-copy:nth-child(2)").fadeToggle();
        });
    });


$(document).ready(function() { 
	$('#play-button').click(function() {
        $("#myAudioElement")[0].play();
    	});

	$('#pause-button').click(function() {
        $("#myAudioElement")[0].pause();
    	});
});