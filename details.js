document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('id');
    getUserDetails(userId);
  });
  
  function getUserDetails(userId) {
    fetch('https://jsonplaceholder.typicode.com/users/' + userId)
      .then(response => response.json())
      .then(user => {
        const userDetails = document.getElementById('user-details');
        userDetails.innerHTML = `
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Username:</strong> ${user.username}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <p><strong>Website:</strong> ${user.website}</p>
          <p><strong>Company:</strong> ${user.company.name}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
        `;
      })
      .catch(error => console.error('Error fetching user details: ', error));
  }
  