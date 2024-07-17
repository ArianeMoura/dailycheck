document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    const lists = document.querySelectorAll('ul');

    forms.forEach((form, index) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input');
            const list = lists[index];
            const newTask = document.createElement('li');
            newTask.innerHTML = `<span>${input.value}</span> <button>Delete</button>`;
            list.appendChild(newTask);
            input.value = '';

            const deleteButton = newTask.querySelector('button');
            deleteButton.addEventListener('click', () => {
                list.removeChild(newTask);
            });

            newTask.addEventListener('click', () => {
                newTask.classList.toggle('completed');
            });
        });
    });
});
