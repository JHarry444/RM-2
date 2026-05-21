class Pet {
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
}


class Cat extends Pet {
    _numberOfLives: number;

    constructor(name: string, age: number, breed: string) {
        super(name, age, breed);
        this._numberOfLives = 9;
    }

    meow() {
        console.log("Meow!");
    }
}



class Dog extends Pet {

    // methods
    bark() {
        console.log("Bark!");
    }

    fetch() {
        console.log("Fetching...");
    }


}

const d = new Dog("Buddy", 5, "Golden Retriever");
d.bark();
d.fetch();
d.introduce()

const c = new Cat("Whiskers", 3, "Siamese");
c.meow();
c.introduce();
