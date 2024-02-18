const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      require: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: format,
    },
    userName: {
      type: String,
      require: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Create a virtual property `reactionCount` that gets the amount of reactions associated with a Thought
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

function format(createdAt) {
    // const year = createdAt.getFullYear();
    // const month = createdAt.getMonth();
    // const day = createdAt.getDate();

    // const formated = month +1 + "/" + day+1 + "/" + year;
    

    return createdAt.toDateString();
}

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
