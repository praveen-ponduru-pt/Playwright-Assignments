
const Animal = {
    makesSound: function () {
        console.log('Animal makes sound');
    },
    canEat: true,
    canFly: false
}

const dog = Object.create(Animal);
const cat = Object.create(Animal);

dog.sound = 'Bow!';
dog.bark = function () {
    console.log('Dog can bark')
}

cat.sound = 'Meow!!';
cat.swim = function () {
    console.log('Cat cannot swim');
}

const germanShepard = Object.create(dog);
const orangeCat = Object.create(cat);

germanShepard.color = 'white';
orangeCat.canFight = function () {
    console.log('Orange cat can fight');
}

Animal.makesSound();
console.log(Animal.canFly);

console.log(dog.canEat);
dog.bark();

console.log(cat.canFly);

console.log(germanShepard.color);
germanShepard.makesSound();

orangeCat.canFight();
orangeCat.swim();
orangeCat.makesSound();
