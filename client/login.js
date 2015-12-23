Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email,password,function(error){
           if(error){
               console.log(error.reason);
           }else{
               var currentRoute = Router.current().route.getName();
               if( currentRoute == "login"){
                   Router.go("home");
               }
           }
        });
    }
})

Template.login.onCreated(function(){
    console.log("The 'login' template was just created.");
});

Template.login.onRendered(function(){
    console.log("The 'login' template was just rendered.");
});

Template.login.onDestroyed(function(){
    console.log("The 'login' template was just destroyed.");
});