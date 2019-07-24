import ListController from './list.controller'
import FormController from './form.controller'

export const clienteConfig = $stateProvider => {
    $stateProvider
        .state("app.cliente", {
           template: require("@views/default.html"),
           url:"clientes", 
           redirectTo: "app.cliente.list"
        })
        .state("app.cliente.list", {
            template: require("@views/clientes/list.html"),
            url:"/list",
            controller: ListController,
            controllerAs:"vm"
        })
        .state("app.cliente.new", {
            template:require("@views/clientes/form.html"),
            url:"/new",
            controller: FormController,
            controllerAs: "vm"
        })
        .state("app.cliente.edit", {
            template: require("@views/clientes/form.html"),
            url: "/{id}",
            controller: FormController,
            controllerAs: "vm"
        });

};

clienteConfig.$inject = ["$stateProvider"];