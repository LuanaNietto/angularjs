export default class ListController {
    constructor($state, clienteService){
        this.records = [];
        this._$state = $state;
        this._clienteService = clienteService;
        this.findAll();
        this.cols = [
            {
                label : "Documento",
                value :"documento",
                type : "text"
            },
            {
                label : "Nome",
                value :"nome",
                type : "text"
            },
            {
                label : "Telefone",
                value :"telefone",
                type : "text"
            },
            {
                label : "E-mail",
                value :"email",
                type : "text"
            }
        ];
    }

    buscar(pesquisa){
        this.records = [];
        this.findByPesquisa(pesquisa);
    }

    findByPesquisa(pesquisa){
        return this._clienteService.findByPesquisa(pesquisa)
        .then(response => {
            this.records = response;
            return this.records;
        });
    }

    findAll(){
        return this._clienteService.findAll()
        .then(response => {
            this.records = response;
            return this.records;
        });
    }

    async excluir(id) {
        await this._clienteService.remove(id);
        this._$state.reload();
    }
    
}
ListController.$inject= ["$state", "clienteService"];