# Sistema de Gestão de Recintos para Zoológicos

Este projeto é um sistema para gerenciar recintos de animais em um zoológico. Ele permite analisar quais recintos são viáveis para a adição de novos animais com base em critérios como bioma, alimentação, espaço disponível e compatibilidade entre espécies.

## Funcionalidades

- Listagem de todos os recintos disponíveis no zoológico.
- Verificação de compatibilidade de animais com recintos existentes.
- Adição de animais a recintos, respeitando espaço, alimentação e bioma compatíveis.
- Validação de quantidade e tipos de animais em um recinto.

## Estrutura do Projeto

O projeto é organizado em vários pacotes, seguindo boas práticas de separação de responsabilidades.


### Modelos

- **Animal**: Representa as informações de um animal, como espécie, tamanho, bioma e tipo de alimentação.
- **Recinto**: Representa um recinto no zoológico, com dados como o número do recinto, bioma, tamanho total, animais existentes, espaço ocupado e disponível.

### Repositórios

Os repositórios armazenam dados estáticos dos animais e recintos disponíveis.

- **AnimaisRepository**: Contém uma lista de animais pré-definidos com suas características.
- **RecintosRepository**: Contém uma lista de recintos pré-definidos, incluindo os animais que já estão presentes neles.

### Serviços

Os serviços são responsáveis por implementar a lógica de negócio, como adicionar animais aos recintos e verificar compatibilidades.

- **AnimalService**: Fornece métodos para listar todos os animais.
- **RecintoService**: Gerencia os recintos e sua compatibilidade com novos animais.

### Tratamento de Erros

- **Error**: Classe que define e retorna erros quando algo não está conforme as regras do sistema.

## Instalação


1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/sistema-recintos-zoo.git
    cd sistema-recintos-zoo
    ```

2. Certifique-se de que tem o **Node.js** instalado em seu ambiente.

3. Instale as dependências necessárias (se houver), com o comando npm i.

## Como Rodar o Projeto

1. O projeto é modularizado, e cada parte pode ser usada conforme necessário. A lógica principal está no arquivo `recintos-zoo.js`.

2. Para utilizar o projeto, você pode criar um arquivo de entrada, como `app.js`, onde chama as funções da classe `RecintosZoo`.

### Exemplo de Uso:

```javascript
import { RecintosZoo } from './recintos-zoo.js';

const zoo = new RecintosZoo();

// Exemplo: Analisa se é possível adicionar 2 leões em algum recinto
const resultado = zoo.analisaRecintos('leao', 2);

console.log(resultado);


