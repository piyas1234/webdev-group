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
