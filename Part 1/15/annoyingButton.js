const btn = document.querySelector("#annoyingButton")

btn.addEventListener("mouseover", function() {
    if (btn.innerText !== "CLICK ME!") {
        return
    }
    let height = Math.floor(Math.random() * window.innerHeight) + "px"
    let width = Math.floor(Math.random() * window.innerWidth) + "px"
    console.log(height)
    console.log(width)
    btn.style.top = height;
    btn.style.left = width;
})

btn.addEventListener("click", function() {
    btn.innerText = "YOU GOT ME!"
    document.body.style.backgroundColor = "green"
})