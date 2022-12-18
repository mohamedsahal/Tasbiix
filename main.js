window.onload = function() {
    var switches = document.getElementById("switch");
    var themes = document.querySelector(".light-themes");
 
    switches.addEventListener("click", function(_e) {
       if(themes.className == "light-themes")
          themes.className = "dark-themes";
       else
          themes.className = "light-themes";
 
       if(switches.classList.contains("on"))
          switches.classList.toggle("on");
       else
          switches.classList.toggle("on");
    });
 }
 
 let saveEl = document.getElementById("save-el")
 let countEl = document.getElementById("count-el")
 let count = 0
 
 
 
 function increment() {
     count += 1
     countEl.textContent = count
 }
 
 
 function save() {
     let countStr = count + " - "
     if (countStr = count){
         
     saveEl.textContent += countStr + "-"
     countEl.textContent = 0
     count = 0
 } else {
 alert("fadlan tasbiixso")
     }
 }
 
 function clearbtn(){
   saveEl.textContent = "Previous Tasbeeh: "
   countEl.textContent = 0
     count = 0
     countStr = 0
   
   
     
 }