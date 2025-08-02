document.addEventListener('DOMContentLoaded', function() {
  const ctaBtn = document.getElementById('cta-btn');
  const actionDiv = document.getElementById('action');
  const googleFormUrl = "https://forms.gle/F9wRgPGRdE91EuDA7"

  ctaBtn.addEventListener('click', function() {
    window.open(googleFormUrl, '_blank');
    setTimeout(() => {
      actionDiv.innerHTML = `
        <h1>Thank you for joining the Go-Green movement! 🌱<br>We appreciate your passion for a greener future.</h1>
      `;
    }, 1000); // Show thank you message after 1 second
  });
});