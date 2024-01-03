function BMI2() {
    var x2 = Number(document.getElementById('height2').value) / 100; // メートルに
    var y2 = Number(document.getElementById('weight2').value);
    var bmi2 = y2 / (x2 * x2); // BMIの計算

    var siwake;
  if(bmi2<18.5){
       siwake='低体重';}
  else if(bmi2<25){
       siwake='普通';}
  else {siwake='肥満';}  
    
    alert('あなたのBMIは'+bmi2+'で、評価は['+siwake+']です。');
}
