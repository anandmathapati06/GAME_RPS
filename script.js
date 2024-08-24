let buttons = document.querySelectorAll(".btn");
let a = ["paper.png", "stone.png", "cessior.png"]
let p = "paper.png"
let st = "stone.png"
let s = "cessior.png"
let count =0
let no = 2
let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{
    let x = e.clientX
    let y = e.clientY
    // console.log(x);
    // console.log(y);
    cursor.style.left = `${x}px`
    cursor.style.top = `${y}px`
})

buttons.forEach((i) =>{
    
        i.addEventListener('click',()=>{
             count++;
             console.log(count);
let select = a[Math.floor(Math.random()*a.length)]; 
computer.src = select
            
player.style.animation = `shift 2s infinite  `
computer.style.animation = `shift1 2s infinite `
// player.style.animationDelay = no+"s";
// computer.style.animationDelay = no+"s";

            
            if(i == document.getElementById("paper")){
               player.src = p;
             
            }else if(i == document.getElementById("stone")){
                player.src = st;
              
             }else {
                player.src = s;
              
             }

            
             if((player.src==computer.src )){
                r_text.innerHTML = "tied!"
            }
            else if((i==stone && select==p)||(i==scissor && select==st)||(i==paper && select==s) ){
                    
                r_text.innerHTML = "you loose!"
                c_count.value++
            }
            
            else{
                r_text.innerHTML = "you win!"
                p_count.value++;
             }
             
           
          
             
        })
})
setInterval(()=>{
    no++
    
},1000)
document.getElementById("reset").addEventListener("click",()=>{
    location.reload()
    
    
})


