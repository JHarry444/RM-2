class Trainer {
    name;
    age;
    specialty;


    constructor(name, age, specialty) {
        // this -> refers to the current instance of the class
        this.name = name;
        this.age = age;
        this.specialty = specialty;
    }




    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old trainer specializing in ${this.specialty}.`);
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