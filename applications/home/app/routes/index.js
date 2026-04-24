import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
    @service store;

    // async model() {
    //     let obj = await this.store.findRecord('about', 7);
    //     console.log(obj.modules);
    // }
}
