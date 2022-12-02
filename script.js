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
}

        

        