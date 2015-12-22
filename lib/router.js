Router.configure({
    layoutTemplate: 'main'
});

Router.route('/',{
    template: 'home'
});
Router.route('/register');
Router.route('/login');