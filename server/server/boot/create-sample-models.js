'use strict';

var async = require('async');
module.exports = function(app) {
  //data sources
  var mongoDs = app.dataSources.anpanoramadb;
  //create all models
  async.parallel({
    //thoughts: async.apply(createThoughts),
  }, function(err, results) {
    if (err) throw err;
    console.log('> models created sucessfully');
  });

  //create thoughts
  function createThoughts(cb) {
    //mongoDs.autoupdate('Thought', function(err) {
    mongoDs.automigrate('Thought', function(err) {
      if (err) return cb(err);
      var Thought = app.models.Thought;

      var DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
      Thought.create([{
        date: Date.now() - (DAY_IN_MILLISECONDS * 5),
        title: "Everyone wants gift",
        description: "Everyone wants gift but not the giver.",
      }, {
        date: Date.now() - (DAY_IN_MILLISECONDS * 4),
        title: "Faith comes by hearing",
        description: "Faith comes by hearing, yes hearing, yes once again hearing, and hearing the Word of God(Romans 10:17).",
      }, {
        date: Date.now() - (DAY_IN_MILLISECONDS * 3),
        title: "Traditions of men",
        description: "Traditions of men make The Word of God of null effect.",
      }, {
        date: Date.now() - (DAY_IN_MILLISECONDS * 2),
        title: "When vilest men are exalted",
        description: "The wicked walk on every side, when the vilest men are exalted. (Psalm 12:8)",
      }, {
        date: Date.now() - (DAY_IN_MILLISECONDS),
        title: "Prince of Peace",
        description: "Everyone wants peace, but they do not want to come to Jesus - The Prince of Peace.",
      }], cb);

    });
  }
};
