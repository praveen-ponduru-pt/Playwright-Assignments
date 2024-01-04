class Animal {
    constructor() {
        this.name = "Praveen";
    }

}

class Cat extends Animal {
    constructor() {
        super();
        console.log(this.name);
    }
}

let i = new Cat();
