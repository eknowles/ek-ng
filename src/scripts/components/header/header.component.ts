import HeaderController from './header.controller';

class HeaderComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public controllerAs: string;
  public templateUrl: string;

  constructor() {
    this.bindings = {};
    this.controller = HeaderController;
    this.controllerAs = '$ctrl';
    this.templateUrl = '/partials/components/header.html';
  }
}

export default HeaderComponent;
