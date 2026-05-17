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

#Funcionalidades automatizadas

##Testes de API

Foram implementados testes automatizados para validar endpoints REST, incluindo:

* Obtenção da lista de produtos
* Criação de usuários
* Validação de status codes
* Validação de estrutura e tipos de dados
* Validações negativas para cenários inválidos

---

##Testes E2E

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

