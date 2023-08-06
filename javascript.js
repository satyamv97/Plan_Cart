function clickhandlerplan(i){
   
    for( var j=1 ;j<=3;j++){
        document.getElementById(`plan${j}_2`).style.display="none";
        document.getElementById(`plan${j}`).style.backgroundColor = ""
        document.getElementById(`plan${j}`).style.borderColor = ""
    }

    var plandiv = document.getElementById(`plan${i}_2`)
     var mainplandiv = document.getElementById(`plan${i}`)
     plandiv.style.display="block";
     plandiv.style.display="flex";
     mainplandiv.style.backgroundColor = "rgb(244, 251, 249,255)"
    mainplandiv.style.borderColor = "#007f61"

}