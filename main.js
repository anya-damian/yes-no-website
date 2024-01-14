// note on contain came under function : const i and j is used to move the button randomly 500 times 
// style part : this part is used to show the direction of the button 

const b = document.querySelector('button.button2');
b.addEventListener("mouseover",moveHover);

function moveHover(){
    const i = Math.floor(Math.random()*500)+1;
    const j = Math.floor(Math.random()*500)+1;

    b.style.left = i+"px"
    b.style.top = j+"px"
}
