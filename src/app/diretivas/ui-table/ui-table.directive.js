export default function uiTableDirective() {
    return {
        restrict: 'E',
        replace: true,
        transclude: {
            actions: '?actions'
        },
        template: require('./ui-table.html'),
        bindToController: true,
        scope: {
            cols: '=',
            data: '='
        },
        controller: TableDirectiveController,
        controllerAs: '$ctrl'
    }
}

TableDirectiveController.$inject = ['$transclude'];

function TableDirectiveController($transclude) {
  this.showActions = $transclude.isSlotFilled('actions');
}