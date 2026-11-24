import { color } from "./3_colorbaby.js";
// i realized it wasnt working because the sceneList.js is being loaded at the beginning of the program, so values did not change previously
const sceneList = [
    {
        'sceneName': 'start',
        getImgUrl: () => './images/placeholder.jpg',
        'altText': ''
    },
    {
        'sceneName': 'first',
        getImgUrl: () => './images/first.jpg',
        'altText': 'picture of entranceway towards life or death'

    },
    {
        'sceneName': 'baby',
        getImgUrl: () => './images/baby.jpg',
        'altText': 'happy baby picture'
    },
    {
        'sceneName': 'yellow_baby',
        getImgUrl: () => './images/yellow_baby.png',
        'altText': 'happy yellow baby picture'
    }, 
    {
        'sceneName': 'green_baby',
        getImgUrl: () => './images/green_baby.png',
        'altText': 'happy green baby picture'
    }, 
    {
        'sceneName': 'red_baby',
        getImgUrl: () => './images/red_baby.png',
        'altText': 'happy red baby picture'
    },
    {
        'sceneName': 'life_path',
        getImgUrl: () => './images/life_path.png',
        'altText': 'funny meme/picture depicting the baby choosing between school and mafia'
    },
    {
        'sceneName': 'school',
        getImgUrl: () => './images/school.jpeg',
        'altText': 'image depicting school'
    },
    {
        'sceneName': 'mafia',
        getImgUrl: () => './images/mafia1.jpeg',
        'altText': 'image depicting Thomas Shelby on a horse talking to a baby'
    },
    {
        'sceneName': 'mafia_2',
        getImgUrl: () => './images/mafia2.jpeg',
        'altText': 'image depicting mafia squad with buncha people, pretty dapper'
    },
    {
        'sceneName': 'mafia_3',
        getImgUrl: () => './images/mafia3.jpeg',
        'altText': 'image depicting personal discussion with thomas shelby in his office'
    },
    {
        'sceneName': 'mafia_4',
        getImgUrl: () => `./images/mafia4.jpeg`,
        'altText': 'image depicting baby mafia boss in his office'
    },
    
    //endings
    {
        'sceneName': 'e_1_voidling',
        getImgUrl: () => `./images/endings/1_voidling.jpg`,
        'altText': `voidling, dweller of the void`
    },
    {
        'sceneName': 'e_2_mafia',
        getImgUrl: () => `./images/${color.name}_baby_boss.png`,
        'altText': `baby as mafia boss`
    },
    {
        'sceneName': 'e_3_cashier',
        getImgUrl: () => `./images/endings/${color.name}_cashier.png`,
        'altText': `cashier`
    },
    {
        'sceneName': 'e_4_teacher',
        getImgUrl: () => `./images/endings/${color.name}_teacher.png`,
        'altText': `picture of teacher baby`
    },
    {
        'sceneName': 'e_5_smart',
        getImgUrl: () => `./images/${color.name}_baby_boss.png`,
        'altText': `picture of smart person baby`
    }
]

export {sceneList}

