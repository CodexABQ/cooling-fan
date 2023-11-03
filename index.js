
let all_sector = document.querySelector(".all-sector")

let switchElement = document.getElementById('myswitch')
switchElement.addEventListener('change', ()=>{
    if(switchElement.checked){
        all_sector.style.animation = "rotate 1s linear infinite"
    }else {
        all_sector.style.animation = "stop 5s ease-out";
    }
})
let cover = "closed"
function startFan(e){
    let sector3 = document.querySelector(".sector3")
    if(cover === "closed"){
        sector3.style.transition = "all 2s linear";
        sector3.style.transform = "rotateY(90deg)"
        cover = "open";
        
        e.style.background = "linear-gradient(135deg, #ff3e4d, #ffdd00, #10cfe3, #19e68c)"
        e.innerHTML = "Click to close";
        e.style.transition = "background 6s ease-in-out"
    }else if(cover === "open"){
        sector3.style.transition = "all 1s linear";
        sector3.style.transform = "rotateY(0deg)"
        cover = "closed"
        e.style.transition = "background 1s ease"
        e.style.background = "black"
        e.innerHTML = "Click to open"
    }
}
// rotateFan()