themeConfig.$inject = ['$mdThemingProvider'];
routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
export function themeConfig ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
      .primaryPalette('red')
      .accentPalette('blue', {
        'default': '200' // use shade 200 for default, and keep all other shades the same
      });
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