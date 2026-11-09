const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('node:assert/strict');

Given('que existe uma edição {string} criada por {string}',
    function (titulo, autor) {

        this.edicao = this.servico.criarEdicao(
            titulo,
            'Texto inicial',
            autor
        );

    }
);

Given('que a edição possui {int} versões salvas',
    function (quantidade) {

        for (let i = 1; i <= quantidade; i++) {

            this.servico.editarEdicao(
                this.edicao,
                'Conteúdo da versão ' + i
            );

            this.servico.avancarTempo(30);

        }

    }
);

When('avanço {int} segundos sem alterar o texto',
    function (segundos) {

        this.servico.avancarTempo(segundos);

    }
);

When('restauro a versão {int}',
    function (numero) {

        this.resultado = this.servico.restaurarVersao(
            this.edicao,
            numero
        );

    }
);

Then('a edição deve possuir {int} versões salvas',
    function (quantidade) {

        assert.equal(
            this.edicao.versoes.length,
            quantidade
        );

    }
);

Then('o conteúdo da edição deve ser {string}',
    function (conteudo) {

        assert.equal(
            this.edicao.texto,
            conteudo
        );

    }
);

Then('a primeira versão disponível deve ser a versão {int}',
    function (numero) {

        assert.equal(
            this.edicao.versoes[0].numero,
            numero
        );

    }
);

Then('a edição deve possuir {int} versão salva',
    function (quantidade) {

        assert.equal(
            this.edicao.versoes.length,
            quantidade
        );

    }
);

Then('a edição deve continuar possuindo {int} versões salvas',
    function (quantidade) {

        assert.equal(
            this.edicao.versoes.length,
            quantidade
        );

    }
);