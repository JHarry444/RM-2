abstract class Pet {
    constructor(private _name: string, private _age: number, private _breed: string) {

    }

    public get breed(): string {
        return this._breed;
    }
    public set breed(value: string) {
        this._breed = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    introduce() {
        console.log(`Hi, I'm ${this._name}, a ${this._age}-year-old ${this._breed}.`);
    }

    abstract makeNoise(): string;
}


class Cat extends Pet {
    _numberOfLives: number;

    constructor(name: string, age: number, breed: string) {
        super(name, age, breed);
        this._numberOfLives = 9;
    }

    makeNoise() {
        return "Meow!";
    }
}



class Dog extends Pet {

    // methods
    makeNoise() {
        return "Bark!";
    }

    fetch() {
        console.log("Fetching...");
    }


}

class Bird extends Pet {
    makeNoise(): string {
        return "Tweet!";
    }

}

const d = new Dog("Buddy", 5, "Golden Retriever");
d.makeNoise();
d.fetch();
d.introduce()

const c = new Cat("Whiskers", 3, "Siamese");
c.makeNoise();
c.introduce();


const b = new Bird("Tweety", 2, "Canary");
b.makeNoise();
b.introduce();

new Dog("Rex", 4, "German Shepherd").makeNoise();

const pets: Pet[] = [d, c, b];

console.log("LOOP:");

for (const pet of pets) {
    pet.makeNoise();
    pet.introduce();

    if (pet instanceof Dog) {
        pet.fetch();
    }
}

// Pet p = new Pet("Generic Pet", 1, "Unknown");
// Error: Cannot create an instance of an abstract class.