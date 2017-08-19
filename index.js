var postcss = require('postcss')

var urlRe = /url\((['"])(\/.+)\1\)/

module.exports = postcss.plugin('postcss-baseurl', function (opts) {
  opts = opts || {}
  var {base} = opts

  // Work with options here

  return function (root) {
    if (!base) return
    root.walkRules(function (rule) {
      rule.walkDecls(function (decl, i) {
        var value = decl.value
        if (value.indexOf('url(') !== -1) {
          let ms = value.match(urlRe)
          if (ms == null) return
          decl.value = value.replace(ms[2], base + ms[2])
        }
      })
    })
  }
})
