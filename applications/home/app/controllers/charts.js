import Controller from '@ember/controller';
import {  action } from '@ember/object';
import {  tracked} from '@glimmer/tracking';


export default class ChartsController extends Controller {
  queryParams = ['type'];
  @tracked search = '';

  get filteredCharts() {
    let charts = this.model.sortedCharts || [];

    if (!this.search || this.search.trim() === '') {
      return charts;
    }

    return charts.filter(chart => {
      let title = (chart.modules?.title || '').toLowerCase();
      return title.includes(this.search.toLowerCase().trim());
    });
  }

  @action
  doSearch() {
    let input = document.getElementById('searchInput');
    this.search = input.value; // button click pe search hoga
  }
   @action
    onInputChange(event) {
        if (event.target.value === '') {
            this.search = '';  // search reset hoga, 30 charts wapas aayenge
        }
    }

    @action
    openModal(annual) {
        this.selectedAnnual = annual;
        console.log('openModal:', annual.modules);  // data check karo
    }

    // Modal close
    @action
    closeModal() {
        this.selectedAnnual = null;
    }
}
