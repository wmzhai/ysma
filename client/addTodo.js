Template.addTodo.events({
   'submit form': function(event){
       event.preventDefault();
       var todoName = event.target.todoName.value;
       Todos.insert({
           name: todoName,
           completed: false,
           createdAt: new Date()
       });
       event.target.todoName.value = '';
   }
});