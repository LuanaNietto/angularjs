export default function menuDirective() {
    return {
        restrict: 'E',
        replace: true,
        template: require('./menu.html'),
        scope: {
            itens: '='
        }
    }
}