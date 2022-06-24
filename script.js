// const param = new URLSearchParams(location.search)
// let username = param.get('text')
// let coba = document.getElementById('coba')
// coba.innerText +=" " + username

let cart = []
let sidebar = document.getElementById('sidebar')
let tiket = document.getElementById('jmlTiket')
let harga = 50000
let selectedNamaFilm = ''

let jmlTiket = Number(tiket.innerHTML)
function toggleFunction(namaFilm){
    selectedNamaFilm = namaFilm
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

function addCart(){
    let totalqty = document.getElementById("jmlTiket").innerHTML
    let totalHarga = totalqty * harga
    cart.push({title: selectedNamaFilm, qty: totalqty})

    document.getElementById('container-cart').innerHTML = ''
    for(let i = 0 ; i < cart.length; i++){
      document.getElementById('container-cart').innerHTML += `${cart[i].title} <br> ${cart[i].qty} <span> ${totalHarga}`
    }
    
}

document.getElementById('container-cart').innerHTML = ''
for(let i = 0 ; i < cart.length; i++){
  document.getElementById('container-cart').innerHTML += `${cart[i].title} <br> ${cart[i].qty} <br>`
}