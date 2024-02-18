const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    userName: { type: String, unique: true, required: true, trim: true },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
      },
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that gets the size of the friends array
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })
 
// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
