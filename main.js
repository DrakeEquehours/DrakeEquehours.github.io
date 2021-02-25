alert("Website ini tidak didesain untuk digunakan pada versi mobile, berberapa error akan ditemukan dan belum diperbaiki")
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    } 
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
      // Initial Type Speed
      let typeSpeed = 300;
  
      if(this.isDeleting) {
        typeSpeed /= 4;
      }
      // If word is complete
      if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('#job');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }

//========================================Animation Using Intersection Observer==================================================//

const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 0,
  rootMargin: "0px -250px 0px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(entries,appearOnScrool){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }else{
      entry.target.classList.add("appear")
      appearOnScroll.unobserve(entry.target)
    }
  });
}, 
appearOptions);

faders.forEach(fader =>{
  appearOnScroll.observe(fader);
})

const sliders = document.querySelectorAll(".slide-in")
sliders.forEach(slider => {
  appearOnScroll.observe(slider);
})

//==============================Validating Email======================================//
let email = document.querySelector("#email")
const icon1 = document.querySelector('.icon1')

let regExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
function checkEmail(){
  if(email.value.match(regExp)){
    icon1.style.display = "none"
  }else if(email.value == ""){
    icon1.style.display = "none"
  }else{
    icon1.style.display = "block"
  }
}