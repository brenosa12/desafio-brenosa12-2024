import {AnimaisRepository} from '../repository/animais-repository.js'


const animaisRepository = new AnimaisRepository();

class AnimalService {
    listarTodos() {
        return animaisRepository.animais;
    }
}

export {AnimalService as AnimalService};