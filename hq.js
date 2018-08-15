'use strict';

module.exports = {
  getRandom: function getRandom() {

    var output = JSON.parse('{"region":null,"question":{"question":null,"choice1":null,"choice2":null,"choice3":null,"correct":null},"choices":{"picked1":null,"picked2":null,"picked3":null},"speech":{"monologue":null},"game":{"q#":null,"time":null,"prize":null,"winners":null,"cashwon":null}}');

    var fs = require("fs"),
      ques;

    function readJsonFileSync(filepath, encoding) {

      if (typeof(encoding) == 'undefined') {
        encoding = 'utf8';
      }
      var file = fs.readFileSync(filepath, encoding);
      return JSON.parse(file);
    }

    function getConfig(file) {

      var filepath = __dirname + '/' + file;
      return readJsonFileSync(filepath);
    }

    ques = getConfig('hq.json');

    var i = Math.floor(Math.random() * (ques.length - 0 + 1) + 0);

    output['region'] = ques[i]['Region']
    output['question']['question'] = ques[i]['Question']
    output['question']['choice1'] = ques[i]['Option 1']
    output['question']['choice2'] = ques[i]['Option 2']
    output['question']['choice3'] = ques[i]['Option 3']
    output['question']['correct'] = ques[i]['Correct #']
    output['choices']['picked1'] = ques[i]['Picked 1']
    output['choices']['picked2'] = ques[i]['Picked 2']
    output['choices']['picked3'] = ques[i]['Picked 3']
    output['speech']['monologue'] = ques[i]['Monologue']
    output['game']['q#'] = ques[i]['Q#']
    output['game']['time'] = ques[i]['Time']
    output['game']['prize'] = ques[i]['Prize']
    output['game']['winners'] = ques[i]['Winners']
    output['game']['cashwon'] = ques[i]['Won that Game']

    return output;

  }
};
