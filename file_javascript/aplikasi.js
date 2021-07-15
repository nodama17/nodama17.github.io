// ambil elemen dengan id tombol-tutup
const tutup = document.getElementById("tombol-tutup");

// menutup jendela selamat datang saat elemen diklik
tutup.addEventListener("click", ()=>{
    document.getElementById("jendela-selamat-datang").style.display = "none";
});
