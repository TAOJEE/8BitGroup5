
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
    })


  document.getElementById("liveToastBtn").onclick = function() {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function(toastEl) {
      return new bootstrap.Toast(toastEl) // No need for options; use the default options
    });
   toastList.forEach(toast => toast.show()); // This show them
  };
        



function show(n){
  switch(n){
    case 1:
      document.getElementById('one').style.display = "block";  
      document.getElementById('two').style.display = "none";    
      document.getElementById('three').style.display = "none"; 
      document.getElementById('liveToastBtn').style.display = "block";
      break;
    case 2:
      document.getElementById('one').style.display = "none";  
      document.getElementById('two').style.display = "block";    
      document.getElementById('three').style.display = "none"; 
      document.getElementById('js').style.display = "none";   
      document.getElementById('mayy').style.display = "none";
      document.getElementById('tw').style.display = "none";
      document.getElementById('smart').style.display = "none";
      break;
    case 3:
      document.getElementById('one').style.display = "none";  
      document.getElementById('two').style.display = "none";    
      document.getElementById('three').style.display = "block"; 
      document.getElementById('js').style.display = "block";
      document.getElementById('mayy').style.display = "none";
      document.getElementById('tw').style.display = "none";
      document.getElementById('smart').style.display = "none";
      document.getElementById('backBtn').style.color = "black";
      break;
    case 4:
      document.getElementById('one').style.display = "none";  
      document.getElementById('two').style.display = "none";    
      document.getElementById('three').style.display = "block"; 
      document.getElementById('js').style.display = "none";   
      document.getElementById('mayy').style.display = "block";
      document.getElementById('tw').style.display = "none";
      document.getElementById('smart').style.display = "none";
      document.getElementById('backBtn').style.color = "black";
      break;
    case 5:
      document.getElementById('one').style.display = "none";  
      document.getElementById('two').style.display = "none";    
      document.getElementById('three').style.display = "block"; 
      document.getElementById('js').style.display = "none";   
      document.getElementById('mayy').style.display = "none";
      document.getElementById('tw').style.display = "block";
      document.getElementById('smart').style.display = "none";
      document.getElementById('backBtn').style.color = "black";
      break;
    case 6:
      document.getElementById('one').style.display = "none";  
      document.getElementById('two').style.display = "none";    
      document.getElementById('three').style.display = "block"; 
      document.getElementById('js').style.display = "none";   
      document.getElementById('mayy').style.display = "none";
      document.getElementById('tw').style.display = "none";
      document.getElementById('smart').style.display = "block";
      document.getElementById('backBtn').style.color = "white";
      break;
  }
}

