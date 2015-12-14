Template.input.helpers({
    admin: function() {
        Meteor.call("isAdmin", Meteor.userId(), function(error, data) {
            if (error) {
                console.log(error);
            }
            Session.set('admin_status', data);
        });
        return Session.get('admin_status');
    }
});