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
  tarotContainer.style.gap = "15px";
  tarotContainer.style.margin = "20px 0";
  tarotContainer.style.opacity = "1";

  // First, close all manual pickers
  for (let i = 1; i <= 6; i++) {
    closePicker(i);
  }

  // Select random images for each category
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
    }, i * 100);
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

// =============== NEW CANVAS-BASED EXPORT ===============
document.getElementById("savePNGBtn").addEventListener("click", async function() {
  const saveBtn = this;
  const originalText = saveBtn.textContent;
  saveBtn.textContent = "جاري إنشاء الصورة...";
  saveBtn.disabled = true;
  
  try {
    // Get story text
    const storyText = document.getElementById("storyText").value;
    
    // Collect selected card URLs
    const cardUrls = [];
    for (let i = 1; i <= 6; i++) {
      const img = document.getElementById(`img${i}`);
      if (img && img.src && img.src.trim() !== "") {
        cardUrls.push(img.src);
      }
    }
    
    // Category labels in Arabic
    const categoryLabels = ['التصنيف', 'التسلسل الزمني', 'العنصر غير المتوقع', 'الراوي', 'الموضوع', 'البداية'];
    
    // Create canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions (A4 size at 150 DPI)
    canvas.width = 1240;  // ~8.27 inches at 150 DPI
    canvas.height = 1754; // ~11.69 inches at 150 DPI
    
    // Fill background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Load logo image
    const logoImg = await loadImage('https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/logo-copy.png');
    
    // Draw logo at top center
    const logoHeight = 80;
    const logoWidth = (logoImg.width * logoHeight) / logoImg.height;
    ctx.drawImage(logoImg, (canvas.width - logoWidth) / 2, 50, logoWidth, logoHeight);
    
    // Draw title
    ctx.fillStyle = '#a97852';
    ctx.font = 'bold 32px "Tajawal", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('تمرين الكتابة الجريئة', canvas.width / 2, 170);
    
    // Draw horizontal line
    ctx.fillStyle = '#a97852';
    ctx.fillRect(100, 200, canvas.width - 200, 2);
    
    let yPosition = 250;
    
    // Draw category labels
    ctx.font = 'bold 18px "Tajawal", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#a97852';
    
    for (let i = 0; i < Math.min(cardUrls.length, 6); i++) {
      const x = 100 + (i % 3) * 340;
      ctx.fillText(categoryLabels[i], x + 150, yPosition);
    }
    
    yPosition += 30;
    
    // Load and draw card images
    const cardPromises = cardUrls.map(url => loadImage(url));
    const cardImages = await Promise.all(cardPromises);
    
    for (let i = 0; i < cardImages.length; i++) {
      const cardImg = cardImages[i];
      const row = Math.floor(i / 3);
      const col = i % 3;
      const x = 100 + col * 340;
      const y = yPosition + row * 160;
      
      // Draw card border
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(x, y, 300, 150);
      
      // Draw card image (centered within the card area)
      const maxWidth = 280;
      const maxHeight = 130;
      const scale = Math.min(maxWidth / cardImg.width, maxHeight / cardImg.height);
      const drawWidth = cardImg.width * scale;
      const drawHeight = cardImg.height * scale;
      const drawX = x + (300 - drawWidth) / 2;
      const drawY = y + (150 - drawHeight) / 2;
      
      ctx.drawImage(cardImg, drawX, drawY, drawWidth, drawHeight);
    }
    
    yPosition += (Math.ceil(cardImages.length / 3) * 160) + 50;
    
    // Draw horizontal line before story
    ctx.fillStyle = '#a97852';
    ctx.fillRect(100, yPosition, canvas.width - 200, 2);
    yPosition += 30;
    
    // Draw story title
    ctx.font = 'bold 24px "Tajawal", sans-serif';
    ctx.textAlign = 'right';
    ctx.fillStyle = '#a97852';
    ctx.fillText('قصتي:', canvas.width - 100, yPosition);
    yPosition += 40;
    
    // Draw story text with proper Arabic wrapping
    ctx.font = '20px "Tajawal", sans-serif';
    ctx.fillStyle = '#333333';
    ctx.textAlign = 'right';
    
    const maxWidth = canvas.width - 200;
    const lineHeight = 32;
    const lines = wrapArabicText(ctx, storyText || "لم يتم كتابة قصة بعد.", maxWidth);
    
    // Draw story background
    ctx.fillStyle = '#f8f3f0';
    ctx.fillRect(100, yPosition - 10, canvas.width - 200, (lines.length * lineHeight) + 40);
    
    // Draw story border
    ctx.strokeStyle = '#a97852';
    ctx.lineWidth = 2;
    ctx.strokeRect(100, yPosition - 10, canvas.width - 200, (lines.length * lineHeight) + 40);
    
    // Draw story text lines
    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], canvas.width - 120, yPosition + (i * lineHeight));
    }
    
    yPosition += (lines.length * lineHeight) + 70;
    
    // Draw footer
    ctx.font = '16px "Tajawal", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#666666';
    ctx.fillText('تم إنشاؤها بواسطة مدونة فاطمة', canvas.width / 2, yPosition);
    ctx.fillText(`التاريخ: ${new Date().toLocaleDateString('ar-EG')}`, canvas.width / 2, yPosition + 25);
    
    // Convert to data URL and download
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `قصتي_${new Date().toISOString().slice(0,10)}.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  } catch (error) {
    console.error('Error creating image:', error);
    alert('حدث خطأ أثناء إنشاء الصورة. يرجى المحاولة مرة أخرى.');
  } finally {
    saveBtn.textContent = originalText;
    saveBtn.disabled = false;
  }
});

// Helper function to load images with timeout
function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    
    // Add cache busting to avoid CORS issues
    img.src = url + (url.includes('?') ? '&' : '?') + 't=' + Date.now();
    
    // Timeout after 5 seconds
    setTimeout(() => reject(new Error('Image load timeout')), 5000);
  });
}

// Helper function to wrap Arabic text
function wrapArabicText(ctx, text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';
  
  for (let i = words.length - 1; i >= 0; i--) { // Reverse for Arabic
    const word = words[i];
    const testLine = currentLine ? word + ' ' + currentLine : word;
    const metrics = ctx.measureText(testLine);
    
    if (metrics.width > maxWidth && currentLine !== '') {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  
  if (currentLine) {
    lines.push(currentLine);
  }
  
  return lines;
}

// Preload logo for faster export
window.addEventListener('load', function() {
  // Preload logo
  const logo = new Image();
  logo.crossOrigin = 'anonymous';
  logo.src = 'https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/logo-copy.png';
});
