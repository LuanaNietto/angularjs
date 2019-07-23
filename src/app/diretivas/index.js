import angular from 'angular';
import menuDirective from './menu/menu.directive';
import painelDirective from './painel/painel.directive';
import uiInputDirective from './ui-input/ui-input.directive';
import uiTableDirective from './ui-table/ui-table.directive';

export default angular.module('diretivas', [])
    .directive('menu', menuDirective)
    .directive('painel', painelDirective)
    .directive('uiInput', uiInputDirective)
    .directive('uiTable', uiTableDirective)
    .name;
