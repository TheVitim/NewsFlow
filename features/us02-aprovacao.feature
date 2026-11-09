# language: pt

Funcionalidade: Aprovar ou reprovar uma edição

  Como revisor
  Quero aprovar ou reprovar uma edição
  Para garantir que somente conteúdos revisados sejam enviados

  @smoke @feliz
  Cenário: Aprovar edição escrita por outra pessoa
    Dado que existe uma edição "Informativo semanal" criada por "Ana"
    E que estou autenticado como "Marcos"
    Quando aprovo a edição
    Então devo ver a mensagem "Edição aprovada com sucesso"
    E o status da edição deve ser "aprovada"

  @excecao
  Cenário: Impedir que o autor aprove a própria edição
    Dado que existe uma edição "Informativo semanal" criada por "Ana"
    E que estou autenticado como "Ana"
    Quando aprovo a edição
    Então devo ver a mensagem "O autor não pode aprovar a própria edição"
    E o status da edição deve ser "rascunho"

  @feliz
  Cenário: Reprovar edição com comentário
    Dado que existe uma edição "Informativo semanal" criada por "Ana"
    E que estou autenticado como "Marcos"
    Quando reprovo a edição com o comentário "O texto precisa de correções"
    Então devo ver a mensagem "Edição reprovada com sucesso"
    E o status da edição deve ser "rascunho"

  @excecao
  Cenário: Impedir reprovação sem comentário
    Dado que existe uma edição "Informativo semanal" criada por "Ana"
    E que estou autenticado como "Marcos"
    Quando tento reprovar a edição sem comentário
    Então devo ver a mensagem "O comentário de reprovação é obrigatório"
    E o status da edição deve ser "rascunho"