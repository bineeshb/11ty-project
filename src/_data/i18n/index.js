const en = require('./en');
const hi = require('./hi');
const ml = require('./ml');
const ta = require('./ta');
const te = require('./te');

function getLabels() {
  let labels = {};

  Object.keys(en).forEach(key => {
    labels = {
      ...labels,
      [key]: {
        en: en[key],
        hi: hi[key],
        ml: ml[key],
        ta: ta[key],
        te: te[key]
      }
    };
  });

  return labels;
}

module.exports = getLabels();
