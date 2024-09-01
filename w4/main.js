function clickMe() {
  var selectedOption = document.querySelector('input[name="option"]:checked');

  if (selectedOption) {
    if (selectedOption.value === "Yes") {
      alert("Thank You!!!");
    } else if (selectedOption.value === "No") {
      alert("Will do better next time.");
    }
  } else {
    alert("Make a choice.");
  }
}
