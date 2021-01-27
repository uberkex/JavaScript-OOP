
// Superclass , BaseClass
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    bilgileriGoster(){
        console.log(`
        İsim = ${this.name}
        Yaş = ${this.age}
        `)
    }
}

// DerivedClass, Subclass, ChildClass
class Employee extends Person {

    constructor(name,age,salary){
        //this.name = name;
        //this.age = age;
        super(name,age);
        this.salary = salary;
    }

    // Override 
    bilgileriGoster(){
        console.log(`
        İsim = ${this.name}
        Yaş = ${this.age}
        Maaş = ${this.salary}
        `)
    }

    toString(){
        console.log("Employee");
    }

    maasArttir(miktar){
        this.salary = this.salary + miktar;
        // this.salary += miktar;
    }
}


const emp = new Employee("Berke",24,4500);
console.log(emp);
emp.bilgileriGoster();

/* console.log(emp.toString()); // --> [object Object] */
emp.toString();

emp.maasArttir(1000);
emp.bilgileriGoster();