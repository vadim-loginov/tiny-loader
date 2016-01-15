# `tiny-loader`
Simple loader for scripts, styles and images
##How to use
First create an instance
```
var loader = new TinyLoader;
```
Loading a single script file:
```
loader.js('files/script.js');
```
Loading multiple script files:
```
loader.js(['script1.js', 'script2.js']);
```
Loading a single stylesheet:
```
loader.css('style1.css');
```
Loading multiple stylesheets:
```
loader.css(['style1.css', 'style2.css']);
```
Loading lazy images. By default it looks for img elements with attribute lazyload and get simply copies element's data-src attributes into src parameter.
```
loader.lazyImages();
```