import mainModule from "./app/main.module";

require("bootstrap");
import "./style.scss";

angular.bootstrap(document.body, [mainModule], { strictDi: true });
