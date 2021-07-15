const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let data = {
    nome,
    email,
  }

  var cliente = [];

  cliente.push(data);

  let convertData = JSON.stringify(cliente);

  if (data.nome !== '' && data.email !== '') {
    localStorage.setItem('lead', convertData)
  } else {
    alert('Formulario esta vazio, tente novamente')
  }

})