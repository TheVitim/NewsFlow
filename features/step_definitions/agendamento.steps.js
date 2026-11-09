const { Given, When } = require('@cucumber/cucumber');

Given('que existe uma edição aprovada',
    function () {

        this.edicao = this.servico.criarEdicao(
            'Informativo semanal',
            'Conteúdo da newsletter',
            'Ana'
        );

        this.servico.aprovarEdicao(
            this.edicao,
            'Marcos'
        );

    }
);

Given('que existe uma edição criada por {string}',
    function (autor) {

        this.edicao = this.servico.criarEdicao(
            'Informativo semanal',
            'Conteúdo da newsletter',
            autor
        );

    }
);

Given('que o envio já foi reagendado {int} vez(es)',
    function (quantidade) {

        this.edicao = this.servico.criarEdicao(
            'Informativo semanal',
            'Conteúdo da newsletter',
            'Ana'
        );

        this.servico.aprovarEdicao(
            this.edicao,
            'Marcos'
        );

        this.servico.agendarEnvio(
            this.edicao,
            60
        );

        for (let i = 0; i < quantidade; i++) {

            this.servico.reagendarEnvio(
                this.edicao,
                60
            );

        }

    }
);

Given('que existe um envio agendado',
    function () {

        this.edicao = this.servico.criarEdicao(
            'Informativo semanal',
            'Conteúdo da newsletter',
            'Ana'
        );

        this.servico.aprovarEdicao(
            this.edicao,
            'Marcos'
        );

        this.servico.agendarEnvio(
            this.edicao,
            60
        );

    }
);

When('agendo o envio para daqui a {int} minutos',
    function (minutos) {

        this.resultado = this.servico.agendarEnvio(
            this.edicao,
            minutos
        );

    }
);

When('tento agendar o envio para daqui a {int} minutos',
    function (minutos) {

        this.resultado = this.servico.agendarEnvio(
            this.edicao,
            minutos
        );

    }
);

When('reagendo o envio para daqui a {int} minutos',
    function (minutos) {

        this.resultado = this.servico.reagendarEnvio(
            this.edicao,
            minutos
        );

    }
);

When('cancelo o envio com {int} minutos de antecedência',
    function (minutos) {

        this.resultado = this.servico.cancelarEnvio(
            this.edicao,
            minutos
        );

    }
);