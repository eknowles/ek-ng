import * as angular from 'angular';
import FooterComponent from './footer/footer.component';
import HeaderComponent from './header/header.component';

export default angular
  .module('app.components', [])
  .component('headerComponent', new HeaderComponent())
  .component('footerComponent', new FooterComponent())
;
