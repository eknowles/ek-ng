import FooterController from './footer.controller';

class FooterComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public controllerAs: string;
  public templateUrl: string;

  constructor() {
    this.bindings = {};
    this.controller = FooterController;
    this.controllerAs = '$ctrl';
    this.templateUrl = '/partials/components/footer.html';
  }
}

export default FooterComponent;
