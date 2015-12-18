
Template.todos.helpers({
    'todo' :function(){
        return Todos.find({},{sort: {createAt:-1}});
    }
});
