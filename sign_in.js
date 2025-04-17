    function submitForm() {
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const empid = document.getElementById("empid").value.trim();
      const company = document.getElementById("company").value.trim();
      const address = document.getElementById("address").value.trim();
      const agree = document.getElementById("agree").checked;

      if (!name || !phone || !email || !empid || !company || !address) {
        alert("❗ Please fill all required fields.")}

      if (!agree) {
        alert("✅ Please agree to the terms and conditions.")}

      // You could post this data to backend here
      document.getElementById("successMsg").style.display = "block";}