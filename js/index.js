


    
    const el= document.querySelector("#part3")
    const title = document.querySelector('#title');
    const info = document.querySelector('#info');
    el.addEventListener('mouseover',(event)=>{
        if(event.target.classList.contains("title-info")){
            // const text = event.target.querySelector("span").textContent
            // console.log(text)
             title.textContent = event.target.textContent
             info.textContent = event.target.nextElementSibling.textContent
        }else if (event.target.parentElement.classList.contains('title-info')) {
            title.textContent = event.target.parentElement.textContent;
            info.textContent = event.target.nextElementSibling?event.target.nextElementSibling.textContent:'';
          }
        
       
        // document.getElementById("title").innerHTML = text
        //document.getElementById("info").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    })
    
    
