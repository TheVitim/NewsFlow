# NewsFlow — Testes de Comportamento

Projeto acadêmico de Engenharia de Software desenvolvido
utilizando JavaScript e Cucumber.js.

O objetivo é especificar e automatizar comportamentos de
negócio da plataforma NewsFlow utilizando a metodologia
Behavior Driven Development (BDD).

## Tecnologias utilizadas

- Node.js
- JavaScript
- Cucumber.js
- Gherkin
- Git

## Estrutura do projeto

- docs/: histórias de usuário.
- features/: cenários escritos em Gherkin.
- features/support/: ambiente de execução e regras de negócio.
- features/step_definitions/: implementação dos passos.
- relatorios/: relatório HTML dos testes.

## Histórias implementadas

| ID | Funcionalidade | Regra |
|---|---|---|
| US01 | Salvamento automático e restauração de rascunhos | RN01 |
| US02 | Aprovação e reprovação de edições | RN02 |
| US03 | Agendamento de envios | RN03 |
| US04 | Segmentação de assinantes | RN04 |

## Requisitos

- Node.js
- npm

## Instalação

Clone o repositório:

    git clone URL_DO_REPOSITORIO

Entre na pasta:

    cd newsflow-bdd

Instale as dependências:

    npm install

## Executando os testes

Executar todos os cenários:

    npm test

Validar os passos sem executar os testes:

    npm run test:dry

Executar somente os cenários smoke:

    npm run test:smoke

## Relatório HTML

Após executar os testes, o relatório estará disponível em:

    relatorios/cucumber-report.html

Abra o arquivo em um navegador para visualizar os resultados.

## Fora de escopo

- RN05 — Frequência de envio: não implementada devido à
complexidade do controle de limites semanais e filas.

- RN06 — Descadastro: não implementado devido à necessidade
de fluxos adicionais de confirmação por e-mail.

- RN07 — Falha de entrega: não implementada devido à
complexidade das tentativas de reenvio e tratamento de bounces.

- RN08 — Notificações push: não implementada por envolver
regras adicionais de horários e limites diários.

## Observação

O projeto utiliza uma implementação simplificada das regras
de negócio em memória, sem banco de dados ou interface gráfica.
O foco está na especificação e automação dos comportamentos
utilizando BDD e Cucumber.js.