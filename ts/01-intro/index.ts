const num: number = 12;

const myName: string = "Jordan";

interface Flyable {
    fly: () => void
}


class Bat implements Flyable {
    fly() {
        console.log("FLAP FLAP");
    }

}