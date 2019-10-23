import MediaPlayer from "./MediaPlayer"
import AutoPause from './plugins/AutoPause'
import AutoPlay from './plugins/AutoPlay'
const video = document.querySelector('video')
const playButton: HTMLElement = document.querySelector('button')
const buttonMute: HTMLElement = document.querySelector("#btnmute")

const player = new MediaPlayer({
    el: video, 
    plugins: [new AutoPlay(), new AutoPause()] 
})

playButton.onclick = () => player.togglePlay();

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