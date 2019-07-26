export default class FormController {
    constructor($state, $stateParams, clienteService, itemService, osService) {
      this.record = {};
      this.record.valorTotal = 0;
      this.cliente = {};
      this.cliente.nome = null;
      this.item = {};
      this.clientes = [];
      this.itens = [];
      this.itensAdicionados = [];
      this._$state = $state;
      this.id = $stateParams.id;
      this._clienteService = clienteService;
      this._itemService = itemService;
      this._osService = osService;
      if (this.id) {
        this.findById();
      }
      this.findClientes();
      this.findItens();
      this.cols = [
        {
          label: "Descrição",
          value: "descricao",
          type: "text"
        },
        {
          label: "Valor",
          value: "valor",
          type: "number"
        }
      ];
    }
  
    async save() {
      this.record.cliente = {};
      this.record.itens = [];
      this.record.cliente.id = this.cliente.id;
      this.record.cliente.nome = this.cliente.nome;
      this.record.itens = this.itensAdicionados;
      if (this.id) {
        await this._osService.update(this.record);
      } else {
        await this._osService.insert(this.record);
      }
      this._$state.go("app.os.list");
    }
  
    findById() {
      return this._osService.findById(this.id).then(response => {
        this.record = response;
        var dataEntradaYear = parseInt(response.dataEntrada.slice(0, 4));
        var dataEntradaMonth = parseInt(response.dataEntrada.slice(5, 7));
        var dataEntradaDay = parseInt(response.dataEntrada.slice(8, 10));
        this.record.dataEntrada = new Date(
          dataEntradaYear,
          dataEntradaMonth - 1,
          dataEntradaDay
        );
        var dataSaidaYear = parseInt(response.dataSaida.slice(0, 4));
        var dataSaidaMonth = parseInt(response.dataSaida.slice(5, 7));
        var dataSaidaDay = parseInt(response.dataSaida.slice(8, 10));
        this.record.dataSaida = new Date(
          dataSaidaYear,
          dataSaidaMonth - 1,
          dataSaidaDay
        );
        this._clienteService.findById(this.record.cliente.id).then(response => {
          this.cliente = response;
        });
        this.record.itens.forEach(item => {
          this._itemService.findById(item.id).then(response => {
            this.itensAdicionados.push(response);
          });
        });
        return this.record;
      });
    }
  
    findClientes() {
      return this._clienteService.findAll().then(response => {
        this.clientes = response;
        return this.clientes;
      });
    }
  
    findItens() {
      return this._itemService.findAll().then(response => {
        this.itens = response;
        return this.itens;
      });
    }
  
    incluirItem() {
      this.itensAdicionados.push(this.item);
      this.record.valorTotal += this.item.valor;
    }
  
    removerItem(item) {
      this.itensAdicionados.pop(item);
      this.record.valorTotal -= item.valor;
    }
  }
  
  FormController.$inject = [
    "$state",
    "$stateParams",
    "clienteService",
    "itemService",
    "osService"
  ];