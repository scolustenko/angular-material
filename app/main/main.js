class controller {
  constructor ($mdSidenav, $mdDialog, $mdMedia, $timeout, restService) {
    let self = this;
    this.$mdSidenav = $mdSidenav;
    this.$mdMedia = $mdMedia;
    this.$mdDialog = $mdDialog;
    this.$timeout = $timeout;
    this.restService = restService;

    this.isOpen = false;
    this.userStages = [];
    this.randomPictures = [];
    this.actions = [{
      name: "hello",
      msg: "HI LITTLE FRIEND",
      event: this.areYouReady.bind(self),
      active: false,
      userAnswer: '',
      clicked: 0
    }, {
      name: "second",
      msg: "ARE YOU READY?",
      event: this.catOrDog.bind(self),
      active: false,
      userAnswer: '',
      clicked: 0
    }, {
      name: "loadPicture",
      msg: "click here!",
      event: function(){},
      userAnswer: '',
      clicked: 0
    }, {
      name: "chooseDateToPic",
      msg: "super angular-material feature",
      event: 'datePic',
      active: false,
      userAnswer: '',
      clicked: 0
    }, {
      name: "picName",
      msg: "Boy or girl?",
      event: 'picName',
      active: false,
      userAnswer: '',
      clicked: 0
    }, {
      name: "enterName",
      msg: "What's your name?",
      event: 'enterName',
      active: false,
      userAnswer: '',
      clicked: 0
    }, {
      name: "continue",
      msg: "are you like it?",
      event: "continue",
      active: false,
      userAnswer: '',
      clicked: 0
    }, {
      name: "end",
      msg: "Goodbye dear!",
      event: 'prepare',
      active: false,
      userAnswer: '',
      clicked: 0
    }
    ];
  }

  getPic (keyword) {
    keyword = keyword || 'angular';
    this.restService.getPhotos(keyword)
        .then(response=> {
          this.randomPictures.push(this.restService.prepareSrc(response.data.photos.photo[0]))
        })
        .catch(err=> {
          console.log(err);
          return '';
        });
  }

  catOrDog (ev, action) {
    let useFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));
    this.$mdDialog.show({
      resolve: {
        restService: () => this.restService
      },
      controllerAs: '$ctrl',
      controller: class controller {
        constructor ($mdDialog, restService) {
          this.randomPictures = [];
          this.userAnswer = {
            answer:'',
            randomPics: []
          };
          this.restService = restService;
          this.init();
          this.hide = () => $mdDialog.hide();
          this.cancel = () => $mdDialog.cancel();
          this.answer = answer => {
            this.userAnswer.answer=answer;
            this.userAnswer.randomPics.concat(this.randomPictures);
            return $mdDialog.hide(this.userAnswer)
          };
        }

        init () {
          this.restService.getPhotos('cat')
              .then(response=>{
                this.cat = this.restService.prepareSrc(response.data.photos.photo[0]);
                this.userAnswer.randomPics.push(this.cat);
              });
          this.randomPictures.push(this.dog);
          this.restService.getPhotos('dog')
              .then(response=> {
                this.dog = this.restService.prepareSrc(response.data.photos.photo[0]);
                this.userAnswer.randomPics.push(this.dog)
              });
        }
      },
      template: require('./modal/carOrDog.html'),
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })
        .then(answer=> {
          action.userAnswer = answer.answer;
          action.clicked++;
          this.randomPictures = [...this.randomPictures, ...answer.randomPics];
        });
  }

  areYouReady (ev) {
    ev = +ev || 0;
    let action = this.actions[ev];
    // return;
    this.$timeout(() => {
      this.$mdDialog.show(
          this.$mdDialog.alert()
              .parent(angular.element(document.querySelector('#popupContainer')))
              .clickOutsideToClose(false)
              .title(action.name)
              .textContent(action.msg)
              .ariaLabel('Alert Dialog Demo')
              .ok('Got it!')
              .targetEvent(ev)
      )
    }, 1000);
    action.clicked++;
    action.userAnswer = 'Got it!';
    this.getPic();

  }

}

const main = {
  binding: {},
  template: require('./main.html'),
  controller: controller
};

export default main