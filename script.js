const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("td");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent.trim();

    let newLine = true;

    function digitBtnPressed(button){
        if (newLine){
            document.getElementById("inputBox").value = button;
            newLine = false;
        }else{
            let currentValue = document.getElementById("inputBox").value;
            document.getElementById("inputBox").value = currentValue + button;
        }
    };

    if (value === "AC") {
      currentInput = "";
      inputBox.value = "0";
    }
    else if (value === "=") {
      try {
        // Replace 'x' with '*' for JavaScript evaluation
        currentInput = currentInput.replace(/x/g, "*");
        const result = eval(currentInput);
        inputBox.value = result;
        currentInput = result.toString(); // So you can continue calculating
      } catch (error) {
        inputBox.value = "Error";
        currentInput = "";
      }
    } else {
      if (inputBox.value === "0" && !isNaN(value)) {
        inputBox.value = value;
      } else {
        inputBox.value += value;
      }
      currentInput += value;
    }
  });
});
