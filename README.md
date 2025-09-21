# Teste Técnico – Lucas

Este repositório contém a solução para duas tarefas técnicas distintas, organizadas em pastas separadas:

---

## 📦 Tarefa 1 – API de Embalagem de Pedidos (`packing-api/`)

Seu Manoel, dono de uma loja de jogos online, precisa automatizar o processo de embalagem dos pedidos.

### ✅ Descrição do Problema:

A API recebe uma lista de pedidos, cada um com produtos e suas dimensões (altura, largura, comprimento).  
Ela deve calcular a melhor forma de empacotar os produtos nas caixas disponíveis, tentando minimizar o número de caixas utilizadas.

### 📦 Caixas Disponíveis:

- Caixa 1: 30 x 40 x 80 cm  
- Caixa 2: 50 x 50 x 40 cm  
- Caixa 3: 50 x 80 x 60 cm

### 📂 Funcionalidades:

- Microserviço em **Node.js com NestJS**
- Endpoint que recebe pedidos em JSON e retorna a distribuição ideal dos produtos nas caixas
- Documentação via **Swagger**
- Pronto para rodar com **Docker**

### 📂 Requisitos opcionais implementados:

- Autenticação básica na API
- Testes unitários para os principais módulos

### 📂 Exemplos:

- `entrada.json`: Exemplo de entrada com pedidos e produtos
- `saida.json`: Exemplo de saída com caixas utilizadas e produtos alocados

---
🔐 Autenticação
Esta API utiliza autenticação básica (Basic Auth).
Credenciais para teste:
• 	Usuário: l2code
• 	Senha: 1234
Para testar no Insomnia ou Postman, selecione "Basic Auth" e insira as credenciais acima.
📄 Documentação Swagger
A documentação interativa da API está disponível em:
http://localhost:3000/api
## 🧠 Tarefa 2 – Relatório Acadêmico (`relatorio_girafales/`)

O Professor Girafales, novo diretor da escola, solicitou:

### ✅ Objetivos:

1. **Calcular a carga horária de cada professor** com base nas aulas agendadas.
2. **Listar os horários livres e ocupados de cada sala**, considerando o funcionamento padrão da escola.

### 📂 Conteúdo:

- `carga_horaria.sql`: Consulta SQL que retorna o total de horas que cada professor tem comprometido em aulas.
- `salas_livres_ocupadas.py`: Script Python que identifica os horários livres por sala, considerando o intervalo das 08:00 às 18:00 com blocos de 1 hora.
- `README.md`: Explicações detalhadas sobre o funcionamento de cada arquivo.

> A função `find_free_slots()` recebe uma lista de horários ocupados (como tuplas de `datetime.time`) e retorna os intervalos de uma hora que estão livres.  
> Exemplo de uso:
> ```python
> occupied_slots = [(time(9), time(11)), (time(14), time(15))]
> print(find_free_slots(occupied_slots))
> ```
> Resultado esperado: horários livres entre 08:00–09:00, 11:00–14:00, 15:00–18:00.

---

## 🚀 Como rodar o projeto

Cada tarefa está isolada em sua respectiva pasta.  
Para rodar a API de embalagem com Docker:

```bash
cd packing-api
docker-compose up --build

