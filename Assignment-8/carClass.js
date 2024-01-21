// Car class

class Car {
    brand = 'BMW';
    model = 'SUV';
    year = '1989';

    display() {
        console.log(this.brand, this.year);
    }
}

let bmw = new Car();
bmw.display();
