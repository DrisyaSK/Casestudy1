
var file="https://jsonplaceholder.typicode.com/todos";
function makelist()
{
    
    var table=document.getElementById("tab");
    var tabdiv=document.getElementById("tabdiv");
    var btn=document.getElementById("todo");
    try{
        var xhhtp= new XMLHttpRequest();
    }
    catch(e)
    {
        alert(e);
    }

    xhhtp.onreadystatechange=function()
    {
        if((this.readyState==4)&&(this.status==200))        
        {
            var resp=JSON.parse(this.responseText) ;
            tabdiv.removeAttribute("hidden","true");           
            var i=0,c=0;
            
            for(i=0;i<resp.length;i++)
            {       
                if(resp[i].completed==true)
                {
                    var row=`<tr>
                    <td>${i+1}</td>
                    <td>${resp[i].title}</td>
                    <td><input type="checkbox" id="ckbx" checked disabled></td>
                    </tr>`;
                    table.innerHTML+=row;
                }
                else
                {
                    var row=`<tr>
                    <td>${i+1}</td>
                    <td>${resp[i].title}</td>
                    <td><input type="checkbox" id="ckbx" onchange="countcheck()"> </td>
                    </tr>`;
                    table.innerHTML+=row;
                }
            }
        }             
    }
    
    xhhtp.open("GET",file,true);
    xhhtp.send();
    btn.setAttribute("disabled","true");
               
}

var count =0;
console.log(count);

function countcheck()
{ 
    var ckbx=document.getElementById('ckbx');    
    console.log("inside fn");
    
    alert(ckbx.checked);
    if(ckbx.checked==true)
    {
        count++;
        alert("checked" +count);

    }
    else
    {
        
        if (count!=0) count--;
        else count=0;
        alert("unchecked"+count);
    }
    if(count>=5)
            alert("Congrats! 5 tasks have been successfully completed.");
    
}

function logout()
{
    location.href="index.html";
}