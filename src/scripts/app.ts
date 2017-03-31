import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-sanitize';

import AppConfig from './app.config';

import Components from './components/components';

angular
  .module('app', [
    'ngMaterial',
    'ngAria',
    'ngAnimate',
    'ngSanitize',
    Components.name,
  ])
  .config(AppConfig)
;
