export default function uiInputDirective() {
  return {
    restrict: "E",
    replace: true,
    template: require("./ui-input.html"),
    scope: {
      msgClass: "@?",
      msg: "@?",
      label: "@",
      block: "@",
      type: "@?",
      modelValue: "=ngModel"
    }
  };
}
