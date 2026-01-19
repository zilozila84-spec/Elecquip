document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("loginBtn");

  btn.onclick = function () {
    var studentNumber = document.getElementById("loginNumber").value.trim();

    if (studentNumber === "") {
      alert("Please enter your student number");
      return;
    }

    localStorage.setItem("elecquip_student_number", studentNumber);
    localStorage.setItem("elecquip_logged_in", "yes");

    // Redirect to dashboard
    window.location.href = "dashboard.html";
  };
});
