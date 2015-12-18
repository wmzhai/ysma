Template.todoItem.events({
    'click .delete-todo': function(event){
        event.preventDefault();
        var documentId = this._id;
        Todos.remove({ _id: documentId});
    }
});