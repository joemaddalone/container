```
./install.sh
./build.sh
./serve.sh
```

nav to http://localhost:8888

### overview

Each Project [A,B,C] runs from it's own server that only serves up the minified js.

* Shell loads each project from its corresponding url.
* ProjectA: http://localhost:3000
* ProjectB: http://localhost:3001
* ProjectC: http://localhost:3002
* An ad-hoc api exists at http://localhost:3003
* Each project has its own router that operates on a base route triggered in Shell.

This is far from optimized, just a sketch.