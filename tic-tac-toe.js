var y = 0;
window.onload= function(){
    var button=document.getElementsByClassName("btn")[0];
    button.addEventListener("click",function(){
    y=0;
    console.log(y);
    var square = document.getElementById("board").children;
    var stat = document.getElementById("status");
    stat.innerHTML= "Move your mouse over a square and click to play an X or an O.";
    stat.classList.remove("you-won");
    for (let x=0;x<square.length;x++)
    {
        square[x].setAttribute("class","square");
        square[x].innerHTML=""
        square[x].addEventListener("mouseover",function(){
            square[x].classList.add("hover");
        }) 
        square[x].addEventListener("mouseout",function(){
            square[x].classList.remove("hover");
        }) 
        square[x].addEventListener("click",function(){
            if(y%2 == 0)
            {
            if(square[x].innerHTML == "")
            {
                square[x].innerHTML="X";
                square[x].classList.add("X");
                y+=1;
            }               
            }
            else
            {
                if(square[x].innerHTML == "")
                {
                    square[x].innerHTML="O";
                    square[x].classList.add("O");
                    y+=1;
            }
        }
            for(let p=0;p<square.length;p+=3)
            {
                if(square[p].innerHTML == square[p+1].innerHTML && square[p].innerHTML == square[p+2].innerHTML && square[p].innerHTML != "")
                {   
                    if(y%2 == 0)
                    {
                        console.log(y);
                        stat.innerHTML=("Congragulations O is the winner");
                        stat.classList.add("you-won");
                    }
                    else
                    {
                        console.log(y);
                        stat.innerHTML=("Congragulations X is the winner");
                        stat.classList.add("you-won");
                    }
                }
            }
            for(let p=0;p<3;p+=1)
            {
                if(square[p].innerHTML == square[p+3].innerHTML && square[p].innerHTML == square[p+6].innerHTML && square[p].innerHTML !="")
                {
                    if(y%2 == 0)
                    {
                        console.log(y);
                        stat.innerHTML=("Congragulations O is the winner");
                        stat.classList.add("you-won");
                    }
                    else
                    {
                        console.log(y);
                        stat.innerHTML=("Congragulations X is the winner");
                        stat.classList.add("you-won");
                    }
                }
            }
            
                if(square[0].innerHTML == square[4].innerHTML && square[0].innerHTML == square[8].innerHTML && square[0].innerHTML != "")
                {
                    if(y%2 == 0)
                    {
                        console.log(y);
                        stat.innerHTML=("Congragulations O is the winner");
                        stat.classList.add("you-won");
                    }
                    else
                    {
                        console.log(y);
                        stat.innerHTML=("Congragulations X is the winner");
                        stat.classList.add("you-won");
                    }
                }
            
                if(square[2].innerHTML == square[4].innerHTML && square[2].innerHTML == square[6].innerHTML && square[2].innerHTML != "")
                {
                    if(y%2 == 0)
                    {
                        console.log(y);
                        stat.innerHTML=("Congragulations O is the winner");
                        stat.classList.add("you-won");
                    }
                    else
                    {
                        console.log(y);
                        stat.innerHTML=("Congragulations X is the winner");
                        stat.classList.add("you-won");
                    }
                }
                  
        });   
}
});
}
    