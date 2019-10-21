import MediaPlayer from './MediaPlayer.js'
import AutoPause from './plugins/AutoPause.js'
import AutoPlay from './plugins/AutoPlay.js'
const video = document.querySelector('video')
const button = document.querySelector('button')
const buttonMute = document.querySelector("#btnmute")

const player = new MediaPlayer({
    el: video, 
    plugins: [new AutoPlay(), new AutoPause()] 
})

button.onclick = () => player.togglePlay();

buttonMute.onclick = () => player.toggleMute()

if('serviceWorker' in navigator){
    console.log('regsitering sw')
    navigator.serviceWorker.register('/sw.js')
    .then(data => {
        console.log('ok')
    })
    .catch((error) => {
        console.log('==> erro')
        console.log(error.message)
    })
}