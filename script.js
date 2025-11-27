// --- ANIMATION: Typed effect (JS logic) ---
const typedEl = document.querySelector('#typed');
const phrases = ['I build Flutter apps.', 'Clean Architecture.', 'Beautiful UI/UX.']; 
let idx = 0, char = 0, forward = true;
function typeLoop(){
  const text = phrases[idx];
  if(forward){
    char++;
    typedEl.textContent = text.slice(0,char);
    if(char === text.length){ forward=false; setTimeout(typeLoop,1000); return; }
  } else {
    char--;
    typedEl.textContent = text.slice(0,char);
    if(char===0){ forward=true; idx=(idx+1)%phrases.length; }
  }
  setTimeout(typeLoop, forward?80:40);
}
typeLoop();
// ------------------------------------------

// Year in footer
document.querySelector('#year').textContent = new Date().getFullYear();

// Mobile nav toggle FIX
const navToggle = document.querySelector('#navToggle');
if(navToggle){
  const nav = document.querySelector('.main-nav');
  navToggle.addEventListener('click', ()=> {
    nav.classList.toggle('open');
  });
  
  // Close nav when a link is clicked
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
      }
    });
  });
}

// --- ANIMATION: Scroll Reveal (JS logic) ---
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll(){
  for(const el of reveals){
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 60){
      el.classList.add('active');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
// ------------------------------------------

// --- ANIMATION: Animate skill bars on scroll (JS logic) ---
function animateSkills(){
  document.querySelectorAll('.bar span').forEach(bar=>{
    // Check if the skill bar is visible
    if(bar.getBoundingClientRect().top < window.innerHeight - 60){
      // Set the width based on the data-skill attribute
      bar.style.width = bar.dataset.skill + "%";
    }
  });
}
window.addEventListener('scroll', animateSkills);
animateSkills(); // Run on load to check initial visibility
// ---------------------------------------------------------