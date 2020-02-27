# Desafio Back-end - API VUTTR (Very Useful Tools to Remember)

Esta aplicação tem como finalidade a conclusão do desafio do backand proposto pela Bossabox, que é uma empresa online de softwares custumizados, na qual montam squads de designers, desenvolvedores e gerentes de produto remotos.
Esta aplicação trata-se de um repositório de gerenciamento de ferramentas contendo nomes, links, descrições e tags, na qual foi implementada autenticação com JWT (Json Web Token), rotas para cadastrar as ferramentas de acordo com o id do usuário logado, lista das ferramentas do usuário logado e buscar por tags das ferramentas cadastradas.

## Observações

### O que será avaliado

Queremos avaliar sua capacidade de desenvolver e documentar um back-end para uma aplicação. Serão avaliados:

<ul>
    <li>
        Código bem escrito e limpo;
    </li>
    <li>
        Quais ferramentas foram usadas, como e porquê, além do seu conhecimento das mesmas;
    </li>
    <li>
        Seu conhecimento em banco de dados, requisições HTTP, APIs REST, etc;
    </li>
    <li>
        Sua capacidade de se comprometer com o que foi fornecido;
    </li>
    <li>
        Sua capacidade de documentação da sua parte da aplicação.
    </li>
</ul>

### O mínimo necessário

<ul>
    <li>
        Uma aplicação contendo uma API real simples, sem autenticação, que atenda os requisitos descritos abaixo, fazendo requisições à um banco de dados para persistência;
    </li>
    <li>
        README.md contendo informações básicas do projeto e como executá-lo;
    </li>
    <li>
        API Blueprint ou Swagger da aplicação
    </li>
</ul>

### Bônus

Os seguintes itens não são obrigatórios, mas darão mais valor ao seu trabalho (os em negrito são mais significativos para nós, se destacando como características para se tornar Tech Lead

- [x] Uso de ferramentas externas que facilitem o seu trabalho;
- [x] Cuidados especiais com otimização, padrões, entre outros;
- [x] Migrations ou script para configuração do banco de dados utilizado;
- [x] <strong>Testes<strong>;
- [x] Conteinerização da aplicação;
- [x] Autenticação e autorização (OAuth, JWT);
- [x] Pipelines de CI/CD (GitLab, CircleCI, TravisCI, etc);
- [x] Deploy em ambientes reais, utilizando serviços de cloud externos (AWS, Heroku, GCP, etc);

A seguir seram descritos os passos para inicialização do projeto, ferramentas e tecnologias utilizadas, dentre elas bibliotecas e frameworks, citando os objetivos alcançados para a conclusão da API.

## Configuração do ambiente

### Instalação do Docker

O Docker é uma aplicação que roda em ambientes Windows ou MacOS, que visa a construção e o compartilhamento de aplicativos e microserviços em container. Após instalar o Docker por meio do endereço https://www.docker.com/products/docker-desktop, deverá rodar o seguinte comando para que sejá possível criar o container com a instância do PostgreSQL

``` bash
docker run --name vuttr -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

### Instalação do Node.js

Node.js é um interpretador javascript assíncrono, criado em 2009, focado em constuir aplicação de alta escalabilidade. O dowload e configurção do ambiente com Node.js poderá ser realizado por meio do endereço https://nodejs.org/en/, utilizando a versão recomendada.

### Instalação do Yarn

Yarn é um gerenciador de pacotes javascript criado pelo Facebook que tem como objetivo ser mais rápido e confiável que o NPM. Empresas como Exponent, Google, e Tilde colaboram com este gerenciador de dependências. Poderá ser realizado o dowload do mesmo por meio do endereço https://classic.yarnpkg.com/en/docs/install/#windows-stable

## Inicialização da aplicação

Após o ambiente está devidamento configurado, deverá ser feito o clone da aplicação por meio do comando ```git clone https://github.com/thalysssonNascimento/vuttr.git```.
Para instarlar e rodar a aplicação no ambiente local, deverá realizar os seguintes comando na raiz do projeto:

para instalar todas as dependências

```bash
yarn
```

para inicializar a API na porta 3000

```bash
yarn dev
```

em ambiente de produção
```bash
yarn start
```

## Automatização de testes com JEST

O Jest é framework em javscript mantido pelo Facebook, que tem como foco a simplicidade nos teste em projetos construídos com Node, React,Angular e outros. Tambem é utlizado por grandes empresas como Twitter, Facebook, Instagram, Spotfy, Airbnb.

Para rodar os testes com Jest poderá ser feito por meio do comando

```bash
yarn test
```

No arquivo package.json contém as instruções para incialização dos teste.
Na instrução ```"pretest": "set NODE_ENV=test&& sequelize db:migrate"``` seta no process.env.NODE_ENV o valor test para incialização da estrutura do banco com sequelize no sqlite3 antes de rodar os testes.
Com a instrução ```"test": "cls set NODE_ENV=test&& jest --runInBand --detectOpenHandles",```, roda todos os teste que estão no diretório __test__/integration que contém a extensão .test.js.
Após os testes serem realizados o seguinte comando será exexutado automaticamente ```"posttest": "set NODE_ENV=test&& sequelize db:migrate:undo:all"```, onde irá deletar todas as tabelas contidas no banco sqlite3.

Observação: em ambientes MacOS, no arquivo package.json a instrução ```"scripts": {...}``` deve ser alterada para:
  "scripts": {
    "dev": "nodemon src/server.js",
    "pretest": "NODE_ENV=test sequelize db:migrate",
    "test": "NODE_ENV=test jest --runInBand --detectOpenHandles",
    "posttest": "NODE_ENV=test sequelize db:migrate:undo:all"
  },

## Deploy na DigitalOcean

É uma provedora de infraestrutura em nuvem norte americana, com data centers espalhados por todo mundo. Ela oferece serviços em nuvem que que ajudam implantar e executar aplicativos em diversos droplets simultaneamente.
Para está aplicação foi criado o droplet com distribuição Ubuntu 18.04(LTS) x64, 1 GB de memória RAM, 25 GB de disco SSD e 1 TB de transferência. Configurado com Docker.

## Documentação com Swagger.io

Swagger é um ecossistema de ferramenta que ajuda a criar, documentar e consumir serviços web com arquitetura REST. Segue o link da documentação da API VUTTR.
Toda API esta documentada no endereço #######################
