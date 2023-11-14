


    function playMusic() {
        let audio = new Audio("./sounds/ekdin.mp3");
        audio.play()
    }
    function animatePress(){
        $("#tap").addClass("pressed");
    
        setTimeout(function(){
            $("#tap").removeClass("pressed");
        },100);
    };
    
      