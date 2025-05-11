let availableTags = [];

// Fetch tags once when page loads
fetch("https://cataas.com/api/tags")
  .then(res => res.json())
  .then(tags => availableTags = tags.map(tag => tag.toLowerCase()));

function checkTag() {
  const input = document.getElementById("userInput").value.trim().toLowerCase();
  const errorMsg = document.getElementById("errorMsg");

  if (availableTags.includes(input)) {
    // Redirect to cat.html with tag as query parameter
    window.location.href = `cat.html?tag=${encodeURIComponent(input)}`;
  } else {
    errorMsg.textContent = "Miss MeowMeow does not know that word... human is my second language! Tell me another word!";
  }
}