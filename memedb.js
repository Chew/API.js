'use strict';

var blobofstuff = "";

module.exports = {
  getCommand: function getCommand(me) {

    var meme = "";
    var url = "";
    var output = JSON.parse('{"meme":"Invalid Meme","url":"Invalid Meme"}');
    meme = me['meme'];
    meme = meme.toLowerCase();

    var request = require("request");
    const levenshteinDistance = require("levenshtein-distance");

    var url = "http://chewbotcca.co/memedb/memes.json";

    request({
      url: url,
      json: true
    }, function(error, response, body) {

      if (!error && response.statusCode === 200) {
        blobofstuff = body;
      }
    });

    var memes = [];

    for (var i = 0; i < blobofstuff.length; i++) {
      memes[i] = blobofstuff[i]['Meme'];
    }

    let collection = new levenshteinDistance(memes);

    collection.find(meme, function(result) {
      if (result != me['meme']) {
        output['note'] = "The meme you were looking for didn't exist, so we picked the meme closest to your request.";
      }
      meme = result;
    });

    for (var i = 0; i < blobofstuff.length; i++) {
      if (meme == 'random') {
        var num = Math.random() * (blobofstuff.length);
        var ber = ~~num;
        meme = blobofstuff[ber]['Meme'];
      }
      if (blobofstuff[i]['Meme'] == meme) {
        output['meme'] = blobofstuff[i]['Meme'];
        output['url'] = blobofstuff[i]['URL'];
      }
    }

    return output;

  }
};
