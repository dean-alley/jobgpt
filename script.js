document.getElementById('questionnaireForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get form data
  const formData = new FormData(event.target);

  // Create an object to store the responses
  const responses = {};

  // Iterate over the form data and populate the responses object
  for (let pair of formData.entries()) {
    const question = pair[0];
    const answer = pair[1];
    responses[question] = answer;
  }

  // Save the responses or perform further processing
  // You can send the responses to a server for storage, or store them in a database

  // Reset the form
  event.target.reset();

  // Display a confirmation message
  alert('Thank you for completing the questionnaire!');
});
