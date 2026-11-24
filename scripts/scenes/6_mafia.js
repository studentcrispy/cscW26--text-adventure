import { createButtons, addButtons, restartButton } from "../dom.js";
import { changeScene, createPicture, removeFromDOM } from "../dom.js";
import { makeBaby, makeSpeechBubble } from "../dom.js";


function styleMafia() {
    console.log(`response good, scene mafia has run`);

    const div = createPicture(`mafia`)
    document.body.append(div);
    document.body.style.backgroundColor = 'rgb(178, 176, 176)';

    const baby = makeBaby('normal');
    div.append(baby);
    baby.style.transform = 'scaleX(-1)'; // i love stackoverflow  https://stackoverflow.com/questions/3129099/how-to-flip-images-horizontally-with-html5
    baby.style.width = '8.5rem';
    baby.style.bottom = '4.5rem';
    baby.style.left = '22rem';

    //speech bubblee
    const speechBubble = makeSpeechBubble();
    div.append(speechBubble);
    speechBubble.style.top = '0.5rem'
    speechBubble.style.right = '14rem';
    speechBubble.style.cursor = 'pointer';
    const text = document.createElement('p');
    text.innerText = 'get stronk';
    speechBubble.append(text);
    text.style.position = 'absolute';
    text.style.top = '-0.85rem';
    text.style.left = '0.5rem';
    text.style.textDecoration = 'underline';

    // make it so that strength system appears once you click on his text
    let GUIenabled = false;
    speechBubble.onclick = function () {
        text.style.textDecoration = 'none';
        if (GUIenabled === false) {
            GUIenabled = true;
            speechBubble.style.cursor = 'default';
            text.style.left = '0.65rem';
            speechBubble.style.width = '22em';
            text.innerText = 'get to stronkness 25 if you want me to be ur dadday';

            startStrengthGame(div, funny, restartBtn);
        }

    }

    const funny = document.createElement('img') // decorative image
    const restartBtn = restartButton(div, funny);
    restartBtn.onclick = function () {
        removeFromDOM([div, funny, restartBtn]);
        changeScene('start');
    }
    document.body.append(restartBtn);


    // remove or comment what is below this line at the end
    // speechBubble.style.cursor = 'default';
    // text.style.left = '0.65rem';
    // speechBubble.style.width = '22em';
    // text.innerText = 'get to stronkness 25 if you want me to be ur dadday';

    // startStrengthGame(div, funny, restartBtn);
}


function startStrengthGame(div, funny, restartBtn) {
    let strength = 0;
    // strength = 24;
    const strengthTxt = document.createElement('p');
    const training1 = document.createElement('button'); // baby pushups
    const continueBtn = document.createElement('button'); // prolly coulda used createButtons function here but too lazy to do it noow
    const elements = ['empty haha', strengthTxt, training1, continueBtn];
    addButtons(elements, div);

    strengthTxt.innerText = `stronkness: ${strength}`;
    training1.innerText = `baby pushups (+1 strength)`;
    continueBtn.innerText = `continue`;

    for (let i = 1; i <= elements.length - 1; i++) {
        elements[i].style.position = `absolute`;
        elements[i].style.color = `rgba(0, 0, 0, 0.86)`;
        elements[i].style.backgroundColor = `rgba(199, 198, 198, 0.73)`;
        elements[i].style.fontSize = '1.3rem'
        elements[i].style.padding = '0.25rem 1rem'
        elements[i].style.fontFamily = 'serif';
        elements[i].style.border = 'none';
    }

    strengthTxt.style.animation = training1.style.animation = 'load 3s';
    strengthTxt.style.left = training1.style.left = '2rem';
    strengthTxt.style.bottom = '15rem';
    training1.style.bottom = '13rem';
    continueBtn.style.top = '6rem';
    continueBtn.style.right = '8rem';
    continueBtn.style.opacity = '0';

    let canClick = true;
    training1.onclick = function () {
        if (canClick && strength < 25) {
            strengthTxt.innerText = `stronkness: ${++strength}`;
            canClick = false;
            training1.style.cursor = 'default';
            training1.style.animation = 'load 0.40s';
            training1.style.color = 'rgb(160, 212, 212)';
            setTimeout(function () {
                canClick = true;
                training1.style.color = 'black';
                training1.style.cursor = 'pointer';
                // next 3 lines are  how AI told me to fix animation not working after first click
                training1.style.animation = '';
                training1.offsetHeight;
                training1.style.animation = 'load 0.35s'
            }, 400);
        }
        if (strength === 25) {
            training1.style.cursor = 'default';
            canClick = false;
            continueBtn.style.cursor = 'default';
            continueBtn.style.animation = 'load 4s';
            setTimeout(function () {
                canClick = true;
                continueBtn.style.opacity = '1';
                continueBtn.style.cursor = 'pointer';

            }, 4067)
            continueBtn.onclick = function () {
                if (canClick === true) {
                    removeFromDOM([div, funny, restartBtn]);
                    changeScene('mafia_2');
                }
            }
        }
        else { // 26th button click kinda happens and messes up some stuff
            canClick =  false;
        }
    }

    // used AI here cause i was trying const keyFrames to animation in js directly
    const style = document.createElement('style');
    style.innerText = `
    @keyframes load {
        0%      {opacity: 0;}
        100%    {opacity: 1;}
    }
    @keyframes loadWeird {
        0%      {opacity: 0;}
        25%     {opacity: 0.5;}
        40%     {oapctiy: 0;}
        70%     {opacity: 0.4;}
        100%    {opacity:1;}
    }`;
    document.head.append(style);
}

export { styleMafia }

// baby pushups (+1 strength)
// carrot curls (+2 strength)  (25 strength needed / 25 clicks)
// pumpkin press (+4 strength) (65 strength needed / 20 clicks)
// romanian bread lift (+8 strength) (125 strength needed / 15 clicks)