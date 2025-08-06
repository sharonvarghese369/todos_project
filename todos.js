
  const input = document.getElementById("todoInput");

  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && input.value.trim() !== "") {
      input.value = "enter eer";
    }
  });
