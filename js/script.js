const yesBtn = document.querySelector('#yesBtn');
const pop = document.querySelector('#pop');
const heart = document.querySelector('#heart');

yesBtn.addEventListener('click', function(){
    
    pop.style.setProperty('visibility','visible');
    pop.style.setProperty('display','block');

    heart.style.setProperty('visibility','hidden');
    
})

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);

    while(randomX>500){
        randomX = parseInt(Math.random()*100);
    }

    while(randomY>500){
        randomX = parseInt(Math.random()*100);
    }
    noBtn.style.setProperty('top',randomX+'%');
    noBtn.style.setProperty('left',randomY+'%');

    noBtn.style.setProperty('transform','translate(-${randomX}%, -${randomY}%)');
})

const acceptBtn = document.querySelector('#acceptBtn');
acceptBtn.addEventListener('click', function(){
    
    pop.style.setProperty('visibility','hidden');
    pop.style.setProperty('display','none');

    heart.style.setProperty('visibility','visible');
    
})