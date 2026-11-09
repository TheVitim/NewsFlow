# language: pt

Funcionalidade: Agendar envio de edição

  Como gestora de comunicação
  Quero agendar o envio de uma edição aprovada
  Para organizar a comunicação com os assinantes

  @smoke @feliz
  Cenário: Agendar edição aprovada com antecedência suficiente
    Dado que existe uma edição aprovada
    Quando agendo o envio para daqui a 30 minutos
    Então devo ver a mensagem "Envio agendado"
    E o status da edição deve ser "agendada"

  @limite
  Esquema do Cenário: Verificar antecedência mínima para agendamento
    Dado que existe uma edição aprovada
    Quando agendo o envio para daqui a <minutos> minutos
    Então devo ver a mensagem "<mensagem>"

    Exemplos:
      | minutos | mensagem                                      |
      | 60      | Envio agendado                                |
      | 16      | Envio agendado                                |
      | 15      | Envio agendado                                |
      | 14      | O envio precisa de ao menos 15 minutos        |
      | 0       | O envio precisa de ao menos 15 minutos        |

  @excecao
  Cenário: Impedir agendamento de edição não aprovada
    Dado que existe uma edição criada por "Ana"
    Quando tento agendar o envio para daqui a 30 minutos
    Então devo ver a mensagem "A edição precisa estar aprovada"
    E o status da edição deve ser "rascunho"

  @feliz
  Cenário: Reagendar envio dentro do limite permitido
    Dado que o envio já foi reagendado 1 vez
    Quando reagendo o envio para daqui a 60 minutos
    Então devo ver a mensagem "Envio reagendado com sucesso"

  @excecao
  Cenário: Impedir terceiro reagendamento
    Dado que o envio já foi reagendado 2 vezes
    Quando reagendo o envio para daqui a 60 minutos
    Então devo ver a mensagem "Limite de reagendamentos atingido"

  @feliz
  Cenário: Cancelar envio com cinco minutos de antecedência
    Dado que existe um envio agendado
    Quando cancelo o envio com 5 minutos de antecedência
    Então devo ver a mensagem "Envio cancelado com sucesso"
    E o status da edição deve ser "cancelada"

  @excecao
  Cenário: Impedir cancelamento com menos de cinco minutos
    Dado que existe um envio agendado
    Quando cancelo o envio com 4 minutos de antecedência
    Então devo ver a mensagem "O cancelamento deve ocorrer até 5 minutos antes do envio"
    E o status da edição deve ser "agendada"