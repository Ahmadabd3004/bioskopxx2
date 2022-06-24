// const param = new URLSearchParams(location.search)
// let username = param.get('text')
// let coba = document.getElementById('coba')
// coba.innerText +=" " + username

let sidebar = document.getElementById('sidebar')
let tiket = document.getElementById('jmlTiket')
let harga = document.getElementById('harga')
const hargaAsli = Number(harga.innerText)

let jmlTiket = Number(tiket.innerHTML)
function toggleFunction(e){
    let toggleItem = sidebar.classList.contains('active')
    if (!toggleItem) {
        sidebar.classList.add('active')
    }else{
        sidebar.classList.remove('active')
    }
}

function kurang(e){
    if (jmlTiket !== 0) {
        jmlTiket--
        tiket.innerText = jmlTiket
        let totalHarga = Number(hargaAsli) * jmlTiket
        harga.innerText = totalHarga
    }
}
function tambah(e){
        jmlTiket++
        tiket.innerText = jmlTiket
        let totalHarga = Number(hargaAsli) * jmlTiket
        harga.innerText = totalHarga
}

function ambilHarga(){
    
}