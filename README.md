# Desafio-Tec-Analista-Teste-Pleno-Alejandra-Zu
# Parte 1: Estratégia, BDD e Testes Manuais (Visão de Produto)
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

---
# Parte 2: Automação (Engenharia de Código)
Este projeto foi desenvolvido como parte de um desafio técnico para a vaga de QA Automation Engineer, utilizando Cypress para automação de testes E2E e testes de API.

O principal objetivo foi validar funcionalidades críticas da aplicação Automation Exercise por meio de uma estrutura reutilizável, escalável e de fácil manutenção, seguindo boas práticas de automação.

---

Tecnologias utilizadas

* Cypress
* JavaScript
* Page Object Model (POM)
* Fixtures
* Custom Commands
* Utility Helpers

---

# Funcionalidades automatizadas

## Testes de API

Foram implementados testes automatizados para validar endpoints REST, incluindo:

* Obtenção da lista de produtos
* Criação de usuários
* Validação de status codes
* Validação de estrutura e tipos de dados
* Validações negativas para cenários inválidos

---

## Testes E2E

Foi automatizado o fluxo completo de compra:

* Navegação para produtos
* Adição de produtos ao carrinho
* Cadastro de usuário
* Checkout
* Pagamento
* Confirmação do pedido

---

# Arquitetura do projeto

O projeto foi estruturado utilizando o padrão Page Object Model (POM) para melhorar:

* manutenção
* reutilização
* legibilidade
* separação de responsabilidades

---

# Estrutura de pastas

`cypress/tests`
Contém todos os casos de teste automatizados.

`api/`
Testes de API REST.

`e2e/`
Testes End-to-End do fluxo completo do usuário.

---

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

---

`cypress/fixtures`

Contém dados estáticos reutilizáveis para os testes.

Exemplos:

* payloads para API
* dados de usuário
* dados de pagamento

Os fixtures permitem desacoplar os dados dos testes.

---

`cypress/support`

Contém configurações globais e funcionalidades reutilizáveis.

`commands.js`

Custom commands do Cypress.

Exemplos:

* `createAccount`
* requests reutilizáveis de API

---

`utils.js`

Funções helper reutilizáveis.

Exemplos:

* geração de nomes aleatórios
* geração de emails únicos
* builders de dados dinâmicos

---

`data/userFactory.js`

Factory responsável por construir usuários dinâmicos reutilizando os dados base dos fixtures.

Permite:

* evitar hardcode
* reutilizar dados entre API e E2E
* gerar emails únicos automaticamente

---

`locators`

Arquivo centralizado de seletores.

Permite:

* centralizar manutenção
* evitar duplicação
* melhorar legibilidade

---

# Boas práticas aplicadas

* Page Object Model (POM)
* Reutilização de dados
* Separação de responsabilidades
* Dados dinâmicos para evitar colisões
* Uso de fixtures
* Custom commands
* Seletores reutilizáveis
* Validações positivas e negativas
* Código desacoplado e de fácil manutenção

---
# Instalação do projeto
Precisa instalar 

```bash
npm init -y
npm install
npm install cypress --save-dev
```
# Execução do projeto
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

# Bug Report 1 — Código HTTP Incorreto na API de Criação de Conta

## Endpoint
`POST https://automationexercise.com/api/createAccount`

---

## Descrição

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

---

## Passos para Reproduzir

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

---

## Resultado Esperado

```http
 201 Created
```

---

## Resultado Atual

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

---

## Impacto

- Quebra as convenções de APIs REST
- Causa falhas em validações automatizadas de API
- Cria inconsistência entre a resposta HTTP e o payload retornado
- Pode causar confusão para consumidores da API

---

# Bug Report 2 — API Aceita Formato de E-mail Inválido Durante a Criação de Conta

## Endpoint
`POST https://automationexercise.com/api/createAccount`

---

## Descrição

A API permite a criação de contas utilizando um formato de e-mail inválido.

De acordo com as boas práticas de validação, a API deveria rejeitar e-mails mal formatados e retornar:

```http
400 Bad Request
```

Entretanto, o endpoint aceita formatos inválidos de e-mail e cria a conta com sucesso.

Isso indica que a validação do formato de e-mail está ausente ou não está sendo aplicada corretamente no backend.

---

## Passos para Reproduzir

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

---

## Resultado Esperado

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

---

## Resultado Atual

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

---

## Impacto

- Dados inválidos são armazenados no sistema
- Quebra os padrões de validação de entrada no backend
- Pode causar problemas em fluxos de autenticação, comunicação e gerenciamento de usuários
- Reduz a confiabilidade e integridade da API
- Pode gerar registros inconsistentes ou inutilizáveis

---