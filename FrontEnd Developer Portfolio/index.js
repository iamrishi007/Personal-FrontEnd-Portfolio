const words = [
     "Aspiring",
     "Software",
     "Developer"
]; // Array of words to be typed and then deleted in reverse order
let isTyping = true; // Flag to control typing or deleting

function typeWords(index) {
     const typingTextElement = document.getElementById('typing-text');
     const currentWord = words[index];
     const currentText = typingTextElement.textContent;
     const lengthDiff = currentWord.length - currentText.length;

     if (isTyping) {
          typingTextElement.textContent += currentWord.slice(currentText.length, currentWord.length);
          if (currentText.length < currentWord.length) {
               setTimeout(() => {
                    typeWords(index);
               }, 200); // Typing speed, adjust as needed
          } else {
               isTyping = false;
               setTimeout(() => {
                    typeWords((index + 1) % words.length);
               }, 1000); // Pause before deleting
          }
     } else {
          if (currentText.length > 0) {
               typingTextElement.textContent = currentText.slice(0, -1);
               setTimeout(() => {
                    typeWords(index);
               }, 100); // Deleting speed, adjust as needed
          } else {
               isTyping = true;
               setTimeout(() => {
                    typeWords(index);
               }, 1000); // Pause before typing next word
          }
     }
}

// Start the typing and deleting process
typeWords(0);


let btn = document.querySelector(".button-85")

btn.addEventListener('click', () => {
     window.open('https://drive.google.com/file/d/1zj6sWuPyXc6RrqQ5U39kganHd7zr7Uam/view?usp=sharing')
})
function navigateToSection(sectionId) {
     // Scroll to the specified section
     document.getElementById(sectionId).scrollIntoView({
          behavior: 'smooth'
     });

     // Uncheck the checkbox to close the navigation menu (if needed)
     document.getElementById('nav-check').checked = false;
}