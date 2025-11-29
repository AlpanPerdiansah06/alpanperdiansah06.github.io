const form = document.getElementById("absenForm");
let presensi = JSON.parse(localStorage.getItem("presensi")) || [];

form.addEventListener("submit", function(e){
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let status = document.getElementById("status").value;
    let jam = new Date().toLocaleTimeString();

    presensi.push({ nama, status, jam });
    localStorage.setItem("presensi", JSON.stringify(presensi));

    alert("Presensi Terkirim!");
    form.reset();
});
