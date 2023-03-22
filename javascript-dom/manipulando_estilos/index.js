function darkTheme(){
    document.body.className = 'is-dark'
}

function lightTheme(){
    document.body.className = 'is-light'
    // document.body.classList.toggle('is-light')
}

function changeTheme(){
    const currentTheme = document.body.className
    if(currentTheme === 'is-dark'){
        lightTheme()
    }
    else{
        darkTheme()
    }
}

document.getElementById('darkBtn').addEventListener('click', darkTheme)
document.getElementById('lightBtn').addEventListener('click', lightTheme)
document.getElementById('changeBtn').addEventListener('click', changeTheme)
