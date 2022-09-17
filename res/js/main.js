const box = document.querySelector('.main__videoBx');
const mainVideoTop = document.querySelector('.main__videoTop');
const mainVideoBottom = document.querySelector('.main__videoBottom');
const countText = document.querySelector('.count__times');

const mainClick = document.querySelector('.main__click')
const mainCandy = document.querySelector('.main__candy');

let i = 0;


// Video Box
box.addEventListener('click', () => {
    if(!mainVideoTop.hasAttribute('disableVideo')){
        mainVideoTop.play();
        mainVideoBottom.play();

        mainVideoTop.setAttribute('disableVideo', '');
        mainClick.setAttribute('disable', '');

        plusOne();

        setTimeout(() => {
            mainCandy.style.top = "-85px";

            setTimeout(() => {
                mainClick.removeAttribute('disable');
            }, 350);

        }, 1600);
    }
})

// 1st Candy
mainCandy.addEventListener('click', () => {
    if(!mainClick.hasAttribute('disable')){
        plusOne();
    }
})


// Function plusOne to add one number to var. i and rewrite html
function plusOne(){
    i++
    countText.innerText = i;

    if(i == 15){
        console.log('change');
    }
    else if(i == 25){
        console.log('another change');
    }
}