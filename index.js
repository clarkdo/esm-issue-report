const requireModule = require('esm')(module, {})

module.exports = requireModule('./core').default
