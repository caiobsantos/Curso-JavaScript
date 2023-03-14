function escalar(){
    const player_position = document.createElement('li')
    const player_name = document.createElement('li')
    const player_number = document.createElement('li')



    const player_list = document.createElement('ul')

    const list = document.getElementById('list')

    player_position.innerText = document.getElementById('position').value
    player_name.innerText = document.getElementById('name').value
    player_number.innerText = document.getElementById('number').value

    player_list.id = player_number.innerText

    player_list.appendChild(player_position)
    player_list.appendChild(player_name)
    player_list.appendChild(player_number)

    list.appendChild(player_list)

    document.getElementById('form').reset()
}

function retirar(){
    const player_to_remove = document.getElementById('remove_player').value
    const player_list = document.getElementById(player_to_remove)

    const confirmation = confirm('Remover o jogador?')

    if(confirmation){
        document.getElementById('remove-form').reset()
        player_list.remove();
    }
}