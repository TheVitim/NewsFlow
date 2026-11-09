# language: pt

Funcionalidade: Selecionar segmentos de assinantes

  Como gestora de comunicação
  Quero selecionar os segmentos que receberão uma edição
  Para direcionar as newsletters aos públicos interessados

  @smoke @feliz
  Cenário: Selecionar segmentos válidos
    Dado que existem 3 segmentos com assinantes
    Quando seleciono todos os segmentos disponíveis
    Então devo ver a mensagem "Segmentos selecionados com sucesso"

  @limite
  Esquema do Cenário: Verificar limite de cinco segmentos
    Dado que existem <quantidade> segmentos com assinantes
    Quando seleciono todos os segmentos disponíveis
    Então devo ver a mensagem "<mensagem>"

    Exemplos:
      | quantidade | mensagem                                             |
      | 4          | Segmentos selecionados com sucesso                  |
      | 5          | Segmentos selecionados com sucesso                  |
      | 6          | É permitido selecionar no máximo 5 segmentos        |

  @excecao
  Cenário: Impedir seleção de segmento sem assinantes
    Dado que existe o segmento "Clientes Premium" sem assinantes
    Quando seleciono todos os segmentos disponíveis
    Então devo ver a mensagem "O segmento Clientes Premium não possui assinantes"

  @feliz
  Cenário: Evitar envio duplicado para assinante de dois segmentos
    Dado que existem dois segmentos com um assinante em comum
    Quando seleciono todos os segmentos disponíveis
    Então devo ver a mensagem "Segmentos selecionados com sucesso"
    E a quantidade de assinantes únicos deve ser 2