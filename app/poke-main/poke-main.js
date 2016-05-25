class controller {
  constructor ($mdSidenav, $mdDialog) {
    this.$mdSidenav = $mdSidenav;
    this.$mdDialog = $mdDialog;
    this.userStages = [];
    this.randomPictures = [];
    this.actions = [{
      name:"hello",
      msg:"HI LITTLE FRIEND",
      event:'hello'
    }, {
      name:"second",
      msg:"ARE YOU READY?",
      event:'second'
    }];
  }

  areYouReady (ev) {
    this.$mdDialog.show(
        this.$mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(false)
            .title('This is an alert title')
            .textContent('You can specify some description text in here.')
            .ariaLabel('Alert Dialog Demo')
            .ok('Got it!')
            .targetEvent(ev)
    )
  }

  openLeftMenu () {
    this.$mdSidenav('left').toggle();
  }


}

const main = {
  binding: {},
  template: require('./main.html'),
  controller: controller
};

export default main