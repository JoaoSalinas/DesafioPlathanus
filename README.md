
# DesafioPlathanus 

## O Desafio:
    Olá João, boa tarde!!!!

    Que bacana que tem interesse em ser um Plather! Como próximo passo estamos enviando um desafio técnico para avaliar seu conhecimento e assim podermos ver qual o seu nível técnico. Segue abaixo:


    **DESAFIO TÉCNICO - DEVELOPER
    **

    Está incluso neste teste um arquivo PSD com o design necessário.

    Gostaríamos de ver isso funcionando no computador, e o slideshow editável pelo banco de dados. O mais importante é a realização do teste, sem regras ou objeções de como fazer. Ao final nos encaminhe o link do seu GIT com o projeto contendo todo conteúdo necessário para rodarmos juntamente com as instruções (README.TXT) e avaliarmos aqui, ok? 


    Para este teste, as palavras-chaves são: 
    * docker
    * nodejs express server
    * react
    * migrations
    * reutilização.
  
    Tempo para finalizar: 5 dias a contar do dia de hoje!
    
    Boa sorte !!!

## Organização da aplicação:
A aplicação esta separada em duas partes: 

    * server: Aplicação back-end com nodeJs e framework Express, docker, migrations e reutilização e banco de dados PostgreSql
    * web: Front-end com ReactJs e Reutilização através de componentes.

## Rodando o Front-end
Navegar para a pasta "web" e utilize o comando:

`yarn`

Após instalados os modulos basta rodar o comando:

`yarn start`

Pronto! Front-end rodando

### Video da aplicação front-end rodando:
https://drive.google.com/file/d/1LeOmvOUfu9IVyitxVOOcRsVJNuGqJOR5/view?usp=sharing


## Rodando o Back-end:
Navegue até a pasta "server" e utilize o comando:

`yarn`

Após instalados os modulos basta rodar o comando:

`yarn dev:server`

Para as migrations uso o script: 

`yarn typeorm migration:run`

## Video das requisições back-end rodando:
https://drive.google.com/file/d/1p5l-MQkMM3QMiVGq9DVOoErYFrHIqJ9n/view?usp=sharing 

## Minhas configurações:
Para usar a base de dados criei um container com postgres e configurei da seguinte forma:

`"type" : "postgres",`

`"host" : "localhost",`

`"port" : 5432,`

`"username" : "postgres",`

`"password" : "docker",`

`"database" : "landpage_plathanus",`


Para inicializar a base de dados utilizo o comando:

`docker start "id-do-meu-docker"`

## Validação dos testes:
Para validar o back-end utilizei o Insomnia para testar as requisições.
