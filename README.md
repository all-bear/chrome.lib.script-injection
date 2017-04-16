# Chrome script injection
Script injection lib for chrome extension which allows you to execute some script in document context and get some global variables, or etc

## Example
This simple example shows you how to get global variable from content script (content scripts has no such ability): 

```javascript
var ScriptInjection = require('../bower_components/chrome-lib-script-injection/dist/js/script-injection.js').Settings;

var result = ScriptInjection.execute('SomeGlobalVariable');
// or 
var result = ScriptInjection.execute('(function () { return 1 + 1 + SomeGlobalVariable ;})()');
```