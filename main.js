const dayBall = document.querySelector(".dayBall");
const nightBall = document.querySelector(".nightBall");

nightBall.addEventListener('click', toggleDarkTheme)
dayBall.addEventListener('click', toggleLightTheme)

function toggleDarkTheme(){
    document.body.classList.add("darktheme")
}

function toggleLightTheme(){
    document.body.classList.remove("darktheme")
}

