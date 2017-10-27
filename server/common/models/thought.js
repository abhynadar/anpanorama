'use strict';

module.exports = function(Thought) {
  Thought.beforeRemote('create', function(context, user, next) {
    context.args.data.date = Date.now();
    next();
  });
};
