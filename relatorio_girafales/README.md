# Relatório de Aulas e Salas – Professor Girafales

Este pacote contém dois arquivos que atendem às solicitações do RH:

## 1. `carga_horaria.sql`

Consulta SQL que retorna a carga horária total de cada professor com base nas aulas agendadas.  
A duração de cada aula é calculada pela diferença entre `start_time` e `end_time` na tabela `CLASS_SCHEDULE`, convertida para horas.

## 2. `salas_livres_ocupadas.py`

Script Python que identifica os horários livres em cada sala, considerando o horário padrão de funcionamento da escola: das **08:00 às 18:00**, com intervalos de 1 hora.

A função `find_free_slots()` recebe uma lista de horários ocupados (como tuplas de `datetime.time`) e retorna os intervalos de uma hora que estão livres.  
Ela compara cada faixa horária com os horários ocupados e filtra os que não têm sobreposição.

### Exemplo de uso:

```python
occupied_slots = [(time(9), time(11)), (time(14), time(15))]
print(find_free_slots(occupied_slots))

