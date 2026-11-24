import { createPicture, addButtons, createButtons, changeScene } from "../../dom.js";

function styleVoidling() {
    console.log('ending 1 voidling run')

    const div  = createPicture('e_1_voidling');
    document.body.append(div);

    const choice = createButtons(1);

    document.body.style.backgroundColor = 'black';

    choice[1].innerText = 'return to start' // text
    choice[1].style.fontFamily = `'Tiny5 Duo', sans-serif`; // design
    choice[1].style.fontSize = `2rem`;
    choice[1].style.fontWeight = `bold`;
    choice[1].style.position = `absolute`; // positioning
    choice[1].style.right = '-3rem';
    // all above can be a possible class 1
    choice[1].style.backgroundColor = `rgb(170, 170, 170)`;
    choice[1].style.bottom = '2rem';
    choice[1].style.width = '30rem';
    choice[1].onclick = function () {
        div.remove();
        changeScene('start');
    };
    addButtons(choice,div);

    const bigText = document.createElement('h1'); // create ending main text
    bigText.innerText = `Ending 1: Voidling`;
    bigText.style.backgroundColor = `rgb(170, 170, 170)`;
    bigText.style.fontFamily = `'Tiny5 Duo', sans-serif`; // design
    bigText.style.fontSize = `2.5rem`;
    bigText.style.fontWeight = `bold`;
    bigText.style.backgroundColor = `rgb(245, 245, 245)`;
    bigText.style.position = `absolute`; // positioning
    bigText.style.display = 'block';
    // all above can be a possible class 1
    bigText.style.top = '-0.5rem';
    bigText.style.left  = '-2.5rem';
    bigText.style.width = '31rem';
    bigText.style.textAlign = 'center';

    const description = document.createElement('p');
    description.innerText = `you chose to remain a dweller of the void,
                        forever nothing.`;
    description.style.color = 'rgb(170, 170, 170)';
    description.style.fontFamily = `'Explora', serif`;
    description.style.fontSize = '3rem';
    description.style.position = 'absolute';
    description.style.right = '-16rem';
    description.style.width = '15rem';
    description.style.top = '8.5rem';

    div.append(bigText);
    div.append(description);
}

export  {styleVoidling}