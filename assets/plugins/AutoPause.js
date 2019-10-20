class AutoPause {
    constructor(){
        this.threshold = 0.25
        this.handlerIntersection = this.handlerIntersection.bind(this)
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this)
        document.addEventListener('visibilitychange', this.handlerVisibilityChange)
        
    }
    run(player){
        this.player = player
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold  // 25%
        })
        observer.observe(this.player.media)
    }
    handlerIntersection(entries){
        //hay que hacer bin to this
        const entry = entries[0]
        const esVisible = entry.intersectionRatio >= this.threshold
        if(esVisible){
            this.player.play()
        }else{
            this.player.pause()
        }
    }
    handlerVisibilityChange(){
        //Hay que hacer bind a this
        const isVisible = document.visibilityState === 'visible'
        if(isVisible){
            this.player.play()
        }else{
            this.player.pause()
        }
    }

}

export default AutoPause