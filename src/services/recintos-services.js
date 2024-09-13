import {RecintosRepository} from '../repository/recinto-repository.js'

const recintoRepository = new RecintosRepository();

class RecintoService {

    eCompativel(recinto, animal, quantidade) {
        return this.alimentacaoCompativel(recinto, animal) &&
            this.temEspeciesCompativeis(recinto, animal, quantidade) &&
            this.temBiomaCompativel(recinto, animal);
    }

    obterTodosRecintos() {
        return recintoRepository.recintos;
    }

    ajustarEspacoDisponivel(recinto, animal, quantidade) {
        if (this.eCompativel(recinto, animal, quantidade)) {
            this.reduzirEspacoParaEspeciesDiferentes(recinto, animal);
            this.reduzirEspacoParaAnimais(recinto, animal, quantidade);
            return true;
        }
        return false;
    }

    temEspacoSuficiente(recinto, animal, quantidade) {
        const espacoNecessario = quantidade * animal.tamanho;
        return recinto.espacoDisponivel >= espacoNecessario && animal.bioma.some(bioma => recinto.bioma.includes(bioma))
    }

    adicionarAnimalAoRecinto(recinto, animal, quantidade) {
        if (this.temEspacoSuficiente(recinto, animal, quantidade) && this.ajustarEspacoDisponivel(recinto, animal, quantidade)) {
            this.adicionarAnimal(recinto, animal, quantidade);
            return recinto;
        }
    }

    alimentacaoCompativel(recinto, animal) {
        if (animal.alimentacao === 'carnivoro' && recinto.animaisExistentes.some(animalExistente => animalExistente.especie !== animal.especie)) {
            return false;
        } else if (animal.alimentacao !== 'carnivoro' && recinto && recinto.animaisExistentes && recinto.animaisExistentes.some(animalExistente => animalExistente.alimentacao === 'carnivoro')) {
            return false;
        }
        return true;
    }

    temEspeciesCompativeis(recinto, animal, quantidade) {
        if (quantidade == 1 && animal.especie === 'macaco' && recinto.animaisExistentes.length == 0) {
            return false;
        } else if (!recinto.animaisExistentes || !recinto.animaisExistentes.length ? false : !recinto.animaisExistentes.some(animalExistente => animalExistente.especie === 'hipopotamo') &&
            !(animal.especie === 'hipopotamo' ? animal.bioma.every(bioma => recinto.bioma.includes(bioma)) :
                animal.bioma.some(bioma => recinto.bioma.includes(bioma)))) {
            return false;
        }
        return true;
    }

    temBiomaCompativel(recinto, animal) {
        return animal.bioma.some(bioma => recinto.bioma.includes(bioma));
    }

    reduzirEspacoParaEspeciesDiferentes(recinto, animal) {
        const temEspeciesDiferentes = recinto.animaisExistentes.some(animalExistente => animalExistente.especie !== animal.especie);
        if (temEspeciesDiferentes) {
            recinto.espacoDisponivel -= 1;
        }
    }

    reduzirEspacoParaAnimais(recinto, animal, quantidade) {
        recinto.espacoDisponivel -= (quantidade * animal.tamanho);
    }

    adicionarAnimal(recinto, animal, quantidade) {
        for (let i = 0; i < quantidade; i++) {
            recinto.animaisExistentes.push(animal);
        }
    }
}

export {RecintoService as RecintoService};
