var x = setInterval(function(){
    var now = new Date();
    var currentTime = now.toLocaleTimeString()
    var currentDate = now.toLocaleDateString().split('/').join('-');
    
    
    document.getElementById('date').innerHTML = currentDate;
    document.getElementById('time').innerHTML = currentTime;
    
  } )
