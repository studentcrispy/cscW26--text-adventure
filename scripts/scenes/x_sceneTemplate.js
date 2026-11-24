import { createButtons, addButtons, restartButton } from "../dom.js";
import { changeScene, createPicture, removeFromDOM } from "../dom.js";
import { color } from "./3_colorbaby.js";

function  styleSchool() {
    console.log(`response good, scene school has run`);

    const div = createPicture(`school`)
    document.body.append(div);
    // document.body.style.backgroundColor = 'rgb(178, 176, 176)';


    
    const funny = document.createElement('img') // decorative image
    const restartBtn = restartButton(div, funny);
    restartBtn.onclick = function () {
        removeFromDOM([div, funny, restartBtn]);
        changeScene('start');
    }
    document.body.append(restartBtn)
}

export {styleSchool}