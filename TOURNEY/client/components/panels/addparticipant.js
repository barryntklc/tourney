/**
 *
 *
 * @author Barryn Chun, Erik Huang
 * @date 12/08/2015
 */

Template.addparticipant.events({
    "change #stier": function (event, template) {

        if (template.$('#stier').val() === "Unranked" || template.$('#stier').val() === "Master" || template.$('#stier').val() === "Challenger") {
            template.$('#srank').prop("disabled", true);
            template.$('#no_rank').prop("disabled", false);
            template.$('#srank').val("NO RANK");
        } else {
            template.$('#srank').prop("disabled", false);
            if (template.$('#srank').val() === "NO RANK") {
                template.$('#srank').val("V");
            }
            template.$('#no_rank').prop("disabled", true);
        }
    },
    "click .go_button": function (event, template) {
        console.log("DEBUG: go_button clicked!");

        var newParticipant = {
            participant_name: template.$('#sname').val(),
            participant_tier: template.$('#stier').val(),
            participant_rank: template.$('#srank').val(),
            owner: Meteor.userId(),
            created: new Date()
        };

        if (newParticipant.participant_name.trim() != "") { //if name is not null
            Participants.insert(newParticipant);
        } else {
            alert("ERROR: Please enter a summoner name!");
        }
        template.$('#sname').val("");
    },
    "mousedown .go_button": function (event, template) {
        template.$('.go_button').css("background-color", "#b37300");
    },
    "mouseup .go_button": function (event, template) {
        template.$('.go_button').css("background-color", "#ffc04d");
    },
    "mouseenter .go_button": function (event, template) {
        template.$('.go_button').css("background-color", "#ffc04d");
    },
    "mouseleave .go_button": function (event, template) {
        template.$('.go_button').css("background-color", "#ffa500");
    }
});