export default class LoginController {

    constructor($state) {
        this.$state = $state;
    }

    login() {
        this.$state.go('app')
    }

}

LoginController.$inject = ['$state']