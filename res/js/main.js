const box = document.querySelector('.main__videoBx');
const mainVideoTop = document.querySelector('.main__videoTop');
const mainVideoBottom = document.querySelector('.main__videoBottom');
const countText = document.querySelector('.count__times');

const mainClick = document.querySelector('.main__click')
const mainCandy = document.querySelector('.main__candy');

let i = 0;


// Video Box
box.addEventListener('click', () => {
    if(!mainVideoTop.hasAttribute('disable-video')){
        mainVideoTop.play();
        mainVideoBottom.play();

        mainVideoTop.setAttribute('disable-video', '');
        mainClick.setAttribute('disable-count', '');

        plusOne();

        setTimeout(() => {
            mainCandy.style.top = "-85px";

            setTimeout(() => {
                mainClick.removeAttribute('disable-count');
            }, 350);

        }, 1600);
    }
})

// 1st Candy
mainCandy.addEventListener('click', () => {
    if(!mainClick.hasAttribute('disable-count') && i < 15){
        plusOne();
    }
})


// Candies
const mainFidorka = document.querySelector('.main__fidorka');
const mainTatranka = document.querySelector('.main__tatranka');
const mainBueno = document.querySelector('.main__bueno');

let mainCandyArray = [mainFidorka, mainTatranka, mainBueno];

mainCandyArray.forEach(oneCandy => {
    oneCandy.addEventListener('click', () => {
        if(!mainClick.hasAttribute('disable-count')){
            plusOne();
        }
    })
})

// Function plusOne to add one number to var. i and rewrite html
function plusOne(){
    i++;
    // Only for development !!!
    // i += 5;

    countText.innerText = i;

    angryMan();

    if(i == 15){
        candySwap(mainCandy, mainFidorka, "-88px");
    }
    else if(i == 25){
        candySwap(mainFidorka, mainTatranka, "-130px");
    }
    else if(i == 35){
        candySwap(mainTatranka, mainBueno, "-43px");
    }
}

// Function angryMan to increase opacity of red angry man every click
const angryManRed = document.querySelector('.bottom__imgRed');
let redManIncrease = 0.025;
let redManOpa = 0;

function angryMan(){
    if(redManOpa < 1){
        angryManRed.style.opacity = redManOpa += redManIncrease;
    }
}

// Function candySwap for swap from old candy to new candy
function candySwap(oldCandy, newCandy, newCandyTop){
    mainClick.setAttribute('disable-count', '');

    oldCandy.style.left = "120%";
    oldCandy.style.opacity = "0";

    setTimeout(() => {
        newCandy.style.top = newCandyTop;

        setTimeout(() => {
            mainClick.removeAttribute('disable-count');
        }, 350);

    }, 400);
}