import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ChartsRoute extends Route {
  @service store;

  queryParams = {
    type: {
      refreshModel: true
    }
  };

  async model(params) {
    let chart = await this.store.findAll('chart');
    let vocabulary = await this.store.findAll('vocabulary_card');
    let spoken = await this.store.findAll('spoken_english_activity');
    let annual = await this.store.findAll('annual_day');

    console.log(annual)

    let reversedCharts = [...chart].reverse(); 

    return {
      type: params.type,
      charts: chart,
      reversedCharts: reversedCharts, 
      vocabulary: vocabulary,
      spoken: spoken,
      annual: annual
    };
  }
}