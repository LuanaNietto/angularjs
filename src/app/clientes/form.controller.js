export default class FormController{
    constructor($state, $stateParams, clienteService){
        this.record = {}
        this._$state = $state;
        this.id = $stateParams.id;
        this._clienteService = clienteService;
        if (this.id){
            this.findById();
        }   
    }

    async save(){
        if (this.id) {
            await this._clienteService.update(this.record);

        }else {
            await this._clienteService.insert(this.record);
        }
        this._$state.go("app.cliente.list");
    }

   findById() {
       return this._clienteService.findById(this.id)
       .then(response => {
           this.record = response;
           return this.record;
       });
   }

}

FormController.$inject = ["$state", "$stateParams", "clienteService"];