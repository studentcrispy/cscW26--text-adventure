import { createButtons, addButtons, restartButton } from "../dom.js";
import { changeScene, createPicture, removeFromDOM } from "../dom.js";

function styleBaby() {
    console.log('response good,  scene baby has run')
    //i  want to style buttons  differently 
    // if i dont recreate and delete them for every scene
    // then the styles used in previous scenes stay on the buttons
    // thus i use new buttons every scene
    const choice = createButtons(3);
    console.log(choice);
    const white = 'rgb(255, 255, 255)';
    console.log(`scene 2 run`);

    const div = createPicture('baby');
    document.body.append(div);

    document.body.style.backgroundColor = white;
    for (let i = 1; i <= 3; i++) { //  buttons
        choice[i].style.display = 'block';
        choice[i].style.position = `absolute`;
        choice[i].style.left = `3rem`;
        choice[i].style.fontSize = `2rem`;
        choice[i].style.fontWeight = `bold`;
        choice[i].style.padding = '1rem 0rem';
        choice[i].style.fontFamily = 'sans-serif';
        choice[i].style.width = '15rem';
        choice[i].style.borderRadius = '2rem';
    }
    choice[1].innerText = 'Banana';
    choice[2].innerText = 'Green Apple';
    choice[3].innerText = 'Strawberry';

    choice[1].style.top = '4rem';
    choice[2].style.top = '11rem';
    choice[3].style.top = '18rem';
    choice[1].addGregorListener('backgroundColor', 'rgb(252, 255, 94)', white);
    choice[2].addGregorListener('backgroundColor', 'rgb(73, 241, 67)', white);
    choice[3].addGregorListener('backgroundColor', 'rgb(233, 37, 37)', white);
    choice[1].onclick = function () {
        removeFromDOM([div, funny, restartBtn]);
        changeScene('yellow_baby')
    }
    choice[2].onclick = function () {
        removeFromDOM([div, funny, restartBtn]);
        changeScene('green_baby')
    }
    choice[3].onclick = function () {
        removeFromDOM([div, funny, restartBtn]);
        changeScene('red_baby')
    }
    addButtons(choice, div);

    const text =  document.createElement('p');
    div.append(text);
    text.innerText = `C h o o s e \u00a0 \ F r u i t`;
    text.style.position = 'absolute';
    text.style.top = '-1.9rem';
    text.style.left = '-5.1rem'
    text.style.backgroundColor  = 'rgba(248, 240, 208, 0.78)';
    text.style.fontSize = '2.2rem';
    text.style.fontWeight = 'bold';
    text.style.fontFamily = 'sans-serif';
    text.style.width = '1.5rem';
    text.style.padding = '0.5rem 1rem'
    text.style.textAlign = 'center';
    text.style.borderRadius = '2rem';
    text.style.cursor = 'default';

    const funny = document.createElement('img') // decorative image
    const restartBtn = restartButton(div, funny);
    restartBtn.onclick = function () {
        removeFromDOM([div, funny, restartBtn]);
        changeScene('start');
    }
    document.body.append(restartBtn);
}

export { styleBaby };