const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            minlength: 3,
            required: true,
            trim: true,
        },
        description:{
            type: String,
            minlength: 3,
            required: true,
        },
    }
);


const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;

