const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('node:assert/strict');

Given('que existem {int} segmentos com assinantes',
    function (quantidade) {

        this.segmentos = [];

        for (let i = 1; i <= quantidade; i++) {

            this.segmentos.push({
                nome: 'Segmento ' + i,
                assinantes: [
                    'assinante' + i + '@email.com'
                ]
            });

        }

    }
);

Given('que existe o segmento {string} sem assinantes',
    function (nome) {

        this.segmentos = [
            {
                nome: nome,
                assinantes: []
            }
        ];

    }
);

Given('que existem dois segmentos com um assinante em comum',
    function () {

        this.segmentos = [
            {
                nome: 'Clientes Premium',
                assinantes: [
                    'ana@email.com'
                ]
            },
            {
                nome: 'Clientes de Tecnologia',
                assinantes: [
                    'ana@email.com',
                    'marcos@email.com'
                ]
            }
        ];

    }
);

When('seleciono todos os segmentos disponíveis',
    function () {

        this.resultado = this.servico.selecionarSegmentos(
            this.segmentos
        );

    }
);

Then('a quantidade de assinantes únicos deve ser {int}',
    function (quantidade) {

        assert.equal(
            this.resultado.assinantes.length,
            quantidade
        );

    }
);