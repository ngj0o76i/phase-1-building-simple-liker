// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll('.like-glyph')

const modal = document.getElementById("modal")

function server(e) {
  // event/e
  const heart = e.target
  mimicServerCall()
    .then(() => {

      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART
        heart.className = 'activated-heart'
      } else {
        heart.innerText = EMPTY_HEART
        heart.className = ""

      }
    })
    .catch((error) => {
      modal.className = ''
      modal.innerText = error
      setTimeout(() => modal.className = 'hidden', 3000)
    })
}

for (const symbol of hearts) {
  symbol.addEventListener("click", server);
}

// const liked = document.getElementsByClassName("like-glyph")

// for (let heart of hearts){
//   heart.addEventListener('click',()=>{
//     console.log (heart);
//    mimicServerCall()

//  .then('change', heart =>{
//    console.log (heart);










//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}