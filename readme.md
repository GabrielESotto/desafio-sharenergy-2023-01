#  Projeto Sharenergy - Processo Seletivo 2023

## Descrição do Projeto

Esse projeto tem como objetivo cumprir os requisitos do processo seletivo da empresa Sharenergy com o intuito de ser aprovado e também adquirir novos conhecimentos.

Autor projeto: Gabriel Ernesto Sotto

## Funcionalidades do Projeto

###### Login Page 
*-> Verificação de usuário na database, Login, Remember Funcionality e JWT Persistence Login*

###### Random User Page 
*-> Request API, listagem de usuarios aleatorios com pagination e uma barra de pesquisa para buscar usuarios por nome, email e username*

###### HTPP Cat Page 
*-> Request API e mostra um gato conforme o HTTP Status Code escolhido*

###### Random Dog Page 
*-> Request API e após pressionar o botão, mostra um cachorro aleatorio.*

###### CRUD Page 
*-> Request para nosso back end sendo possivel realizar cadastro de clientes, deletar clientes, listar todos clientes, ver tudo sobre um cliente.*

*-> Implementei um sistema para cadastro, delete e login de usuarios com o banco de dados, utilizando JWT Token e BCrypt para hashar o password salvo no banco de dados. Apesar de implementado, não é necessário seu uso pois o usuario que foi pedido no desafio já esta cadastrado.*

*Todas as paginas possuem um Div Loading que é uma tela de carregamento para as requests que estão sendo carregadas.*

## Tecnologias Utilizadas

###### Front End
- React
- React-Router-Dom
- React Hooks
- Context
- Material UI
- Styled Components
- Axios (Request API)
- React Input-Mask
- Vite

###### Back End
- Node
- Express
- Axios
- MongoDB
- Mongoose
- JWT
- Bcrypt

## Inicialização

Faça um clone desse projeto
```
git clone
```
Abra seu VScode, seu terminal e acesse a pasta server
```
cd server
```
Execute o comando para baixar nossas dependencias
```
npm install
```
E agora inicie o servidor com o comando
```
nodemon
```
Você deve receber duas mensagens no seu terminal
* [INFO] Connected to MongoDB
* [INFO] Server is running on port 9090

Agora vamos executar nosso front end, abra mais um terminal no seu VScode e entre na pasta client
```
cd client
```
Dentro da pasta client, vamos instalar nossas dependencias
```
npm install
```
Agora vamos executar o nosso projeto
```
npm run dev
```
Você deve receber o link no seu terminal para acessar a pagina.
* Local:   http://localhost:4173/

Agora você já pode testar todas funcionalidades e ver como o projeto ficou.

## Apresentação do Projeto

##### [Link Youtube](https://www.youtube.com/watch?v=PM14Wg7EE40)

## Status e observações do projeto

Gostaria de ter implementado alguns testes que eu fiz porém optei por deixar eles de fora dessa vez por ainda estar estudando mais sobre testes

O projeto se encontra finalizado e entregue a Sharenergy.
