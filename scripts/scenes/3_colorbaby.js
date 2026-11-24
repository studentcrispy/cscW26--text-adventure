import { createButtons, addButtons, restartButton } from "../dom.js";
import { changeScene, createPicture, removeFromDOM } from "../dom.js";

const description = [
    {
        'color': 'yellow',
        'text': `The happy yellow baby smiles at you
            with sunshine in their eyes!`
    },
    {
        'color': 'green',
        'text': `The calm green baby smiles at you
            with the peace of nature in their eyes!`
    },
    {
        'color': 'red',
        'text': `The excited red baby smiles at you
            with thirst for adventure in their eyes`
    }
]

const color = {
    name: "",
    changeColor: function(name) {
        color.name = name;
    }
}

function styleYellowBaby() {
    color.changeColor("yellow")
    styleColorBaby(color.name);
}

function styleGreenBaby() {
    color.changeColor("green")
    styleColorBaby(color.name);
}

function styleRedBaby() {
    color.changeColor("red")
    styleColorBaby(color.name);
}

function styleColorBaby(color) {
    console.log(`response good, scene ${color} baby has run`);

    const div = createPicture(`${color}_baby`);
    document.body.append(div);

    // text deco
    const text = document.createElement('p')
    const index = description.findIndex(x => x.color === color);
    text.innerText = description[index].text;
    text.style.position = 'absolute';
    text.style.top = '2rem';
    text.style.left = '2rem';
    text.style.fontSize = '2rem'
    if (color === 'red' || color === 'green')
        text.style.fontSize = '1.75rem';
    text.style.fontWeight = 'bold';
    text.style.width = '17rem';
    text.style.textAlign = 'center';
    text.style.backgroundColor = 'rgba(255, 255, 255, 0.68)';
    text.style.padding = '1.5rem 2.5rem'
    text.style.borderRadius = '5rem';
    div.append(text);

    const choice = createButtons(1);
    addButtons(choice, div)

    choice[1].innerText = 'Continue';
    choice[1].style.display = 'block';
    choice[1].style.position = `absolute`;
    choice[1].style.left = `7.5rem`;
    choice[1].style.bottom = '12rem';
    choice[1].style.fontSize = `1.5rem`;
    choice[1].style.fontWeight = `bold`;
    choice[1].style.padding = '0.5rem 0rem';
    choice[1].style.width = '10rem';
    choice[1].style.borderRadius = '2rem';
    choice[1].addGregorListener('backgroundColor', 'rgb(211, 212, 212)', 'white');
    choice[1].onclick = function () {
        removeFromDOM([div, funny, restartBtn]);
        changeScene('life_path');
        
    }


    const funny = document.createElement('img') // decorative image
    const restartBtn = restartButton(div, funny);
    restartBtn.onclick = function () {
        removeFromDOM([div, funny, restartBtn]);
        changeScene('start');
    }
    document.body.append(restartBtn);
}

export { styleYellowBaby, styleGreenBaby, styleRedBaby, color };