import { createButtons, addButtons, restartButton } from "../dom.js";
import { changeScene, createPicture, removeFromDOM } from "../dom.js";
import { makeBaby, makeSpeechBubble } from "../dom.js";
function styleSchool() {
    console.log(`response good, scene school has run`);

    const div = createPicture(`school`)
    document.body.append(div);
    document.body.style.backgroundColor = 'rgb(178, 176, 176)';

    const baby = makeBaby('normal');
    div.append(baby);
    baby.style.transform = 'scaleX(-1)'; // i love stackoverflow  https://stackoverflow.com/questions/3129099/how-to-flip-images-horizontally-with-html5
    baby.style.width = '4.5rem';
    baby.style.height = '5.5rem';
    baby.style.top = '11rem';
    baby.style.left = '25rem';
    // woohoo 4 AM - 14 hours in to this session
    const choice = createButtons(2);
    addButtons(choice, div);

    const speechBubble = makeSpeechBubble();
    div.append(speechBubble);
    speechBubble.style.top = '5.6rem'
    speechBubble.style.right = '5.9rem';
    speechBubble.style.cursor = 'pointer';
    speechBubble.style.width = '7rem';
    const text = document.createElement('p');
    text.innerText = 'class is starting';
    speechBubble.append(text);
    text.style.position = 'absolute';
    text.style.top = '-0.85rem';
    text.style.left = '0.5rem';
    text.style.textDecoration = 'underline';

    for (let i = 1; i <= 2; i++) { //  buttons ripped from scene 2
        choice[i].style.display = 'block';
        choice[i].style.position = `absolute`;
        choice[i].style.bottom = '0.8rem';
        choice[i].style.fontSize = `1.5rem`;
        choice[i].style.fontWeight = `bold`;
        choice[i].style.padding = '0.5rem 0rem';
        choice[i].style.fontFamily = 'sans-serif';
        choice[i].style.width = '12rem';
        choice[i].style.borderRadius = '2rem';
    }
    choice[1].innerText = 'quit school';
    choice[2].innerText = 'attend class';
    choice[1].style.left = `3rem`;
    choice[2].style.right = `3rem`;
    choice[1].addGregorListener('backgroundColor', 'rgb(233, 37, 37)', 'white');
    choice[2].addGregorListener('backgroundColor', 'rgb(73, 241, 67)', 'white');
    choice[1].onclick = function () {
        removeFromDOM([restartBtn, funny, div]);
        changeScene('e_3_cashier');
    }
    choice[2].onclick = function () {
        choice[1].remove(); choice[2].remove();
        attendClass(div, restartBtn, funny, speechBubble, text);

    }
    const funny = document.createElement('img') // decorative image
    const restartBtn = restartButton(div, funny);
    restartBtn.onclick = function () {
        removeFromDOM([div, funny, restartBtn]);
        changeScene('start');
    }
    document.body.append(restartBtn)
    // choice[2].onclick
    // choice[1].remove(); choice[2].remove();
    //attendClass();
    // text.style.textDecoration = 'none';
    // speechBubble.style.width = '6.3rem';
    // text.innerText = 'What is 1+1?';
}

function attendClass(div, restartBtn, funny, speechBubble, text) {
    let score = 0;
    text.style.textDecoration = 'none';
    speechBubble.style.width = '5.9rem';
    text.innerText = 'What is 1+1';
    setTimeout(function () {
        let answer = prompt("your answer for the question:", "answer");
        if (+answer === 2)
            score++;
        speechBubble.style.width = '7rem';
        text.innerText = 'What is 6 + 29';
        setTimeout(function () {
            let answer = prompt("your answer for the question:", "answer");
            if (+answer === 35)
                score++;
            speechBubble.style.width = '8.9rem';
            text.innerText = 'What is 6 factorial?';
            setTimeout(function () {
                let answer = prompt("your answer for the question:", "answer");
                if (+answer === 720)
                    score++;
                speechBubble.style.width = '14rem';
                text.innerText = 'What is the square root of 9025?';
                setTimeout(function () {
                    let answer = prompt("your answer for the question:", "answer");
                    if (+answer === 95)
                        score++;
                    speechBubble.style.width = '7.3rem';
                    text.innerText = 'What is 9 + 10?';
                    setTimeout(function () {
                        let answer = prompt("your answer for the question:", "answer");
                        if (+answer === 21)
                            score++;
                        speechBubble.style.width = '5.9rem';
                        text.innerText = `score: ${score}/5`;
                        setTimeout(function() {
                            removeFromDOM([div, restartBtn, funny]);
                            if(score == 5)
                                changeScene('e_4_teacher');
                            else
                                changeScene('e_5_smart');
                                
                        }, 3000)
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
  

    // text.innerText = 'What is 6+29';
    // setTimeout(function () {
    //     let answer = prompt("your answer for the question:", "answer");
    //     if (+answer === 35)
    //         score++;
    // }, 3000);

    // score += askQuestion('What is 1+1', speechBubble, text, div);
}

// function askQuestion(question, speechBubble, text, div) {
//     text.innerText = 'What is 1+1';
//     const options = createButtons(2);
//     addButtons(options, div);
//         for (let i = 1; i <= 2; i++) { //  buttons ripped from scene 2
//         options[i].style.display = 'block';
//         options[i].style.position = `absolute`;
//         options[i].style.bottom = '0.8rem';
//         options[i].style.fontSize = `1.5rem`;
//         options[i].style.fontWeight = `bold`;
//         options[i].style.padding = '0.5rem 0rem';
//         options[i].style.fontFamily = 'sans-serif';
//         options[i].style.width = '12rem';
//         options[i].style.borderRadius = '2rem';
//     }
//     options[1].innerText = 'ignore';
//     options[2].innerText = 'answer';
//     options[1].style.left = `3rem`;
//     options[2].style.right = `3rem`;
//     options[1].addGregorListener('backgroundColor', 'rgb(233, 37, 37)', 'white');
//     options[2].addGregorListener('backgroundColor', 'rgb(73, 241, 67)', 'white');
//     options[1].onclick = function () {
//         options[1].remove; options[2].remove;
//         return 0;
//     }
// }

export { styleSchool }