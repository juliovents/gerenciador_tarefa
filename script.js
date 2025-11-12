const APIurl = 'http://localhost:3000/tasks';

const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', async (e) =>{
    e.preventDefault();
    const title = document.getElementById('title').ariaValueMax;
    const description = document.getElementById('description').value
})