# Anotações

## Métodos HTTP

- **POST** -> criar;
- **GET** -> buscar;
- **PUT** -> editar;
- **DELETE** -> remover.

### Tipos de Parâmetros

- Query Params: request.query (Filtros, ordenação, paginação...);
- Route Params: request.params (Identificar um recurso na alteração ou remoção);
- Body: request.body (Dados para criação ou alteração de algum registro).

## Controller

Essa é a parte lógica da aplicação. Contém padrões como: index, show, update, store e destroy

- **index**: retorna algum tipo de listagem
- **store**: salva algum Objeto
- **update**: modifica algum registro
- **destroy**: remove algum registro
- **show**: retorna um único registro

## React

O React gira em torno de três conceitos: Componente, estado e propriedade.

- **Componente**: é uma parte do código que retorna HTML, CSS ou JS. Evita repetir um trecho de código;
- **Estado**: é um processo que monitora as mudanças de variáveis em um componente;
- **Propriedade**: é um atributo do componente.

## Observações

- **module.exports**: serve para tornar alguma variável, constante ou objeto de forma global, ou seja,
todo o projeto pode ter acesso.
- **Express**: é um espécie de mini-framework que trabalha com rotas
- **Axios**: ajuda com utilização de APIs
- **async, await**: são comandos para sincronia no JS. O *async* indica que a função será assícrona, ou seja,
em um determinado ponto do código algum comando irá precisar de tempo para receber uma resposta e isso leva
um certo tempo. Enquanto, o *await* especifica o comando que irá receber "olhares".
