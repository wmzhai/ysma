Template.addTodo.events({
   'submit form': function(event){
       event.preventDefault();
       var todoName = event.target.todoName.value;
       var currentList =this._id;
       Todos.insert({
           name: todoName,
           completed: false,
           createdAt: new Date(),
           listId: currentList
       });
       event.target.todoName.value = '';
   }
});