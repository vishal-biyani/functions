# Node function with depenencies in package

This example showcases a simple Nodejs function with a dependency on `string` module. Commands for initializing NPM and adding string module to package.json have already been executed (```npm init; npm install string --save```).

The `hello.js` has function code which use string module to call `between` function. Now let's deploy this to Fission

Create an environment from node image:

```
$ fission env create --name nodejs --image fission/node-env
```

Create a package from the source code, package.json and the node_modules directory:

```
$ zip -r node-pack.zip *
```

Create a function with above package & test it:

```
$ fission fn create --name packagehello --env nodejs --deploy node-pack.zip
$ fission fn test --name packagehello
foo
```