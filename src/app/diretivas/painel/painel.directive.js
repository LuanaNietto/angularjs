export default function painelDirective() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: require('./painel.html'),
        scope: {
            type: '@'
        }
    }
}