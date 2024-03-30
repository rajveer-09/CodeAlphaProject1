function calculateAge() {
    var dob = new Date(document.getElementById('dob').value);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    var resultElement = document.getElementById('result');
    resultElement.textContent = 'Your age is: ' + age;
    resultElement.style.color = 'white'; 
    resultElement.style.fontSize = '24px';
    resultElement.style.fontWeight = 'bold';
  }
  
  