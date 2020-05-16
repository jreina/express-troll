# express-troll

An Express middleware to redirect common admin or login paths to a custom URL. Rickrolls by default.

## Installing

```bash
npm i @johnny.reina/express-troll
```

## Using

```javascript
const app = express();
const { troll } = require("@johnny.reina/express-troll");

app.use(troll()); // Will redirect to https://www.youtube.com/watch?v=dQw4w9WgXcQ
// OR specify a URL
app.use(troll("https://example.com"));
```

## Which paths get redirected?
The list can be found [here](./src/paths.js)

## License?
[MIT](./LICENSE)
