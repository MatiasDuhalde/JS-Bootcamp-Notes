class Timer{
    constructor(durationInput, startButton, pauseButton, callbacks) {
        // DOM stuff
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        // Callbacks
        if (callbacks) {
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onComplete = callbacks.onComplete
        }
        // Internal properties
        this.intervalLength = 20
        this.isRunning = false
        this.durationInput.value = 20
        // Linking events
        this.startButton.addEventListener("click", this.start)
        this.pauseButton.addEventListener("click", this.pause)
    }

    start = () => {
        if (!this.isRunning) {
            if (this.onStart) {
                this.onStart(this.timeRemaining)
            }
            this.isRunning = true
            this.durationInput.disabled = true
            this.tick()
            this.interval = setInterval(this.tick, this.intervalLength)
        }
    }

    pause = () => {
        this.durationInput.disabled = false
        clearInterval(this.interval)
        this.isRunning = false
    }

    tick = () => {
        if (this.onTick) {
            this.onTick(this.timeRemaining)
        }
        if (this.timeRemaining <= 0) {
            this.timeRemaining = 0
            this.pause()
            if (this.onComplete) {
                this.onComplete()
            }
        }
        else {
            this.timeRemaining -= this.intervalLength / 1000
        }
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value)
    }

    set timeRemaining(time) {
        time = Math.max(time, 0)
        this.durationInput.value = time.toFixed(2)
    }

}