const buttons = document.getElementsByClassName('colourButton');

function setButtonColour(button, red, green, blue) {
    button.setAttribute('style', 'background-color: rgb('+ red +','+ green +','+ blue +');'
    );
}

setButtonColour(buttons[0], 0, 0, 255);

function makeColourValue() {
    return Math.round(Math.random()*255);
}

const red = makeColourValue();
const green = makeColourValue();
const blue = makeColouoralue();

setButtonColour(buttons[0], red, green, blue);