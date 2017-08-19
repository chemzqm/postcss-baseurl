var postcss = require('postcss')

var plugin = require('./')

function run(input, output, opts) {
  return postcss([ plugin(opts) ]).process(input)
    .then(result => {
      expect(result.css).toEqual(output)
      expect(result.warnings().length).toBe(0)
    })
}

/* Write tests here */

it('should add base url', () => {
  return run('a{ background: url(\'/myimage.png\'); }',
             'a{ background: url(\'/mobile/myimage.png\'); }', {base: '/mobile'})
})

it('should support double quote', () => {
  return run('a{ background: url(\"/myimage.png\"); }',
             'a{ background: url(\"/mobile/myimage.png\"); }', {base: '/mobile'})
})

it('should not add base url', () => {
  return run('a{ background: url(\'./myimage.png\'); }',
             'a{ background: url(\'./myimage.png\'); }', {base: '/mobile'})
})
