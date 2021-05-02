class NegociacaoController {
    constructor() {
        this._listaNegociacoes = new ListaNegociacoes();
        this._viewNegociacoes = new NegociacoesView('#negociacoesView');
        this._viewNegociacoes.update(this._listaNegociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        const negociacao = new Negociacao(new Date(this._inputData.value.replace('-', ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        console.log(this);
        this._listaNegociacoes.adiciona(negociacao);
        this._viewNegociacoes.update(this._listaNegociacoes);
    }
}
