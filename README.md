# Automação do site demoQA com Cypress

![Static Badge](https://img.shields.io/badge/status-Status?style=for-the-badge&label=Em%20Andamento&labelColor=yellow&color=black)

[![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)](https://www.cypress.io/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)](https://docs.github.com/en/actions)

[![demoQA-automation-Cypress](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/detailed/ae3bmi/main&style=for-the-badge&logo=cypress)](https://cloud.cypress.io/projects/ae3bmi/runs)

Este projeto tem o intuito de aplicar e ampliar o conhecimento em automação de testes E2E com Cypress e Typescript utilizando o Modelo de Objeto de Página(POM) e Continuous Integration.

A automação foi realizada no site [demoQA](https://demoqa.com/), no qual contém Elements, Forms, Alerts, Frames & Windows, Widgets, Interactions e uma aplicação Book Store para treinamento de testes.

## Começando

As instruções abaixo fornecem uma cópia do projeto, permitindo que seja executado em sua máquina local.

## Pré-requisitos

Requisitos para as ferramentas

- [Node.js](https://nodejs.org/en)
- [NPM](https://www.npmjs.com/)
- [Typescript](https://www.typescriptlang.org/)

## Instalando

- Clone o repositório para seu diretório de preferência.
  <small>Se você não sabe como clonar um repositório, clique [aqui ](https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository)</small>

- Dentro do projeto, execute o comando `npm install` para baixar todas as dependências.

- Para abrir o Cypress e executar os testes localmente com visão dos testes pelo navegador execute o comando `npm run cy:open`

- Para executar os testes localmente, sem abrir o Cypress e abrir o navegador, sendo apenas terminal execute o comando `npm run cy:run`

- Para executar os testes com Integração Continua, será necessário realizar um fork do projeto pelo github e configurar as Actions no github, adicionando também o `projectId` no arquivo de configuração `\cypress.config.ts`. Os testes serão executados a cada push na branch main e pull request para main.

## Autores

- **Ana Carolina Rodrigues Rocha** - _QA Analista de Teste_ -
  [linkedin](https://www.linkedin.com/in/anacarolinarodriguesrocha/)

## Referências

- [Tips for Healthy Page Object Classes](https://angiejones.tech/page-object-model/) - por Angie Jones
- [Github Action - Cypress](https://github.com/marketplace/actions/cypress-io)

<!--


-  Pacotes instalados
    - Cypress -> https://docs.cypress.io/guides/getting-started/installing-cypress

    - Typescript -> https://docs.cypress.io/guides/tooling/typescript-support

    - dotenv -> https://www.npmjs.com/package/dotenv


  -->
