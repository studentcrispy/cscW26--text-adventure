import { createButtons, addButtons, restartButton } from "../dom.js";
import { changeScene, createPicture, removeFromDOM } from "../dom.js";
import { makeBaby, makeSpeechBubble } from "../dom.js";
import { color } from "./3_colorbaby.js";

// FULL ON copy paste mafia_3 and rewriting accordingly

function styleMafia4() {
    console.log(`response good, scene mafia has run`);

    const div = createPicture(`mafia_4`)
    document.body.append(div);
    document.body.style.backgroundColor = 'rgb(178, 176, 176)';

    const baby = makeBaby('elite');
    div.append(baby);
    baby.style.transform = 'scaleX(-1)';
    baby.style.width = '6rem';
    baby.style.height = '9rem';
    baby.style.bottom = '8.5rem';
    baby.style.left = '27rem';
    // if( color === 'red'){
    //     baby.style.width = '16rem'
    //     baby.style.left = '0.5em';
    // }
    //speech bubblee
    const speechBubble = makeSpeechBubble();
    div.append(speechBubble);
    speechBubble.style.bottom = '11.2rem';
    speechBubble.style.left = '13rem';
    speechBubble.style.cursor = 'pointer';
    speechBubble.style.width = '13.1rem';
    speechBubble.style.height = '2.35rem';
    const text = document.createElement('p');
    text.innerText = 'i want to rule the world';
    speechBubble.append(text);
    text.style.fontSize = '1.3rem';
    text.style.position = 'absolute';
    text.style.top = '-0.85rem';
    text.style.left = '0.5rem';
    text.style.textDecoration = 'underline';

    let GUIenabled = false;
    speechBubble.onclick = function () {
        text.style.textDecoration = 'none';
        if (GUIenabled === false) {
            GUIenabled = true;
            speechBubble.style.cursor = 'default';
            text.style.left = '0.65rem';
            speechBubble.style.width = '15.5em';
            speechBubble.style.height = '2.15rem'
            speechBubble.style.left = '10.7rem';
            speechBubble.style.bottom = '11.5rem';
            text.innerText = 'for that I need 250 strength.';

            startStrengthGame(div, funny, restartBtn);
        }

    }

    const funny = document.createElement('img') // decorative image
    const restartBtn = restartButton(div, funny);
    restartBtn.onclick = function () {
        removeFromDOM([div, funny, restartBtn]);
        changeScene('start');
    }
    document.body.append(restartBtn)

    // remove or comment what is below this line at the end
    // speechBubble.style.cursor = 'default';
    // text.style.left = '0.65rem';
    // speechBubble.style.width = '15.5em';
    // speechBubble.style.height = '2.15rem'
    // speechBubble.style.left = '10.7rem';
    // speechBubble.style.bottom = '11.5rem';
    // text.innerText = 'for that I need 250 strength.';

    // startStrengthGame(div, funny, restartBtn);
}

function startStrengthGame(div, funny, restartBtn) {
    let strength = 120;
    // strength = 250;
    const strengthTxt = document.createElement('p');
    const training = createButtons(4); // baby, pushups, carrot curls
    const continueBtn = document.createElement('button'); // prolly coulda used createButtons function here but too lazy to do it noow
    const elements = ['empty haha', strengthTxt, training[1], training[2], training[3], training[4], continueBtn];
    addButtons(elements, div);

    strengthTxt.innerText = `stronkness: ${strength}`;
    training[1].innerText = `baby pushups (+1 strength)`;
    training[2].innerText = `carrot pushups (+2 strength)`;
    training[3].innerText = `pumpkin press (+4 strength)`;
    training[4].innerText = `romanian bread lift (+8 strength)`;
    continueBtn.innerText = `continue`;

    for (let i = 1; i <= elements.length - 1; i++) {
        elements[i].style.position = `absolute`;
        elements[i].style.color = `rgba(0, 0, 0, 0.86)`;
        elements[i].style.backgroundColor = `rgba(199, 198, 198, 0.73)`;
        elements[i].style.fontSize = '1.3rem'
        elements[i].style.padding = '0.25rem 1rem'
        elements[i].style.fontFamily = 'serif';
        elements[i].style.border = 'none';
        if (i != elements.length - 1) {
            elements[i].style.animation = 'loadWeird 3s';
            elements[i].style.left = '2rem';
        }
    }

    strengthTxt.style.top = '1rem';
    training[1].style.top = '5.1rem';
    training[2].style.top = '8rem';
    training[3].style.top = '10.9rem';
    training[4].style.top = '13.8rem';


    continueBtn.style.bottom = '6rem';
    continueBtn.style.right = '8rem';
    continueBtn.style.opacity = '0';

    console.log(training);
    for (let i = 1; i <= training.length - 1; i++) {
        let canClick = true;
        let time, increase;
        switch (i) {
            case 1:
                time = 450;
                increase = 1;
                break;
            case 2:
                time = 1.85;
                increase = 2;
                break;
            case 3:
                time = 3.2;
                increase = 4;
                break;
            case 4:
                time = 6.00;
                increase = 8;
                break;
            default:
                console.log('loop will never get here')
        }
        console.log(`i is: ${i}`);
        training[i].onclick = function () {
            console.log(`i:${i}, time:${time}, increase:${increase}, strength:${strength}`);
            if (canClick && strength < 250) {
                (strength + increase <= 250) ? strength += increase : strength = 250;
                strengthTxt.innerText = `stronkness: ${strength}`;
                canClick = false;
                training[i].style.cursor = 'default';
                training[i].style.animation = '';
                training[i].offsetHeight;
                training[i].style.color = 'rgb(160, 212, 212)';
                (i == 1) ? training[i].style.animation = `load 0.${time}s` : training[i].style.animation = `load ${time}s`;
                setTimeout(function () {
                    canClick = true;
                    training[i].style.color = 'black';
                    training[i].style.cursor = 'pointer';
                    // next 3 lines are  how AI told me to fix animation not working after first click
                    training[i].style.animation = '';
                    training[i].offsetHeight;
                    // (i == 1) ? training[i].style.animation = `load 0.${time}s` : training[i].style.animation = `load ${time}s`;
                    training[i].style.animation = 'load 0.2s'; // rolled a nat20 on mental clarity - fixed it so it refreshed at the end instead of doing animation twice 
                }, (i == 1) ? time : time * 1000);
            }
            if (strength === 250) {
                training[i].style.cursor = 'default';
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
                        changeScene('e_2_mafia');
                    }
                }
            }
            else { // 26th button click kinda happens and messes up some stuff
                canClick = false;
            }
        }
    }

    // for some reason deleting this doesnt work? even tho head should have 
    // keyframes already loaded from  previous scene
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


export { styleMafia4 };

// baby pushups (+1 strength)
// carrot curls (+2 strength)  (25 strength needed / 25 clicks)
// pumpkin press (+4 strength) (65 strength needed / 20 clicks)
// romanian bread lift (+8 strength) (125 strength needed / 15 clicks)