# app.wine-locals-test

Aplicação para listagem de restaurantes e pratos referente ao teste wine-locals.

## Tecnologias
  * React
  * Typescript
  
## Requerimentos
  * Node
  * npm
  

## Iniciando a aplicação

Para iniciar a aplicação, após a [API](https://github.com/mateusdreher/api.wine-locals-test/) estar rodando, no seu terminal, na pasta raiz do projeto, rode os comandos: 
  * `npm start` ou `yarn`, depois das dependencias instaladas, rode
  * `npm start` e acesse a aplicação no endereço http://localhost:3000
  
 Já existe um usuário teste criado assim que a api for iniciada para a realização do login: 
    ```
  
      {
        "email": "cleitonbomdeguerra@olimpus.com",
        "password": "ihatezeus123"
      } 
    ```


## Funcionalidades

A primeira tela que terá contato é a de login:

  ![image](https://user-images.githubusercontent.com/59891701/177841624-c8b85bf1-6265-45d5-bc93-fe09d75bf159.png)

Após o login ser feito, será redirecionado para a tela de listagem de lugares:
  ![image](https://user-images.githubusercontent.com/59891701/177841782-a6d83c03-3049-4f59-92c4-4fbd976c8091.png)
  
  Nessa tela, tem duas opções:
   * Clicando em cima do card de algum lugar, será redirecionado para a listagem dos pratos do mesmo
  
  ![image](https://user-images.githubusercontent.com/59891701/177842701-6bb148b5-6ff6-4238-aef5-56eecc471431.png)

   
      Clicando no botão de mais, será redirecionado para a criação de um prato nesse restarante, como a segunda opção.

   * Clicando no botão de mais, será redirecionado para a crição de um prato naquele restaurante.
   ![image](https://user-images.githubusercontent.com/59891701/177842112-49a6e664-efa7-448d-a68d-6e3e092cbd22.png)
   
    Após o prato ser adicionado, será redirecionado para a tela de listagem de pratos novamente.


@To-dos:
* Adicionar responsividade para telas maiores
* Adicionar criação de local
