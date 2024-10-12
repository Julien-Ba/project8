const btn = document.querySelector('#myButton');
btn.addEventListener('click', insertMessage);

function insertMessage(event) {
    const p = document.createElement('p');
    p.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
    event.target.insertAdjacentElement('afterend', p);
}