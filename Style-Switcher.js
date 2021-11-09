    const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
    styleSwitcherToggler.addEventListener("click",()=>{
        document.querySelector(".style-switcher").classList.toggle("open");
    })
    window.addEventListener("scroll",()=>{
        if( document.querySelector(".style-switcher").classList.contains("open")){
            document.querySelector(".style-switcher").classList.remove("open");
        }
    })
    

    // dark mode
    const darkmode =document.querySelector(".day-night")
    darkmode.addEventListener("click",()=>{
        darkmode.querySelector("i").classList.toggle("fa-sun");
        darkmode.querySelector("i").classList.toggle("fa-moon");
        document.body.classList.toggle("dark");
    })
    window.addEventListener("load",()=>{
        if(document.body.classList.contains("dark")){
            darkmode.querySelector("i").classList.add("fa-sun");
        }else{
            darkmode.querySelector("i").classList.add("fa-moon");
        }
    })