document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const taskInput = document.querySelector('#new-task-description');
  const taskDescription = taskInput.value;

  if (taskDescription.trim() !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = taskDescription;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    taskInput.value = '';
  }
});

taskList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    const listItem = event.target.parentElement;
    taskList.removeChild(listItem);
  }
});
