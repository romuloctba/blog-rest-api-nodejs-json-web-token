# blog-rest-api-nodejs-json-web-token
Exemplo para o blog http://rcdevlabs.github.io/

No post: [Como criar uma API RESTfull em NodeJS e autenticar usando JSON Web Token JWT?](http://rcdevlabs.github.io/2015/02/12/como-criar-uma-api-restfull-em-nodejs-e-autenticar-usando-json-web-token-jwt/)

Para testar:
1. Clone ou baixe. Edite no `server.js`, adicionando a URL do seu mongodb na `var db`

2. entre com o terminal e rode `node server`

3. Com POSTMAN ou outra ferramenta de http requests execute um POST com username e password para  http://localhost:8080/api/usuarios

4. Acesse com GET http://localhost:8080/api/usuarios e veja a restrição

5. Faça o Login com um post para  http://localhost:8080/api/login enviando username e password

6. Copie o token que vc recebeu e adicione como header chamando de x-access-token

7. Faça um GET para http://localhost:8080/api/usuarios e veja como funciona! :)
