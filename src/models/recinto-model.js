class Recinto {
    constructor(numero, bioma, tamanhoTotal, animaisExistentes) {
        this.numero = numero;
        this.bioma = bioma;
        this.tamanhoTotal = tamanhoTotal;
        this.animaisExistentes = animaisExistentes;
        this.espacoOcupado = this.animaisExistentes.map(animal => animal.tamanho).reduce((total, tamanho) => total + tamanho, 0);
        this.espacoDisponivel = this.tamanhoTotal - this.espacoOcupado;
    }

}

export {Recinto as Recinto};