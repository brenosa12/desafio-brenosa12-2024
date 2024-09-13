import {Animal} from '../models/animal-model.js'

class AnimaisRepository {
    animais = [
        new Animal("leao", 3, ["savana"], 'carnivoro'),
        new Animal("leopardo", 2, ["savana"], 'carnivoro'),
        new Animal("crocodilo", 3, ["rio"], 'carnivoro'),
        new Animal("macaco", 1, ["savana", "floresta"], 'onivoro'),
        new Animal("gazela", 2, ["savana"], 'herbivoro'),
        new Animal("hipopotamo", 1, ["savana", "rio"], 'herbivoro')
    ];
}

export {AnimaisRepository as AnimaisRepository};