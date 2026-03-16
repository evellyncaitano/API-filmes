# API SenaiFlix - Node.Js + Express
API REST simples para gerenciar séries e filmes
 
## Pré-Requisitos
- Node.js instalado
 
## Como rodar
```bash
npm i 
```
 
### Iniciar o servidor
```bash
node index.js
```
 
### Acessar
Abra o navegador em: `http://localhost:3000`
 
## Endpoints
 
### Filmes
 
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/filmes` |Lista todos os filmes |
| GET | `/filmes/:id` | Buscar um filme específico |
| POST | `/filmes/` | Cria um novo filme |
| GET | 	`/filmes?genre=` | Filtra um filme pelo gênero |
 
 
### Séries
 
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/series` |Lista todos as séries |
| GET | `/series/:id` | Buscar uma série específica |
| POST | `/series/` | Cria uma nova série |
| GET | 	`/series?genre=` | Filtra uma série pelo gênero |
 
## Tanto filmes quanto séries possuem as seguintes propriedades:
- id
- title
- description
- image
- genre
- releaseYear
 
## Tecnologias
- Node.js
- Express
 
  ## Notas
  - Os dados são armazenados em memória (reiniciar o servidor apaga tudo)

 
 
 
