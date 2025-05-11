function getQueryTag() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("tag");
  }

  const tag = getQueryTag();
  document.getElementById("tagLabel").textContent = tag;
  document.getElementById("catImg").src = 
    `https://cataas.com/cat/${tag}?timestamp=${Date.now()}`;