/**
 * Created by Chunmeista on 12/8/2015.
 */

Template.navbar.events({

});

//http://stackoverflow.com/questions/10677491/how-to-get-meteor-call-to-return-value-for-template
//http://stackoverflow.com/questions/15252754/if-statements-in-handlebars
http://stackoverflow.com/questions/29835663/meteor-how-should-i-update-the-users-collection-to-include-a-new-attribute-in-t

Template.navbar.helpers({
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

/*
 "click .tourney" : function() {
 template.$('.tourney').css("background-color", "orange");
 template.$('.addadmin').css("background-color", "white");
 },
 "click .addadmin" : function() {
 template.$('.addadmin').css("background-color", "orange");
 template.$('.tourney').css("background-color", "white");
 }
 */