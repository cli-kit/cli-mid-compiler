var load = require('./load');
var substitute = require('./substitute');

var deprecate = require('cli-deprecate');

module.exports = {
  load: function() {
    deprecate('load middleware is deprecated, please use compiler');
    return load.apply(this, arguments);
  },
  substitute: function() {
    deprecate('substitute middleware is deprecated, please use compiler');
    return substitute.apply(this, arguments);
  }
}
