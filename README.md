# grunt-tar.gz [![Build Status](https://secure.travis-ci.org/bendi/grunt-tar.gz.png?branch=master)](http://travis-ci.org/bendi/grunt-tar.gz)

Grunt task around [node-tar.gz](https://github.com/alanhoff/node-tar.gz) npm module


## Getting Started
Install this grunt plugin next to your project's Gruntfile with: `npm install --save-dev grunt-tar.gz`

Then add this line to your project's Gruntfile:

```javascript
grunt.loadNpmTasks('grunt-tar.gz');
```

## Example Usage

```js
targz: {
    standalone_win: {
        files: {
            "build/node_modules/mpg123n/build":  "tmp/win/mpg123n-nw.tgz"
        }
    }
}
```

See original file at [maracuya-jukebox](https://github.com/bendi/maracuya-jukebox) project.

## Release History
 - 0.0.6 changes by @gruntjs-updater getting ready for gruntjs 1.0.
 - 0.0.5 changes by @mischah Link was dead. Repo seems to be removed.
 - 0.0.4 changes by @bittorture Allow templates to be used for target directories 
 - 0.0.3 Added travis.ci integration
 - 0.0.2 Fixed jshint errors
 - 0.0.1 Initial release

## License
Copyright (c) 2014 Marek Bedkowski

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
