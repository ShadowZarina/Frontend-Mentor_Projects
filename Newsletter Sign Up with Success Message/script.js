

const submit = documentGetByElementID("submit");

function switchDivs() {
  const div1 = document.getElementsByClassName('.container');
  const div2 = document.getElementByClassName('.container2');

  if (div1.style.display === 'none') {
    div1.style.display = 'block'; 
    div2.style.display = 'none';  
  } else {
    div1.style.display = 'none';  
    div2.style.display = 'block'; 
  }
}