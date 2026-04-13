
  const button = document.querySelector("move_fixed");
  const paragraph = document.querySelector("p");

  button.addEventListener("click", updateButton);

  function updateButton() {
    if (button.value === "Start machine") {
      button.value = "Stop machine";
      paragraph.textContent = "The machine has started!";
    } else {
      button.value = "Start machine";
      paragraph.textContent = "The machine is stopped.";
    }
  }
  
