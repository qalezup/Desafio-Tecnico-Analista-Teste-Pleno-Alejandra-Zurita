# Desafio-Tecnico-Analista-Teste-Pleno-Alejandra-Zurita
## Parte 1: Estratégia, BDD e Testes Manuais (Visão de Produto)
### 1. BDD 
Funcionalidade: Processo de finalização de compra com cadastro durante o checkout

Como um cliente da loja online
Quero realizar meu cadastro durante o processo de compra
Para que eu possa concluir meu pedido com sucesso

Contexto:
Dado que o cliente está navegando na loja online
E existem produtos disponíveis para compra

Cenário: Finalizar uma compra com sucesso realizando cadastro durante o checkout

Dado que o cliente adiciona produtos ao carrinho de compras
E prossegue para a etapa de checkout

Quando o cliente escolhe realizar o cadastro durante o processo de finalização da compra
E informa dados válidos para criação da conta
Então a conta deve ser criada com sucesso
E o cliente deve permanecer autenticado na aplicação

Quando o cliente retorna para o fluxo de checkout
Então o resumo do pedido e os dados de entrega devem ser exibidos corretamente

Quando o cliente confirma o pedido utilizando informações de pagamento válidas
Então o pedido deve ser finalizado com sucesso
E o cliente deve visualizar a mensagem de confirmação da compra

Quando o cliente solicita a exclusão da conta
Então a conta deve ser removida com sucesso

### 2. Edge cases

#### Edge case 1:
Funcionalidade: Validação obrigatória dos dados de pagamento

Como um cliente da loja online
Quero que o sistema valide os campos obrigatórios de pagamento
Para evitar a finalização de compras com informações inválidas

Contexto:
Dado que o cliente possui produtos no carrinho
E acessa a etapa de pagamento do checkout

Cenário: Impedir finalização da compra ao preencher os campos de pagamento utilizando apenas a tecla de espaço

Quando o cliente preenche os campos de pagamento pressionando apenas a tecla de espaço 
 
E confirma o pagamento do pedido

Então o sistema não deve permitir a finalização da compra
E mensagens de validação devem ser exibidas para os campos obrigatórios
E o pedido não deve ser processado.

Nota: Atualmente é possivel finalizar a compra quando o cliente preenche só com tecla de espaço sem introducir dados válidos

#### Edge case 2:
Funcionalidade: Validação de limite de caracteres no formulário de cadastro de usuário

Como um visitante da loja online
Quero que o formulário de cadastro valide o limite máximo de caracteres permitidos
Para evitar inconsistências de dados, falhas na interface e erros durante o processamento do cadastro

Contexto:
Dado que o visitante acessa a tela de criação de conta

Cenário: Impedir cadastro com quantidade de caracteres acima do limite permitido nos campos do formulário de criação da conta

Quando o usuário informa dados acima do limite máximo permitido nos seguintes campos

E tenta concluir a criação da conta

Então o sistema deve impedir a inserção de caracteres acima do limite permitido
E os campos devem manter a integridade visual da interface
E a aplicação não deve apresentar lentidão, falhas ou comportamento inesperado
E a conta não deve ser criada com dados inválidos

#### Edge case 3: 
Funcionalidade: Prevenção de múltiplas submissões no pagamento

Como um cliente da loja online
Quero que o sistema impeça múltiplas confirmações simultâneas de pagamento
Para evitar pedidos duplicados e cobranças indevidas

Contexto:
Dado que o cliente possui produtos no carrinho
E acessa a etapa de pagamento do checkout
E informa dados de pagamento válidos

Cenário: Impedir criação de pedidos duplicados ao clicar repetidamente no botão de confirmação de pagamento

Quando o cliente clica múltiplas vezes consecutivas no botão "Pagar e Confirmar Pedido"

Então o sistema deve processar apenas uma única solicitação de pagamento
E apenas um pedido deve ser criado
E o cliente deve visualizar apenas uma confirmação de compra
E a aplicação não deve apresentar erros, lentidão ou comportamento inesperado


---
## Parte 2: Automação (Engenharia de Código)
Este projeto foi desenvolvido como parte de um desafio técnico para a vaga de QA Automation Engineer, utilizando Cypress para automação de testes E2E e testes de API.

O principal objetivo foi validar funcionalidades críticas da aplicação Automation Exercise por meio de uma estrutura reutilizável, escalável e de fácil manutenção, seguindo boas práticas de automação.


### Tecnologias utilizadas

* Cypress
* JavaScript
* Page Object Model (POM)
* Fixtures
* Custom Commands
* Utility Helpers


### Funcionalidades automatizadas

#### Testes de API

Foram implementados testes automatizados para validar endpoints REST, incluindo:

* Obtenção da lista de produtos
* Criação de usuários
* Validação de status codes
* Validação de estrutura e tipos de dados
* Validações negativas para cenários inválidos


#### Testes E2E

Foi automatizado o fluxo completo de compra:

* Navegação para produtos
* Adição de produtos ao carrinho
* Cadastro de usuário
* Checkout
* Pagamento
* Confirmação do pedido

### Arquitetura do projeto

O projeto foi estruturado utilizando o padrão Page Object Model (POM) para melhorar:

* manutenção
* reutilização
* legibilidade
* separação de responsabilidades

### Estrutura de pastas

`cypress/tests`
Contém todos os casos de teste automatizados.

`api/`
Testes de API REST.

`e2e/`
Testes End-to-End do fluxo completo do usuário.

`cypress/pages`
Contém as Page Objects.

Cada página encapsula:

* ações
* seletores
* comportamento da interface

Exemplos:

* `productPage`
* `cartPage`
* `registerPage`
* `paymentPage`

Isso evita duplicação de código e facilita manutenção.

`cypress/fixtures`

Contém dados estáticos reutilizáveis para os testes.

Exemplos:

* payloads para API
* dados de usuário
* dados de pagamento

Os fixtures permitem desacoplar os dados dos testes.

`cypress/support`

Contém configurações globais e funcionalidades reutilizáveis.

`commands.js`

Custom commands do Cypress.

Exemplos:

* `createAccount`
* requests reutilizáveis de API

`utils.js`

Funções helper reutilizáveis.

Exemplos:

* geração de nomes aleatórios
* geração de emails únicos
* builders de dados dinâmicos

`data/userFactory.js`

Factory responsável por construir usuários dinâmicos reutilizando os dados base dos fixtures.

Permite:

* evitar hardcode
* reutilizar dados entre API e E2E
* gerar emails únicos automaticamente

`locators`

Arquivo centralizado de seletores.

Permite:

* centralizar manutenção
* evitar duplicação
* melhorar legibilidade

### Boas práticas aplicadas

* Page Object Model (POM)
* Reutilização de dados
* Separação de responsabilidades
* Dados dinâmicos para evitar colisões
* Uso de fixtures
* Custom commands
* Seletores reutilizáveis
* Validações positivas e negativas
* Código desacoplado e de fácil manutenção

### Instalação do projeto
Precisa instalar 

```bash
npm init -y
npm install
npm install cypress 
```
### Execução do projeto
Executar Cypress em modo interativo

```bash
npx cypress open
```

Executar testes em modo headless

```bash
npx cypress run
```
---

# Parte 3: O "Chapéu" de Investigador (Bug Report)

## Bug Report 1 — Código HTTP Incorreto na API de Criação de Conta

### Endpoint
`POST https://automationexercise.com/api/createAccount`

### Descrição

A API retorna um código HTTP incorreto quando um usuário é criado com sucesso.

De acordo com os padrões de APIs REST e com a documentação da API, a resposta esperada deveria ser:

```http
201 Created
```

Entretanto, atualmente a API retorna:

```http
200 OK
```

enquanto o corpo da resposta indica criação bem-sucedida:

```json
{
  "responseCode": 201,
  "message": "User created!"
}
```

### Passos para Reproduzir

1. Envie uma requisição `POST` para:

```bash
https://automationexercise.com/api/createAccount
```

2. Utilize parâmetros válidos na requisição:

```json
{
  "name": "QA User",
  "email": "testuser123@company.com",
  "password": "Password1!",
  "title": "Mr",
  "birth_date": "10",
  "birth_month": "January",
  "birth_year": "1995",
  "firstname": "QA",
  "lastname": "User",
  "company": "QA Company",
  "address1": "Street 1",
  "address2": "Apartment 2",
  "country": "Brazil",
  "zipcode": "77000",
  "state": "Tocantins",
  "city": "Palmas",
  "mobile_number": "999999999"
}
```

3. Verifique o código HTTP retornado.

### Resultado Esperado

```http
 201 Created
```

### Resultado Atual

```http
 200 OK
```

Corpo da resposta:

```json
{
  "responseCode": 201,
  "message": "User created!"
}
```

### Impacto

- Quebra as convenções de APIs REST
- Causa falhas em validações automatizadas de API
- Cria inconsistência entre a resposta HTTP e o payload retornado
- Pode causar confusão para consumidores da API

## Bug Report 2 — API Aceita Formato de E-mail Inválido Durante a Criação de Conta

### Endpoint
`POST https://automationexercise.com/api/createAccount`

### Descrição

A API permite a criação de contas utilizando um formato de e-mail inválido.

De acordo com as boas práticas de validação, a API deveria rejeitar e-mails mal formatados e retornar:

```http
400 Bad Request
```

Entretanto, o endpoint aceita formatos inválidos de e-mail e cria a conta com sucesso.

Isso indica que a validação do formato de e-mail está ausente ou não está sendo aplicada corretamente no backend.

### Passos para Reproduzir

1. Envie uma requisição `POST` para:

```bash
https://automationexercise.com/api/createAccount
```

2. Utilize um formato de e-mail inválido no corpo da requisição:

```json
{
  "name": "QA User",
  "email": "invalid-email-format",
  "password": "Password1",
  "title": "Mr",
  "birth_date": "10",
  "birth_month": "January",
  "birth_year": "1995",
  "firstname": "QA",
  "lastname": "User",
  "company": "QA Company",
  "address1": "Street 1",
  "address2": "Apartment 2",
  "country": "Brazil",
  "zipcode": "77000",
  "state": "Tocantins",
  "city": "Palmas",
  "mobile_number": "999999999"
}
```

3. Observe a resposta da API.

### Resultado Esperado

A API deveria validar o formato do e-mail e rejeitar a requisição.

Resposta esperada:

```http
 400 Bad Request
```

Exemplo de corpo da resposta:

```json
{
  "responseCode": 400,
  "message": "Invalid email format"
}
```

### Resultado Atual

A API aceita o formato inválido de e-mail e cria a conta com sucesso.

Resposta retornada:

```http
 200 OK
```

Corpo da resposta:

```json
{
  "responseCode": 201,
  "message": "User created!"
}
```
## Bug Report 3 — Formulário de Pagamento Aceita Apenas Espaços em Branco e Permite Confirmar Pedido

### Módulo
Checkout / Pagamento

### Descrição

O formulário de pagamento valida corretamente os campos vazios quando o usuário clica no botão **"Pay and Confirm Order"** sem preencher nenhuma informação.

Entretanto, a validação pode ser contornada ao preencher os campos obrigatórios utilizando apenas espaços em branco (pressionando a barra de espaço).

O sistema aceita esses valores compostos somente por espaços como dados válidos e permite concluir e confirmar o pedido com sucesso.

Isso indica que a validação dos inputs não está removendo ou rejeitando corretamente valores contendo apenas espaços em branco.

### Passos para Reproduzir

1. Acesse a página de pagamento.
2. Nos campos obrigatórios do formulário de pagamento (nome no cartão, número do cartão, CVC, mês e ano de expiração):
   - Pressione a `barra de espaço` uma ou mais vezes.
3. Preencha todos os campos obrigatórios utilizando apenas espaços em branco.
4. Clique no botão **"Pay and Confirm Order"**.
5. Observe o comportamento do sistema.

### Resultado Esperado

O sistema deveria:

- Remover espaços antes da validação
- Rejeitar inputs contendo apenas espaços em branco
- Impedir o processamento do pagamento e a confirmação do pedido

### Resultado Atual

O sistema aceita campos preenchidos apenas com espaços em branco e confirma o pedido com sucesso após clicar em:

```text
"Pay and Confirm Order"
```

### Impacto

- As regras de validação podem ser facilmente contornadas
- Informações inválidas de pagamento são aceitas
- Reduz a confiabilidade das validações do checkout
- Pode permitir pagamentos incompletos ou falsos
- Compromete a integridade dos dados e do fluxo de compra

## Severidade
Alta

## Prioridade
Alta

## Sugestão de Correção

Implementar validação adequada nos campos de pagamento:

- Aplicar `.trim()` ou equivalente antes da validação
- Validar corretamente todos os campos obrigatórios no frontend e backend
- Bloquear a confirmação do pedido quando valores inválidos forem detectados

### Impacto

- Dados inválidos são armazenados no sistema
- Quebra os padrões de validação de entrada no backend
- Pode causar problemas em fluxos de autenticação, comunicação e gerenciamento de usuários
- Reduz a confiabilidade e integridade da API
- Pode gerar registros inconsistentes ou inutilizáveis

