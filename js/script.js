const yesBtn = document.querySelector('#yesBtn');
const pop = document.querySelector('#pop');
const heart = document.querySelector('#heart');

const back = document.querySelector('#back');

yesBtn.addEventListener('click', function(){
    
    pop.style.setProperty('visibility','visible');
    pop.style.setProperty('display','block');

    heart.style.setProperty('visibility','hidden');

    back.style.setProperty('background-image', 'url(img/back.jpg)');

    noBtn.style.setProperty('visibility','hidden');

    
   /* var yes = "si";
    guardar_valores(yes);*/

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
    noBtn.style.setProperty('visibility','visible');
    back.style.setProperty('background-image', 'none');
    
})
/*
function guardar_valores (object) {
  
    localStorage.setItem("acepta", object);
  }

function recuperar_datos () {
    var peticion = localStorage.getItem("acepta");
    alert(peticion);
  }

 */