
  const button = document.querySelector("input");
  const paragraph = document.querySelector("p");

  button.addEventListener("click", updateButton);

  function updateButton() {
    if (button.value === "Start machine") {
      button.value = "Stop machine";
      paragraph.textContent = "The machine has started!";
	  window.open("https://www.mozilla.org/", "mozillaTab");
	  
    } else {
      button.value = "Start machine";
      paragraph.textContent = "The machine is stopped.";
    }
  }
  
