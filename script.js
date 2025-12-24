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

// SIMPLE WORKING VERSION for PNG export
document.getElementById("savePNGBtn").addEventListener("click", async function() {
  const saveBtn = this;
  const originalText = saveBtn.textContent;
  saveBtn.textContent = "جاري التحميل...";
  saveBtn.disabled = true;
  
  try {
    // Get all the data we need
    const storyText = document.getElementById("storyText").value;
    
    // Collect card images
    const cardImages = [];
    for (let i = 1; i <= 6; i++) {
      const img = document.getElementById(`img${i}`);
      if (img && img.src && img.src.trim() !== "") {
        cardImages.push(img.src);
      }
    }
    
    // Create a visible container (not hidden!)
    const exportContainer = document.createElement("div");
    exportContainer.id = "export-for-capture";
    exportContainer.style.cssText = `
      position: absolute;
      left: 50%;
      top: 50px;
      transform: translateX(-50%);
      width: 900px;
      padding: 30px;
      background: white;
      border: 2px solid #a97852;
      border-radius: 12px;
      box-sizing: border-box;
      font-family: 'Tajawal', sans-serif;
      direction: rtl;
      text-align: right;
      z-index: 10000;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    
    // Add content to the container
    exportContainer.innerHTML = `
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/logo-copy.png" 
             style="width: 150px; height: auto; display: block; margin: 0 auto 10px;">
        <h2 style="color: #a97852; margin: 0; font-size: 24px;">تمرين الكتابة الجريئة</h2>
      </div>
      
      <hr style="border: 1px solid #a97852; margin: 10px 0 20px;">
      
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 10px;">
        ${['التصنيف', 'التسلسل الزمني', 'العنصر غير المتوقع', 'الراوي', 'الموضوع', 'البداية']
          .slice(0, cardImages.length)
          .map(label => `<div style="font-size: 14px; font-weight: bold; color: #a97852; text-align: center; width: 150px;">${label}</div>`)
          .join('')}
      </div>
      
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 30px;">
        ${cardImages.map(src => 
          `<img src="${src}" style="width: 150px; height: 150px; object-fit: contain; border-radius: 6px; border: 1px solid #ddd;">`
        ).join('')}
      </div>
      
      <hr style="border: 1px solid #a97852; margin: 10px 0 20px;">
      
      <h3 style="color: #a97852; margin-bottom: 15px; font-size: 20px;">قصتي:</h3>
      
      <div style="
        font-size: 18px;
        line-height: 1.8;
        white-space: pre-wrap;
        padding: 20px;
        border: 2px solid #a97852;
        border-radius: 8px;
        min-height: 200px;
        background-color: #f8f3f0;
        text-align: right;
        direction: rtl;
      ">
        ${storyText || "لم يتم كتابة قصة بعد."}
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 15px; border-top: 1px solid #ddd; color: #666;">
        <p style="margin: 0;">تم إنشاؤها بواسطة مدونة فاطمة</p>
        <p style="margin: 5px 0 0;">التاريخ: ${new Date().toLocaleDateString('ar-EG')}</p>
      </div>
      
      <div style="text-align: center; margin-top: 20px;">
        <button id="closeExport" style="padding: 8px 20px; background: #a97852; color: white; border: none; border-radius: 4px; cursor: pointer;">
          أغلق هذه النافذة بعد التحميل
        </button>
      </div>
    `;
    
    // Add to body and make it visible
    document.body.appendChild(exportContainer);
    
    // Add close button functionality
    document.getElementById('closeExport').addEventListener('click', function() {
      document.body.removeChild(exportContainer);
      saveBtn.textContent = originalText;
      saveBtn.disabled = false;
    });
    
    // Wait for images to load
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Now capture the visible container
    const canvas = await html2canvas(exportContainer, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: true,
      windowWidth: exportContainer.offsetWidth,
      windowHeight: exportContainer.offsetHeight
    });
    
    // Create download link
    const link = document.createElement("a");
    link.download = `قصتي_${new Date().toISOString().slice(0,10)}.png`;
    link.href = canvas.toDataURL("image/png");
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message
    alert("تم حفظ الصورة بنجاح! يمكنك الآن إغلاق النافذة العلوية.");
    
  } catch (error) {
    console.error("Error:", error);
    alert("حدث خطأ. حاول مرة أخرى.");
    
    // Clean up if container exists
    const existing = document.getElementById('export-for-capture');
    if (existing) {
      document.body.removeChild(existing);
    }
    
    saveBtn.textContent = originalText;
    saveBtn.disabled = false;
  }
});

// Preload logo for better performance
window.addEventListener('load', function() {
  const logo = new Image();
  logo.src = "https://fatthatmablog.wordpress.com/wp-content/uploads/2025/11/logo-copy.png";
});
