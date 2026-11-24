import { createPicture, createButtons, addButtons, changeScene } from "../dom.js";

function styleStart() {
    console.log(`response good, start scene has run`);

    const div = createPicture('start');
    document.body.style.backgroundColor = 'white';
    div.style.backgroundColor = 'rgb(249, 255, 255)';

    // too much time to fix this
    // const width = document.body.scrollWidth;
    // const height = document.body.scrollHeight;
    // console.log(`width is ${width} and height is ${height}`);
    // const canvas = document.createElement('canvas');
    // canvas.width = `${width}`; canvas.height = `${height}`;
    // const ctx = canvas.getContext("2d");
    // const colors = ['black', 'blue'];
    // for (let i = 0; i * 25 <= width; i++) {
    //     for (let j = 0; j * 10 <= height; j++){
    //         ctx.fillStyle  = `${colors[(j+i) % 2]}`;
    //         ctx.fillRect(j * 25, i * 25, 25, 25);
    //     }
    // }
    // ctx.fillStyle = 'blue';
    // ctx.fillRect(0,0,100,100);
    // canvas.style.position = 'absolute';
    // canvas.style.top = '0';
    // canvas.style.left = '0';
    // document.body.append(canvas);

    document.body.append(div);

    const choice = createButtons(1);
    choice[1].innerText = 'start game';

    choice[1].style.padding = '2rem 2rem';
    choice[1].style.position = 'absolute';
    choice[1].style.top = '40%';
    choice[1].style.left = '42%';

    choice[1].onclick = function() {
        div.remove();
        changeScene('first');
    }
    addButtons(choice, div);
}

export { styleStart }