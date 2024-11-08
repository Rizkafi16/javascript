const nama = "Claire";
const usia = 30;
const isActive = true;
const hobi = ["Membaca", "Bermain Musik", "Menggambar"];
const profil = {
    nama: "Claire",
    usia: 30,
    pekerjaan: "Desainer"
};

function sapaPengunjung() {
    console.log("Halo, " + nama + "! Selamat datang di halaman ini.");
}
let dataKosong = null;
let alamat;
console.log("Nama: " + nama);
console.log("Usia: " + usia);
console.log("Aktifkah? " + isActive);
console.log("Hobi saya: " + hobi.join(", "));
console.log("Profil saya: ", profil);
console.log("Tipe data untuk 'nama': " + typeof nama);
console.log("Tipe data untuk 'usia': " + typeof usia);
console.log("Tipe data untuk 'isActive': " + typeof isActive);
console.log("Tipe data untuk 'hobi': " + typeof hobi);
console.log("Tipe data untuk 'profil': " + typeof profil);
sapaPengunjung();
console.log("Nilai dataKosong: " + dataKosong);
console.log("Alamat saya: " + alamat);
