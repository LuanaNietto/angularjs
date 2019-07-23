import angular from "angular";

import { default as uiRouter } from "@uirouter/angularjs";
import diretivas from "./diretivas";

import { mainConfig } from "./main/config";

export default angular
  .module("app", [uiRouter, diretivas])
  .config(mainConfig).name;
