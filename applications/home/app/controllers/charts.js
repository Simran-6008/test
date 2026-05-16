import Controller from '@ember/controller';
import {
  action
} from '@ember/object';
import {
  tracked
} from '@glimmer/tracking';
import {
  later
} from '@ember/runloop';

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
      this.search = ''; // search reset hoga, 30 charts wapas aayenge
    }
  }

  @action
  openModal(annual) {
    this.selectedAnnual = annual;
    console.log('openModal:', annual.modules); // data check karo
  }

  // Modal close
  @action
  closeModal() {
    this.selectedAnnual = null;
  }
  attachAccordionListeners() {
    later(() => {
      const accordionEl = document.getElementById('accordionCharts');
      if (!accordionEl) return;

      if (this._onShow) accordionEl.removeEventListener('show.bs.collapse', this._onShow);
      if (this._onHide) accordionEl.removeEventListener('hide.bs.collapse', this._onHide);

      this._onShow = (e) => {
        e.target.querySelectorAll('iframe[data-src]').forEach((iframe) => {
          if (!iframe.src || iframe.src === window.location.href) {
            iframe.src = iframe.dataset.src;
          }
        });
      };

      this._onHide = (e) => {
        e.target.querySelectorAll('iframe').forEach((iframe) => {
          iframe.src = '';
        });
      };

      accordionEl.addEventListener('show.bs.collapse', this._onShow);
      accordionEl.addEventListener('hide.bs.collapse', this._onHide);
    }, 300);
  }

  @action
  setupModalListener(modalId) {
    later(() => {
      let modal = document.getElementById(modalId);

      if (!modal) return;

      modal.addEventListener('hidden.bs.modal', () => {
        modal.querySelectorAll('iframe').forEach((iframe) => {
          let src = iframe.src;
          iframe.src = '';
          iframe.src = src;
        });
      });
    }, 100);
  }
}
