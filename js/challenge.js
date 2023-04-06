const countr = document.getElementById("counter");
let timer = setInterval(function() {
    countr.innerText++;
}, 1000)

const minus = document.getElementById("minus")
minus.addEventListener('click', () => {
    countr.innerText--
})

const plus = document.getElementById("plus")
plus.addEventListener('click', () => {
    countr.innerText++
})
let likecounter = 0
let countObj = {}
const like = document.getElementById('heart')
like.addEventListener('click', () => {
   
  if (!(countr.innerText in countObj)) {
        let li = document.createElement("li")
        countObj[countr.innerText] = 1
        li.id = `${countr.innerText}`
        li.innerText = `${countr.innerText} has ${countObj[countr.innerText]} likes`
        document.querySelector(".likes").appendChild(li);
    }

    else {
        countObj[countr.innerText]++
        document.getElementById(`${countr.innerText}`).innerText = `${countr.innerText} has ${countObj[countr.innerText]} likes`
    }

})

const pause = document.getElementById("pause");
pause.addEventListener('click', () => {
    if (pause.innerText === "pause") {
        clearTimeout(timer); 
        pause.innerText = "resume"
        minus.disabled = true;
        plus.disabled = true;
        like.disabled = true; 
        button.disabled = true;
    }
    else if (pause.innerText === "resume") {
         timer = setInterval(function() {
            countr.innerText++;
        }, 1000)
        pause.innerText = "pause"
        minus.disabled = false;
        plus.disabled = false;
        like.disabled = false; 
        button.disabled = false;
    }

})


const button = document.getElementById("submit");
button.addEventListener('click', (e) => {
    e.preventDefault();
    let comment = document.getElementById("comment-input")
    
    let ul = document.createElement("ul")
    let licom = document.createElement("li")
    licom.innerText = comment.value
    document.querySelector("div").appendChild(ul)
    ul.appendChild(licom);
    
})
