import { RecintoService } from './services/recintos-services.js'
import { AnimalService } from './services/animais-services.js'
import { Error } from './errors/error.js'

const servicoRecinto = new RecintoService();
const servicoAnimal = new AnimalService();

class RecintosZoo {

    analisaRecintos(especieAnimal, quantidade) {
        let recintosViaveis = [];
        const animalSelecionado = this.buscarAnimalPorEspecie(especieAnimal);
        if (animalSelecionado.erro) {
            return animalSelecionado;
        }
        if (Number.isInteger(quantidade) && quantidade != 0) {
            this.adicionarAnimalNosRecintosViaveis(animalSelecionado, quantidade, recintosViaveis);
        }
        else {
            return Error.criarObjetoErro('Quantidade inválida');
        }

        if (recintosViaveis.length > 0) {
            return { recintosViaveis: recintosViaveis };
        }
        else {
            return Error.criarObjetoErro('Não há recinto viável');
        }
    }

    buscarAnimalPorEspecie(especieAnimal) {
        const animalSelecionado = servicoAnimal.listarTodos().find(animal => animal.especie.toLowerCase() === especieAnimal.toLowerCase());
        if (!animalSelecionado) {
            return Error.criarObjetoErro('Animal inválido');
        }
        return animalSelecionado;
    }

    adicionarAnimalNosRecintosViaveis(animalSelecionado, quantidade, recintosViaveis) {
        servicoRecinto.obterTodosRecintos().map(recinto => {
            const recintoResposta = servicoRecinto.adicionarAnimalAoRecinto(recinto, animalSelecionado, quantidade)
            if(recintoResposta){
                recintosViaveis.push(`Recinto ${recintoResposta.numero} (espaço livre: ${recintoResposta.espacoDisponivel} total: ${recintoResposta.tamanhoTotal})`);
            }
        });
    }
}

export { RecintosZoo as RecintosZoo };