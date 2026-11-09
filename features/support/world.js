const { setWorldConstructor } = require('@cucumber/cucumber');

const NewsFlowService = require('./dominio');

class MundoDoNewsFlow {

    constructor() {

        this.servico = new NewsFlowService();

        this.edicao = null;

        this.usuarioAtual = null;

        this.resultado = null;

        this.segmentos = [];

    }

}

setWorldConstructor(MundoDoNewsFlow);