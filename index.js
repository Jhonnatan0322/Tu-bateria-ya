document.getElementById("yr").textContent = new Date().getFullYear();

// Scroll reveal
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible")}});
},{threshold:0.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

// Parallax hero bg
const heroBg = document.querySelector(".hero-bg");
window.addEventListener("scroll",()=>{
  if(heroBg){
    const y = window.scrollY;
    heroBg.style.transform = `translateY(${y*0.35}px) scale(1.03)`;
  }
},{passive:true});