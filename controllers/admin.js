const Todo = require("../model/todo");
const todoUtils = require("./../utils/todos");

exports.addTodo = (req, res) => {
  if (!req.body.todo) return res.redirect("/");
  Todo.create({ text: req.body.todo })
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });

  // const todo = new Todo(todoUtils.generateRandomId(), req.body.todo);
  // todo.save((err) => {
  //   if (!err) res.redirect("/");
  //   else console.log(err);
  // });
};

exports.deleteTodo = (req, res) => {
  // Todo.deleteTodo(req.params.id, (err) => {
  //   if (!err) res.redirect("/");
  //   else console.log(err);
  // });
  Todo.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.completeTodo = (req, res) => {
  // Todo.setTodoToComplete(req.params.id, (err) => {
  //   if (!err) res.redirect("/");
  //   else console.log(err);
  // });

  Todo.findByPk(req.params.id)
    .then((todo) => {
      todo.completed = true;
      return todo.save();
    })
    .then(res.redirect("/"))
    .catch((err) => console.log(err));
};
