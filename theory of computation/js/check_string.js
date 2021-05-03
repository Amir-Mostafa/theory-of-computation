$(document).ready(function () {

    $("#input_string").keyup(function(){

       check();
        
    })
    $("#input_regex").keyup(function(){

        check();
         
     })
    $("#input_regex").keyup(function(){

        if($("#input_regex").val()=="")
        {
            $("#input_regex").removeClass("is-valid")
            $("#input_regex").addClass("is-invalid")
        }
        else
        {
            $("#input_regex").removeClass("is-invalid")
            $("#input_regex").addClass("is-valid")
        }
         
     })
    $("#button_check").click(function(){

        check();
         
     })


    
});
function check()
{
    if($("#input_regex").val()=="")
    {
        $("#input_regex").removeClass("is-valid")
        $("#input_regex").addClass("is-invalid")
        $(".result").empty();
        return
    }
    else if($("#input_string").val()=="")
    {
        $("#input_string").removeClass("is-valid")
        $("#input_string").addClass("is-invalid")
        $(".result").empty();
        return
    }
    else
    {
        $("#input_regex").removeClass("is-invalid")
        $("#input_regex").addClass("is-valid")

        $("#input_string").removeClass("is-invalid")
        $("#input_string").addClass("is-valid")
    }
    var regex=new RegExp($("#input_regex").val());
    var string=$("#input_string").val();
    var m;
    var arr=[]
    var c=0;
    do
    {
         m=regex.exec(string)
         
         if(m!=null&&m[0]!="")
         {
         arr.push(m[0]);
         string=string.replace(m[0],'@');
         
         }
         c++;
    }while(m&&c<300);

    var s=$("#input_string").val();
    var res="";
    for(let i=0;i<arr.length;i++)
    {
        res+=`<h4 class="bg-primary text-light" >`+arr[i]+`</h4>`;
    }
    if(arr.length==1&&arr[0].length==s.length)
    {
        $("#input_string").removeClass("is-invalid")
        $("#input_string").addClass("is-valid")
        $(".result").empty();
        $(".result").html(res);
    }
    else
    {
        $("#input_string").removeClass("is-valid")
        $("#input_string").addClass("is-invalid")
        $(".result").empty();
        if(arr.length!=0)
        $(".result").html("<h3 class='text-center text-primary' >list of all matched sub-strings</h3>"+res);
    }

}


