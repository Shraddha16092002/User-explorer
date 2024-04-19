document.addEventListener('DOMContentLoaded', getUsers);

function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      const userList = document.getElementById('user-list');
      users.forEach(user => {
        const li = document.createElement('li');
        const nameHeader = document.createElement('h4');
        nameHeader.textContent = user.name;

        const emailHeader = document.createElement('p');
        emailHeader.textContent = user.email;

        li.appendChild(nameHeader);
        li.appendChild(emailHeader);
        // li.innerHTML = user.name +  '<br>'  + user.email;
        nameHeader.setAttribute('data-user-id', user.id);
        nameHeader.addEventListener('click', () => {
          window.location.href = 'details.html?id=' + user.id;
        });
        userList.appendChild(li);
      });
    })
    .catch(error => console.error('Error fetching users: ', error));
}
