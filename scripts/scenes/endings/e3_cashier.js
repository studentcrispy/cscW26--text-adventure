import { createPicture, addButtons, createButtons, changeScene } from "../../dom.js";
import { color } from "../3_colorbaby.js";
function styleCashierEnd() {
    console.log('ending 3 cashier run')

    console.log(`current color is ${color.name}`);
    const div  = createPicture('e_3_cashier');
    div.style.marginRight = '16rem';
    document.body.append(div);

    const choice = createButtons(1);

    document.body.style.backgroundColor = 'black';

    choice[1].innerText = 'return to start' // text
    choice[1].style.fontFamily = `'Tiny5 Duo', sans-serif`; // design
    choice[1].style.fontSize = `2rem`;
    choice[1].style.fontWeight = `bold`;
    choice[1].style.position = `absolute`; // positioning
    choice[1].style.left = '-5rem';
    // all above can be a possible class 1
    choice[1].style.backgroundColor = `rgb(170, 170, 170)`;
    choice[1].style.bottom = '0.5rem';
    choice[1].style.width = '20rem';
    choice[1].onclick = function () {
        div.remove();
        changeScene('start');
    };
    addButtons(choice,div);

    const bigText = document.createElement('h1'); // create ending main text
    bigText.innerText = `Ending 3: Cashier`;
    bigText.style.backgroundColor = `rgb(170, 170, 170)`;
    bigText.style.fontFamily = `'Tiny5 Duo', sans-serif`; // design
    bigText.style.fontSize = `2.5rem`;
    bigText.style.fontWeight = `bold`;
    bigText.style.backgroundColor = `rgb(245, 245, 245)`;
    bigText.style.position = `absolute`; // positioning
    bigText.style.display = 'block';
    // all above can be a possible class 1
    bigText.style.top = '-1rem';
    bigText.style.left  = '-5rem';
    bigText.style.width = '20rem';
    bigText.style.textAlign = 'center';

    const description = document.createElement('p');
    description.innerText = `you are happy,
                        being a cashier 
                        is pretty nice.
                        
                        Sometimes you 
                        wish you didn't 
                        quit school
            `;
    description.style.color = 'rgb(170, 170, 170)';
    description.style.fontFamily = `'Explora', serif`;
    description.style.fontSize = '3rem';
    description.style.position = 'absolute';
    description.style.right = '-16rem';
    description.style.width = '15rem';
    description.style.top = '-0.5rem';

    div.append(bigText);
    div.append(description);
}

export { styleCashierEnd };