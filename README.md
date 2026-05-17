# Desafio-Tec-Analista-Teste-Pleno-Alejandra-Zu
Parte 1: Estratégia, BDD e Testes Manuais (Visão de Produto)
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

#Arquitetura do projeto

O projeto foi estruturado utilizando o padrão Page Object Model (POM) para melhorar:

* manutenção
* reutilização
* legibilidade
* separação de responsabilidades

---

#Estrutura de pastas

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
# Bug Report — Incorrect HTTP Status Code on Create Account API

## Endpoint
`POST https://automationexercise.com/api/createAccount`

---

## Description

The API returns an incorrect HTTP status code when a user is successfully created.

According to REST API standards and the API documentation, the expected response should be:

```http
201 Created
```

However, the API currently returns:

```http
200 OK
```

while the response body indicates successful creation:

```json
{
  "responseCode": 201,
  "message": "User created!"
}
```

---

## Steps to Reproduce

1. Send a `POST` request to:

```bash
https://automationexercise.com/api/createAccount
```

2. Use valid request parameters:

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

3. Verify the returned HTTP status code.

---

## Expected Result

```http
HTTP/1.1 201 Created
```

---

## Actual Result

```http
HTTP/1.1 200 OK
```

Response body:

```json
{
  "responseCode": 201,
  "message": "User created!"
}
```

---

## Impact

- Breaks REST API conventions
- Causes failures in automated API validations
- Creates inconsistency between HTTP response and payload response
- May confuse API consumers

---
#  Bug Report — API Accepts Invalid Email Format During Account Creation

## Endpoint
`POST https://automationexercise.com/api/createAccount`

---

## Description

The API allows account creation using an invalid email format.

According to validation best practices, the API should reject malformed email addresses and return:

```http
400 Bad Request
```

However, the endpoint accepts invalid email formats and successfully creates the user account.

This indicates that email format validation is missing or not being enforced on the backend.

---

## Steps to Reproduce

1. Send a `POST` request to:

```bash
https://automationexercise.com/api/createAccount
```

2. Use an invalid email format in the request body:

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

3. Observe the API response.

---

## Expected Result

The API should validate the email format and reject the request.

Expected response:

```http
HTTP/1.1 400 Bad Request
```

Example response body:

```json
{
  "responseCode": 400,
  "message": "Invalid email format"
}
```

---

## Actual Result

The API accepts the invalid email format and creates the account successfully.

Returned response:

```http
HTTP/1.1 200 OK
```

Response body:

```json
{
  "responseCode": 201,
  "message": "User created!"
}
```

---

## Impact

- Invalid data is stored in the system
- Breaks backend input validation standards
- May cause issues in authentication, communication, or user management flows
- Reduces API reliability and data integrity
- Can generate inconsistent or unusable user records

---

