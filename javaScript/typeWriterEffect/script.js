const texts = ['WELCOME ', 'THIS IS THE ', 'TYPEWRITER ', 'EFFECT '];

//sleep function///
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

let count = 0;
let index = 0;
let currentText = '';
let letter = 0;

//typewriter function
(function type() {
    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);


    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        sleep(1000);

    }
    setTimeout(type, 300);
    
}());
