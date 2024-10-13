function addingEventListener() {
    // Grab the element by its id
    const input = document.getElementById('button');
    
    // Create a named function for the alert message
    function clickAlert() {
      alert('I was clicked!');
    }
    
    // Add the event listener for 'click' event
    input.addEventListener('click', clickAlert);
  }
  
  // Call the function to activate the event listener
  addingEventListener();
  
