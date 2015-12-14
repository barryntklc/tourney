/**
 *
 *
 * @author Erik Huang, Barryn Chun
 * @date 12/08/2015
 */

var tier_alpha = ["Unranked", "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Master", "Challenger"];
var tier_value = [1, 2, 3, 4, 5, 6, 7, 8];

var rank_alpha = ["NO RANK", "V", "IV", "III", "II", "I"];
var rank_value = [0.0, 0.2, 0.4, 0.6, 0.8, 1.0];

var teamsize_alpha = ["5v5", "4v4", "3v3", "2v2"];
var teamsize_value = [5, 4, 3, 2];

translate = function (data, type) {
    if (type === "tier") {
        return tier_value[tier_alpha.indexOf(data)];
    } else if (type === "rank") {
        return rank_value[rank_alpha.indexOf(data)];
    } else if (type === "team_size") {
        return teamsize_value[teamsize_alpha.indexOf(data)];
    } else {
        //future: throw exception instead
        return 0;
    }
}

Accounts.onCreateUser(function(options, user) {

    var x = Meteor.users.find().count();

    var account_type = "user";
    if (x === 0) {
        account_type = "admin";
    }

    user.type = account_type;

    if (options.profile)
        user.profile = options.profile;
    return user;
});

Meteor.methods({
    createTeams : function (team_size) {
        console.log("createTeams called with team size: " + team_size);

        //translates all participants' tiers/ranks into numerical values
    }
});

// run this when the meteor app is started
Meteor.startup(function() {

});