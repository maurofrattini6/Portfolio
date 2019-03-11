// longitude and latitude 
window.addEventListener('load', () => {
    let long;
    let lat;

    let tempDescription = document.querySelector('.temp-description');
    let tempDegree = document.querySelector('.temp-degree');
    let locationTimezone = document.querySelector('.location-timezone')

    let tempSection = document.querySelector('.temp');
    let tempSpan = document.querySelector('.temp span');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/5940f926d19e221cdf365f338409f5b7/${lat},${long}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const {
                        temperature,
                        summary,
                        icon
                    } = data.currently;

                    //set DOM elements from the API
                    tempDescription.textContent = summary;
                    tempDegree.textContent = temperature;
                    locationTimezone.textContent = data.timezone;


                    //celsius formula

                    let celsius = (temperature - 32) * (5/9);

                    //set Icons

                    setIcons(icon, document.querySelector('.icon'));


                    //change temp to celsius/farenheit

                    tempSection.addEventListener("click", () => {

                        if (tempSpan.textContent === "F") {
                            tempSpan.textContent = "C";
                            tempDegree.textContent = Math.floor(celsius); 
                        } else {
                            tempSpan.textContent = "F";
                            tempDegree.textContent = temperature;
                        }
                    });




                });
        });
    }

    function setIcons(icon, iconID) {
        const skycons = new Skycons({
            color: "white"
        });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});