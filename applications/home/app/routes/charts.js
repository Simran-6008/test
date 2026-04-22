import Route from '@ember/routing/route';

export default class ChartsRoute extends Route {
    queryParams = {
    type: {
      refreshModel: true
    }
  };

  model(params) {
    return {
      type: params.type
    };
  }
}
