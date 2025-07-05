let input = document.querySelector("input");
let btn = document.querySelector(".btn")

btn.addEventListener("click",()=>{
    let word = input.value;
    console.log(word);
    let Rword = word.toLowerCase().split("");
    console.log(Rword)
    console.log(Rword)
    let reversedWord = Rword.reverse().join("");
    console.log(reversedWord)
    if(word.toLowerCase()===reversedWord) {
        btn.innerHTML = "palindrome";
    } else  {
        btn.innerHTML = "not palindrome";
    }    
})
