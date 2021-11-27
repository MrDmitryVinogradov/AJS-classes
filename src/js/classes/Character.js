export default class Character {
    constructor(name, type) {
        if (typeof name === 'string' && name.length > 2 && name.length < 10) {
            this.name = name;
        }
        else {
            throw new Error('Character name length must be 3-9 symbols');
        }
        if (type === "Bowman" || type === "Swordsman" || type === "Magician" || type === "Daemon" || type === "Undead" || type === "Zombie") {
            this.type = type
        }
        else {
            throw new Error('Wrong type name');
        }
        this.health = 100;
        this.level = 1;
    }
}