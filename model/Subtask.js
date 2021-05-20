  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subtaskSchema = new Schema(
  {
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
    todo_id: {
      type: Schema.Types.ObjectId,
      ref: 'Todo'
    }
  }

);

module.exports = mongoose.model('Subtask', subtaskSchema);