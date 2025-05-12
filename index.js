// Select elements
const input = document.getElementById("live-input");
const counter = document.getElementById("char-count");
const reset = document.getElementById("reset-comment");

input.addEventListener("input", () => {
  const length = input.value.length;
  counter.textContent = `📝 ${length} characters typed`;

  if (length >= 200) {
    alert("You have exceeded the limit of the comment.");
  }
  
});

reset.addEventListener("click", () => {

  if (input.value <= 0 ) {
    alert("Error: No text typed in the input field!");
  }

  else {
    input.value = "";
    counter.textContent = "📝 0 characters typed";
  }
  
});