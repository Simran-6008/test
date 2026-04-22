import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class Charts extends Component {

  @action
  toggleCharts() {
    console.log("clicked");
  }
}