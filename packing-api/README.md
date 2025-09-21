# Packing API

API para embalar pedidos em caixas de papelão, desenvolvida com NestJS.

## Funcionalidades

- Recebe pedidos com produtos e dimensões
- Calcula a melhor forma de empacotar em caixas disponíveis
- Retorna quais produtos vão em cada caixa
- Autenticação básica (Basic Auth)
- Container Docker pronto para rodar

## Caixas disponíveis

| Caixa   | Altura | Largura | Comprimento |
|---------|--------|---------|-------------|
| Caixa 1 | 30 cm  | 40 cm   | 80 cm       |
| Caixa 2 | 50 cm  | 50 cm   | 40 cm       |
| Caixa 3 | 50 cm  | 80 cm   | 60 cm       |

## Como rodar

### Localmente

```bash
npm install
npm run start
``` DOCKER
docker build -t packing-api .
docker run -p 3000:3000 packing-api

🔐 Autenticação
Esta API utiliza autenticação básica (Basic Auth).
Credenciais para teste:
• 	Usuário: l2code
• 	Senha: 1234
Para testar no Insomnia ou Postman, selecione "Basic Auth" e insira as credenciais acima.
📄 Documentação Swagger
A documentação interativa da API está disponível em:
http://localhost:3000/api

Exemplo de request Body (json)
{
  "orders": [
    {
      "orderId": "pedido1",
      "products": [
        { "name": "jogo1", "height": 10, "width": 20, "length": 30 },
        { "name": "jogo2", "height": 25, "width": 30, "length": 35 }
      ]
    },
    {
      "orderId": "pedido2",
      "products": [
        { "name": "jogo3", "height": 40, "width": 50, "length": 60 }
      ]
    }
  ]
}

