class Trainer {
    // private properties cannot be accessed or modified outside of the class



    constructor(
        private _name: string,
        private _age: number,
        private _specialty: string
    ) {
        // this -> refers to the current instance of the class

    }

    set age(newAge: number) {
        if (newAge < 0) {
            console.log("Age cannot be negative.");
        } else if (newAge > 100) {
            console.log("Age cannot be greater than 100.");
        } else {
            this._age = newAge;
        }
    }

    get age() {
        return this._age;
    }

    introduce() {
        console.log(`Hi, I'm ${this._name}, a ${this._age}-year-old trainer specializing in ${this._specialty}.`);
    }
}

let me = new Trainer("Jordan Harrison", 32, "Java");
me.introduce();
let me2 = me;
me2.introduce();

me2.name = "Jordan H.";
me2.introduce();
me.introduce();
const cg = new Trainer("Cameron Guthrie", 33, "Web");
cg.introduce();

// const xhr = new XMLHttpRequest();

// const today = new Date();

me.age = 33;
me.age++;

me.age = -1;
me.introduce();

me.age = Number.MAX_VALUE;
me.introduce();