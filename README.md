# CRUD API Rest utilizando Node.js, Express, TypeORM e Postgres

![Node.js](https://img.shields.io/badge/Node.js-v14.17.0-green)
![Express](https://img.shields.io/badge/Express-v4.17.1-blue)
![TypeORM](https://img.shields.io/badge/TypeORM-v0.2.39-orange)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v13.3-blue)

Esta API implementa operações CRUD (Create, Read, Update, Delete) para as entidades ROOM, VIDEO e SUBJECT, utilizando Node.js, Express, TypeORM e PostgreSQL. Também há uma relação ManyToMany entre Room e Subject, bem como uma relação OneToMany entre Video e Room.

## Requisitos

- Node.js v14.17.0 ou superior
- PostgreSQL
- Interface de Administração de Banco de Dados (exemplo: Beekeeper)
- Postman (ou outra ferramenta similar) para testar os endpoints

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/filipedower/node-typeorm-crud.git
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis de ambiente:

```
PORT=3000
DB_HOST=seu-host
DB_PORT=sua-porta
DB_USERNAME=seu-usuario
DB_PASSWORD=sua-senha
DB_DATABASE=seu-banco-de-dados
```

## Execução

1. Inicie o servidor:

```bash
npm start
```

## Endpoints

### ROOM

- `GET /rooms`: Lista todas as salas
- `GET /rooms/:id`: Retorna uma sala específica
- `POST /rooms`: Cria uma nova sala
- `PUT /rooms/:id`: Atualiza uma sala existente
- `DELETE /rooms/:id`: Remove uma sala existente

### VIDEO

- `GET /videos`: Lista todos os vídeos
- `GET /videos/:id`: Retorna um vídeo específico
- `POST /videos`: Cria um novo vídeo
- `PUT /videos/:id`: Atualiza um vídeo existente
- `DELETE /videos/:id`: Remove um vídeo existente

### SUBJECT

- `GET /subjects`: Lista todos os assuntos
- `GET /subjects/:id`: Retorna um assunto específico
- `POST /subjects`: Cria um novo assunto
- `PUT /subjects/:id`: Atualiza um assunto existente
- `DELETE /subjects/:id`: Remove um assunto existente

## Contribuição

Contribuições são bem-vindas! Para sugestões, abra uma issue primeiro para discutir o que você gostaria de mudar.

## Licença

Este projeto está licenciado sob a [MIT License](https://choosealicense.com/licenses/mit/).

