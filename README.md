## Moved to http://github.com/tysonmatanich/viewportSize

If you are using this repo it will no longer be maintained, please instead use viewportSize which also allows you to get the viewport height.

# GetViewportWidth

Allows you to get the width of the viewport using JavaScript. Most people rely on window.innerWidth or document.documentElement.clientWidth which do not always accurately report the viewport width used in CSS media queries. For example the viewport width in Chrome changes depending on if scrollbars are visible however window.innerWidth does not. Script uses feature detection instead of relying on user agent detection.

* Author: Tyson Matanich - http://matanich.com
* License: MIT

Demo URL: http://tysonmatanich.github.io/GetViewportWidth/

## Size and delivery

Currently, `getViewportWidth.js` compresses to around 541 bytes (~0.5 KB), after minify and gzip. To minify, you might try these online tools: [Microsoft Ajax Minifier]:(http://ajaxmin.codeplex.com/), [Uglify]:(http://marijnhaverbeke.nl/uglifyjs), [Yahoo Compressor]:(http://refresh-sf.com/yui/), or [Closure Compiler](http://closure-compiler.appspot.com/home). Serve with gzip compression.

## Sample


```html
<script type="text/javascript">
	var viewportWidth = window.getViewportWidth();
</script>
```

## Support

GetViewportWidth supports a broad range of browsers and devices (there are currently no known unsupported browsers).
