// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heartButtons = document.querySelectorAll(".like-glyph");
for (let i = 0; i<heartButtons.length; i++){
  heartButtons [i].addEventListener("click", likeCallback);
}
function likeCallback(){
  mimicServerCall()
.then(()=> {})
.catch(()=> {
  document.getElementById("modal").hidden = false
  setTimeout (()=> {
    document.getElementById("modal").hidden = true 
  }
,3000)
})
}


//success change heart back to


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        console.log("failure")
        reject("Random server error. Try again.");
      } else {
        console.log("success")
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
