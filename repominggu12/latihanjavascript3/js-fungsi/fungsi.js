var dataBarang =
[
    "Buku Tulis",
    "Pensil",
    "Spidol"
];

function showBarang() {
    var listBarang = document.getElementById("list-barang");
    // Clear list barang
    listBarang.innerHTML = "";

    // Cetak semua barang
    for(let i = 0; i < dataBarang.length; i++) {
        var tblEdit = "<a href='#' onClick='editBarang("+i+")'>Edit</a> ";
        var tblHapus = "<a href='#' onClick='hpsBarang("+i+")'>Hapus</a> ";

        listBarang.innerHTML += "<li>" + dataBarang[i] + " ["+ tblEdit +"|"+ tblHapus +"]</li>";
    }
}

function tbhBarang(){
    var input = document.querySelector("input[name=barang");
    dataBarang.push(input.value);
    showBarang();
}

function editBarang(id) {
    var newBarang = prompt ("Nama baru", dataBarang[id]);
    dataBarang[id] = newBarang;
    showBarang();
}

function hpsBarang(id) {
    dataBarang.splice(id, 1);
    showBarang();
}

showBarang();