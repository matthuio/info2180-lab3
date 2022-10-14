window.onload= function(){
    let y = 0;
    var square = document.getElementById("board").children;
    for (let x=0;x<square.length;x++)
    {
        square[x].setAttribute("class","square");
        square[x].addEventListener("mouseover",function(){
            square[x].classList.add("hover");
        }) 
        square[x].addEventListener("mouseout",function(){
            square[x].classList.remove("hover");
        }) 
        square[x].addEventListener("click",function(){
            if(y%2 == 0)
            {
                
            square[x].innerHTML="X";
            square[x].classList.add("X");
            y++;
            }
            else
            {
            square[x].innerHTML="O";
            square[x].classList.add("O");
            y++;
            }
        });   
    }
        }
