import BaseSerializer from './application';

export default BaseSerializer.extend({
  serialize() {
    // This is how to call super, as Mirage borrows [Backbone's implementation of extend](http://backbonejs.org/#Model-extend)
    let json = BaseSerializer.prototype.serialize.apply(this, arguments);
    return json;
  }
});
