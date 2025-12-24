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

// Randomize all - FIXED VERSION
function randomizeAll() {
  const tarotContainer = document.getElementById("tarotContainer");
  tarotContainer.innerHTML = "";
  tarotContainer.style.display = "flex";
  tarotContainer.style.flexWrap = "wrap";
  tarotContainer.style.justifyContent = "center";
  tarotContainer.style.gap = "15px";
  tarotContainer.style.margin = "20px 0";
  tarotContainer.style.opacity = "1";

  // First, close all manual pickers
  for (let i = 1; i <= 6; i++) {
    closePicker(i);
  }

  // Select random images for each category and update both the main images and tarot container
  for (let i = 1; i <= 6; i++) {
    const arr = images[i];
    const randomUrl = arr[Math.floor(Math.random() * arr.length)];
    
    // Update the main image in the category
    const mainImg = document.getElementById("img" + i);
    mainImg.classList.remove("show");
    mainImg.style.display = "none";
    
    setTimeout(() => {
      mainImg.src = randomUrl;
      mainImg.style.display = "block";
      mainImg.classList.add("show");
    }, 50);
    
    // Create image for tarot container
    const tarotImg = document.createElement("img");
    tarotImg.src = randomUrl;
    tarotImg.style.width = "150px";
    tarotImg.style.maxWidth = "90%";
    tarotImg.style.borderRadius = "6px";
    tarotImg.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    tarotImg.style.opacity = "0";
    tarotImg.style.transform = "translateY(-20px)";
    tarotImg.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    
    tarotContainer.appendChild(tarotImg);
    
    // Animate each card with a delay
    setTimeout(() => {
      tarotImg.style.opacity = "1";
      tarotImg.style.transform = "translateY(0)";
    }, i * 100); // Stagger the animation
  }
  
  // Hide the tarot container after 3 seconds
  setTimeout(() => {
    tarotContainer.style.opacity = "0";
    tarotContainer.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
      tarotContainer.style.display = "none";
      tarotContainer.style.opacity = "1";
    }, 500);
  }, 3000);
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
  tarotContainer.style.opacity = "1";

  // hide story section
  document.getElementById("storySection").style.display = "none";
  
  // Clear story text
  document.getElementById("storyText").value = "";
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

  // Create image elements for each category
  for (let i = 1; i <= 6; i++) {
    const imgSrc = document.getElementById("img" + i).src;
    if (imgSrc && imgSrc.trim() !== "") {
      const img = document.createElement("img");
      img.src = imgSrc;
      img.style.width = "150px";
      img.style.maxWidth = "90%";
      img.style.display = "block";
      finalRow.appendChild(img);
    }
  }
}

// Export story as PNG (with cards and logo) - FIXED VERSION
document.getElementById("savePNGBtn").addEventListener("click", async function() {
  // Wait a moment for images to load
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const exportWrapper = document.createElement("div");
  exportWrapper.style.width = "900px";
  exportWrapper.style.padding = "30px";
  exportWrapper.style.background = "#fff";
  exportWrapper.style.fontFamily = "'Tajawal', sans-serif";
  exportWrapper.style.color = "#333";
  exportWrapper.style.direction = "rtl";
  exportWrapper.style.textAlign = "right";
  exportWrapper.style.border = "2px solid #a97852";
  exportWrapper.style.borderRadius = "12px";
  exportWrapper.style.boxSizing = "border-box";
  exportWrapper.style.position = "absolute";
  exportWrapper.style.left = "-9999px";
  exportWrapper.style.top = "0";

  // Add logo
  const logo = document.createElement("img");
  logo.src = "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/logo-copy.png";
  logo.style.width = "150px";
  logo.style.height = "auto";
  logo.style.display = "block";
  logo.style.margin = "0 auto 15px";
  exportWrapper.appendChild(logo);

  // Add title
  const title = document.createElement("h2");
  title.textContent = "تمرين الكتابة الجريئة";
  title.style.textAlign = "center";
  title.style.marginBottom = "10px";
  title.style.color = "#a97852";
  exportWrapper.appendChild(title);

  // Add horizontal line
  const hr1 = document.createElement("hr");
  hr1.style.width = "100%";
  hr1.style.border = "1px solid #a97852";
  hr1.style.margin = "10px 0 20px";
  exportWrapper.appendChild(hr1);

  // Add category labels container
  const labelsContainer = document.createElement("div");
  labelsContainer.style.display = "flex";
  labelsContainer.style.flexWrap = "wrap";
  labelsContainer.style.justifyContent = "center";
  labelsContainer.style.gap = "10px";
  labelsContainer.style.marginBottom = "15px";
  
  // Category labels in Arabic
  const categoryLabels = ["التصنيف", "التسلسل الزمني", "العنصر غير المتوقع", "الراوي", "الموضوع", "البداية"];
  
  categoryLabels.forEach(label => {
    const labelDiv = document.createElement("div");
    labelDiv.textContent = label;
    labelDiv.style.fontSize = "14px";
    labelDiv.style.fontWeight = "bold";
    labelDiv.style.color = "#a97852";
    labelDiv.style.textAlign = "center";
    labelsContainer.appendChild(labelDiv);
  });
  
  exportWrapper.appendChild(labelsContainer);

  // Create a container for the cards
  const cardsContainer = document.createElement("div");
  cardsContainer.style.display = "flex";
  cardsContainer.style.flexWrap = "wrap";
  cardsContainer.style.justifyContent = "center";
  cardsContainer.style.gap = "10px";
  cardsContainer.style.marginBottom = "30px";
  
  // Add each selected card image
  let hasCards = false;
  for (let i = 1; i <= 6; i++) {
    const imgSrc = document.getElementById("img" + i).src;
    if (imgSrc && imgSrc.trim() !== "") {
      hasCards = true;
      const img = document.createElement("img");
      img.src = imgSrc;
      img.style.width = "150px";
      img.style.maxWidth = "90%";
      img.style.display = "block";
      img.style.borderRadius = "6px";
      cardsContainer.appendChild(img);
    }
  }
  
  // Only add cards container if there are cards
  if (hasCards) {
    exportWrapper.appendChild(cardsContainer);
  }

  // Add another horizontal line
  const hr2 = document.createElement("hr");
  hr2.style.width = "100%";
  hr2.style.border = "1px solid #a97852";
  hr2.style.margin = "10px 0 20px";
  exportWrapper.appendChild(hr2);

  // Add story text
  const storyText = document.getElementById("storyText").value;
  
  const storyHeading = document.createElement("h3");
  storyHeading.textContent = "قصتي:";
  storyHeading.style.marginBottom = "15px";
  storyHeading.style.color = "#a97852";
  exportWrapper.appendChild(storyHeading);
  
  const storyP = document.createElement("div");
  storyP.style.fontSize = "18px";
  storyP.style.lineHeight = "1.8";
  storyP.style.whiteSpace = "pre-wrap";
  storyP.style.padding = "20px";
  storyP.style.border = "2px solid #a97852";
  storyP.style.borderRadius = "8px";
  storyP.style.minHeight = "200px";
  storyP.style.backgroundColor = "#f8f3f0";
  storyP.textContent = storyText || "لم يتم كتابة قصة بعد.";
  exportWrapper.appendChild(storyP);

  // Add footer
  const footer = document.createElement("div");
  footer.style.textAlign = "center";
  footer.style.marginTop = "30px";
  footer.style.paddingTop = "15px";
  footer.style.borderTop = "1px solid #ddd";
  footer.style.fontSize = "14px";
  footer.style.color = "#666";
  
  const footerText = document.createElement("p");
  footerText.textContent = "تم إنشاؤها بواسطة مدونة فاطمة";
  footer.appendChild(footerText);
  
  const dateText = document.createElement("p");
  dateText.textContent = "التاريخ: " + new Date().toLocaleDateString('ar-EG');
  dateText.style.marginTop = "5px";
  footer.appendChild(dateText);
  
  exportWrapper.appendChild(footer);

  // Append to body temporarily
  document.body.appendChild(exportWrapper);

  try {
    // Use html2canvas with better configuration
    html2canvas(exportWrapper, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
      allowTaint: true
    }).then(canvas => {
      const link = document.createElement("a");
      link.download = "قصتي_" + new Date().toISOString().slice(0,10) + ".png";
      link.href = canvas.toDataURL("image/png");
      link.click();
      document.body.removeChild(exportWrapper);
    }).catch(error => {
      console.error("Error generating image:", error);
      alert("حدث خطأ أثناء إنشاء الصورة. يرجى المحاولة مرة أخرى.");
      document.body.removeChild(exportWrapper);
    });
  } catch (error) {
    console.error("Error:", error);
    document.body.removeChild(exportWrapper);
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Make sure savePNGBtn exists
  const saveBtn = document.getElementById("savePNGBtn");
  if (saveBtn) {
    // Event listener is already attached above
    console.log("Story writer app initialized successfully");
  }
});
