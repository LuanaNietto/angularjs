import angular from "angular";
import ClienteService from "./cliente.service";
import ItemService from "./item.service";
import OSService from "./os.services";

export default angular
    .module("services", [])
    .service("clienteService", ClienteService)
    .service("itemService", ItemService)
    .service("osService", OSService).name;