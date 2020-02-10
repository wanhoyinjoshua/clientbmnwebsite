var showpic = document.getElementById("slideshowimgcontainer");
var accopic = document.getElementById("accpropic");
var accowords = document.getElementById("accowords");
var next = document.getElementById("go");
var back = document.getElementById("back");
var favshowlist=["izombie","sexed","janethevirgin","breakingbad","mrrobot","policestory","you"]
var wheretheshowpicr = "favmovie"
var i=0;
var w=0;


accopic.addEventListener("click",()=>{
    if(accowords.style.maxHeight){
        accowords.style.maxHeight=null;


    }
    else{
        accowords.style.maxHeight=accowords.scrollHeight+"px";

    }
   


})

go.addEventListener("click",()=>{
    
    
    
    
    if(i<favshowlist.length){
        console.log(i)
    
    showpic.style.backgroundImage=`url(./${wheretheshowpicr}/${favshowlist[i]}.jpg)`;

    
    i++;
    console.log(i)
    
    }
    else if(i==favshowlist.length){
        console.log("reset")
        i= 0;
        console.log(i)
        
        showpic.style.backgroundImage="url(./favmovie/lucifier.jpg)";
        
       
        
    }
    
})

back.addEventListener("click",()=>{
    
    i--;
    console.log(i)
    if(i>=0){
        showpic.style.backgroundImage=`url(./${wheretheshowpicr}/${favshowlist[i]}.jpg)`;
        console.log(i)
        console.log("change")

    }
    else if(i==0){
        showpic.style.backgroundImage="url(./favmovie/lucifier.jpg)";
    }
    else if(i<0){
        i=favshowlist.length;
        console.log(i)
        showpic.style.backgroundImage="url(./favmovie/lucifier.jpg)";
    

    }
    
})



//portfolio

var portfoliobox = document.getElementsByClassName("portfolio")

console.log(portfoliobox)


for(let i=0; i<portfoliobox.length; i++){
    portfoliobox[i].addEventListener("mouseover",()=>{
        console.log("jijji");
        console.log(portfoliobox[i].firstChild.nextSibling.id)
        
        console.log(portfoliobox[i].lastChild.previousSibling)
        let mask = portfoliobox[i].lastChild.previousSibling;
        console.log(mask.textContent)
       console.log( mask.firstChild.textContent)
       mask.firstChild.textContent=portfoliobox[i].firstChild.nextSibling.id;
        
       mask.style.display="grid";
       

        
        

    })
    portfoliobox[i].addEventListener("mouseout",()=>{
        
        
       
        let mask = portfoliobox[i].lastChild.previousSibling;
        
       mask.firstChild.textContent=portfoliobox[i].firstChild.nextSibling.id;
        
       mask.style.display="none";
       

        
        

    })
}

var setting= document.getElementById("setting");
setting.addEventListener("click",()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
})


    

   

