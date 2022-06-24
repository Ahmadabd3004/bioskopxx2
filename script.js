const param = new URLSearchParams(location.search)
let username = param.get('text')
let coba = document.getElementById('coba')
coba.innerText +=" " + username;
const db = [
    {
        namaFilm: "Naruto",
        gambar: "https://img.elo7.com.br/product/zoom/1EDDF89/big-poster-do-anime-naruto-tamanho-90x-0-cm-lo121-quadro.jpg",
        sinopsis: "Naruto bercerita seputar kehidupan tokoh utamanya, Naruto Uzumaki, seorang ninja yang hiperaktif, periang, dan ambisius yang ingin mewujudkan keinginannya untuk mendapatkan gelar Hokage, pemimpin dan ninja terkuat di desanya."
    },
    {
        namaFilm: "Finding Nemo",
        gambar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fwww.thepurplepumpkinblog.co.uk%2Fwp-content%2Fuploads%2F2015%2F07%2FDisney-Pixar-Finding-Nemo-Poster.jpeg%3Fresize%3D800%252C1156&f=1&nofb=1",
        sinopsis: "Di sebuah lautan lepas di Queensland, Australia, tepatnya di wilayah terumbu karang nasional, hiduplah sepasang ikan badut yang terdiri dari Ayah dan anak."
    },
    {
        namaFilm: "Pokemon",
        gambar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff1%2Fd2%2F0b%2Ff1d20bc11bdf59040f888922b8d59e34.png&f=1&nofb=1",
        sinopsis: "Pokémon (singkatan dari nama Jepang Pocket Monsters (ポケットモンスター Poketto Monsutā)) adalah salah satu serial animasi asal Jepang, yang masih tetap berjalan dan ditayangkan hingga saat ini. Selain di versi Jepang, serial ini juga telah diadaptasikan ke dalam versi bahasa Inggris untuk menjangkau seluruh pecinta Pokémon di seantero dunia. Basis serial ini adalah dari permainan video game Pokémon, dan sebagian lagi dari beragam promosi dari franchise Pokémon."
    },
    {
        namaFilm: "Gatot Kaca",
        gambar: "gatot.jpg",
        sinopsis: "Satria Dewa: Gatotkaca fokus pada pemuda bernama Yudha (Rizky Nazar), yang merupakan anak putra dari pasangan suami istri Arimbi dan Pandega yang memiliki kehidupan sulit. Yudha diharuskan merawat kedua orang tuanya yang sakit-sakitan di tengah kondisi ekonomi yang tak bagus."
    },
    {
        namaFilm: "Gundala",
        gambar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F4c%2Fe1%2F27%2F4ce127707ff5fcb973f4b0ca59bc86b3.jpg&f=1&nofb=1",
        sinopsis: "menceritakan tentang kehidupan seseorang bernama Sancaka (Abimana Aryasatya) untuk bertahan hidup ditengah kehidupannya yang begitu berat pasca ditinggal oleh orang tuanya."
    },
    {
        namaFilm: "Tukang Bubur Naik Haji",
        gambar: "http://4.bp.blogspot.com/-wMKxBO71THg/T8D4Gq_8ReI/AAAAAAAAAvw/ncGEpYt7sr8/s1600/306205_299900656769617_100002490550148_628171_689063235_n.jpg",
        sinopsis: "menceritakan tentang kehidupan seseorang bernama Sancaka (Abimana Aryasatya) untuk bertahan hidup ditengah kehidupannya yang begitu berat pasca ditinggal oleh orang tuanya."
    },
    {
        namaFilm: "Super Hero Squad",
        gambar: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3CdaaPZdU1Xv2c6hDaSVWhsXtuO.jpg",
        sinopsis: "menceritakan tentang kehidupan seseorang bernama Sancaka (Abimana Aryasatya) untuk bertahan hidup ditengah kehidupannya yang begitu berat pasca ditinggal oleh orang tuanya."
    },
    {
        namaFilm: "IT",
        gambar: "https://www.theglobaldispatch.com/wp-content/uploads/2016/06/It-remake-movie-poster-2017.jpg",
        sinopsis: "menceritakan tentang kehidupan seseorang bernama Sancaka (Abimana Aryasatya) untuk bertahan hidup ditengah kehidupannya yang begitu berat pasca ditinggal oleh orang tuanya."
    },
    {
        namaFilm: "Tendangan Si Madun",
        gambar: "https://media.suara.com/pictures/original/2018/12/08/55441-poster-sinetron-madun-is-back-mnctv.jpg",
        sinopsis: "menceritakan tentang kehidupan seseorang bernama Sancaka (Abimana Aryasatya) untuk bertahan hidup ditengah kehidupannya yang begitu berat pasca ditinggal oleh orang tuanya."
    }
]


let cart = []
let sidebar = document.getElementById('sidebar')
let tiket = document.getElementById('jmlTiket')
let harga = 50000
let selectedNamaFilm = ''

let jmlTiket = Number(tiket.innerHTML)

function toggleFunction(namaFilm) {
    selectedNamaFilm = namaFilm
    let toggleItem = sidebar.classList.contains('active')
    if (!toggleItem) {
        sidebar.classList.add('active')
    } else {
        sidebar.classList.remove('active')
        
    }
    tiket.innerText = 0
    jmlTiket = 0
}

function kurang(e) {
    if (jmlTiket !== 0) {
        jmlTiket--
        tiket.innerText = jmlTiket
        let totalHarga = harga * jmlTiket
        harga.innerText = totalHarga
    }
}
function tambah(e) {
    jmlTiket++
    tiket.innerText = jmlTiket
    let totalHarga = harga * jmlTiket
    harga.innerText = totalHarga
}

function addCart() {
    let totalqty = document.getElementById("jmlTiket").innerHTML
    let totalHarga = 0
    cart.push({ title: selectedNamaFilm, qty: totalqty })

    document.getElementById('container-cart').innerHTML = ``
    document.getElementById('container-cart').innerHTML += ` <h1>List Cart</h1>`

    for (let i = 0; i < cart.length; i++) {
        totalHarga = cart[i].qty * harga
        if (totalHarga !== 0) {
            document.getElementById('container-cart').innerHTML += ` <h3>${cart[i].title} - ${cart[i].qty}x (RP ${totalHarga})</h3>`
        }

    }
    document.getElementById('sidebar').classList.remove('active')
}


const container = document.querySelector(".card-container");
for (let i = 0; i < db.length; i++) {
    const nama = db[i].namaFilm;
    const gambar = db[i].gambar;
    const sinopsis = db[i].sinopsis;
    const div = document.createElement("div");
    div.classList = "card";

    const img = document.createElement("img");
    img.src = gambar;
    div.appendChild(img);
    container.appendChild(div);

    const divKanan = document.getElementsByClassName("card");

    divKanan[i].addEventListener("click", function () {
        toggleFunction(nama);
        const judul = document.getElementById("judul");
        judul.innerText = nama;

        const banner = document.getElementById("side-image");
        banner.src = gambar;

        const text = document.getElementById("sinopsis");
        text.innerText = sinopsis;

        const jmhTiket = document.getElementById("jmlTiket");
        jmhTiket.innerText = 0;
    });
}