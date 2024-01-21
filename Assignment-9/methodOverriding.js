class Animal {

    eat() {
        console.log('Animal Eats');
    }
    sleep() {
        console.log('Animal Sleeps');
    }
}

class Bird extends Animal {

    eat() {
        console.log('Bird Eats');
    }
    sleep() {
        console.log('Bird Sleeps');
    }
    fly() {
        console.log('Bird Flies');
    }
}

let animal = new Animal();
animal.eat();
animal.sleep();

let bird = new Bird();
bird.eat();
bird.sleep();
bird.fly();
