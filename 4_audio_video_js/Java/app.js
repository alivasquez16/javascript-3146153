const video = document.querySelector ('#video')
const playVideo = document.querySelector ('#play-video')
const stopVideo = document.querySelector ('#stop-video')
const img1 = document.querySelector ('#play-stop-img1')
const img2 = document.querySelector ('#play-stop-img2')
const audio1 = document.querySelector('#audio-1')
const audio2 = document.querySelector('#audio-2')


/* Funcion para reproducir video */
 function reproducirVideo (){
    video.play()
 }
/* Evento de click con "addEventListener" que ejecuta reproducirVideo */
playVideo.addEventListener("click",reproducirVideo)

/* Funcion para pausar video */
function pausarVideo (){
    video.stop()
}
/* Evento de click con "addEventListener" que ejecuta pausarVideo */
stopVideo.addEventListener("click",stopVideo)

/* toggleAudioUno */
function toggleAudioUno (){
    if(audio1.paused){
        audio1.play()
        img1.textContent = "🙂 stop"
    }else{
        audio1.pause()
        img1.textContent = "🥰 Play"
    }
}
img1.addEventListener("click", toggleAudioUno)

function toggleAudioDos (){
    if(audio2.paused){
        audio2.play()
        img2.textContent = "🙂 stop"
    }else{
        audio2.pause()
        img2.textContent = "🥰 Play"
    }
}
img2.addEventListener("click", toggleAudioDos)