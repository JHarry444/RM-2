// type Trainer = {
//     name: string;
//     age: number;
//     specialty: string;
//     introduce(): void;
// }

interface Trainer {
    readonly name: string;
    age: number;
}

interface Trainer {
    specialty?: string;
    introduce(): void;
}




const me: Trainer = {
    name: "JH",
    age: 32,
    specialty: "Java",
    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old trainer specializing in ${this.specialty}.`);
    }
}

const cg: Trainer = {
    name: "Cameron",
    age: 33,
    specialty: "Web",
    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old trainer specializing in ${this.specialty}.`);
    }
}

const theme: "light" | "dark" = "light";