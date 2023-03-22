const main = document.querySelector('main')
const root = document.querySelector(':root')

const resultInput = document.getElementById('result')
const input = document.getElementById('input');
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
        input.value += charKeyBtn.dataset.value
    })
})

document.getElementById('clear').addEventListener('click', function () {
    input.value = ''
    input.focus()
})

input.addEventListener('keydown', function(e){
    e.preventDefault();
    if(allowedKeys.includes(e.key)){
        input.value += e.key
    }

    if(e.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }

    if(e.key === 'Enter'){
        calculateResult()
    }
})

document.getElementById('equal').addEventListener('click', calculateResult)


function calculateResult(){
    const result = eval(input.value)
    resultInput.value = result
}

document.getElementById('themeSwitcher').addEventListener('click', function(){
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26934a')
        main.dataset.theme = 'light'
    }else{
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})

document.getElementById('copyToClipboard').addEventListener('click', function(ev){
    const button = ev.currentTarget;
    button.innerText = 'Copied!';
    button.classList.add('success')
    navigator.clipboard.writeText(input.value)
    setTimeout(function(){
    button.innerText = 'Copy';
    button.classList.remove('success')
    }, 1000)
})