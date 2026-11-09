# language: pt

Funcionalidade: Salvar rascunho automaticamente

  Como redatora
  Quero que meu texto seja salvo automaticamente
  Para não perder meu trabalho caso ocorra uma interrupção

  @smoke @feliz
  Cenário: Salvar automaticamente após 30 segundos
    Dado que existe uma edição "Informativo semanal" criada por "Ana"
    Quando avanço 30 segundos sem alterar o texto
    Então a edição deve possuir 1 versão salva

  @limite
  Esquema do Cenário: Intervalo de salvamento automático
    Dado que existe uma edição "Informativo semanal" criada por "Ana"
    Quando avanço <segundos> segundos sem alterar o texto
    Então a edição deve possuir <versoes> versões salvas

    Exemplos:
      | segundos | versoes |
      | 0        | 0       |
      | 29       | 0       |
      | 30       | 1       |
      | 60       | 2       |

  @feliz
  Cenário: Restaurar uma versão anterior sem perder as seguintes
    Dado que existe uma edição "Informativo semanal" criada por "Ana"
    E que a edição possui 3 versões salvas
    Quando restauro a versão 1
    Então o conteúdo da edição deve ser "Conteúdo da versão 1"
    E a edição deve continuar possuindo 3 versões salvas

  @excecao
  Cenário: Manter somente as últimas 20 versões
    Dado que existe uma edição "Informativo semanal" criada por "Ana"
    E que a edição possui 22 versões salvas
    Então a edição deve possuir 20 versões salvas
    E a primeira versão disponível deve ser a versão 3