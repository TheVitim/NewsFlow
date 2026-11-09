class NewsFlowService {

    constructor() {
        // Relógio controlado para facilitar os testes
        this.relogio = new Date('2026-11-09T12:00:00-03:00');

        this.edicoes = [];
    }

    // =========================
    // US01 - RASCUNHO
    // =========================

    criarEdicao(titulo, texto, autor) {

        const edicao = {
            titulo: titulo,
            texto: texto,
            autor: autor,
            status: 'rascunho',
            versoes: [],
            ultimaGravacao: new Date(this.relogio)
        };

        this.edicoes.push(edicao);

        return edicao;
    }

    editarEdicao(edicao, novoTexto) {
        edicao.texto = novoTexto;
    }

    criarVersao(edicao, data) {

        const numero = edicao.versoes.length > 0
            ? edicao.versoes[edicao.versoes.length - 1].numero + 1
            : 1;

        const versao = {
            numero: numero,
            texto: edicao.texto,
            data: new Date(data)
        };

        edicao.versoes.push(versao);

        // Mantém somente as últimas 20 versões
        if (edicao.versoes.length > 20) {
            edicao.versoes.shift();
        }
    }

    avancarTempo(segundos) {

        const milissegundos = segundos * 1000;

        this.relogio = new Date(
            this.relogio.getTime() + milissegundos
        );

        this.edicoes.forEach(edicao => {

            while (
                this.relogio.getTime() -
                edicao.ultimaGravacao.getTime() >= 30000
            ) {

                edicao.ultimaGravacao = new Date(
                    edicao.ultimaGravacao.getTime() + 30000
                );

                this.criarVersao(
                    edicao,
                    edicao.ultimaGravacao
                );
            }

        });
    }

    restaurarVersao(edicao, numero) {

        const versao = edicao.versoes.find(
            v => v.numero === numero
        );

        if (!versao) {
            return {
                mensagem: 'Versão não encontrada'
            };
        }

        edicao.texto = versao.texto;

        return {
            mensagem: 'Versão restaurada com sucesso'
        };
    }

    // =========================
    // US02 - APROVACAO
    // =========================

    aprovarEdicao(edicao, revisor) {

        if (edicao.autor === revisor) {
            return {
                mensagem: 'O autor não pode aprovar a própria edição'
            };
        }

        edicao.status = 'aprovada';

        return {
            mensagem: 'Edição aprovada com sucesso'
        };
    }

    reprovarEdicao(edicao, revisor, comentario) {

        if (edicao.autor === revisor) {
            return {
                mensagem: 'O autor não pode reprovar a própria edição'
            };
        }

        if (!comentario || comentario.trim() === '') {
            return {
                mensagem: 'O comentário de reprovação é obrigatório'
            };
        }

        edicao.status = 'rascunho';
        edicao.comentario = comentario;

        return {
            mensagem: 'Edição reprovada com sucesso'
        };
    }

    // =========================
    // US03 - AGENDAMENTO
    // =========================

    agendarEnvio(edicao, minutos) {

        if (edicao.status !== 'aprovada') {
            return {
                mensagem: 'A edição precisa estar aprovada'
            };
        }

        if (minutos < 15) {
            return {
                mensagem: 'O envio precisa de ao menos 15 minutos'
            };
        }

        edicao.status = 'agendada';

        edicao.dataEnvio = new Date(
            this.relogio.getTime() + minutos * 60000
        );

        edicao.reagendamentos = 0;

        return {
            mensagem: 'Envio agendado'
        };
    }

    reagendarEnvio(edicao, minutos) {

        if (edicao.status !== 'agendada') {
            return {
                mensagem: 'Não existe envio agendado'
            };
        }

        if (edicao.reagendamentos >= 2) {
            return {
                mensagem: 'Limite de reagendamentos atingido'
            };
        }

        if (minutos < 15) {
            return {
                mensagem: 'O envio precisa de ao menos 15 minutos'
            };
        }

        edicao.dataEnvio = new Date(
            this.relogio.getTime() + minutos * 60000
        );

        edicao.reagendamentos++;

        return {
            mensagem: 'Envio reagendado com sucesso'
        };
    }

    cancelarEnvio(edicao, minutosRestantes) {

        if (edicao.status !== 'agendada') {
            return {
                mensagem: 'Não existe envio agendado'
            };
        }

        if (minutosRestantes < 5) {
            return {
                mensagem: 'O cancelamento deve ocorrer até 5 minutos antes do envio'
            };
        }

        edicao.status = 'cancelada';

        return {
            mensagem: 'Envio cancelado com sucesso'
        };
    }

    // =========================
    // US04 - SEGMENTACAO
    // =========================

    selecionarSegmentos(segmentos) {

        if (segmentos.length > 5) {
            return {
                mensagem: 'É permitido selecionar no máximo 5 segmentos',
                assinantes: []
            };
        }

        for (const segmento of segmentos) {

            if (segmento.assinantes.length === 0) {
                return {
                    mensagem: 'O segmento ' + segmento.nome + ' não possui assinantes',
                    assinantes: []
                };
            }
        }

        // Set impede que o mesmo assinante apareça duas vezes
        const assinantesUnicos = new Map();

        segmentos.forEach(segmento => {

            segmento.assinantes.forEach(email => {

                assinantesUnicos.set(email, email);

            });

        });

        return {
            mensagem: 'Segmentos selecionados com sucesso',
            assinantes: Array.from(assinantesUnicos.values())
        };
    }

}

module.exports = NewsFlowService;