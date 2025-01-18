
window.onload = function() {
    //write your code here
    let word0 = ["Oops!", "Apologies!", "Sorry!"];
    let word1 = ["Page", "Website", "Blog"];
    let word2 = ["is", "will be", "was"];
    let word3 = ["having", "under"];
    let word4 = ["improvements!", "technichal difficulties!", "construction!", "a makeover"];
    let color =["pink", "violet", "brown", "yellowgreen"]

    let randomColor = allRandom(color);
    let random0 = allRandom(word0);
    let random1 = allRandom(word1);
    let random2 = allRandom(word2);
    let random3 = allRandom(word3);
    let random4 = allRandom(word4);

   

document.getElementById('excuse').innerText = `${word0[random0]} ${word1[random1]} ${word2[random2]} ${word3[random3]} ${word4[random4]}`;

let directParent = document.querySelector(".directParent");
directParent.style.backgroundColor = color[randomColor];
directParent.style.border = "10px ridge";
  };

  function allRandom(arr) {
   return Math.floor(Math.random() * arr.length);
  }