# Histórias de Usuário — NewsFlow

## US01 — Salvar rascunho automaticamente

**Como** redatora  
**Quero** que o conteúdo da minha edição seja salvo automaticamente enquanto escrevo  
**Para** não perder meu trabalho caso ocorra uma interrupção inesperada.

**Critérios de aceitação**
- O sistema salva automaticamente o rascunho a cada 30 segundos.
- Cada salvamento gera uma nova versão numerada da edição.
- O sistema mantém disponíveis as últimas 20 versões.
- A redatora pode restaurar qualquer uma das últimas 20 versões.
- Restaurar uma versão anterior não apaga as versões mais recentes.

**Regras cobertas:** RN01  
**Prioridade:** Alta — perder o conteúdo de uma newsletter representa um prejuízo significativo de tempo e produtividade.

**Cenários:** `features/us01-rascunho.feature`

---

## US02 — Aprovar ou reprovar uma edição

**Como** revisor  
**Quero** aprovar ou reprovar uma edição escrita por outra pessoa  
**Para** garantir que somente conteúdos revisados sejam enviados aos assinantes.

**Critérios de aceitação**
- Somente um revisor diferente do autor pode aprovar uma edição.
- Uma edição aprovada fica liberada para agendamento.
- Uma edição reprovada retorna ao estado de rascunho.
- A reprovação exige um comentário justificando a decisão.

**Regras cobertas:** RN02  
**Prioridade:** Alta — a aprovação evita que conteúdos incorretos ou não revisados sejam enviados aos assinantes.

**Cenários:** `features/us02-aprovacao.feature`

---

## US03 — Agendar envio de edição

**Como** gestora de comunicação  
**Quero** agendar o envio de uma edição aprovada  
**Para** organizar a comunicação com os assinantes e garantir que as newsletters sejam enviadas no horário planejado.

**Critérios de aceitação**
- Somente edições aprovadas podem ser agendadas.
- O agendamento deve ocorrer com pelo menos 15 minutos de antecedência, considerando o fuso horário de São Paulo.
- Uma edição pode ser reagendada no máximo duas vezes.
- O sistema permite cancelar o agendamento até 5 minutos antes do horário previsto.
- O sistema informa quando uma tentativa de agendamento, reagendamento ou cancelamento não respeita as regras.

**Regras cobertas:** RN03  
**Prioridade:** Alta — o agendamento é essencial para organizar os disparos e evitar envios em horários incorretos.

**Cenários:** `features/us03-agendamento.feature`

---

## US04 — Selecionar segmentos de assinantes

**Como** gestora de comunicação  
**Quero** selecionar os segmentos que receberão uma edição  
**Para** direcionar as newsletters aos públicos interessados em seu conteúdo.

**Critérios de aceitação**
- Uma edição pode ser direcionada a, no máximo, cinco segmentos.
- O agendamento deve ser bloqueado quando algum segmento selecionado não possuir assinantes.
- Um assinante presente em mais de um segmento selecionado deve receber apenas um e-mail referente à mesma edição.

**Regras cobertas:** RN04  
**Prioridade:** Alta — a segmentação evita envios desnecessários e garante que cada assinante receba uma única cópia da edição.

**Cenários:** `features/us04-segmentacao.feature`