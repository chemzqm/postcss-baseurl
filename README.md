# PostCSS Baseurl [![Build Status][ci-img]][ci]

[PostCSS] plugin for add baseurl to absolute url assets.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/chemzqm/postcss-baseurl.svg
[ci]:      https://travis-ci.org/chemzqm/postcss-baseurl

```css
.foo {
  background: url('/image.png')
}
```

```css
.foo {
  background: url('/mobile/image.png')
}
```

## Usage

```js
postcss([
  require('postcss-baseurl')({
    base: '/mobile'
  })
])
```

See [PostCSS] docs for examples for your environment.
