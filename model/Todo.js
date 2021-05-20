const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    Status: {
      type: String,
      default: 'Pending'
    },
    created_Date: {
      type: Date
    },
    subtasks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Subtask'
      }
    ]
  });

  module.exports = mongoose.model('Todo', todoSchema);