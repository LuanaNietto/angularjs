import angular from "angular";

import { default as uiRouter } from "@uirouter/angularjs";
import diretivas from "./diretivas";
import services from "./services";

import { mainConfig } from "./main/config";
import { clienteConfig} from "./clientes/config";
import { itensConfig} from "./itens/config";
import { osConfig}  from "./os/config";

export default angular
  .module("app", [uiRouter, diretivas, services])
  .config(mainConfig)
  .config(clienteConfig)
  .config(itensConfig)
  .config(osConfig).name;

