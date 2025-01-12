const Todo = require('../models/todo.model');
const createTodo = async (req, res)=>{
    try {
        const {title, description} = req.body;
        const todo = await Todo.create({title, description});

        res.status(201).json(
            {
                message: "Todo created successfully",
                data: todo,
            }
        )
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        })
    }
}

module.exports = {createTodo};
