import { createButtons, addButtons, restartButton } from "../dom.js";
import { changeScene, createPicture, removeFromDOM } from "../dom.js";
import { makeBaby } from "../dom.js";

function styleLifePath() {
    console.log(`response good, scene life_path has run`);

    const div = createPicture(`life_path`)
    document.body.append(div);
    document.body.style.backgroundColor = 'rgb(178, 176, 176)';

    const choice = createButtons(2);
    addButtons(choice, div);
    for (let i = 1; i <= 2; i++) {
        choice[i].style.backgroundColor = 'rgba(255,255,255,0)';
        choice[i].style.position = 'absolute';
        choice[i].style.top = '9.5rem';
        choice[i].style.width = '12.5rem';
        choice[i].style.height = '4.5rem';
        choice[i].style.border = 'none';
        choice[i].addGregorListener(
            'boxShadow',
            '28px -21px 2022px 2000px #000000',
            '0 0 0 0 #000000')
    }
    choice[1].style.left = '1.65rem';
    choice[2].style.right = '2rem';
    choice[1].onclick = function () {
        removeFromDOM([div, restartBtn, funny]);
        changeScene('school');
    }
    choice[2].onclick = function () {
        removeFromDOM([div, restartBtn, funny]);
        changeScene('mafia');
    }

    // funny baby pic based on what you chose
    // const babyImg = document.createElement('img');
    // div.append(babyImg);
    // console.log(`current color is ${color}`);
    // babyImg.src = `../../images/${color}_baby_small.png`
    const baby = makeBaby('normal');
    div.append(baby);
    baby.style.bottom = '0.5rem';
    baby.style.left = '12rem';


    //text wall
    const textWall = createTextWall(4, div);
    textWall[1].innerText = columnText[1];
    textWall[2].innerText = columnText[2];
    textWall[3].innerText = columnText[3];
    textWall[4].innerText = columnText[4];
    textWall.appendWall(div);
    
    const funny = document.createElement('img') // decorative image
    const restartBtn = restartButton(div, funny);
    restartBtn.onclick = function () {
        removeFromDOM([div, funny, restartBtn]);
        changeScene('start');
    }
    document.body.append(restartBtn)
}

export { styleLifePath }

function createTextWall(columns) {
    const wall = ['empty haha'];
    wall.appendWall = function (div) {
        for (let i = 1;  i <= columns; i++)
            div.append(wall[i]);
    
    }
    let left = -13;
    for (let i = 1; i <= columns; i++) {
        wall[i] = document.createElement('p');
        wall[i].style.position = 'absolute';
        wall[i].style.top = '-1rem';        // wow i feel so smart terary operator
        wall[i].style.left = `${left}rem`; (i == 2) ? left += 4 : left += 2.5;
        wall[i].style.fontSize = '1.5rem';
        wall[i].style.fontWeight = 'bold';
        wall[i].style.fontFamily = 'sans-serif';
        wall[i].style.width = '1.5rem';
        wall[i].style.padding = '0.5rem 1rem'
        wall[i].style.textAlign = 'center';
        wall[i].style.borderRadius = '2rem';
        wall[i].style.cursor = 'default';
    }
    return wall;
}

const columnText = [``, `Y o u 
    
    e n c o u n t e r 
    
    a
    `,
    `c r o s s r o a d s.`,
    `W h a t
    
    w i 
    l
     l
     
    y o u `,
    `c h o o s e ?`]
