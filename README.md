# bondy-desafio-fullstack

## Estrutura do repositório:
Este projeto é um monorepo construído com Lerna (para saber mais => https://lerna.js.org/)

- `backend` (API Graphql para realizar desafio de backend)
- `frontend` (Repo para criação do frontend do desafio)

```
packages/

    # bondy-desafio-fullstack

    ## Descrição
    Monorepo com Lerna contendo:
    - **Backend**: API GraphQL com mutation de login, autenticação JWT e integração MongoDB.
    - **Frontend**: React + Apollo Client, página de login e boas-vindas, integração via GraphQL.

    ## Requisitos
    - Node.js 18.x
    - Yarn ou npm
    - MongoDB (já configurado para banco de testes)

    ## Instalação
    1. Clone o seu fork:
        ```bash
        git clone https://github.com/carlao03/bondy-desafio-fullstack.git
        cd bondy-desafio-fullstack
        ```
    2. Instale as dependências na raiz:
        ```bash
        yarn
        ```

    ## Rodando o Backend
    1. Entre na pasta do backend:
        ```bash
        cd packages/backend
        ```
    2. Inicie o servidor:
        ```bash
        yarn start
        ```
        ou pela raiz do projeto:
        ```bash
        yarn lerna run start --scope=backend
        ```
    3. O Playground GraphQL estará disponível em:
        ```
        http://localhost:3000
        ```

    ## Rodando o Frontend
    1. Em outro terminal, entre na pasta do frontend:
        ```bash
        cd packages/frontend
        ```
    2. Inicie o frontend:
        ```bash
        yarn dev
        ```
    3. Acesse:
        ```
        http://localhost:5173
        ```

    ## Teste de Login
    - E-mail: `desafio@bondy.com.br`
    - Senha: `123456`

    ## Estrutura
    ```
    packages/
      backend/
         src/
            ...
         package.json
         serverless.yml
      frontend/
         src/
            ...
         package.json
    ```

    

