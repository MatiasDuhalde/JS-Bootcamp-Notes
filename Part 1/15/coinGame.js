const avatar = document.querySelector("#player");
const coin = document.querySelector("#coin");

function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width 
    );
}

function moveCoin() {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    coin.style.top = y + "px";
    coin.style.left = x + "px";
}

function extractPos(pos) {
    if (!pos) return 30;
    return parseInt(pos.slice(0, -2));
}

window.addEventListener("keyup", function(e) {
    const currTop = extractPos(avatar.style.top)
    const currLeft = extractPos(avatar.style.left)
    switch(e.key) {
        case "ArrowUp":
            avatar.style.top = `${currTop - 20}px`
            break;
        case "ArrowDown":
            avatar.style.top = `${currTop + 20}px`
            break;
        case "ArrowLeft":
            avatar.style.transform = "scale(-1,1)"
            avatar.style.left = `${currLeft - 20}px`
            break;
        case "ArrowRight":
            avatar.style.transform = "scale(1,1)"
            avatar.style.left = `${currLeft + 20}px`
            break;
    }
    if (isTouching(avatar, coin)) {
        moveCoin()
    }
})

moveCoin()
