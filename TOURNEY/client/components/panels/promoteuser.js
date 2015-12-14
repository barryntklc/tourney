/**
 *
 *
 * @author Barryn Chun, Erik Huang
 * @date 12/08/2015
 */

Template.promoteuser.events({
    "click .promote_button": function (event, template) {
        console.log("DEBUG: promote_button clicked!");

        var given_email = template.$('#given_email').val();
        var currentUserId = Meteor.userId();

        if (given_email.trim() != "") { //if email is not null
            //TODO Meteor.call is being run AFTER the method completes;
            Meteor.call("emailExists", given_email, currentUserId, function (error, data) {
                if (error) {
                    console.log(error);
                }
                Session.set('promote_status', data);
                //console.log("1. data: " + data);
            });
            var status = Session.get('promote_status');
            //console.log("2. returned status: " + status);
            /*
            if (status === "USER_NOT_FOUND") {
                alert("ERROR: User not found!")
            } else if (status === "USER_ALREADY_ADMIN") {
                alert("This user is already an Admin!")
            } else if (status === "USER_PROMOTED") {
                alert("User " + " has been promoted to Admin!");
            } else {
                alert("ERROR: There has been a problem with the promote panel.");
            }*/
        } else {
            alert("ERROR: Please enter an email!");
        }
        //template.$('#given_email').val("");
    },

    "mousedown .promote_button": function (event, template) {
        template.$('.promote_button').css("background-color", "#b37300");
    },
    "mouseup .promote_button": function (event, template) {
        template.$('.promote_button').css("background-color", "#ffc04d");
    },
    "mouseenter .promote_button": function (event, template) {
        template.$('.promote_button').css("background-color", "#ffc04d");
    },
    "mouseleave .promote_button": function (event, template) {
        template.$('.promote_button').css("background-color", "#ffa500");
    }
});