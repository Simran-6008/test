import Route from '@ember/routing/route';
import {
  service
} from '@ember/service';

export default class ChartsRoute extends Route {
  @service store;

  queryParams = {
    type: {
      type: {
        refreshModel: true
      }
    }
  };

  async model(params) {
    let chart = await this.store.query('chart', {
      page: {
        limit: '-1'
      },
    });
    let vocabulary = await this.store.findAll('vocabulary_card');
    let spoken = await this.store.findAll('spoken_english_activity');
    let annual = await this.store.findAll('annual_day');

    let chartArray = [...chart];

    let sortedCharts = chartArray.sort((a, b) => {
      let numA = parseInt(a.modules.title.replace(/\D/g, '')) || 0;
      let numB = parseInt(b.modules.title.replace(/\D/g, '')) || 0;

      return numA - numB;
    });


    return {
      type: params.type || 'charts',
      sortedCharts: sortedCharts,
      vocabulary: vocabulary,
      spoken: spoken,
      annual: annual
    };
  }
}
