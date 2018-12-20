function add2(){
  var x = document.getElementById('input5').value;
  var y = document.getElementById('input6').value;
  
   if(document.getElementById(`answer2`).value != (Number(x)/(Number(y)*Number(y))) < Number(18.5))
 {alert(`低体重`);}else if(document.getElementById(`answer2`).value == (Number(x)/(Number(y)*Number(y))) < Number(25))
  {alert(`普通`);}else{alert(`肥満`)} 
   
  
     
     
    alert(Number(x)/(Number(y)*Number(y)));  
     
 
}