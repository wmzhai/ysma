Template.addTodo.events({
   'submit form': function(event){
       event.preventDefault();
       var todoName = event.target.todoName.value;
       var currentUser = Meteor.userId();
       var currentList = this._id;
       Todos.insert({
           name: todoName,
           completed: false,
           createdAt: new Date(),
           createdBy: currentUser,
           listId: currentList
       });
       event.target.todoName.value = '';
   }
});