function GPAResult() {
    var S1 = document.getElementById("S1").value;
    var S2 = document.getElementById("S2").value;
    var S3 = document.getElementById("S3").value;
    var S4 = document.getElementById("S4").value;
    var S5 = document.getElementById("S5").value;
    var S6 = document.getElementById("S6").value;

    let total = parseFloat(S1) + parseFloat(S2) + parseFloat(S3) + parseFloat(S4) + parseFloat(S5) + parseFloat(S6);
    document.getElementById('Sum').innerHTML = "Total Sum = " + total;
    let percent = (total*100)/600;
    document.getElementById('percent').innerHTML = "The Percentage = " + percent;
    
    if(percent >= 80){
      document.getElementById('grade').innerHTML = "GPA is 4.0 & Your FCT is Acturial Science";
    }
    else if(percent >= 70){
      document.getElementById('grade').innerHTML = "GPA is 3.0 & Your FCT is Acturial Science";
    }
    else if(percent >= 60){
      document.getElementById('grade').innerHTML = "GPA is 3.0 & Your FCT is Science";
    }
    else if(percent >= 50){
      document.getElementById('grade').innerHTML = "GPA is 2.0 & Your FCT is Arts";
    }
    else if(percent >= 40){
      document.getElementById('grade').innerHTML = "GPA is 1.0 ";
    }
    else if(percent >= 30){
      document.getElementById('grade').innerHTML = "GPA is 0.0 ";
    }
    else if(percent >= 20){
      document.getElementById('grade').innerHTML = "GPA is 0.0 ";
    }
    else if(percent >= 10){
      document.getElementById('grade').innerHTML = "GPA is 0.0 ";
    }
    else if(percent >= 0){
      document.getElementById('grade').innerHTML = "GPA is 0.0 ";
    }
}