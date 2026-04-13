
  const button = document.getElementById("machine_buttons");
  const paragraph = document.querySelector("p");
  const button2 =  document.getElementById("next_buttons");
  
  
  button.addEventListener("click", updateButton);
  button2.addEventListener("click", updateButton2);
  
 
  
  
  function updateButton() {
    if (button.value === "Start machine") {
      button.value = "Stop machine";
      paragraph.textContent = "The machine has started!";
	  
    } else {
      button.value = "Start machine";
      paragraph.textContent = "The machine is stpped.";
    }
  }
 
  function updateButton2() {
      if (button2.value === "Next") {
        button2.value = "Stop next";
        paragraph.textContent = "The machine has <qSDFGQ>!";
		wi
     
      } else {
        button2.value = "Next";
        paragraph.textContent = "The machine is stopped.";
      }
    }
