function ubahCellpadding(){
    var table = document.getElementById("tabel");
    var screenWidht = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(screenWidht<=720) {
    // jika lebar layar <=720px, ubah nilai cellpadding menjadi 10
    for (var i= 0; i <table.rows.length; i++){
        for (var j = 0; j <table.rows[i].cells.length; j++){
        table.rows[i].cells[j].style.padding = "1px";
        }
    }
    } else {
    // Jika lebar layar > 720px, kembalikan nilai cellpadding menjadi 20
    for (var i = 0; i<table.rows.length; i++){
        for (var j= 0; j<table.rows[i].cells.length; j++){
            table.rows[i].cells[j].style.padding ="20px";
        }
    }
    }
}


// Panggil fungsi saat halaman pertama kali dimuat dan saat ukaran layar berubah
window.onload = ubahCellpadding;
window.onresize = ubahCellpadding;


function toggleTable() {
    var tableContainer = document.getElementById("tableContainer");
    var table = document.getElementById("table-container");
    var button = document.querySelector("button");
    
    if (tableContainer.style.display === "none") {
        tableContainer.style.display = "block"; // Tampilkan tabel jika sembunyi
        button.textContent = "Tutup Jadwal"; // Ubah teks tombol menjadi "Tutup jadwal"
    } else {
        tableContainer.style.display = "none"; // Sembunyikan tabel jika terlihat
        button.textContent = "Lihat Jadwal"; // Ubah teks tombol menjadi "Lihat Jadwal"
    }
}

