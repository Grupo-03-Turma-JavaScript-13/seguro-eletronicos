# 📱 Seguro de Produtos Eletrônicos API

![Node](https://img.shields.io/badge/Node.js-20-green)
![NestJS](https://img.shields.io/badge/NestJS-Framework-red)
![TypeScript](https://img.shields.io/badge/TypeScript-Language-blue)
![MySQL](https://img.shields.io/badge/MySQL-Database-orange)
![TypeORM](https://img.shields.io/badge/TypeORM-ORM-lightgrey)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

---

# 📌 Sobre o Projeto

A API **River Guard** é uma aplicação backend desenvolvida para gerenciar seguros de dispositivos eletrônicos como:

* 📱 Celulares
* 💻 Notebooks
* 📟 Tablets
* 🎧 Outros dispositivos eletrônicos

A API permite o gerenciamento completo de:

* 👤 **Usuários do sistema**
*  Quem usa o sistema
* 👥 **Clientes**
*  Quem contrata o seguro
* 📄 **Apólices de seguro**
*  Contrato do seguro de eletrônicos


O projeto foi desenvolvido com foco em **boas práticas de arquitetura backend**, utilizando **NestJS**, **TypeORM** e **MySQL**, garantindo organização modular, escalabilidade e manutenção simplificada.

---

# 🚀 Tecnologias Utilizadas

| Tecnologia      | Descrição                        |
| --------------- | -------------------------------- |
| Node.js         | Ambiente de execução JavaScript  |
| TypeScript      | Tipagem estática para JavaScript |
| NestJS          | Framework backend estruturado    |
| TypeORM         | ORM para comunicação com banco   |
| MySQL           | Banco de dados relacional        |
| MySQL Workbench | Gerenciamento do banco           |
| Insomnia        | Teste de requisições HTTP        |

---

# 🏗️ Arquitetura do Projeto

O projeto segue a arquitetura **modular do NestJS**.

```
src
│
├── apolice
│   ├── entities
│   ├── apolice.controller.ts
│   ├── apolice.service.ts
│   └── apolice.module.ts
│
├── cliente
│   ├── entities
│   ├── cliente.controller.ts
│   ├── cliente.service.ts
│   └── cliente.module.ts
│
├── usuario
│   ├── entities
│   ├── usuario.controller.ts
│   ├── usuario.service.ts
│   └── usuario.module.ts
│
│
├── app.module.ts
└── main.ts
```

### Estrutura dos Módulos

Cada módulo segue o padrão:

* **Controller** → gerencia as rotas da API
* **Service** → regras de negócio
* **Entity** → estrutura da tabela no banco

---

# 🗄️ Estrutura do Banco de Dados

## 👤 Usuário

Responsável pelo acesso ao sistema.

Estrutura Usuario:

* id
* nome
* usuario
* foto
* senha

---

## 👥 Cliente

Pessoa que contrata o seguro.

Estrutura Cliente:

* id
* nome
* email
* senha
* dataNascimento
* foto
* cpf
* telefone

---

## 📄 Apólice

Registro do seguro contratado.

Estrutura Apólice:

* id
* tipoDispositivo
* marca
* modelo
* numeroSerie
* anoFabricacao
* anoAquisicao
* valorBase
* valorDesconto
* valorFinal
* dataInicio
* dataFim
* clienteId
* usuarioId

---

# ⚙️ Instalação do Projeto

## 1️⃣ Clonar o repositório

```bash
git git@github.com:Grupo-03-Turma-JavaScript-13/seguro-eletronicos.git
```

---

## 2️⃣ Acessar a pasta

```bash
cd seguro-eletronicos
```

---

## 3️⃣ Instalar dependências

```bash
npm install
```

---

## 4️⃣ Configurar o Banco de Dados

Crie um banco no **MySQL Workbench**:

```
db_seguro_eletronicos
```

Configure o arquivo `.env`:

```
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=senha
DB_DATABASE=db_seguro_eletronicos
```

---

## 5️⃣ Executar o projeto

Modo desenvolvimento:

```bash
npm run start:dev
```

Servidor:

```
http://localhost:4000
```

---

# 🧪 Testando a API

As rotas podem ser testadas utilizando:

* **Insomnia**
* **Postman**

Operações disponíveis:

| Método | Endpoint              | Descrição                    |
| ------ | --------------------- |------------------------------|
| POST   | /clientes             | Criar cliente                |
| GET    | /clientes             | Listar clientes              |
| GET    | /clientes/buscarcpf   | Busca Clientes por CPF       |
| GET    | /clientes/buscarnome  | Busca Clientes por Nome      |
| PUT    | /clientes             | Atualizar cliente            |
| DELETE | /clientes/:id         | Remover cliente              |
| POST   | /usuarios/cadastrar   | Criar usuario                |
| GET    | /usuarios/all         | Listar usuarios              |
| GET    | /usuarios             | Listar usuarios por ID       |
| PUT    | /usuarios/atualizar   | Atualizar usuario            |
| POST   | /apolices             | Criar apólice                |
| GET    | /apolices             | Listar apólices              |
| PUT    | /apolices             | Atualizar apólices           |
| DELETE | /apolices/:id         | Remover apólice              |
| GET    | /apolices/buscar      | Busca por Faixa de Valor     |
| GET    | /apolices/dispositivos| Busca por Tipo de Dispositivo|


---

# 📬 Exemplo de Requisição

### Criar usuário

**POST**

```
localhost:4000/usuarios/cadastrar
```

Body:

```json
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "senha": "12345678",
  "dataNascimento": "2000-01-01"
}
```

---

# 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de:

* Praticar **NestJS**
* Utilizar **TypeORM com MySQL**
* Criar **APIs REST escaláveis**
* Implementar **CRUD completo**
* Trabalhar com **arquitetura modular**

---

# 👨‍💻 Autores

**Josue Viegas**, **Lívia Campos**, **Evelyn Lamarca**, **Matheus Moura**, **Erick Santana**, **Renan Ferreira**


---

# 📄 Licença

Este projeto é destinado a **fins educacionais e portfólio**.
