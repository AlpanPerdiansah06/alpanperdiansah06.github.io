let users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("regForm").addEventListener("submit", function(e){
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    users.push({ username, password, role });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Akun berhasil dibuat!");
    window.location = "login.html";
});
