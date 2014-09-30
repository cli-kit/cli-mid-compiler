var compile = require('cli-compiler');

module.exports = function compiler(config) {
  var conf = this.configure();
  config = config || conf.compiler;
  // morph legacy configuration
  if(!config && conf.load) {
    config = {};
    config.input = [conf.load.file];
    config.definition = conf.load.options;
    config.cache = conf.load.cache;
    if(conf.substitute && conf.substitute.enabled !== undefined) {
      config.replace = conf.substitute.enabled;
    }
  }
  if(!config) return this;
  var scope = this;
  config.program = this;
  return function compiler(req, next) {
    compile(config, function(err, creq) {
      if(err) return next(err);
      scope.emit('load', req, creq);
      next();
    });
  }
}

// DEPRECATED
var loader = require('./load');
var substitutor = require('./substitute');
var deprecate = require('cli-deprecate');

function load() {
  deprecate('load middleware is deprecated, please use compiler');
  return loader.apply(this, arguments);
}

function substitute() {
  deprecate('substitute middleware is deprecated, please use compiler');
  return substitutor.apply(this, arguments);
}

module.exports.load = load;
module.exports.substitute = substitute;
