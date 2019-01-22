(function() {
  const serverUrl = 'http://127.0.0.1:3000';
  $.ajax({
    url: serverUrl, 
    type: 'GET',

    success: function(data){
      data = JSON.parse(data);
      SwimTeam.move(data);
    },
    error: function(){
      console.log('Failed');
    }
    
  })

})
