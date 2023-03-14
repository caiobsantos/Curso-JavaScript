function createLabel(text, htmlFor=''){
    const label = document.createElement('label')
    label.innerText = text
    label.htmlFor = htmlFor

    return label
}

function createInput(id, value, type='text', name){
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.type = type
    input.name = name

    return input
}


let inputRows = 0
let developers = {name:'' , techs: ''}

const tech = document.getElementById('btn')
tech.addEventListener('click', function (event){
    const techs = document.getElementById('techs')
    const newRow = document.createElement('li')

    const rowIndex = inputRows
    inputRows ++
    newRow.id = rowIndex


    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    const techTimeInput = createInput('techName-' + rowIndex, '' , 'text', 'techName-' + rowIndex)

    const expLabel = createLabel('Experiência: ')

    const id1 = 'expRadio-' + rowIndex + '.1'
    const expRadio1 = createInput(id1, '0-2 anos', 'radio', 'techExp-' + rowIndex)
    const expLabel1 = createLabel('0-2 anos', id1)

    const id2 = 'expRadio-' + rowIndex + '.2'
    const expRadio2 = createInput(id2, '3-4 anos', 'radio', 'techExp-' + rowIndex)
    const expLabel2 = createLabel('3-4 anos', id2)

    const id3 = 'expRadio-' + rowIndex + '.3'
    const expRadio3 = createInput(id3, '5+ anos', 'radio', 'techExp-' + rowIndex)
    const expLabel3 = createLabel('5+ anos', id3)

    const removeRow = document.createElement('button')
    removeRow.type = 'button'
    removeRow.innerText = 'Remover'

    removeRow.addEventListener('click', function(e){
        techs.removeChild(newRow)
    })
    
    newRow.append(
        techNameLabel, techTimeInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRow
    )

    techs.appendChild(newRow)
})

const cadastrar = document.getElementById('devForm')
cadastrar.addEventListener('submit', function(event){
    event.preventDefault();

    developers.name = document.getElementById('name').value
    for(var i = 0; i < inputRows; i++){
        developers.techs += document.getElementById('techName-' + i).value + ','
    }
    console.log(developers)
})