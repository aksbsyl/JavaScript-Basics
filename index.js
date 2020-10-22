function buttonMouseOver(){
    document.getElementById("b").setAttribute("style","color:red")
}
function buttonMouseOut(){
    document.getElementById("b").setAttribute("style","color:default")
}

function validateForm(){
    var name= document.getElementById("name");
    var name= document.getElementById("phno");

    if(name.value == ""){
        alert("Please enter some value in name");
    }

}

