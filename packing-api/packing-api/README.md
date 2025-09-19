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