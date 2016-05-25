import 'angular-material/angular-material.css';
// import 'font-awesome/css/font-awesome.css';

import angular from 'angular';
import angularMaterial from 'angular-material';
import uirouter from 'angular-ui-router';


import {themeConfig} from './app.config';
import {routing} from './app.config';
import main from './poke-main/poke-main';

angular.module('app', [angularMaterial, uirouter])
    .config(routing)
    .config(themeConfig)
    .component('app', main);

