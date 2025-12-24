/* my very very long list of photos as URLs from my blog bc... yeah best hosting service lmao */
const images = {
  1: ["https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/01.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/02.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/03.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/04.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/05.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/06.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/07.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/08.png"],
  
  2: ["https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/01-1.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/02-1.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/03-1.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/04-1.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/05-1.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/06-1.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/07-1.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/08-1.png"],
  
  3: ["https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/01-2.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/02-2.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/03-2.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/04-2.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/05-2.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/06-2.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/07-2.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/08-2.png"],
  
  4: ["https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/01-3.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/02-3.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/03-3.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/04-3.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/05-3.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/06-3.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/07-3.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/08-3.png"],
  
  5: ["https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/02-4.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/04-4.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/05-4.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/06-4.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/07-4.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/08-4.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/09.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/10.png"],
  
  6: ["https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/01-4.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/02-5.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/03-4.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/04-5.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/05-5.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/06-5.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/07-5.png",
      "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/08-5.png"]
};

/* da code to make em pick one random card for a category */
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

/* da code for randomize all categories into tarot deck layout */
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

    // animate these mfs
    setTimeout(() => {
      img.classList.add("show");
    }, 50);
  }
}

/* Reset all images bc lets be hosnst we're gonna hate what we get at some point */
function resetAll() {
  for (let i = 1; i <= 6; i++) {
    const img = document.getElementById("img" + i);
    if (img) {
      img.src = "";
      img.style.display = "none";
      img.classList.remove("show");
    }

    const picker = document.getElementById("picker" + i);
    if (picker) {
      picker.innerHTML = "";
      picker.style.display = "none";
    }
  }

  const tarotContainer = document.getElementById("tarotContainer");
  tarotContainer.innerHTML = "";
  tarotContainer.style.display = "none";
}

  // reset tarot container
  const tarotContainer = document.getElementById("tarotContainer");
  tarotContainer.innerHTML = "";
  tarotContainer.style.display = "none";
}

/*manual picker stuff*/
function openManualPicker(category) {
  const picker = document.getElementById("picker" + category);
  picker.innerHTML = "";

  images[category].forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    img.onclick = () => selectManualCard(category, url);
    picker.appendChild(img);
  });

  picker.style.display = "grid";
}

function selectManualCard(category, url) {
  const img = document.getElementById("img" + category);
  const picker = document.getElementById("picker" + category);

  img.classList.remove("show");
  img.style.display = "none";

  setTimeout(() => {
    img.src = url;
    img.style.display = "block";
    img.classList.add("show");
  }, 50);

  picker.style.display = "none";
}

