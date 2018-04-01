'use strict';

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

    var blobofstuff = [
      {
        "Plugin": "About",
        "Command": "%^help",
        "Arguments": "None",
        "Aliases": "%^commands, %^help",
        "Description": "Shows a link to a list of commands."
      }, {
        "Plugin": "About",
        "Command": "%^ping",
        "Arguments": "noedit if no edit",
        "Aliases": "None",
        "Description": "Replies with “Pong!”"
      }, {
        "Plugin": "About",
        "Command": "%^invite",
        "Arguments": "None",
        "Aliases": "None",
        "Description": "Shows a link to invite Chewbotcca to your server and a discord invite link to the help server."
      }, {
        "Plugin": "About",
        "Command": "%^forceupdateservercount",
        "Arguments": "None",
        "Aliases": "None",
        "Description": "Updates the server count on all the api’s and the bot game."
      }, {
        "Plugin": "About",
        "Command": "%^stats",
        "Arguments": "None",
        "Aliases": "None",
        "Description": "Shows basic stats for Chewbotcca."
      }, {
        "Plugin": "Cat",
        "Command": "%^cat",
        "Arguments": "None",
        "Aliases": "None",
        "Description": "Shows a random cat. meow."
      }, {
        "Plugin": "Cat",
        "Command": "%^catfact",
        "Arguments": "None",
        "Aliases": "None",
        "Description": "Shows a catfact"
      }, {
        "Plugin": "English",
        "Command": "%^urban",
        "Arguments": "Word to define",
        "Aliases": "None",
        "Description": "Defines a word using urban dictionary"
      }, {
        "Plugin": "Eval",
        "Command": "%^eval",
        "Arguments": "Expression to eval",
        "Aliases": "None",
        "Description": "Evaluate expressions in ruby. Requires Bot Owner"
      }, {
        "Plugin": "Google",
        "Command": "%^youtube",
        "Arguments": "Video to find",
        "Aliases": "None",
        "Description": "Finds a video on youtube given a term."
      }, {
        "Plugin": "Info",
        "Command": "%^info",
        "Arguments": "Command",
        "Aliases": "None",
        "Description": "Type in a command (NO PREFIX) and it will give info on the command."
      }, {
        "Plugin": "MemeDB",
        "Command": "%^memedb",
        "Arguments": "Meme to find",
        "Aliases": "None",
        "Description": "It’s the meme database, What more do you need??"
      }, {
        "Plugin": "Minecraft",
        "Command": "%^namemc",
        "Arguments": "Name to look up",
        "Aliases": "None",
        "Description": "Shows a link to search results for a response, or if there’’s one result, will show detailed info."
      }, {
        "Plugin": "Minecraft",
        "Command": "%^mcavatar",
        "Arguments": "MC Username",
        "Aliases": "None",
        "Description": "Shows a mcavatar for the specified user."
      }, {
        "Plugin": "Minecraft",
        "Command": "%^mcstatus",
        "Arguments": "None",
        "Aliases": "None",
        "Description": "Shows Minecraft Statuses"
      }, {
        "Plugin": "Minecraft",
        "Command": "%^mcserver",
        "Arguments": "Server IP",
        "Aliases": "None",
        "Description": "Shows minecraft server stats for a given server."
      }, {
        "Plugin": "Misc",
        "Command": "%^isup",
        "Arguments": "Website URL",
        "Aliases": "None",
        "Description": "Shows website status, up or down?"
      }, {
        "Plugin": "Misc",
        "Command": "%^8ball",
        "Arguments": "Question to ask",
        "Aliases": "%^eball, %^eightball",
        "Description": "Asks the 8ball a question."
      }, {
        "Plugin": "Misc",
        "Command": "%^qrcode",
        "Arguments": "Text to make",
        "Aliases": "None",
        "Description": "Create a QR code with given text."
      }, {
        "Plugin": "Misc",
        "Command": "%^flip",
        "Arguments": "None",
        "Aliases": "None",
        "Description": "Flip a coin!"
      }, {
        "Plugin": "Misc",
        "Command": "%^choose",
        "Arguments": "A comma separated list",
        "Aliases": "None",
        "Description": "Picks a random choice from a list of comma separated values."
      }, {
        "Plugin": "Music",
        "Command": "%^lastfm",
        "Arguments": "Last.fm username",
        "Aliases": "None",
        "Description": "Finds lastfm stats for a user"
      }, {
        "Plugin": "MusicPlayer",
        "Command": "%^songs",
        "Arguments": "None",
        "Aliases": "None",
        "Description": "Lists %^playable songs."
      }, {
        "Plugin": "MusicPlayer",
        "Command": "%^play",
        "Arguments": "Song to play",
        "Aliases": "None",
        "Description": "Plays a song from the database."
      }, {
        "Plugin": "MusicPlayer",
        "Command": "%^connect",
        "Arguments": "None",
        "Aliases": "None",
        "Description": "Makes the bot connect to your voice channel."
      }, {
        "Plugin": "Namecheap",
        "Command": "%^namecheap",
        "Arguments": "URL to find.",
        "Aliases": "None",
        "Description": "Returns a link with search results to namecheap."
      }, {
        "Plugin": "Quotes",
        "Command": "%^trbmb",
        "Arguments": "None",
        "Aliases": "None",
        "Description": "Generates a TRBMB quote. Based on [TRBMB Gen](http://trbmb.chew.pw)"
      }, {
        "Plugin": "Quotes",
        "Command": "%^acronym",
        "Arguments": "Acronym to solve",
        "Aliases": "None",
        "Description": "Uses [Acronym Gen](http://acronym.chew.pro) to fill out an acronym."
      }, {
        "Plugin": "Rate",
        "Command": "%^rate",
        "Arguments": "Your rating",
        "Aliases": "None",
        "Description": "Rate something /10."
      }, {
        "Plugin": "Restart",
        "Command": "%^restart",
        "Arguments": "None",
        "Aliases": "None",
        "Description": "Restarts the bot. Bot Owner Only"
      }, {
        "Plugin": "Restart",
        "Command": "%^update",
        "Arguments": "None",
        "Aliases": "None",
        "Description": "Updates the bot. Bot Owner Only"
      }, {
        "Plugin": "Restart",
        "Command": "%^updates",
        "Arguments": "None",
        "Aliases": "None",
        "Description": "Returns bot version and status. Bot Owner Only.. Kinda"
      }, {
        "Plugin": "Restart",
        "Command": "%^shoo",
        "Arguments": "None",
        "Aliases": "None",
        "Description": "Kills the bot. Bye! Bot Owner Only"
      }, {
        "Plugin": "Restart",
        "Command": "%^new",
        "Arguments": "None",
        "Aliases": "None",
        "Description": "Finds 10 most recent commits"
      }, {
        "Plugin": "Roles",
        "Command": "%^createrole",
        "Arguments": "Role name",
        "Aliases": "None",
        "Description": "Create a role with a given name."
      }, {
        "Plugin": "Rip",
        "Command": "%^rip",
        "Arguments": "Person to rip",
        "Aliases": "None",
        "Description": "Makes someone or something rip. No spaces, letters and numbers only."
      }, {
        "Plugin": "ServerInfo",
        "Command": "%^sinfo",
        "Arguments": "None",
        "Aliases": "%^serverinfo",
        "Description": "Shows basic stats for the server."
      }, {
        "Plugin": "UserInfo",
        "Command": "%^uinfo",
        "Arguments": "Mention a user (optional)",
        "Aliases": "%^userinfo",
        "Description": "Shows basic stats for a user."
      }, {
        "Plugin": "Feedback",
        "Command": "%^feedback",
        "Arguments": "Feedback to send",
        "Aliases": "None",
        "Description": "Send feedback to the help server, for chew to read and investigate."
      }, {
        "Plugin": "Google",
        "Command": "%^google",
        "Arguments": "Search query",
        "Aliases": "None",
        "Description": "Returns 5 results for a google query."
      }, {
        "Plugin": "Roles",
        "Command": "%^assignrole",
        "Arguments": "Role name & User",
        "Aliases": "None",
        "Description": "Gives a role to a user."
      }, {
        "Plugin": "Roles",
        "Command": "%^removerole",
        "Arguments": "Role name & User",
        "Aliases": "None",
        "Description": "Remove a role from a user."
      }, {
        "Plugin": "Minecraft",
        "Command": "%^uuid",
        "Arguments": "Minecraft Username",
        "Aliases": "None",
        "Description": "Returns the UUID for a user."
      }, {
        "Plugin": "Minecraft",
        "Command": "%^blacklist",
        "Arguments": "Server IP",
        "Aliases": "None",
        "Description": "Checks to see if a user is blacklisted."
      }
    ];

    for (var i = 0; i < blobofstuff.length; i++) {
      if (blobofstuff[i]['Command'] == command) {
        output['plugin'] = blobofstuff[i]['Plugin'];
        output['alias'] = blobofstuff[i]['Aliases'].split(', ');
        output['description'] = blobofstuff[i]['Description'];
        output['args'] = blobofstuff[i]['Arguments']
      }
    }

    return output;

  }
};
