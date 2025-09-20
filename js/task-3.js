const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function nameInput(event) {
  const name = event.currentTarget.value;
  const clearName = name.trim();

  if (clearName === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = clearName;
  }
}

input.addEventListener("input", nameInput);
