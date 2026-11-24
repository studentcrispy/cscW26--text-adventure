import { sceneList } from "./scenes/sceneList.js";
import { styleFirst } from "./scenes/1_First.js";
import { styleStart } from "./scenes/0_start.js";
import { styleBaby } from "./scenes/2_Baby.js";
import { styleVoidling } from "./scenes/endings/e0_voidling.js";
import { styleYellowBaby, styleGreenBaby, styleRedBaby, color } from "./scenes/3_colorbaby.js";
import { styleLifePath } from "./scenes/4_life_path.js";
import { styleSchool } from "./scenes/5_school.js";
import { styleMafia } from "./scenes/6_mafia.js";
import { styleMafia2 } from "./scenes/6_2_mafia.js";
import { styleMafia3 } from "./scenes/6_3_mafia.js";
import { styleMafia4 } from "./scenes/6_4_mafia.js";
import { styleMafiaEnd } from "./scenes/endings/e2_mafia.js";
import { styleCashierEnd } from "./scenes/endings/e3_cashier.js";
import { styleTeacherEnd } from "./scenes/endings/e4_teacher.js";
import { styleSmartEnd } from "./scenes/endings/e5_smart.js";

function addFonts() {
    // Tiny5 Duo
    document.head.innerHTML += `<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Explora&family=Tiny5+Duo:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">`;
}
addFonts();

function createPicture(sceneName) {
    const mainDiv = document.createElement('div');
    const scenePictureImg = document.createElement('img');
    mainDiv.style.margin = '0 auto';
    mainDiv.style.width = 'fit-content'
    mainDiv.style.position = 'relative';

    // console.log(`sceneName is ${sceneName}`);
    scenePictureImg.id = 'scenePictureImg'; // redundant
    scenePictureImg.style.display = 'block';
    scenePictureImg.style.margin = 'auto';
    scenePictureImg.style.height = '33em';
    if (sceneName === 'start')
        scenePictureImg.style.opacity = '0';
    if (sceneName === 'e_1_voidling') {
        scenePictureImg.style.maxHeight = '33em';
    }


    const index = sceneList.findIndex(scene => scene.sceneName === sceneName);
    scenePictureImg.src = sceneList[index].getImgUrl();
    scenePictureImg.alt = `${sceneList[index].altText}`;
    mainDiv.append(scenePictureImg);
    return mainDiv;
}

export { createPicture };

function createButtons(number) {
    const buttons = [];
    buttons.push('haha empty');
    // for(let i = 1; i <= number; i++)
    //     buttons.push(document.createElement('button'));
    for (let i = 1; i <= number; i++) {
        const btn = document.createElement('button');

        btn.addCrispyListener = function (event, property, value) {
            this.addEventListener(event, function () {
                this.style[property] = value;
            })
        }

        btn.addGregorListener = function (property, value1, value2) {
            btn.addCrispyListener('mouseover', property, value1);
            btn.addCrispyListener('mouseout', property, value2);
        }
        buttons.push(btn);
    }
    return buttons;
}



export { createButtons }

function addButtons(buttons, div) {
    for (let i = 1; i <= buttons.length - 1; i++)
        div.append(buttons[i]);
}

export { addButtons };

function changeScene(sceneName) {
    if (sceneName[0] === 'e') {
        console.log('endings');
        switch (sceneName) {
            case 'e_1_voidling':
                styleVoidling();
                break;
            case 'e_2_mafia':
                styleMafiaEnd()
                break;
            case 'e_3_cashier':
                styleCashierEnd()
                break;
            case 'e_4_teacher':
                styleTeacherEnd()
                break;
            case 'e_5_smart':
                styleSmartEnd()
                break;
            default:
                console.log('sceneStyles endings default case has run');
        }
    }
    else
        switch (sceneName) {
            case 'start':
                console.log('start scene has run');
                styleStart();
                break; //remove break for funnies
            case 'first':
                console.log('first scene has run');
                styleFirst();
                break; //remove break for funnies
            case ('baby'):
                console.log('baby scene has run')
                styleBaby();
                break;
            case 'yellow_baby':
                styleYellowBaby()
                console.log('yellow baby scene has run')
                break;
            case 'green_baby':
                styleGreenBaby();
                console.log('green baby scene has run')
                break;
            case 'red_baby':
                styleRedBaby();
                console.log('red baby scene has run')
                break;
            case 'life_path':
                console.log('life path scene has run');
                styleLifePath();
                break;
            case `mafia`:
                console.log('mafia scene has run');
                styleMafia();
                break;
            case `mafia_2`:
                console.log('mafia_2 scene has run');
                styleMafia2();
                break;
            case `mafia_3`:
                console.log('mafia 3 scene has run');
                styleMafia3();
                break;  // so proud of myself for realizing this was missing
            case `mafia_4`:
                console.log(`mafia_$ scene has run`);
                styleMafia4()
                break;
            case `school`:
                console.log(`school scene has run`);
                styleSchool();
                break;
            default:
                console.log('sceneStyles default case hase run');
            // this above piece of gold has saved my tired mind 
            // every time i made a new scene and wondered
            // "why the f this isnt working?"
            // 1:43 AM haha
        }
}

export { changeScene };

function restartButton(div, funny) {
    const restartBtn = document.createElement('button');
    //text
    restartBtn.innerText = 'restart game';
    //positioning
    restartBtn.style.display = 'block';
    restartBtn.style.position = 'absolute';
    restartBtn.style.bottom = '0';
    restartBtn.style.left = '0';//-9rem when relative
    //styling
    restartBtn.style.backgroundColor = 'black';
    restartBtn.style.color = 'white';
    restartBtn.style.opacity = '0.5';

    restartBtn.addEventListener('mouseover', function () { // 
        restartBtn.style.opacity = '1';
        restartBtn.style.boxShadow = '28px -21px 2022px 2000px #000000'
        funny.src = './images/restart.png'
        funny.style.position = 'absolute';
        funny.style.height = '30rem'
        funny.style.top = '1rem';
        funny.style.left = '8rem';
        document.body.append(funny);
    });
    restartBtn.addEventListener('mouseout', function () {
        restartBtn.style.opacity = '0.5';
        restartBtn.style.boxShadow = '0 0 0 0 #000000'
        funny.remove();
    });
    return restartBtn;
}

export { restartButton };

function removeFromDOM(elements) {
    for (const element of elements) {
        element.remove();
    }
}
// alternatively, for ever scene,e i could have an array
// where i hold everything that gets added to the DOM
// and then wipe it at the end

export { removeFromDOM };

function makeBaby(details) {
    const babyImg = document.createElement('img');
    babyImg.style.position = 'absolute';
    babyImg.style.width = '8rem';
    babyImg.alt = 'picture of baby';

    switch (details) {
        case 'normal':
            babyImg.src = `./../../images/${color.name}_baby_small.png`
            break;
        case 'bonnet':
            babyImg.src = `./../../images/${color.name}_baby_bonnet.png`
            break;
        case 'elite':
            babyImg.src = `./../../images/${color.name}_baby_elite.png`
            break;
        default:
            console.log(`Default BabyMaking case has run`)
    }
    return babyImg;
}

export { makeBaby }


// made using
// https://projects.verou.me/bubbly/
// and
// copilot prompt: 'pls turn this css class to javascript'
function makeSpeechBubble() {
    const speechBubble = document.createElement('div');
    speechBubble.style.position = 'absolute';
    speechBubble.style.background = '#f7f7f7';
    speechBubble.style.border = '5px solid black';
    speechBubble.style.borderRadius = '.4em';
    speechBubble.style.height = '1.58em';
    speechBubble.style.width = '5em';

    const tail = document.createElement('div');
    tail.style.position = 'absolute';
    tail.style.right = '-15px';
    tail.style.top = '40px';
    tail.style.width = '0';
    tail.style.height = '0';
    tail.style.border = '15px solid transparent';
    tail.style.borderLeftColor = 'black';
    tail.style.borderRight = '0';
    tail.style.borderBottom = '0';
    tail.style.marginTop = '-45px';

    speechBubble.append(tail);
    return speechBubble;
}

export { makeSpeechBubble };
