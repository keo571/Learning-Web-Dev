const text = process.argv[2];

const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const code = franc(text);

if (code === 'und') {
    console.log("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!".red)
} else {
    const language = langs.where("3", code)
    console.log(`Our best guess is: ${language.name}`.green);
}
