# Vagas e Candidaturas API

## Rotas de Usuário

### Registro de Usuário POST /users

Padrão de corpo

```json
{
	"name": "John Doe",
	"email": "johnDoe@mail.com",
	"password": "123@Freedom"
}
```

Padrão de resposta (STATUS 201)

```json
{
	"id": 1,
	"name": "John Doe",
	"email": "johnDoe@mail.com"
}
```

### Login POST /users/login

Padrão de corpo

```json
{
	"email": "johnDoe@mail.com",
	"password": "123@Freedom"
}
```

Padrão de resposta (STATUS 200)

```json
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzEzOTc0ODgzLCJleHAiOjE3MTQwNjEyODN9.zF4MDZ9bmpvcBCkOgpjLffgfMtn-jBDgVF88AXTvbB8",
	"user": {
		"id": 1,
		"name": "John Doe",
		"email": "johnDoe@mail.com"
	}
}
```

Possíveis erros

401 UNAUTHORIZED

```json
{
	"message": "Email and password doesn't match"
}
```

404 NOT FOUND

```json
{
	"message": "User not registered"
}
```

### Retornar Usuário GET /users

É necessário autorização para acessar esta rota, forneça o Token do cabeçalho da requisição 

```json
{
	"headers":{
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzE0MDQwNjk0LCJleHAiOjE3MTQxMjcwOTR9.otP2tfxgFU1WLkPY9GNSvsa0P5P74EvuyU55U6RMzos"
   } 
}
```

Padrão de resposta (STATUS 200)

```json
{
	"id": 1,
	"name": "John Doe",
	"email": "johnDoe@mail.com"
}
```

### POST /opportunities (Está rota precisa de autorização)

Padrão de corpo

```json
{
   "title": "Lorem ipsum",
   "description": "Lorem ipsum"
}
```

Padrão de resposta (STATUS 201)

```json
{
   "id": 1,
   "title": "Lorem ipsum",
   "description": "Lorem ipsum",
   "userId": 1
}
```

### GET /opportunities

Padrão de resposta (STATUS 200)

```json
[
   {
      "id": 1,
      "title": "Lorem ipsum",
      "description": "Lorem ipsum",
      "userId": 1
   }
]
```

### GET /opportunities/user (Está rota precisa de autorização)

Padrão de resposta (STATUS 200)

```json
[
   {
      "id": 1,
      "title": "Lorem ipsum",
      "description": "Lorem ipsum",
      "userId": 1
   }
]
```

### GET /opportunities/:id (Está rota precisa de autorização)

Padrão de resposta (STATUS 200)

```json
{
   "id": 1,
   "title": "Lorem ipsum",
   "description": "Lorem ipsum",
   "userId": 1
}
```

Possíveis erros

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
}
```

403 FORBIDDEN

```json
{
	"message": "User is not the owner of this opportunity"
}
```

### PATCH /opportunities/:id (Está rota precisa de autorização)

Padrão de corpo

```json
{
   "title?": "Lorem ipsum",
   "description?": "Lorem ipsum"
}
```

Padrão de resposta (STATUS 200)

```json
{
   "id": 1,
   "title": "Lorem ipsum",
   "description": "Lorem ipsum",
   "userId": 1
}
```

403 FORBIDDEN

```json
{
	"message": "User is not the owner of this opportunity"
}
```

### DELETE /opportunities/:id (Está rota precisa de autorização)

Nenhum corpo de resposta (STATUS 204)

Possíveis erros

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
}
```

403 FORBIDDEN

```json
{
	"message": "User is not the owner of this opportunity"
}
```

### POST /opportunities/:id/applications

Padrão de corpo

```json
{
   "name": "John Doe",
   "email": "johndoe@email.com",
   "linkedin": "https://example.com"
}
```

Padrão de resposta (STATUS 201)

```json
{
   "id": 1,
   "name": "John Doe",
   "email": "johndoe@email.com",
   "linkedin": "https://example.com",
   "opportunityId": 1
}
```

Possíveis erros

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
}
```

### GET /opportunities/:id/applications (Está rota precisa de autorização)

Padrão de resposta (STATUS 200)

```json
[
   {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@email.com",
      "linkedin": "https://example.com",
      "opportunityId": 1
   }
]
```

Possíveis erros

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
}
```
403 FORBIDDEN

```json
{
	"message": "User is not the owner of this opportunity"
}
```