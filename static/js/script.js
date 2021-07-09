function HoverEffect(attr) {
  document.getElementById("playstore").addEventListener(attr,()=>{
    const addId = document.getElementById("speaker")
    attr == "mouseover"
      ?  addId.classList.remove("d-none")
      : addId.classList.add("d-none");
  });
}

HoverEffect("mouseover");
HoverEffect("mouseleave");




 
window.onscroll = function() {myFunction()};

function myFunction() {
  if (  document.documentElement.scrollTop > 50) {
     console.log(document.documentElement.scrollTop)
     document.querySelector('.nav-body').classList.add("nav-bg")
     const query = document.querySelectorAll('.nav-link') 
     for (const i of query) {
        i.classList.add("text-white")
     }

    
        const query2 = document.querySelectorAll('.auth-btn') 
        query2[0].classList.add("btn-warning")
        query2[1].classList.add("btn-outline-warning")
     


  } else {
    document.querySelector('.nav-body').classList.remove("nav-bg")
    const query = document.querySelectorAll('.nav-link') 
     for (const i of query) {
        i.classList.remove("text-white")
     }

     const query2 = document.querySelectorAll('.auth-btn') 
     query2[0].classList.remove("btn-warning")
     query2[1].classList.remove("btn-outline-warning")

  }
}
 
