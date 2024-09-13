// Primero hacemos un arreglo para almacenar los comentarios

const comments = [];

// Función para agregar un nuevo comentario
function postComment() {
    const commentInput = document.getElementById('comment');
    const commentText = commentInput.value.trim();
//UTILIZAMOS PUSS PARA AGREGAR AL ARREGLO COMO VIMOS EN CLASE
    if (commentText) {
        const newComment = { text: commentText, timestamp: new Date() };
        comments.push(newComment);
        displayComments();
        commentInput.value = ''; // Limpia el campo de texto
    } else {
        alert('Por favor, escribe un comentario.');
    }
}

// Función para mostrar los comentarios en la página
function displayComments() {
    const commentsList = document.getElementById('comments-list');
    commentsList.innerHTML = '';

    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment-item');
        commentElement.innerHTML = `
            <p>${comment.text}</p>
            <small>${formatDate(comment.timestamp)}</small>
        `;
        commentsList.appendChild(commentElement);
    });
}

// Función para formatear la fecha y hora del comentario
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Intl.DateTimeFormat('es-ES', options).format(date);
}
