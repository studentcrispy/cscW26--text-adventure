import { addButtons, createButtons,restartButton } from "../dom.js";
import { changeScene, createPicture, removeFromDOM } from "../dom.js";


function styleFirst() {
    console.log(`response good, scene 1 has run`);

    const div = createPicture('first');
    document.body.append(div);

    document.body.style.backgroundColor = 'black';
    const choice = createButtons(2);
    console.log(choice);
    choice[1].innerText = 'Stay Dead';
    choice[2].innerText = 'Be Born';
    for (let i = 1; i <= 2;  i++) {
        choice[i].style.fontFamily = `'Tiny5 Duo', sans-serif`;
        choice[i].style.position = `absolute`;
        choice[i].style.top = `23rem`;
        choice[i].style.fontSize = `1.8rem`;
        choice[i].style.fontWeight = `bold`;
        choice[i].style.backgroundColor = `rgb(130, 130, 130)`;
        // add choice[i] shadows and inverted shadows
       choice[i].addGregorListener('backgroundColor', 'white',  'rgb(130, 130, 130)');

    }
    choice[1].style.left = '1rem';
    choice[1].style.padding = '0.5rem 0.8rem';
    choice[1].onclick = function () {
        removeFromDOM([div,  funny, restartBtn]);
        changeScene('e_1_voidling');
    }
    choice[2].style.right = '1rem';
    choice[2].style.padding = '0.5rem 1.6rem';
    choice[2].onclick = function (){
        removeFromDOM([div,  funny, restartBtn]);
        changeScene('baby');
    }
    addButtons(choice, div);

    const funny = document.createElement('img') // decorative image
    const restartBtn = restartButton(div, funny);
    restartBtn.onclick = function () {
        removeFromDOM([div, funny, restartBtn]);
        changeScene('start');
    }
    // document.body.append(restartBtn);
    document.body.append(restartBtn)
}

export {styleFirst};