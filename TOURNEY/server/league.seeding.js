/**
 * Created by Chunmeista on 12/9/2015.
 */

//algorithm:

//get the list of players

/**
 * Algorithm:
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