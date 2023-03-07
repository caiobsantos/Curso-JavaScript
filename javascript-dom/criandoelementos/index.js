function onClick(){
    const elemento = document.createElement('h3')
    elemento.innerText = 'Parabéns, você me clicou!'
    const container = document.getElementById("container")
    container.appendChild(elemento)
}