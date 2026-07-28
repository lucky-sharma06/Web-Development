class Animal{
    constructor(name){
        this.name = name;
        console.log("Object is created...")
    }

    eats(){
        console.log("eat");
    }

    static run(){ // we can directly call this without using objects
        console.log("run");
    }
}

class Lion extends Animal{
    constructor(name){
        super(name);
        // this.name = name;
        console.log("Called the super()");
    }
    display(){
        console.log(this.name);
    }
    callParentEat() {
        super.eats();   // calling Animal's eat()
    }
}

let a = new Animal("Lucky");
console.log(a);
a.eats();

let b = new Lion("Scarface");
console.log(b);
b.display();
b.callParentEat();
Animal.run();
