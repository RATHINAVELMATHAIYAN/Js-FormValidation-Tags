// method-1

function validate(){
    var z = document.myform.email.value;
    if(z == "" || z == null) {
        document.writeln("Email Cannot be empty");
    }
}