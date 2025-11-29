let data = JSON.parse(localStorage.getItem("presensi")) || [];
let tabel = document.getElementById("rekapTabel");

data.forEach((d, i) => {
    tabel.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${d.nama}</td>
            <td>${d.status}</td>
            <td>${d.jam}</td>
        </tr>
    `;
});
