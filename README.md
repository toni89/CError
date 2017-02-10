# CError

Alternative Error output
 
## Example Ouput
 
```javascript
let CError = require('cerror');

// CError(code, message, data)
console.log(new CError('AUTH_ERROR', 'Credentials invalid', { user: "foo", pass: "bar" }));

Error: AUTH_ERROR > Credentials invalid {user: "foo", pass: "bar"}
    at Object.<anonymous> (/Users/anton/Documents/Projekte/CError/app.js:7:35)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.runMain (module.js:604:10)
    at run (bootstrap_node.js:394:7)
    at startup (bootstrap_node.js:149:9)
    at bootstrap_node.js:509:3
```