import MainController from "./controller";
import LoginController from "./login.controller";
import MenuController from "./menu.controller";

import "../../assets/bootstrap-solid.svg";

export const mainConfig = ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise("/login");
  $stateProvider
    .state("app", {
      template: require("@views/template.html"),
      redirectTo: "app.dashboard",
      controller: MenuController,
      controllerAs: "vm",
      url: "/"
    })
    .state("app.dashboard", {
      template: require("@views/main/component.html"),
      controller: MainController,
      controllerAs: "vm",
      url: "dashboard"
    })
    .state("login", {
      template: require("@views/login/login.html"),
      controller: LoginController,
      controllerAs: "vm",
      url: "/login"
    });
};

mainConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
