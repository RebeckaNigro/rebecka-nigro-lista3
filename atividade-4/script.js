const posts = [
  { id: 1, title: 'Introdução ao DOM' },
  { id: 2, title: 'Eventos em JavaScript' },
  { id: 3, title: 'O que é uma API?' },
];

const comentarios = [
   { postId: 1, id: 1, name: 'Ana', email: 'ana@email.com', body: 'Explicação muito clara!' },
  { postId: 1, id: 2, name: 'Bruno', email: 'bruno@email.com', body: 'Gostei do exemplo do getElementById.' },
    { postId: 2, id: 3, name: 'Carla', email: 'carla@email.com', body: 'addEventListener é bem melhor que onclick.' },
    { postId: 3, id: 4, name: 'Diego', email: 'diego@email.com', body: 'A analogia do garçom ajudou muito.' },
  { postId: 3, id: 5, name: 'Elisa', email: 'elisa@email.com', body: 'Quero testar o JSONPlaceholder!' },
    { postId: 3, id: 6, name: 'Fábio', email: 'fabio@email.com', body: 'E o método POST, como funciona?' },
];

const select = document.getElementById('post')
  const titulo = document.getElementById('titulo')
const areaComentarios = document.getElementById('comentarios')

posts.forEach((post) => {
  const opcao = document.createElement('option')
      opcao.value = post.id;
    opcao.textContent = post.title
  select.appendChild(opcao)
});

select.addEventListener('change', () => {
  const usuarios = comentarios.filter((comentario) => 
    comentario.postId === Number(select.value));
  const total = usuarios.length;
  areaComentarios.innerHTML = '';

    if (select.value === '') {
    titulo.textContent = 'Comentários';
    return;
  }

  titulo.textContent = `Comentários (${total})`;

  usuarios.forEach((comentario) => {
    const card = document.createElement('article');
    card.innerHTML = 
    `<h3>${comentario.name}</h3><p>E-mail: ${comentario.email}</p><p>${comentario.body}</p>`
    areaComentarios.appendChild(card);
  });
});
