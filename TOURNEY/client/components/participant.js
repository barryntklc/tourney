/**
 *
 *
 * @author Erik Huang, Barryn Chun
 * @date 12/08/2015
 */

// attach events to our poll template
Template.participant.events({
    "click .delete" : function () {
        Participants.remove(this._id);
    }
});

Template.participant.helpers({
    admin: function() {
        Meteor.call("isAdmin", Meteor.userId(), function(error, data) {
            if (error) {
                console.log(error);
            }
            Session.set('userType', data);
        });
        return Session.get('userType');
        /*
         if (type === "admin") {
         return true;
         } else {
         return false;
         }*/
    }
});
