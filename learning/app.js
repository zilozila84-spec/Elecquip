document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("loginBtn");

  btn.onclick = function () {
    var studentNumber = document.getElementById("loginNumber").value.trim();

    if (studentNumber === "") {
      alert("Please enter your student number");
      return;
    }

    localStorage.setItem("elecquip_student_number", studentNumber);

    alert("Student number saved: " + studentNumber);
  };
});
