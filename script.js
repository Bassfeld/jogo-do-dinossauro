// define constante do dinossauro e background a partir do documento da página
const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let position = 0;
let isJumping = false;

// detecta acionamento da tecla espaço
function handleKeyUp(event){
    if (event.keyCode === 32){
        if (!isJumping){
         jump();
        }
    }

}

// dino pula
function jump(){

    isJumping = true;

    let upInterval = setInterval(() =>{
        // condicionais para parar a subida e descida
        if(position >= 150){
            clearInterval(upInterval);

            let downInterval = setInterval(() =>{
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                 }else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20)
        }else{
            position += 20;
            dino.style.bottom = position + 'px';
        }

    }, 20);
}

// cria elemento html div (cactus)
function createCactus(){
     const cactus = document.createElement('div');
     let cactusPosition = 1000;
     let randomTime = Math.random() * 6000;
     console.log(randomTime);

     cactus.classList.add('cactus'); // adiciona class ao elemento
     cactus.style.left = 1000 + 'px';
     background.appendChild(cactus);

    // move cacto para a esquerda e remove cove cacto quando chega ao final da tela (background)
     let leftInterval = setInterval(() =>{
        if (cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
            }else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            //game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
            }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();

document.addEventListener('keyup', handleKeyUp);
