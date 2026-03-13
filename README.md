# 📱 Seguro de Produtos Eletrônicos API

![Node](https://img.shields.io/badge/Node.js-20-green)
![NestJS](https://img.shields.io/badge/NestJS-Framework-red)
![TypeScript](https://img.shields.io/badge/TypeScript-Language-blue)
![MySQL](https://img.shields.io/badge/MySQL-Database-orange)
![TypeORM](https://img.shields.io/badge/TypeORM-ORM-lightgrey)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

---

# 📌 Sobre o Projeto

A **Seguro de Produtos Eletrônicos API** é uma aplicação backend desenvolvida para gerenciar seguros de dispositivos eletrônicos como:

* 📱 Celulares
* 💻 Notebooks
* 📟 Tablets
* 🎧 Outros dispositivos eletrônicos

A API permite o gerenciamento completo de:

* 👤 **Usuários do sistema**
* 👥 **Clientes**
* 📄 **Apólices de seguro**

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
│   ├── dto
│   ├── entities
│   ├── apolice.controller.ts
│   ├── apolice.service.ts
│   └── apolice.module.ts
│
├── cliente
│   ├── dto
│   ├── entities
│   ├── cliente.controller.ts
│   ├── cliente.service.ts
│   └── cliente.module.ts
│
├── usuario
│   ├── dto
│   ├── entities
│   ├── usuario.controller.ts
│   ├── usuario.service.ts
│   └── usuario.module.ts
│
├── auth
│
├── app.module.ts
└── main.ts
```

### Estrutura dos Módulos

Cada módulo segue o padrão:

* **Controller** → gerencia as rotas da API
* **Service** → regras de negócio
* **Entity** → estrutura da tabela no banco
* **DTO** → validação e transferência de dados

---

# 🗄️ Estrutura do Banco de Dados

## 👤 Usuário

Responsável pelo acesso ao sistema.

Campos principais:

* id
* nome
* email
* senha
* data_nascimento
* foto

---

## 👥 Cliente

Pessoa que contrata o seguro.

Campos principais:

* id
* nome
* cpf
* telefone
* email
* endereco

---

## 📄 Apólice

Registro do seguro contratado.

Campos principais:

* id
* numero_apolice
* produto
* marca
* modelo
* valor_produto
* valor_seguro
* data_inicio
* data_fim
* cliente

---

# ⚙️ Instalação do Projeto

## 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seguro-eletronicos-api.git
```

---

## 2️⃣ Acessar a pasta

```bash
cd seguro-eletronicos-api
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
http://localhost:3000
```

---

# 🧪 Testando a API

As rotas podem ser testadas utilizando:

* **Insomnia**
* **Postman**

Principais operações disponíveis:

| Método | Endpoint      | Descrição         |
| ------ | ------------- | ----------------- |
| POST   | /usuarios     | Criar usuário     |
| GET    | /usuarios     | Listar usuários   |
| PUT    | /usuarios/:id | Atualizar usuário |
| DELETE | /usuarios/:id | Remover usuário   |
| POST   | /clientes     | Criar cliente     |
| POST   | /apolices     | Criar apólice     |

---

# 📬 Exemplo de Requisição

### Criar usuário

**POST**

```
/usuarios
```

Body:

```json
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "senha": "123456",
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

# 👨‍💻 Autor

**Josue Barreto Viegas**

Desenvolvedor focado em **Backend com Node.js, NestJS e TypeScript**.

---

# 📄 Licença

Este projeto é destinado a **fins educacionais e portfólio**.
