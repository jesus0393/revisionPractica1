/**
 * Este script consulta una appi y se le pasa un nombre de usuario y esta api devuelve informacion del usuario
 * Se muestra en pantalla el nombre de usuario su blog y su localizacion
 * 
 */
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//se agrego la notacion para seleccionar una clase
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

/**
 * 
 * se agrego la palbra async para hacer uso del async await
 * se cambiaron las comillas simples por backsticks para hacer uso de 
 * template strings
 *  
 */
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const data = await fetch(`${usersEndpoint}/${username}`).then(response => response.json()).catch(error => handleError(err));
  console.log(data);
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);

