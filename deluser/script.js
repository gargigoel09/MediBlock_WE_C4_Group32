document.addEventListener('DOMContentLoaded', function() {
    const userIdInput = document.getElementById('userId');
    const userTypeSelect = document.getElementById('userType');
    const errorMessage = document.querySelector('.error-message');
    const successMessage = document.querySelector('.success-message');
    const deleteUserBtn = document.getElementById('deleteUserBtn');
  
    let userId = '';
    let userType = 'patient';
  
    userIdInput.addEventListener('input', function(event) {
      userId = event.target.value;
    });
  
    userTypeSelect.addEventListener('change', function(event) {
      userType = event.target.value;
    });
  
    deleteUserBtn.addEventListener('click', function() {
      if (!userId.trim()) {
        errorMessage.textContent = 'User ID is required';
        return;
      }
  
      const isConfirmed = window.confirm('Are you sure you want to delete the user?');
      if (isConfirmed) {
        userIdInput.value = '';
        userTypeSelect.value = 'patient';
        successMessage.textContent = 'User deleted successfully';
        errorMessage.textContent = '';
      }
    });
  });
  