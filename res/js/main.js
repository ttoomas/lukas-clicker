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

// 2nd Candy - Fidorka
const mainFidorka = document.querySelector('.main__fidorka');

function fidorkaSwap(){
    mainClick.setAttribute('disable-count', '');

    mainCandy.style.left = "120%";
    mainCandy.style.opacity = "0";

    setTimeout(() => {
        mainFidorka.style.top = "-88px";
        
        setTimeout(() => {
            mainClick.removeAttribute('disable-count');
        }, 350);

    }, 400);
}

mainFidorka.addEventListener('click', () => {
    if(!mainClick.hasAttribute('disable-count')){
        plusOne();
    }
})

// 3rd candy - Tatranka
const mainTatranka = document.querySelector('.main__tatranka');

function tatrankaSwap(){
    mainClick.setAttribute('disable-count', '');

    mainFidorka.style.left = "120%";
    mainFidorka.style.opacity = "0";

    setTimeout(() => {
        mainTatranka.style.top = "-130px";

        setTimeout(() => {
            mainClick.removeAttribute('disable-count');    
        }, 350);

    }, 400);
}

mainTatranka.addEventListener('click', () => {
    if(!mainClick.hasAttribute('disable-count')){
        plusOne();
    }
})


// Function plusOne to add one number to var. i and rewrite html
function plusOne(){
    // i++;
    // Only for development !!!
    i += 5;

    countText.innerText = i;

    if(i == 15){
        fidorkaSwap();
    }
    else if(i == 25){
        tatrankaSwap();
    }
}