class Orang { // baris ini adalah kelas
    constructor(nama, usia, gender) { 
        this.namaorang =  nama;        // ini properti
        this.usiaorang = usia;         // ini properti
        this.genderorang = gender;     // ini properti
    }

    paragraf() { // membuat method paragraf()
        return "Nama saya adalah " + iniSaya.namaorang + ", usia saya " + iniSaya.usiaorang + ". Saya punya teman bernama " + iniTeman.namaorang + "." + " Usianya " + iniTeman.usiaorang + "." + " Jadi selisih usia kami adalah " + (iniSaya.usiaorang - iniTeman.usiaorang) + " tahun."
    }
}
//


// Membuat objek dari class
const iniSaya = new Orang("Ardy", 27, "Pria");
let iniTeman = new Orang("Juhari", 19, "Pria");


//document.getElementById("output").innerHTML = iniSaya.paragraf();

console.log(iniSaya.paragraf())
