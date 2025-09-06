window.onload=function(){
    let hamburger = document.querySelector(".hamburger");
    let navList = document.querySelector("#navList");

    hamburger.addEventListener("click",function(){
    if(navList.getAttribute("class")=="close"){
        
        navList.setAttribute("class","open")
        document.querySelector(".container em").setAttribute("style","color:var(--c111); transition:all 0.3s ;")
    }
    else{
        navList.setAttribute("class","close")
        document.querySelector(".container em").setAttribute("style","color:var(--white;) transition:all 0.3s ;")
    }
    });






    const spans = document.querySelectorAll('.listMenu span');

        spans.forEach(span => {
            span.addEventListener('click', () => {
                spans.forEach(s => s.classList.remove('span'));
                spans.forEach(s => s.classList.remove('first'));
                span.classList.add('span');
            });
        });

        
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', () => {
            let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            
            if (currentScroll > lastScrollTop && currentScroll > 50) {
                document.querySelector(".nav").classList.add("navshow");
                document.querySelector(".navBar").classList.add("dark")
            } else if (currentScroll < lastScrollTop && currentScroll < 50) {
                document.querySelector(".nav").classList.remove("navshow");
                document.querySelector(".navBar").classList.remove("dark");
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        });

        
        let body=document.getElementById("body");
        let switchColor=document.querySelectorAll("div.switchColor");
    for(let i=0;switchColor.length;i++){
        switchColor[i].onclick=function(){
            this.classList.toggle("darked")
            body.classList.toggle("lightTheme");
            body.classList.toggle("darkTheme");
            document.querySelectorAll("div.switchColor .slider")[i].classList.toggle("Left");
            document.querySelectorAll("div.switchColor .slider")[i].classList.toggle("Right");

        }
    }
    
    
    



}







