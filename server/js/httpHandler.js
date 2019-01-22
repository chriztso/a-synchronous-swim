const headers = require('./cors');
const updatedMessage = require('./messageQueue.js');
module.exports = (req, res) => {
  // var directions = ['Up', 'Down', 'Left', 'Right'];
  // var randomIndex =  Math.floor(Math.random() * directions.length);
  // var directionToGo = directions[randomIndex].toLowerCase();
  var randomDirection = updatedMessage.dequeue();
  res.writeHead(200, headers);
  res.end(JSON.stringify(randomDirection));
};
