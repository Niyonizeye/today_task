const Subtask = require('../model/Subtask');
const Todo = require('../model/Todo');

exports.Createsubtask = async (req, res,next) => {
    const title = req.body.title;
    const task_id = req.body.task_id;
    const subtask = new Subtask({
        title: title,
        task_id: task_id  
    });
    try{
        const todo = await Todo.findById(task_id);
        console.log(todo);
         if(!todo) {
            res.status(400).json({
                message: "Failed to create a subtask at all Try Again",
            })
        }
        // const subtask_result = await subtask.save();
        
        // todo.populate('subtask');
        // git initconsole.log(subtask_result);
    
        const subtask_result = await subtask.save(subtask);
        todo.subtasks.push(subtask_result);
        // todo.save();
        // todo.populate('subtask');
        // const savedTodo = await todo.save();
        res.status(200).json({
            message: "Subtask Created Successfull",
            subtask_created: subtask
        });
        // return savedTodo
    } catch (err){
        console.log(err);
    }
}

exports.editSubtask = async (req, res, next) => {
    const SubtaskId = req.params.SubtaskId;
    const status = req.body.status;
    console.log(SubtaskId);
    try {
        const Subtask = await Subtask.findById(SubtaskId);
        if(!Subtask) {
            res.status(400).json({
                message: 'Sorry Try again'
            })
        }
        Subtask.Status = status;
        const result = await Subtask.save();
        res.status(200).json({
        message: 'Subtask is edited Successfull.',
        Subtask: result
       })
    }catch(err){
        console.log(err)
    };
}