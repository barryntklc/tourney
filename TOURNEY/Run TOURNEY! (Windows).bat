TITLE "Starting TOURNEY!"

REM Later, load this port number from a config file instead.

echo "Loading meteor."
start "TOURNEY! - Meteor Terminal" meteor -p 3002
timeout /t 15
echo "Starting mongo terminal."
start "TOURNEY! - MongoDB Terminal" meteor mongo
echo "Opening TOURNEY!"
start "" "http://localhost:3002"
REM pause