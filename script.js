var chars="";
var passwordSize = 10;

function genetatePassword(){

    var textBox = document.getElementById("box");

    chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@";

    let password = "";
    for (var i = 0; i <= passwordSize; i++) {
        let num = Math.floor(Math.random() * chars.length);
        password += chars.substring(num, num +1);
        console.log(password);
    }
    textBox.value = password;
    document.getElementById("p1").innerHTML = "";
}

var copytext = document.getElementById("copy");

function copyPassword(){
    if(document.getElementById("box").value == ""){
        alert("First generate password");
    }
    else{
        document.getElementById("box").select();
        document.execCommand("copy");
        document.getElementById("p1").innerHTML = "Password Copied";
    }
}


        

        