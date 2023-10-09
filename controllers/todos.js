const Todo = require("../model/todo");

exports.getIndex = (req, res) => {
  // todoUtils.getCompletedTodos((completedTodos) => {
  //   todoUtils.getRemainingTodos((remainingTodos) => {
  //     Todo.fetchAll((todos) => {
  //       res.render("index", {
  //         pageTitle: "کارهای روزمره",
  //         todos,
  //         remainingTodos,
  //         completedTodos,
  //       });
  //     });
  //   });
  // });
  Todo.count({ where: { completed: true } }).then((completedTodos) => {
    Todo.findAll().then((todos) => {
      res.render("index", {
        pageTitle: "کارهای روزمره",
        todos,
        completedTodos,
        remainingTodos: todos.length - completedTodos,
      });
    });
  });
};
