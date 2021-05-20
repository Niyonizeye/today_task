const Todo = require('../model/Todo');

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

// single todo
exports.GetSingleTodo = (req, res, next) => {
    res.status(200).json({
        message: 'Single todod fetched Successful.'
    });
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
exports.EditStatusTodo = async (req, res, next) => {
    const taskId = req.params.taskId;
    const status = req.body.status;
    console.log(taskId);
    try {
        const task = await Todo.findById(taskId);
        if(!task) console.log('No task found');
        task.Status = status;
        const result = await task.save();
        res.status(200).json({
        message: 'Todo is edited Successfull.',
        task: result
       })
    }catch(err){
        console.log(err)
    }
    ;
}

// to delete todo
exports.DeleteTodo = (req, res, next) => {
    res.status(200).json({
        message: 'Todo is Deleted Successfull'
    });
}