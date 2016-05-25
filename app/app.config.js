themeConfig.$inject = ['$mdThemingProvider'];
routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
export function themeConfig ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
      .primaryPalette('yellow')
      .accentPalette('orange');
}

export function routing ($stateProvider, $locationProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/main');

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
      .state('main', {
        url:'/main',
        template:'<app></app>'
      })
}