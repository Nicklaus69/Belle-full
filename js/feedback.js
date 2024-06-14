const stars = document.querySelectorAll('.star');
const commentInput = document.getElementById('comment-input');
const submitButton = document.getElementById('submit-button');
const feedbackMessage = document.getElementById('feedback-message');

let selectedRating = 0;

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    selectedRating = index + 1;
    updateStarRating();
  });
});

function updateStarRating() {
  stars.forEach((star, index) => {
    if (index < selectedRating) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
}

submitButton.addEventListener('click', () => {
  const comment = commentInput.value.trim();
  if (selectedRating > 0 && comment.length > 0) {
    sendFeedbackToDatabase(selectedRating, comment);
    showFeedbackMessage('Thank you for your feedback!');
    // Reset the form
    selectedRating = 0;
    updateStarRating();
    commentInput.value = '';
  } else {
    alert('Please select a rating and provide a comment.');
  }
});

function sendFeedbackToDatabase(rating, comment) {
  // Simulate sending the feedback to a database
  console.log(`Rating: ${rating}, Comment: ${comment}`);
  // Replace this with your actual database integration code
}

function showFeedbackMessage(message) {
  feedbackMessage.textContent = message;
  feedbackMessage.classList.remove('hidden');
}
alert("Feedback succesfully sent")