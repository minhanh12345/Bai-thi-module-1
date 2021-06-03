class Animal {
    name
    weight

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    setName(name) {
        this.name = name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    toString() {
        return document.write('Name :' + this.name + 'Weight:' + this.weight);
    }
}

let objAnimal1 = new Animal()
objAnimal1.name = 'Elephant';
objAnimal1.weight = 45.6;
objAnimal1.toString();

let objAnimal2 = new Animal('Pig', 50)
objAnimal2.name='Mouse';
objAnimal2.toString()