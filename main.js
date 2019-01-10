$(document).ready(function(){
    var ans=[];
    var op="";
    var flag=0;
        $(".btn").click(function(){
            
            var f=$(this).text();
            if (f=="0" || f=="1" || f=="2" || f=="3" || f=="4" || f=="5" || f=="6" || f=="7" || f=="8" || f=="9" || f=="-" || f=="*" || f=="+" || f=="/" || f==".") {
                ans.push(f);
                $("#calc").append(f); 

            }
            else if (f=="()"){
                
                if(flag==0){
                    ans.push("(");
                    $("#calc").append("("); 
                  flag=1;
                }
                else{
                    ans.push(")");
                    $("#calc").append(")"); 
                    flag=0;
                }
            }
            else if (f=="C"){
                ans.pop();
                console.log(ans);
                var str=$("#calc").text();  
                
              $("#calc").text( str.substring(0,str.length - 1));

    
            }
            else if(f=="DEL"){
                ans=[];
                $("#calc").text("");

            }
            if(f=="="){
            var mathEquation= ans.join("");
            var evaluate= eval(mathEquation);
            $("#calc").text("");
            $("#calc").text(evaluate);
           }

            

            
        
        });





    })
  
        


   


