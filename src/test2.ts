import * as yaml from 'js-yaml';

import * as fs from 'fs';

import * as path from 'path';

let file = fs.readFileSync(path.join(__dirname,'app.yml'));

let c = yaml.safeLoad(file.toString());

console.log(c);