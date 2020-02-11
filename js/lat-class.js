class Orang { // baris ini adalah kelas
    constructor(nama, usia, gender) { 
        this.namaorang =  nama;        // ini properti
        this.usiaorang = usia;         // ini properti
        this.genderorang = gender;     // ini properti
    }

    paragraf() { // membuat method paragraf()
        return "Nama saya adalah " + this.namaorang + ", usia saya " + this.usiaorang 
    }
}

class Profesi extends Orang { // membuat subclass
     constructor(nama, usia, gender, prof) {
        super(nama, usia, gender);   // super memberi akses ke parent class
        this.profesi = prof;
     }
     tambahan() { // membuat method
         return this.paragraf() + '. Saya bekerja sebagai ' + this.profesi;
     }
}

// Membuat objek dari class
iniSaya = new Profesi("Ardy", 27, "Pria", "Programer");
//iniTeman = new Orang("Juhari", 19, "Pria");

document.getElementById("output").innerHTML = iniSaya.tambahan();

// console.log(iniSaya.tambahan())
