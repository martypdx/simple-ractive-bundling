# Simple Ractive Bundling

This is a simple build script for bundling RactiveJS components
using [Gobble](https://github.com/gobblejs/) and [Rollup](https://github.com/rollup/rollup).

It is designed for quick drop-in replacement for projects that are using traditional web `<script>`
inclusion of global libraries and have been either putting
Ractive templates inline or via [Ractive.load()](https://github.com/ractivejs/ractive-load).

## Getting setup

All of the dependencies in the `package.json` either need to be installed
via `npm init` if using the `package.json`, or just install via:

```sh
> npm install gobble-cli
```

And then run:

```sh
> gobble build -f dist
```

And gobble will prompt you to install the additional dependencies.

Output is controlled via 1) the folder you specify as the last parameter of the `gobble` command (`dist` in the example above), and 2) the file name is set on line 42 of the `gobblefile.js`.

You can also run:

## Inclusion

Include the `bundle.js` after Ractive:

```html
<script src='http://cdn.ractivejs.org/latest/ractive.min.js'></script>
<script src='dist/bundle.js'></script>
```

## Example

See `index.html` for example of running included components.
