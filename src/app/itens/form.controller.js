export default class FormController{
    constructor($state, $stateParams, itemService){
        this.record = {}
        this._$state = $state;
        this.id = $stateParams.id;
        this._itemService = itemService;
        if (this.id){
            this.findById();
        }   
    }

    async save(){
        if (this.id) {
            await this._itemService.update(this.record);

        }else {
            await this._itemService.insert(this.record);
        }
        this._$state.go("app.itens.list");
    }

   findById() {
       return this._itemService.findById(this.id)
       .then(response => {
           this.record = response;
           return this.record;
       });
   }

}

FormController.$inject = ["$state", "$stateParams", "itemService"];