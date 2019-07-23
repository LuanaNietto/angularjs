export default class MenuController {
  constructor() {
    this.itens = [
      {
        state: "app.dashboard",
        icon: "icon-home",
        name: "Dashboard"
      },
      {
        state: "app.cliente",
        icon: "icon-users",
        name: "Clientes"
      },
      {
        state: "app.item",
        icon: "icon-shopping-cart",
        name: "Itens"
      },
      {
        state: "app.os",
        icon: "icon-file",
        name: "Ordens de Serviço"
      }
    ];
  }
}
