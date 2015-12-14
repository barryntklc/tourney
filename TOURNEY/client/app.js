/**
 *
 *
 * @author Erik Huang, Barryn Chun
 * @date 12/08/2015
 */

Meteor.startup(function() {
    Session.setDefault("templateName", "input");
});

Accounts.onLogin(function() {
    Session.setDefault("templateName", "input");
});

Template.body.helpers({
    participants: function() {
        return Participants.find({}, {sort: {created: -1}});
    },
    page: function() {
        return Session.get("templateName");
    },
});

Template.body.events({
    /*
    "click .tourney" : function () {
        Session.set("templateName", "input");
    },
    "click .admin" : function () {
        Session.set("templateName", "admin");
    },
    "click .info" : function () {
        Session.set("templateName", "info");
    }*/
});

// adds index to each item
UI.registerHelper('indexedArray', function(context, options) {
    if (context) {
        return context.map(function(item, index) {
            item._index = index;
            return item;
        });
    }
});

Meteor.methods({
    /*
    isAdmin: function() {
        Meteor.call("isAdmin", Meteor.userId(), function(error, data) {
            if (error) {
                console.log(error);
            }
            console.log("User type: " + data);
            return data;
        });
    }*/
});