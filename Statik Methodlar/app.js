// obje oluşturmadan fonksiyonumuzu kullanmak istiyorsak statik methodları kullanacağız

class Matematik {

    kareal(x){
        console.log(x*x);
    }


    static kupal(x){
        console.log(x*x*x);
    }


}

const mat = new Matematik();
mat.kareal(4);
//mat.kupal(3);

//  static methodları class ile kullanabiliriz
Matematik.kupal(3);


