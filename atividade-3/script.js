const formulario = document.getElementById('formulario');
const json = document.getElementById('json');
const alunos = document.getElementById('alunos')

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

  const aluno = Object.fromEntries(new FormData(formulario));
  json.textContent = JSON.stringify(aluno, null, 2);

  const linha = document.createElement('tr');
    Object.values(aluno).forEach((valor) => {
     const coluna = document.createElement('td');
    coluna.textContent = valor;
       linha.appendChild(coluna)

  });
  alunos.appendChild(linha);

  formulario.reset();
});
