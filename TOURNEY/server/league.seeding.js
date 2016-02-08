/**
 * Created by Chunmeista on 12/9/2015.
 */

//algorithm:

//get the list of players

/**
 * Algorithm:
 *
 * Given a list of player objects
 *
 * 1. Get the list of players, starting with the most recent submission. (Participants.find({}, {sort: {created: -1}}))
 * 2. Get the team size.
 * 3. Given the size of the list of players and the team size, check if there will be a remainder. (Participants.find().count() % team_size)
 *      3a. If there is a remainder, remove this amount of players from the beginning of the list, and record them
 *      3b. If there isn't a remainder, do nothing.
 * 4. Given the new size of the list of players and the team size, get the number of teams (Participants.find().count() / team_size)
 *
 * 5. Create an array of team objects
 * 6. Seed the participants into the teams in a "zigzag" fashion
 **/

seed_teams = function(given_team_size) {
    var team_size = given_team_size;
    var players = (Participants.find({}, {sort: {created: -1}}));
    var roster = [];
    var teams = [];

    //TODO compare the team size
    if (players.count() >= (given_team_size * 2)) {
        console.log("DEBUG: There are less than the required number of players.");
        //TODO ERROR HERE
    }

    if (players.count() % team_size != 0) {
        console.log("DEBUG: There are extra players.");
        //TODO REMOVE REMAINDER
    }
    //TODO else
    players.forEach(function convertArray(element, index, array) {
        var player = {
            participant_name: element.participant_name,
            participant_tier: element.participant_tier,
            participant_rank: element.participant_rank,
            owner: element.owner,
            created: element.created
        }
        roster.push(player);
    })
    roster.reverse(); //reverses the array
    roster.forEach(printNames);

}

function printNames(element, index, array) {
    //console.log('a[' + index + '] = ' + element);
    console.log(element.participant_name);
}

//function add

/*
function reverse(array_one) {
    var array_two = [];
    while (array_one.count() != 0) {
        array_two.push(array_one.pop());
    }
    return array_two;
}
    */