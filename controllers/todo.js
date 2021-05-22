const Todo = require('../model/Todo');

// const io = require('../socket.io')

exports.GetTodos = async (req, res, next) => {
    try{
        const tasks = await Todo.find();
        res.status(200).json({
            message: 'Fetched posts successfully.',
            alltasks: tasks
          });
    }
    catch(err) {
        console.log(err);
    }
};
// create todo
exports.CreateTodo = async (req, res, next) => {
    const title = req.body.title;
    const todo = new Todo({
        title: title,
        created_Date: Date()
    });
    try{
        await todo.save();
        res.status(200).json({
            message: "Todo Created Successfull",
            task_created: todo
        });
    } catch (err){
        console.log(err);
    }
  
}

// to update todo
exports.UpdateTodo = async (req, res, next) => {
    const taskId = req.params.task_id;
    const Status = req.body.Status;
    // check if task exist
        try {
            const task = await Todo.findById(taskId);
            if(!task) {
                res.status(400).json({
                    message: 'Try again Task is not failed'
                })
            }
            task.Status = Status;
            const result = await task.save();
            res.status(200).json({
            message: 'Todo is Successfull Edited.',
            task: result
        })
        }catch(err){
            console.log(err)
        }
}