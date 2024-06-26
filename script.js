function display(number){
    document.getElementById("result").value+=number;
}

function calculate(){
    var result =document.getElementById("result").value;
    var x=eval(result);
    document.getElementById("result").value=x;
}
function clearScreen(){
    document.getElementById("result").value="";

}
function deleteLastCharacter() {
    var resultField = document.getElementById("result");
    resultField.value = resultField.value.slice(0, -1);
}

