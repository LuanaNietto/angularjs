export default class ListController {
    constructor($state, osService) {
      this.records = [];
      this._$state = $state;
      this._osService = osService;
      this.findAll();
      this.cols = [
        {
          label: "Data Entrada",
          value: "dataEntrada",
          type: "date"
        },
        {
          label: "Data Saída",
          value: "dataSaida",
          type: "date"
        },
        {
          label: "Cliente",
          value: "cliente",
          type: "text"
        },
        {
          label: "Valor Total",
          value: "valorTotal",
          type: "number"
        }
      ];
    }
  
    buscar(pesquisa) {
      this.records = [];
      this.findByPesquisa(pesquisa);
    }
  
    findAll() {
      return this._osService.findAll().then(response => {
        this.records = response;
        this.records.forEach(item => {
          item.cliente = item.cliente.nome;
        });
        return this.records;
      });
    }
  
    findByPesquisa(pesquisa) {
      return this._osService.findByPesquisa(pesquisa).then(response => {
        this.records = response;
        this.records.forEach(item => {
          item.cliente = item.cliente.nome;
        });
        return this.records;
      });
    }
  
    async excluir(id) {
      await this._osService.remove(id);
      this._$state.reload();
    }
  }
  
  ListController.$inject = ["$state", "osService"];