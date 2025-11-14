/* Dummy URLs — replace with real URLs */
const images = {
  1: ["https://example.com/cat1_1.jpg","https://example.com/cat1_2.jpg","https://example.com/cat1_3.jpg","https://example.com/cat1_4.jpg","https://example.com/cat1_5.jpg","https://example.com/cat1_6.jpg","https://example.com/cat1_7.jpg","https://example.com/cat1_8.jpg"],
  2: ["https://example.com/cat2_1.jpg","https://example.com/cat2_2.jpg","https://example.com/cat2_3.jpg","https://example.com/cat2_4.jpg","https://example.com/cat2_5.jpg","https://example.com/cat2_6.jpg","https://example.com/cat2_7.jpg","https://example.com/cat2_8.jpg"],
  3: ["https://example.com/cat3_1.jpg","https://example.com/cat3_2.jpg","https://example.com/cat3_3.jpg","https://example.com/cat3_4.jpg","https://example.com/cat3_5.jpg","https://example.com/cat3_6.jpg","https://example.com/cat3_7.jpg","https://example.com/cat3_8.jpg"],
  4: ["https://example.com/cat4_1.jpg","https://example.com/cat4_2.jpg","https://example.com/cat4_3.jpg","https://example.com/cat4_4.jpg","https://example.com/cat4_5.jpg","https://example.com/cat4_6.jpg","https://example.com/cat4_7.jpg","https://example.com/cat4_8.jpg"],
  5: ["https://example.com/cat5_1.jpg","https://example.com/cat5_2.jpg","https://example.com/cat5_3.jpg","https://example.com/cat5_4.jpg","https://example.com/cat5_5.jpg","https://example.com/cat5_6.jpg","https://example.com/cat5_7.jpg","https://example.com/cat5_8.jpg"],
  6: ["https://example.com/cat6_1.jpg","https://example.com/cat6_2.jpg","https://example.com/cat6_3.jpg","https://example.com/cat6_4.jpg","https://example.com/cat6_5.jpg","https://example.com/cat6_6.jpg","https://example.com/cat6_7.jpg","https://example.com/cat6_8.jpg"]
};

/* Pick one random card for a category */
function pickRandom(category) {
  const arr = images[category];
  const randomURL = arr[Math.floor(Math.random() * arr.length)];

  const img = document.getElementById("img" + category);
  img.classList.remove("show");
  img.style.display = "none";

  setTimeout(() => {
    img.src = randomURL;
    img.style.display = "block";
    img.classList.add("show");
  }, 50);
}

/* Randomize all categories into tarot deck layout */
function randomizeAll() {
  const tarotContainer = document.getElementById("tarotContainer");
  tarotContainer.innerHTML = ""; // clear previous
  tarotContainer.style.display = "flex";

  for (let i = 1; i <= 6; i++) {
    const arr = images[i];
    const randomURL = arr[Math.floor(Math.random() * arr.length)];

    const img = document.createElement("img");
    img.src = randomURL;
    tarotContainer.appendChild(img);

    // animate
    setTimeout(() => {
      img.classList.add("show");
    }, 50);
  }
}

/* Reset all images */
function resetAll() {
  // reset single categories
  for (let i = 1; i <= 6; i++) {
    const img = document.getElementById("img" + i);
    img.src = "";
    img.style.display = "none";
    img.classList.remove("show");
  }

  // reset tarot container
  const tarotContainer = document.getElementById("tarotContainer");
  tarotContainer.innerHTML = "";
  tarotContainer.style.display = "none";
}
