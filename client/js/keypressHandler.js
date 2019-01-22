
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

$('.RandomClick').on('click', (event) => {

  const serverUrl = 'http://127.0.0.1:3000';
  $.ajax({
    url: serverUrl, 
    type: 'GET',
    contentType: 'application/json',
    success: function(data){
        console.log("Correct");
      data = JSON.parse(data);
      SwimTeam.move(data);
    },
    error: function(){
      console.log('Failed');
    }
    
  })


  // var directions = ['Up', 'Down', 'Left', 'Right'];
  // var randomIndex =  Math.floor(Math.random() * directions.length);
  // var directionToGo = directions[randomIndex];
  //    SwimTeam.move(directionToGo.toLowerCase());
  
  });

console.log('Client is running in the browser!');
