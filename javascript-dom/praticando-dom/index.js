function add(){
    const list = document.getElementById('list')
    const newContact = document.createElement('ul')


    const contactNameLi = document.createElement('li')
    contactNameLi.innerHTML = '<label for="name">Nome: </label>'
    const contactNameInput = document.createElement('input')
    contactNameInput.type = 'text'
    contactNameInput.id = 'name'
    contactNameLi.appendChild(contactNameInput)
    newContact.appendChild(contactNameLi)

    newContact.appendChild(document.createElement('br'))

    const contactNumberLi = document.createElement('li')
    contactNumberLi.innerHTML = '<label for="number">Telefone: </label>'
    const contactNumberInput = document.createElement('input')
    contactNumberInput.type = 'number'
    contactNumberInput.id = 'number'
    contactNumberLi.appendChild(contactNumberInput)
    newContact.appendChild(contactNumberLi)

    newContact.appendChild(document.createElement('br'))


    list.appendChild(newContact)

}