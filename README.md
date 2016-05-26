# angular-material
angular-material app

## Installation:
### NPM
```bash
npm i
npm start
```

 The related scope looks like this:
```javascript
import 'angular-material/angular-material.css';
// import 'font-awesome/css/font-awesome.css';

import angular from 'angular';
import angularMaterial from 'angular-material';
import uirouter from 'angular-ui-router';
import restService from './app.service';

import {themeConfig} from './app.config';
import {routing} from './app.config';
import main from './main/main.js';


angular.module('app', [angularMaterial, uirouter])
    .config(routing)
    .config(themeConfig)
    .service('restService', restService)
    .component('app', main);
```    
