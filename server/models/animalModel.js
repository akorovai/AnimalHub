require('../data/animalDB');
class AnimalModel {
    constructor(id, name, age, species, color, sound) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.species = species;
        this.color = color;
        this.sound = sound;
    }
}

module.exports = AnimalModel;

