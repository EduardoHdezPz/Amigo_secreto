// Obtener referencias a los elementos HTML
const nameInput = document.getElementById('name-input');
const addButton = document.getElementById('add-button');
const friendsList = document.getElementById('friends-list');
const drawButton = document.getElementById('draw-button');
const resultText = document.getElementById('result-text');

// Array para almacenar los nombres de los amigos
let friends = [];

// Función para agregar un nombre a la lista
function addFriend() {
    const name = nameInput.value.trim();
    if (name === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    friends.push(name);
    nameInput.value = '';
    updateFriendsList();
}

// Función para actualizar la lista de amigos en la página
function updateFriendsList() {
    friendsList.innerHTML = '';
    friends.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = friend;
        friendsList.appendChild(li);
    });
}

// Función para realizar el sorteo aleatorio
function drawFriend() {
    if (friends.length === 0) {
        alert('No hay amigos en la lista. Agrega algunos nombres primero.');
        return;
    }
    const randomIndex = Math.floor(Math.random() * friends.length);
    const drawnFriend = friends[randomIndex];
    resultText.textContent = `¡El amigo secreto es: ${drawnFriend}!`;
}



// Agregar event listeners a los botones
addButton.addEventListener('click', addFriend);
drawButton.addEventListener('click', drawFriend);

