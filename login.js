

function phonenumber(inputtxt)
{
      var phoneno = /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
       if(inputtxt.value.match(phoneno))
       {
           return true;
       }
       else{
        //    alert("not a valid phone number");
        document.getElementById("result111").innerHTML="not valid";
           return false;
       }
}
function password (inputtxt)
{
    var passw=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(inputxt.value.match(passw))
    {
        let stro=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        let med=new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}");
        if(stro.test(passw)){
            document.getElementById("result222").innerHTML="strong password";
            document.getElementById("result222").style.color="green";

        }
        else if(med.test(passw)){
            document.getElementById("result222").innerHTML="medium password";
            document.getElementById("result222").style.color="yellow";


        }
        else{
            document.getElementById("result222").innerHTML="weak password";
            document.getElementById("result222").style.color="red";

        }

}}
function email(inputtxt)
{
    var email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputtxt.value.match(email))
    {
        document.getElementById("result333").innerHTML="you have entered a valid email"
        return true;
    }
    else
    {
        document.getElementById("result333").innerHTML="you have not entered a valid email"

        // alert("you have enterd an invalide email")
        return false;
    }
}