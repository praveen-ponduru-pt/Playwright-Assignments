// 'use strict'

class Animal {

    name;
    Animal(name) {
        this.name = name;
    }

    print() {
        console.log(this.name);
    }
}

let cat = new Animal('Cat');
cat.print();
