const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

form.addEventListener('submit', event => {
  event.preventDefault();

  const value = input.value.trim();
  if (value) {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox">
      <span>${value}</span>
      <button>Delete</button>
    `;
    list.appendChild(li);
    input.value = '';
  }
});

list.addEventListener('click', event => {
  if (event.target.tagName === 'INPUT') {
    event.target.parentElement.classList.toggle('completed');
  } else if (event.target.tagName === 'BUTTON') {
    event.target.parentElement.remove();
  }
});