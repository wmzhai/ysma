Template.todoItem.events({
    'click .delete-todo': function(event){
        event.preventDefault();
        var documentId = this._id;
        var confirm = window.confirm("Delete this task?");
        if(confirm){
            Todos.remove({ _id: documentId});
        }
    },
    'keyup [name=todoItem]': function(event){
        var documentId = this._id;
        var todoItem = $(event.target).val();
        Todos.update({_id:documentId},{$set:{name: todoItem}});
        console.log("You just tapped a key on your keyboard.");
    },
    'keydown [name=todoItem]': function(){
        console.log("You're holding down a key on your keyboard.");
    },
    'keypress [name=todoItem]': function(){
        console.log("You just pressed one of the keys on your keyboard.");
    }
});