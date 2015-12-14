/**
 *
 *
 * @author Erik Huang, Barryn Chun
 * @date 12/08/2015
 */

Meteor.methods({
    /**
     * isAdmin
     * @return true if the current user is an admin, false otherwise
     */
    isAdmin: function (user) {
        var x = Meteor.users.findOne({_id: user}).type;
        if (x === "admin") {
            return true;
        } else {
            return false;
        }
    },
    emailExists: function (email, userId) {
        var queried_user = Meteor.users.findOne({"emails.0.address": email});
        var return_status = "DEFAULT";
        console.log("ID of this user: " + userId);
        console.log("ID of requested user: " + queried_user._id);

        if (queried_user === undefined) {
            return_status = "USER_NOT_FOUND";
        } else if (queried_user._id === userId) {
            return_status = "USER_IS_SELF";
        } else {
            if (queried_user.type === "admin") {
                return_status = "USER_DEMOTED";
                Meteor.users.update(queried_user, {$set: {type: "user"}});
            } else {
                return_status = "USER_PROMOTED"
                Meteor.users.update(queried_user, {$set: {type: "admin"}});
            }
        }
        console.log("DEBUG: For given email: " + email);
        console.log("DEBUG: result: " + return_status);
        return return_status;
    }
});