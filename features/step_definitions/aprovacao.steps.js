const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('node:assert/strict');

Given('que estou autenticado como {string}',
    function (usuario) {

        this.usuarioAtual = usuario;

    }
);

When('aprovo a edição',
    function () {

        this.resultado = this.servico.aprovarEdicao(
            this.edicao,
            this.usuarioAtual
        );

    }
);

When('reprovo a edição com o comentário {string}',
    function (comentario) {

        this.resultado = this.servico.reprovarEdicao(
            this.edicao,
            this.usuarioAtual,
            comentario
        );

    }
);

When('tento reprovar a edição sem comentário',
    function () {

        this.resultado = this.servico.reprovarEdicao(
            this.edicao,
            this.usuarioAtual,
            ''
        );

    }
);

Then('devo ver a mensagem {string}',
    function (mensagem) {

        assert.equal(
            this.resultado.mensagem,
            mensagem
        );

    }
);

Then('o status da edição deve ser {string}',
    function (status) {

        assert.equal(
            this.edicao.status,
            status
        );

    }
);