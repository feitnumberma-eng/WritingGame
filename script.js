const images = {
  1: [
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/01.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/02.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/03.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/04.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/05.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/06.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/07.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/08.png"
  ],
  2: [
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/01-1.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/02-1.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/03-1.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/04-1.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/05-1.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/06-1.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/07-1.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/08-1.png"
  ],
  3: [
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/01-2.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/02-2.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/03-2.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/04-2.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/05-2.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/06-2.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/07-2.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/08-2.png"
  ],
  4: [
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/01-3.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/02-3.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/03-3.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/04-3.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/05-3.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/06-3.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/07-3.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/08-3.png"
  ],
  5: [
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/02-4.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/04-4.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/05-4.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/06-4.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/07-4.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/08-4.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/09.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/10.png"
  ],
  6: [
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/01-4.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/02-5.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/03-4.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/04-5.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/05-5.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/06-5.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/07-5.png",
    "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/08-5.png"
  ]
};

// Single random pick
function pickRandom(category) {
  const arr = images[category];
  const img = document.getElementById("img" + category);
  const url = arr[Math.floor(Math.random() * arr.length)];

  img.classList.remove("show");
  img.style.display = "none";

  setTimeout(() => {
    img.src = url;
    img.style.display = "block";
    img.classList.add("show");
  }, 50);

  closePicker(category);
}

// Manual picker
function openManualPicker(category) {
  const picker = document.getElementById("picker" + category);
  picker.innerHTML = "";

  images[category].forEach(url => {
    const card = document.createElement("img");
    card.src = url;
    card.onclick = () => selectManual(category, url);
    picker.appendChild(card);
  });

  picker.style.display = "grid";
}

function selectManual(category, url) {
  const img = document.getElementById("img" + category);
  img.src = url;
  img.style.display = "block";
  img.classList.add("show");
  closePicker(category);
}

function closePicker(category) {
  const picker = document.getElementById("picker" + category);
  if (picker) picker.style.display = "none";
}

// Randomize all
function randomizeAll() {
  const tarotContainer = document.getElementById("tarotContainer");
  tarotContainer.innerHTML = "";
  tarotContainer.style.display = "flex";
  tarotContainer.style.flexWrap = "wrap";
  tarotContainer.style.justifyContent = "center";
  tarotContainer.style.gap = "10px";

  for (let i = 1; i <= 6; i++) {
    const img = document.createElement("img");
    img.src = images[i][Math.floor(Math.random() * images[i].length)];
    img.classList.add("resultImage");
    img.style.width = "150px";
    img.style.maxWidth = "90%";

    tarotContainer.appendChild(img);

    setTimeout(() => {
      img.classList.add("show");
    }, 50);
  }
}

// Reset all
function resetAll() {
  for (let i = 1; i <= 6; i++) {
    const img = document.getElementById("img" + i);
    if (img) {
      img.src = "";
      img.style.display = "none";
      img.classList.remove("show");
    }
    closePicker(i);
  }

  const tarotContainer = document.getElementById("tarotContainer");
  tarotContainer.innerHTML = "";
  tarotContainer.style.display = "none";

  // hide story section
  document.getElementById("storySection").style.display = "none";
}

// Done button
function doneAndExport() {
  const storyDiv = document.getElementById("storySection");
  storyDiv.style.display = "block";

  const finalRow = document.getElementById("finalRow");
  finalRow.innerHTML = "";
  finalRow.style.display = "flex";
  finalRow.style.flexWrap = "wrap";
  finalRow.style.justifyContent = "center";
  finalRow.style.gap = "10px";
  finalRow.style.marginBottom = "15px";

  for (let i = 1; i <= 6; i++) {
    const img = document.getElementById("img" + i).cloneNode();
    img.style.width = "150px";
    img.style.maxWidth = "90%";
    img.style.display = "block";
    img.classList.add("show");
    finalRow.appendChild(img);
  }
}

// Export story as PNG (text only)
document.getElementById("savePNGBtn").addEventListener("click", function() {
  const storyDiv = document.getElementById("storySection");

  const exportWrapper = document.createElement("div");
  exportWrapper.style.width = "900px";
  exportWrapper.style.padding = "20px";
  exportWrapper.style.background = "#fff";
  exportWrapper.style.fontFamily = "Tajawal, sans-serif";
  exportWrapper.style.color = "#333";
  exportWrapper.style.direction = "rtl";
  exportWrapper.style.textAlign = "right";

  // Add final cards
  const finalRowClone = document.getElementById("finalRow").cloneNode(true);
  exportWrapper.appendChild(finalRowClone);

  // Add story text
  const storyText = document.getElementById("storyText").value;
  const storyP = document.createElement("p");
  storyP.style.fontSize = "16px";
  storyP.style.marginTop = "20px";
  storyP.textContent = storyText;
  exportWrapper.appendChild(storyP);

  document.body.appendChild(exportWrapper);

  html2canvas(exportWrapper).then(canvas => {
    const link = document.createElement("a");
    link.download = "قصتي.png";
    link.href = canvas.toDataURL();
    link.click();
    document.body.removeChild(exportWrapper);
  });
});
