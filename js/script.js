function validate()
{
    var uname=document.getElementById("uname").value;
    var pass=document.getElementById("pwd").value;
    checkFunction(uname,pass,myCallback);
}

function checkFunction(user,pwd,myCallback)
{
    if(user == "admin" && pwd == "12345")
    {
        myCallback(true);
    }
    else{
        myCallback(false);
    }
}

function myCallback(result)
{
    if(result)
    {
        window.open("./welcome.html");
        //window.location = "";
    }else{
        //window.open("./index.html");
    }
}
