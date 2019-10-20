class AutoPause {
    constructor(){
        this.threshold = 0.25
        this.handlerIntersection = this.handlerIntersection.bind(this)
    }
    run(player){
        debugger
        this.player = player
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold  // 25%
        })
        observer.observe(this.player.media)
    }
    handlerIntersection(entries){
        const entry = entries[0]
        const esVisible = entry.intersectionRatio >= this.threshold
        if(esVisible){
            this.player.play()
        }else{
            this.player.pause()
        }
    }

}

export default AutoPause