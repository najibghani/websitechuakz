function ubahCellpadding(){
    var table = document.getElementById("tabel");
    var screenWidht = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(screenWidht<=720) {

    for (var i= 0; i <table.rows.length; i++){
        for (var j = 0; j <table.rows[i].cells.length; j++){
        table.rows[i].cells[j].style.padding = "1px";
        }
    }
    } else {

    for (var i = 0; i<table.rows.length; i++){
        for (var j= 0; j<table.rows[i].cells.length; j++){
            table.rows[i].cells[j].style.padding ="20px";
        }
    }
    }
}


window.onload = ubahCellpadding;
window.onresize = ubahCellpadding;


const toggleBtn = document.getElementById('klikjadwal')
const daftarDiv = document.getElementById('jadwal')
toggleBtn.addEventListener('click', function(){


    if(daftarDiv.style.display === 'none'){
        daftarDiv.style.display = 'block';
    } else {
        daftarDiv.style.display = 'none';
        
    }

})