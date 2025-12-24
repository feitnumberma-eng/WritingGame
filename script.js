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

// --- Random / manual selection ---
function pickRandom(category){
  const arr = images[category];
  const img = document.getElementById("img"+category);
  const url = arr[Math.floor(Math.random()*arr.length)];
  img.classList.remove("show");
  img.style.display="none";
  setTimeout(()=>{
    img.src=url;
    img.style.display="block";
    img.classList.add("show");
  },50);
  closePicker(category);
}

function openManualPicker(category){
  const picker=document.getElementById("picker"+category);
  picker.innerHTML="";
  images[category].forEach(url=>{
    const card=document.createElement("img");
    card.src=url;
    card.onclick=()=>selectManual(category,url);
    picker.appendChild(card);
  });
  picker.style.display="grid";
}

function selectManual(category,url){
  const img=document.getElementById("img"+category);
  img.src=url;
  img.style.display="block";
  img.classList.add("show");
  closePicker(category);
}

function closePicker(category){
  const picker=document.getElementById("picker"+category);
  if(picker) picker.style.display="none";
}

// --- Randomize / reset ---
function randomizeAll(){
  const tarotContainer=document.getElementById("tarotContainer");
  tarotContainer.innerHTML="";
  tarotContainer.style.display="flex";
  for(let i=1;i<=6;i++){
    const img=document.createElement("img");
    img.src=images[i][Math.floor(Math.random()*images[i].length)];
    img.style.width="150px";
    img.style.maxWidth="90%";
    tarotContainer.appendChild(img);
  }
}

function resetAll(){
  for(let i=1;i<=6;i++){
    const img=document.getElementById("img"+i);
    if(img){ img.src=""; img.style.display="none"; img.classList.remove("show"); }
    closePicker(i);
  }
  document.getElementById("tarotContainer").innerHTML="";
  document.getElementById("tarotContainer").style.display="none";
  const storySection=document.getElementById("storySection");
  storySection.style.display="none";
  document.getElementById("storyText").value="";
  document.getElementById("finalRow").innerHTML="";
  const cardButtons=document.querySelectorAll(".category button");
  cardButtons.forEach(btn=>btn.style.display="inline-block");
  const doneBtn=document.querySelector(".doneBtn");
  if(doneBtn) doneBtn.style.display="inline-block";
}

// --- Done button ---
function doneAndExport(){
  // hide per-card buttons & Done button but keep reset
  const cardButtons=document.querySelectorAll(".category button");
  cardButtons.forEach(btn=>btn.style.display="none");
  const doneBtn=document.querySelector(".doneBtn");
  if(doneBtn) doneBtn.style.display="none";
  showFinalRow();
}

function showFinalRow(){
  const storyDiv=document.getElementById("storySection");
  storyDiv.style.display="block";
  const finalRow=document.getElementById("finalRow");
  finalRow.innerHTML="";
  for(let i=1;i<=6;i++){
    let imgEl=document.getElementById("img"+i);
    if(!imgEl || !imgEl.src){
      const tarotImg=document.querySelector(`#tarotContainer img:nth-child(${i})`);
      if(tarotImg) imgEl=tarotImg;
    }
    if(imgEl && imgEl.src){
      const clone=imgEl.cloneNode();
      clone.style.width="150px";
      clone.style.maxWidth="90%";
      clone.style.display="block";
      finalRow.appendChild(clone);
    }
  }
  finalRow.scrollIntoView({behavior:"smooth", block:"center"});
}

// --- Export PNG ---
document.getElementById("savePNGBtn").addEventListener("click",function(){
  const exportWrapper=document.createElement("div");
  exportWrapper.style.width="900px";
  exportWrapper.style.padding="20px";
  exportWrapper.style.background="#fff";
  exportWrapper.style.fontFamily="Tajawal, sans-serif";
  exportWrapper.style.color="#333";
  exportWrapper.style.direction="rtl";
  exportWrapper.style.textAlign="center";

  // Logo
  const logo=document.querySelector(".topLogo").cloneNode(true);
  logo.style.width="150px"; logo.style.height="auto";
  exportWrapper.appendChild(logo);

  // Final cards
  const finalRow=document.getElementById("finalRow");
  if(finalRow){
    const cloneRow=finalRow.cloneNode(true);
    cloneRow.querySelectorAll("img").forEach(img=>img.style.display="block");
    exportWrapper.appendChild(cloneRow);
  }

  // Story text
  const storyText=document.getElementById("storyText").value;
  const storyP=document.createElement("p");
  storyP.style.fontSize="16px";
  storyP.style.margin="20px auto 0 auto";
  storyP.style.maxWidth="850px";
  storyP.style.textAlign="right";
  storyP.textContent=storyText;
  exportWrapper.appendChild(storyP);

  document.body.appendChild(exportWrapper);

  html2canvas(exportWrapper, {scale:2}).then(canvas=>{
    const link=document.createElement("a");
    link.download="قصتي.png";
    link.href=canvas.toDataURL("image/png");
    link.click();
    document.body.removeChild(exportWrapper);
  });
});
