let availableTags = [];

// Fetch tags once when page loads
fetch("https://cataas.com/api/tags")
  .then(res => res.json())
  .then(tags => availableTags = tags.map(tag => tag.toLowerCase()));

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const okayBtn = document.getElementById("okayBtn");
  const intro = document.getElementById("introText");
  const question = document.getElementById("questionText");
  const input = document.getElementById("userInput");
  const submit = document.getElementById("submitBtn");
  const quirky = document.getElementById("quirkyMsg");

  // Reveal "Okay!" after intro finishes fading in
  intro.addEventListener("animationend", () => {
    okayBtn.classList.remove("hidden");
  });

  okayBtn.addEventListener("click", () => {
    okayBtn.classList.add("hidden");

    // Show question with fade-in effect
    question.classList.remove("hidden");
    question.classList.add("fade-in");

    question.addEventListener("animationend", () => {
      input.classList.remove("hidden");
      submit.classList.remove("hidden");
      quirky.classList.remove("hidden");
    });
  });
});

function checkTag() {
  const input = document.getElementById("userInput").value.trim().toLowerCase();
  const errorMsg = document.getElementById("errorMsg");

  if (availableTags.includes(input)) {
    window.location.href = `cat.html?tag=${encodeURIComponent(input)}`;
  } else {
    errorMsg.textContent = "Miss MeowMeow does not know that word... human is my second language! Tell me another word!";
  }
}
