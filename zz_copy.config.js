var fs = require('fs');

function copy(src, dst) {
  if(fs.existsSync(src)) {
    fs.writeFileSync(dst, fs.readFileSync(src));
  }
}

copy('lib/jsTint.js', 'dist/jsTint.js');
