function loginStudent() {
  const studentNumber = document.getElementById("loginNumber").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (studentNumber === "" || password === "") {
    alert("Please enter your student number and password");
    return;
  }

  // Save student data (client-side)
  localStorage.setItem("elecquip_student_number", studentNumber);
  localStorage.setItem("elecquip_logged_in", "yes");

  // Redirect to dashboard
  window.location.href = "dashboard.html";
}

