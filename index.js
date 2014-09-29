var load = require('./load');
var substitute = require('./substitute');

function deprecated(msg, parameters) {
  console.warn(msg, parameters || []);
}

module.exports = {
  load: function() {
    deprecated('load middleware is deprecated, please use compiler');
    load.apply(this, arguments);
  },
  substitute: function() {
    deprecated('substitute middleware is deprecated, please use compiler');
    substitute.apply(this, arguments);
  }
}
