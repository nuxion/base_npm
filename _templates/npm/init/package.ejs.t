---
to: package.json
sh: npm install
---
{
  "name": "<%= name %>",
  "version": "0.1.0",
  "description": "<%= description %>",
  "main": "lib/main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Xavier Petit",
  "license": "MPL-2.0",
  "dependencies": {
    "dotenv": "^6.2.0"
  },
  "devDependencies": {
    "chai": "^4.2.0",
    "mocha": "^5.2.0",
    "sinon": "^7.2.3"
  }
}
