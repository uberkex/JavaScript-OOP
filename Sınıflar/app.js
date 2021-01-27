// Nesne Yönelimli Programlama - Object Oriented Programing - OOP

class Insan{

    constructor(isim,no,boy,kilo){
        this.isim = isim;
        this.no = no;
        this.boy = boy;
        this.kilo = kilo;
    }

    konusma(){
        console.log(`Benim adım ${this.isim}.Senin adın ne?`);
    }

    yemekYeme(){
        this.kilo = this.kilo + 1;
        // this.kilo += 1;
    }

    uyuma(){
        this.boy = this.boy + 2;
    }

    kosmak(){
        this.kilo = this.kilo - 1;
    }

    bilgileriGoster(){
        console.log(`
        İsim = ${this.isim}
        No = ${this.no}
        Boy = ${this.boy}
        Kilo = ${this.kilo}
        `);
    }
}


const michael = new Insan("Michael",11122233344,180,75);
console.log(michael);
michael.bilgileriGoster();
michael.konusma();
michael.yemekYeme(); // Kilo +1
michael.bilgileriGoster();
michael.uyuma(); // Boy +2
michael.bilgileriGoster();
michael.kosmak(); // Kilo -1
michael.bilgileriGoster();