class NegociacaoController {
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _listaNegociacoes = new ListaNegociacoes();
    private _viewNegociacoes = new NegociacoesView('#negociacoesView');

    constructor() {
        this._viewNegociacoes.update(this._listaNegociacoes);
    }

    adiciona(event: Event) {
        event.preventDefault();

        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        console.log(this._inputData)

        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace('-',',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        this._listaNegociacoes.adiciona(negociacao);
        
        this._viewNegociacoes.update(this._listaNegociacoes);
    }
}