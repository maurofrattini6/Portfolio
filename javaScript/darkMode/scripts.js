const moonPath = "M12.5 27.5C12.5 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 12.5 12.3122 12.5 27.5Z";

const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";


const darkMode = document.querySelector("#darkMode");
let toggle = false;

//clickable function

darkMode.addEventListener('click', () => {

    //anime.js comes in

    //timeline setup
    
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });

    //add different animations
    timeline.add({
            targets: ".sun",
            d: [{
                value: toggle ? sunPath : moonPath
            }]
        })

        .add({
            targets: "#darkMode",
            rotate: toggle ? 0 : 320
        }, '-= 350')

        .add({
            targets: "section",
            backgroundColor: toggle ? 'rgb(199,199,199)' : 'rgb(22,22,22)',
        }, '-= 700')

        .add({
            targets: ".moon",
            opacity: toggle ? 0 : 1
        }, '-= 800')

    // toogle if statement 
    if (!toggle) {
        toggle = true;
    } else {
        toggle = false;
    }

});