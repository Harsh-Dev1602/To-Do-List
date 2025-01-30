const submitEle = document.querySelector("#submit");
const textEle = document.querySelector("#text");
const t1Ele = document.querySelector("#t1");

submitEle.addEventListener("click", () => {
  const textElev = textEle.value;

  if (textElev === "") {
    alert(" Please add your fist task ..");
  } else {
    const p = document.createElement("P");
    const clear = document.createElement("I");
    const span = document.createElement("SPAN");
    p.textContent = textElev;
    span.appendChild(p);
    span.appendChild(clear);
    t1Ele.appendChild(span);
    clear.className = "fa-solid fa-circle-xmark";


    span.addEventListener("click", (e) => {
      if (e.target.tagName == "P") {
        p.style.textDecoration = "line-through";
        p.style.backgroundColor = "#D7C3F1";
        p.style.color = "black";
        setItem();
      }
      else if(e.target.tagName == "I"){
          e.target.parentElement.remove()
            localStorage.clear()
      }
    });
  }

  textEle.value = "";
  setItem();
});

function setItem() {
  window.localStorage.setItem("text", t1Ele.innerHTML);
}
function getItem() {
  t1Ele.innerHTML = window.localStorage.getItem("text");
}

getItem();
