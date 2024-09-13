import {Recinto} from '../models/recinto-model.js'
import {Animal} from '../models/animal-model.js'

class RecintosRepository {

    recintos = [
        new Recinto(1, 'savana', 10, [new Animal('macaco', 1, 'savana', 'onivoro'), new Animal('macaco', 1, 'savana', 'onivoro'), new Animal('macaco', 1, 'savana', 'onivoro')]),
        new Recinto(2, 'floresta', 5, []),
        new Recinto(3, ['savana', 'rio'], 7, [new Animal('gazela', 2, 'savana', 'herbivoro')]),
        new Recinto(4, 'rio', 8, []),
        new Recinto(5, 'savana', 9, [new Animal('leao', 3, 'savana', 'carnivoro')]),

    ];
}

export {RecintosRepository as RecintosRepository};