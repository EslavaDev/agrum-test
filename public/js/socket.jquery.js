const param = new URLSearchParams(window.location.search);
const room= param.get('room');
const divUsuarios = $('#divUsuarios');

function renderizarUsuarios(data) { // [{}, {}, {}]
  console.log(data);
  let html = '';

  for (let i = 0; i < data.length; i += 1) {
    console.log(data[i]._id);
    html += '<li>';
    html += ` <h2>Tilte: ${data[i].title}     Descripcion: ${data[i].description}        ID: ${data[i]._id}</h2> `;
    html += '</li>';
  }
  divUsuarios.html(html);
}

