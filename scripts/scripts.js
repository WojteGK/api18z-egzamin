function kurs() {
    document.getElementById("text").innerHTML = "Kurs ukończony!";
  }
  function disableButton(button) {
    button.setAttribute("disabled", true);
    document.getElementById("button").innerHTML = "zakończono kurs"
  }