var uname=document.getElementById("uname");
var psw=document.getElementById("psw"); 
var para=document.getElementById("para");

function check()
{
    var res="false";
    para.setAttribute("hidden","true");
    if(uname.value=="admin"&&psw.value=="12345")
    {
        //alert("right details");
        /*res="true";
        console.log(res);
        goto(res);*/
        return true;
    }
    else
    {
        para.removeAttribute("hidden","true");
        para.style.color="red";
        para.style.fontSize="1.2em";
        uname.value="";
        psw.value="";       
        uname.focus;
        //res="false";
        //goto(res);
        //alert("please enter valid details");
        return false;
        
    }
}
/*function goto(res)
{
        alert(res);
        if(res=="false")
            document.location.href="index.html";
        else document.location.href="main.html";
        
    
}*/
function resetdata()
{
    
    uname.value="";
    psw.value="";
    uname.focus;
}