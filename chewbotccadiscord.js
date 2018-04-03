'use strict';

var blobofstuff = "";

module.exports = {
  getCommand: function getCommand(com) {

    var command = "";
    var plugin = "Invalid Command";
    var alias = ["Invalid Command"];
    var description = "Invalid Command";
    var output = JSON.parse('{"plugin":"Invalid Command","alias":["Invalid Command"],"description":"Invalid Command","args":"Invalid Command"}');
    command = com['command'];
    command = command.toLowerCase();

    command = '%^' + command;

    var request = require("request")

    var url = "http://discord.chewbotcca.co/commands.json";

    request({
      url: url,
      json: true
    }, function(error, response, body) {

      if (!error && response.statusCode === 200) {
        blobofstuff = body;
      }
    })

    for (var i = 0; i < blobofstuff.length; i++) {
      if (blobofstuff[i]['Command'] == command) {
        output['plugin'] = blobofstuff[i]['Plugin'];
        output['alias'] = blobofstuff[i]['Aliases'].split(', ');
        output['description'] = blobofstuff[i]['Description'];
        output['args'] = blobofstuff[i]['Arguments'];
      }
    }

    return output;

  }
};
