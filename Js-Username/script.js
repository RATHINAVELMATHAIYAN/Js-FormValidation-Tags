// ---------------------------Forms----------------------------------------

function validate(){
    var n = document.myform.fname.value;
    if(n == "" || n == null){
        console.log("Name Cannot be empty");
    }
}

// method -2
function validate(){
    let x = document.forms["myform"]["fname"].value;
    if(x == ""){
        alert("Name must be filled out");
        return false;
    }
}



