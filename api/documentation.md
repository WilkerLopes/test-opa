# Passowrd Meter

API desenvolvida para medir a força de uma senha, é levado em conta parametros de senha fortes recomendados, se está no blacklist de senhas ou se o tamanho dela está menor que o definido.

### Request

A requisição da força de senha é feita utilizando o metodo POST, sendo passado a senha em formato string no body da requisiçãon url `https://api.prd.parceirodaconstrucao.com.br/users/profile/password_validity_checks`, o parametro ´password´. O exemplo abaixo mostra a solicitação utilizando Javascript - Fetch:

```js
const options = {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=UTF-8" },
  body: '{"password":"12345678"}',
};

fetch("https://api.prd.parceirodaconstrucao.com.br/users/profile/password_validity_checks", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
```

### Response

A resposta da requisição aima irá retorna um objeto contendo, a força da senha, sendo de 0 a 4, quais valores passaram na validação, sendo um array com os números respectivo a cada validação, e se a senha é valida pra ser utilizada. A requicição acima irá retorna o seguinte objeto:

```json
{
  "pointsMeter": 0,
  "pointsResult": [1, 3],
  "valid": false
}
```

- `pointsMeter` - Retorna um número de 0 a 4, onde 0 é muito fraca e 4 muito forte.
- `pointsResult` - Retorna um array de números, pondendo conter valores de 1 a 4, sendo eles correspondetes a cada validação passada:

```txt
[
  1 : Ter pelo menos 8 caracteres
  2 : Letra maiúscula e minúscula
  3 : Pelo menos um número
  4 : Um carectere especial (Ex: ! @ %)
]
```

- `valid` - Informa se a senha é valida, ou seja, se ela tem o valor mínimo de força definido pelo api.
