# Amigo_secreto
1.- Obtenemos referencias a los elementos HTML que vamos a utilizar.
2.- Creamos un array friends para almacenar los nombres de los amigos.
3.- La función addFriend() se encarga de agregar un nuevo nombre a la lista. Primero, verifica que el campo de entrada no esté vacío. Si está vacío, muestra una alerta. Si el nombre es válido, lo agrega al array friends y actualiza la lista en la página.
4.- La función updateFriendsList() se encarga de actualizar la lista de amigos en la página. Recorre el array friends y crea un elemento <li> por cada nombre, mostrándolos en la lista.
5.- La función drawFriend() realiza el sorteo aleatorio. Primero, verifica que haya al menos un nombre en la lista. Si no hay nombres, muestra una alerta. Si hay nombres, selecciona un índice aleatorio utilizando Math.random() y muestra el nombre correspondiente en el elemento <p> con el id result-text.
6.- Finalmente, agregamos event listeners a los botones "Adicionar" y "Sortear Amigo" para que llamen a las funciones correspondientes cuando el usuario haga clic en ellos.
