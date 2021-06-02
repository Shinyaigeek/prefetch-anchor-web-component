# prefetch-anchor
web components anchor element for prefetching target's html.

Be careful not to overuse

## Example

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/prefetch-anchor-web-component@1.0.0/lib/main.js" ></script>
  </head>
  <body>
    hello prefetch anchor!!

    <a>resource</a>
    <a is="prefetch-anchor">resource which you want to preload</a>
  </body>
</html>
```

## How to use

1. define `prefetch-anchor` customElement via https://cdn.jsdelivr.net/npm/prefetch-anchor-web-component@1.0.0/lib/main.js with `<script />`
2. add `prefetch-anchor` value to `is` attribute in `<a />`

if you want to use this component also in legacy browser, I recommend to use https://cdn.jsdelivr.net/npm/prefetch-anchor-web-component@1.0.0/lib/main.old.js and use https://github.com/w3c/IntersectionObserver/tree/main/polyfill to polyfill IntersectionObserver API and use https://github.com/webcomponents/polyfills to polyfill customElement.